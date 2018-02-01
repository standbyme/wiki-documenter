import { Try } from 'funfix-core'

import get_html from './get_html'
import html_to_target_content from './html_to_target_content'
import { ProjectInterface } from './interface'

// tslint:disable-next-line:no-any
export default async function (url: string, project: ProjectInterface): Promise<Try<any>> {
    const html = await get_html(url)
    const target_content__try = html_to_target_content(html, project)
    return target_content__try
}
