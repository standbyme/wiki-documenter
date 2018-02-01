import { related_link__set } from '../baidu/baike'
import { EntityInterface } from '../interface'
import { who } from '../xtranslation/KnowLan'
import { News } from '../xtranslation/KnowLan/interface'
export default async function (news: News) {
    const people = await who(news)

    const entity__list = people.map(p => ({
        name: p.who,
        modifier__set: new Set([p.org, p.job])
    }))
}
