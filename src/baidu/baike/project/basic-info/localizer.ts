import * as Cheerio from 'cheerio'
import { Failure, Success, Try } from 'funfix-core'

export default function (original_html: CheerioStatic): Try<Cheerio> {
    const basic_info = original_html('.basic-info')
    const len = basic_info.length
    if (len) {
        return Success(basic_info)
    } else {
        return Failure('do not have basic-info')
    }
}
