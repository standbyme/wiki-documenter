import * as url from 'url'

export default function (original_url: string) {
    const { host, pathname } = url.parse(original_url)
    return `${host}${pathname}`
}
