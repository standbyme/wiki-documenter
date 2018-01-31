import axios from 'axios'
import * as cheerio from 'cheerio'
import { Option } from 'funfix-core'

import { EntityInterface } from '../../interface'
import { get_final_url } from '../../utility'

import { URL_constructor } from './related_link__set_utility'
import url_cleaner from './url_cleaner'

export default async function (entity: EntityInterface): Promise<Option<Set<string>>> {
    const url = URL_constructor(entity)

    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const original_url__list = $('#content_left').find('h3').map(function () {
        return $(this).children().first().attr('href')
    }).get()

    const url__list = (await Promise.all(original_url__list.map(get_final_url))).map(url_cleaner)
    const len = url__list.length
    if (len) {
        return Option.of(new Set(url__list))
    } else {
        return Option.none()
    }
}
