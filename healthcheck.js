/**
 * @Author: Your name
 * @Date:   2025-11-03 18:25:03
 * @Last Modified by:   Your name
 * @Last Modified time: 2025-11-03 18:25:07
 */
const http = require('http');

const options = {
  host: 'localhost',
  port: process.env.PORT || 3000,
  timeout: 2000,
  path: '/health'
};

const request = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.statusCode === 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});

request.on('error', (err) => {
  console.log('HEALTH CHECK ERROR:', err);
  process.exit(1);
});

request.end();