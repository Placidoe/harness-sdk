// Run from strands-ts/: vitest run --config /absolute/path/to/this/config
// This real HTTP protocol test needs no AWS provider setup or credentials.
export default {
  test: {
    include: ['test/integ/mcp/mcp-connect-abort.test.node.ts'],
    testTimeout: 15000,
    reporters: ['default'],
  },
}
