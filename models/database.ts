import pgPromise, {IDatabase} from "pg-promise";
import {IClient} from "pg-promise/typescript/pg-subset";

export class Database {
  protected static connection: string = ''
  protected static pgp = pgPromise()
  protected static _client: IDatabase<IClient>

  static init(connection: string) {
    this.connection = connection
  }

  static client() {
    if (!this._client) {
      this._client = this.pgp(this.connection)
    }
    return this._client
  }
}
