import { sqlite3InitModule } from '@sqlite.org/sqlite-wasm'
const sqlite3 = sqlite3InitModule()

sqlite3.initWorker1API()
