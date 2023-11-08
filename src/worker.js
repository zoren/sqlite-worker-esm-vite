import sqlite3InitModule from "@sqlite.org/sqlite-wasm";

const sqlite3 = await sqlite3InitModule();
sqlite3.initWorker1API();

export default {};
