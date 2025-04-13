#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const pubkey = process.argv[2];

if (!pubkey) {
  console.error('Usage: dnostr <pubkey>');
  process.exit(1);
}

// Path to local .bin executable
const didNostrBin = path.resolve(__dirname, '../node_modules/.bin/did-nostr-resolver');

const child = spawn(didNostrBin, ['create', pubkey], {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', code => {
  process.exit(code);
});

