import * as _ from 'lodash'

import { EntityInterface } from '../../interface'

export function URL_constructor(entity: EntityInterface): string {
    const { name, modifier__set } = entity
    const keyword__list = _.concat(Array.from(modifier__set), name)
    const query = keyword__list.map(m => `intitle:${m}`).map(encodeURIComponent).map(m => `+${m}`).join('')
    const result = `https://www.bing.com/search?q=site%3Abaike.baidu.com+${query}`
    return result
}
