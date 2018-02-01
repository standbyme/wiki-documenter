import axios from 'axios'
import * as Cheerio from 'cheerio'

import { RequestError } from './error'

export default async function (url: string): Promise<CheerioStatic> {
    try {
        const { data } = await axios.get(url)
        const $ = Cheerio.load(data)
        return $
    } catch (error) {
        // @ts-ignore
        throw new RequestError()
    }
}
