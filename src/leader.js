import { sqlite3Worker1Promiser } from "./esm-promiser.mjs";
// sqlite3-worker1-bundler-friendly is not exported by @sqlite-org/sqlite-wasm so we have to import it directly
import SQLiteWorker from './node_modules/@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3-worker1-bundler-friendly.mjs'

const sqlite3 = sqlite3Worker1Promiser({
  worker: () => new SQLiteWorker(),
  onerror: (...args) => console.error("worker1 promiser error", ...args),
});
// await sqlite3('open', { simulateError: true}) works!
// await sqlite3('open', { filename: ':memory:'}) works!
window.sqlite3 = sqlite3;
