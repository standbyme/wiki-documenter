import axios from 'axios'

export async function get_final_url(url: string): Promise<string> {
    const { request } = await axios.get(url)
    return request.res.responseUrl
}
