import { sqlite3Worker1Promiser } from "./esm-promiser.mjs";

const sqlite3 = sqlite3Worker1Promiser({
  worker: () =>
    new Worker(
      "./node_modules/@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3-worker1-bundler-friendly.mjs",
      {
        type: "module",
      }
    ),
  onerror: (...args) => console.error("worker1 promiser error", ...args),
});
// await sqlite3('open', { simulateError: true}) works!
// await sqlite3('open', { filename: ':memory:'}) works!
window.sqlite3 = sqlite3;
