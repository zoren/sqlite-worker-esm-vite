import { sqlite3Worker1Promiser } from "./esm-promiser.mjs";
import SQLiteWorker from './worker.js?worker'

const sqlite3 = sqlite3Worker1Promiser({
  worker: () => new SQLiteWorker(),
  onerror: (...args) => console.error("worker1 promiser error", ...args),
});
// await sqlite3('open', { simulateError: true}) works!
// await sqlite3('open', { filename: ':memory:'}) works!
// await sqlite3('exec', 'select 5')
window.sqlite3 = sqlite3;
// console.log('sqlite3', sqlite3);
