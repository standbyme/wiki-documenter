import * as Cheerio from 'cheerio'
import { Try } from 'funfix-core'
interface ProjectInterface {
    localizer(original_html: CheerioStatic): Try<Cheerio>
    // tslint:disable-next-line:no-any
    parser(html: Cheerio): Try<any>
}

interface EntityInterface {
    name: string,
    modifier__set: Set<string>
}

export { EntityInterface }
