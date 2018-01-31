import axios from 'axios'
import * as cheerio from 'cheerio'
import { Option } from 'funfix-core'

import { EntityInterface } from './interface'
import { URL_constructor } from './related_link__set_utility'

export default async function (entity: EntityInterface): Promise<Option<Set<string>>> {
    const url = URL_constructor(entity)

    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const result = $('#content_left').find('h3').map(function () {
        return $(this).children().first().attr('href')
    }).get()
    const len = result.length
    if (len) {
        return Option.of(new Set(result))
    } else {
        return Option.none()
    }
}
