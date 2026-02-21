/**
 * MCP Server Test Script
 * Tests the MCP server endpoints locally
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const MCP_ENDPOINT = `${BASE_URL}/api/mcp`;

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function section(title) {
  console.log('\n' + '='.repeat(60));
  log(title, 'bright');
  console.log('='.repeat(60));
}

async function testGet(endpoint, title) {
  try {
    section(title);
    const response = await fetch(endpoint);
    const data = await response.json();

    log(`✓ Status: ${response.status}`, 'green');
    log(`✓ Response:`, 'cyan');
    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    log(`✗ Error: ${error.message}`, 'red');
    return null;
  }
}

async function testMcpTool(toolName, args = {}, title) {
  try {
    section(title);
    log(`Tool: ${toolName}`, 'blue');
    log(`Args: ${JSON.stringify(args)}`, 'yellow');

    const response = await fetch(MCP_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'tools/call',
        tool: toolName,
        args: args,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      log(`✓ Status: ${response.status}`, 'green');
      log(`✓ Result:`, 'cyan');
      console.log(JSON.stringify(JSON.parse(data.result || '{}'), null, 2));
    } else {
      log(`✗ Status: ${response.status}`, 'red');
      log(`Error: ${JSON.stringify(data)}`, 'red');
    }
    return data;
  } catch (error) {
    log(`✗ Error: ${error.message}`, 'red');
    return null;
  }
}

async function runTests() {
  log('\n🚀 MCP Server Test Suite', 'bright');
  log(`Testing: ${MCP_ENDPOINT}`, 'cyan');
  log(`Base URL: ${BASE_URL}`, 'cyan');

  // Test 1: Server Info
  await testGet(MCP_ENDPOINT, 'Test 1: Server Info & Available Tools');

  // Test 2: Initialize
  try {
    section('Test 2: Initialize MCP');
    const response = await fetch(MCP_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'initialize' }),
    });
    const data = await response.json();
    log(`✓ Initialized: ${data.serverInfo?.name} v${data.serverInfo?.version}`, 'green');
  } catch (error) {
    log(`✗ Initialize failed: ${error.message}`, 'red');
  }

  // Test 3: List Tools
  try {
    section('Test 3: List Available Tools');
    const response = await fetch(MCP_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'tools/list' }),
    });
    const data = await response.json();
    log(`✓ Available Tools (${data.tools?.length || 0}):`, 'green');
    data.tools?.forEach(tool => {
      console.log(`  - ${tool.name}: ${tool.description?.substring(0, 60)}...`);
    });
  } catch (error) {
    log(`✗ List tools failed: ${error.message}`, 'red');
  }

  // Test 4: Get Projects
  await testMcpTool('get_projects', { featured: true }, 'Test 4: Get Featured Projects');

  // Test 5: Get Skills
  await testMcpTool('get_skills', { category: 'languages' }, 'Test 5: Get Skills (Languages)');

  // Test 6: Get Blog Posts
  await testMcpTool('get_blog_posts', { limit: 3 }, 'Test 6: Get Blog Posts (Limited)');

  // Test 7: Get Contact Info
  await testMcpTool('get_contact_info', {}, 'Test 7: Get Contact Info');

  // Test 8: Get GitHub Repos
  await testMcpTool('get_github_repos', { limit: 5 }, 'Test 8: Get GitHub Repos');

  // Summary
  section('✅ Test Suite Complete');
  log(`\nYour MCP server is running at:`, 'cyan');
  log(`  ${MCP_ENDPOINT}`, 'bright');
  log(`\nTo use with Claude Desktop, add to your MCP config:`, 'cyan');
  console.log(`
{
  "mcpServers": {
    "bookchaowalit-portfolio": {
      "type": "http",
      "url": "${MCP_ENDPOINT}"
    }
  }
}
  `);
}

// Run tests
runTests().catch(console.error);
