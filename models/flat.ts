import config from "../config";

export interface RangeFilter {
  from?: number | null
  to?: number | null
}

export interface Filters {
  [filter: string]: RangeFilter
}

export type SortingVariant = 'asc' | 'desc'

export interface Sorting {
  column: string
  variant: SortingVariant
}

export type Page = number

const concatRangeFilter = (column: string, filter: RangeFilter) => {
  const query: Array<String> = []

  if (filter.from) {
    query.push(`${column} > ${filter.from}`)
  }

  if (filter.to) {
    query.push(`${column} < ${filter.to}`)
  }

  return query.join(' AND ')
}

const useFilter = (filters: Filters) => {
  const query: Array<string> = ['WHERE']
  const filterQuery = Object
    .entries(filters)
    .filter(([column]) => config.flat.columns.includes(column))
    .map(
      ([column, filter]) => (concatRangeFilter(column, filter))
    )
    .join(' AND ')

  query.push(filterQuery)

  return query.join(' ')
}

const useSort = (sorting: Sorting) => {
  return (`ORDER BY ${sorting.column} ${sorting.variant.toUpperCase()}`)
}

const usePage = (page: Page) => {
  const limit = config.flat.limitOnPage

  return `LIMIT ${limit} OFFSET ${Math.max(0, page - 1) * limit}`
}

export const FlatQuery = {
  findAll: (filters: Filters | null, sorting: Sorting | null, page: Page | null) => {
    let query: Array<string> = ['SELECT * FROM flats_data']

    if (filters) {
      query.push(useFilter(filters))
    }

    if (sorting
      && config.flat.columns.includes(sorting.column)
      && ['asc', 'desc'].includes(sorting.variant)) {
      query.push(useSort(sorting))
    }

    query.push(usePage(page || 1))

    return query.join(' ')
  },

  getPageCount: (filters: Filters | null, sorting: Sorting | null) => {
    const query: Array<string> = ['SELECT * FROM flats_data']

    if (filters) {
      query.push(useFilter(filters))
    }

    if (sorting
      && config.flat.columns.includes(sorting.column)
      && ['asc', 'desc'].includes(sorting.variant)) {
      query.push(useSort(sorting))
    }

    return `SELECT COUNT(*) FROM (${query.join(' ')}) as count`
  }
}
