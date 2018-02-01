import * as Cheerio from 'cheerio'
import { Try } from 'funfix-core'

import { ProjectInterface } from './interface'

// tslint:disable-next-line:no-any
export default function (html: CheerioStatic, project: ProjectInterface): Try<any> {
    const { parser, localizer } = project
    const result = localizer(html).chain(parser)
    return result
}
