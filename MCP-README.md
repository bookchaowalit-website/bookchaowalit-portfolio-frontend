# MCP Server Documentation

## 🚀 Overview

This portfolio website now includes an **MCP (Model Context Protocol) Server** that provides AI assistants like Claude with access to:
- 📁 Projects information
- 🛠️ Technical skills
- 📝 Blog posts
- 💻 GitHub repositories
- 📧 Contact information

## 📍 Endpoint

**Production:** `https://bookchaowalit.com/api/mcp`
**Local:** `http://localhost:3000/api/mcp`

## 🛠️ Available Tools

### 1. `get_projects`
Get information about Chaowalit Greepoke's projects.

**Parameters:**
- `featured` (boolean, optional): If true, only return featured projects

**Example:**
```json
{
  "tool": "get_projects",
  "args": { "featured": true }
}
```

### 2. `get_skills`
Get technical skills organized by category.

**Parameters:**
- `category` (string, optional): Filter by category - "languages", "frameworks", "databases", "cloud"

**Example:**
```json
{
  "tool": "get_skills",
  "args": { "category": "languages" }
}
```

### 3. `get_blog_posts`
Get a list of blog posts.

**Parameters:**
- `limit` (number, optional): Maximum number of posts (1-50)
- `featured` (boolean, optional): If true, only return featured posts
- `tag` (string, optional): Filter by tag

**Example:**
```json
{
  "tool": "get_blog_posts",
  "args": { "limit": 5, "featured": true }
}
```

### 4. `get_blog_post`
Get the full content of a specific blog post.

**Parameters:**
- `slug` (string, required): The slug of the blog post

**Example:**
```json
{
  "tool": "get_blog_post",
  "args": { "slug": "essential-ai-tools-2025" }
}
```

### 5. `get_github_repos`
Get GitHub repositories information (live data from GitHub API).

**Parameters:**
- `limit` (number, optional): Maximum number of repos (1-30), default 8

**Example:**
```json
{
  "tool": "get_github_repos",
  "args": { "limit": 10 }
}
```

### 6. `get_contact_info`
Get contact information.

**Parameters:** None

**Example:**
```json
{
  "tool": "get_contact_info",
  "args": {}
}
```

## 🔧 Usage with Claude Desktop

Add this to your Claude Desktop MCP config file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "bookchaowalit-portfolio": {
      "type": "http",
      "url": "https://bookchaowalit.com/api/mcp"
    }
  }
}
```

For local development:
```json
{
  "mcpServers": {
    "bookchaowalit-portfolio": {
      "type": "http",
      "url": "http://localhost:3000/api/mcp"
    }
  }
}
```

## 🧪 Testing

Run the test script to verify the MCP server is working:

```bash
# Make sure the dev server is running first
npm run dev

# In another terminal, run:
npm run mcp:test
```

## 📡 API Response Format

All MCP responses follow this format:

```json
{
  "type": "tools/call/response",
  "tool": "tool_name",
  "result": "{ ... JSON data ... }"
}
```

Error responses:
```json
{
  "type": "tools/call/response",
  "tool": "tool_name",
  "error": true,
  "result": "{ ... error details ... }"
}
```

## 🔒 Security

- The MCP server uses read-only operations
- No authentication required for public data
- Rate limiting applies to GitHub API calls
- CORS enabled for development

## 🚢 Deployment

The MCP server is deployed on Vercel and uses the Node.js runtime for full MCP SDK compatibility.

## 📚 Additional Resources

- [MCP Protocol Specification](https://spec.modelcontextprotocol.io/)
- [Claude MCP Documentation](https://docs.anthropic.com/claude/docs/mcp)
- [GitHub Repository](https://github.com/bookchaowalit/bookchaowalit-portfolio)
