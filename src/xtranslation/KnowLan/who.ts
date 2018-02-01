import axios from 'axios'

import { News, Person } from './interface'

export default async function (news: News): Promise<[Person]> {
    const { data } = await axios.post('http://sentence.xtranslation.net/ner/who', { title: '', ...news }, {
        transformRequest: [function (data: any) {
            let ret = ''
            for (const it in data) {
                // tslint:disable-next-line:prefer-template
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }]
    })
    return data.people
}
