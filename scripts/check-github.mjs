#!/usr/bin/env node

const url = process.argv[2] || 'http://localhost:3000/api/github';

(async () => {
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    console.log('URL:', url);
    console.log('Status:', res.status);
    const json = await res.json().catch(() => null);
    console.log(JSON.stringify(json, null, 2));
    process.exit(res.ok ? 0 : 1);
  } catch (err) {
    console.error('Error:', err);
    process.exit(2);
  }
})();
