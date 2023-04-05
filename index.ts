import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import {BaseRouter} from "./base-router"
import {Database} from "./models/database"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

if (process.env.DATABASE_URL === undefined) {
  process.exit(1);
}

app.use(cors())

Database.init(process.env.DATABASE_URL)

BaseRouter.init(app)

app.get('/', async (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
