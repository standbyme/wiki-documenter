import * as Cheerio from 'cheerio'
import { Failure, Success, Try } from 'funfix-core'
import * as _ from 'lodash'
// .split('\n').filter(x => x !== '').map(x => x.replace(/\s+/g, ''))
// tslint:disable-next-line:no-any
export default function (html: Cheerio): Try<Map<string, string>> {
    const table__list = html.text().split('\n').filter(x => x !== '').map(x => x.replace(/\s+/g, ''))
    const table__list_len = table__list.length
    const table__list_with_index = _.zip(_.range(0, table__list_len), table__list)
    const key__list = table__list_with_index.filter(x => x[0] % 2 === 0).map(x => x[1])
    const value__list = table__list_with_index.filter(x => x[0] % 2 !== 0).map(x => x[1])
    const map = new Map(_.zip(key__list, value__list))
    return Success(map)
}
