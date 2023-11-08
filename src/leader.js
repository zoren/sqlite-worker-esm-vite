// this attaches sqlite3Worker1Promiser to window as a side effect
import {} from "../node_modules/@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3-worker1-promiser-bundler-friendly.js";
import SQLiteWorker from "./worker.js?worker";

const leaderOutput = document.getElementById("leaderOutput");

const log = (...args) => {
  leaderOutput.append(
    args.map((a) => JSON.stringify(a, null, " ")).join("\n"),
    "\n___________________________\n"
  );
};

const demo = async () => {
  const sql = async (type, args) => {
    const r = await sqlite3(type, args);
    log(type, args, r);
    return r;
  };

  await sql("open", { filename: ":memory:" });
  await sql("exec", `create table t1(a, b)`);
  await sql("exec", `insert into t1 values(1, 'hello'), (2, 'world')`);
  const r = await sql("exec", { sql: "select a, b from t1", resultRows: [] });
  console.table(r.result.resultRows);
};

const sqlite3 = sqlite3Worker1Promiser({
  worker: () => new SQLiteWorker(),
  onerror: (...args) => console.error("worker1 promiser error", ...args),
  onready: async () => {
    demo();
    window.sqlite3 = sqlite3;
  },
});
