import get_html from './get_html'
import html_to_target_content from './html_to_target_content'
import { ProjectInterface } from './interface'

export default async function (url: string, project: ProjectInterface) {
    const html = await get_html(url)
    const target_content__try = html_to_target_content(html, project)
    const target_content = target_content__try.get()
    return target_content
}
