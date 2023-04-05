import {Request, Response} from "express";
import {Database} from "../models/database";
import {Filters, FlatQuery, Page, Sorting} from "../models/flat";
import config from "../config";

interface IndexRouteRequest {
  filter?: Filters
  sorting?: Sorting
  page?: Page
}

export class FlatController {
  static async index(req: Request<any, any, any, IndexRouteRequest>, res: Response) {
    const filter = req.query.filter ? req.query.filter : null
    const sorting = req.query.sorting ? req.query.sorting : null
    const currentPage = req.query.page ? +req.query.page : 1

    const client = Database.client()

    const flatsQuery = FlatQuery.findAll(
      filter,
      sorting,
      currentPage
    )
    const flats = await client.query(flatsQuery)

    const pageCount = await client.query(
      FlatQuery.getPageCount(
        filter,
        sorting,
      )
    )

    const totalPage = Math.ceil(pageCount[0].count / config.flat.limitOnPage)

    const pagination = {
      current: currentPage,
      total: totalPage,
      prev: currentPage > 1 ? currentPage - 1 : null,
      next: currentPage < totalPage && totalPage !== 0 ? currentPage + 1 : null,
    }

    res.json({
      status: 'ok', items: flats, pagination
    })
  }
}
