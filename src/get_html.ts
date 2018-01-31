import axios from 'axios'
import * as Cheerio from 'cheerio'

export default async function (url: string): Promise<CheerioStatic> {
    const { data } = await axios.get(url)
    const $ = Cheerio.load(data)
    return $
}
