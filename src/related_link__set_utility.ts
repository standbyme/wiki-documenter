import * as _ from 'lodash'

import { EntityInterface } from './interface'

export function URL_constructor(entity: EntityInterface): string {

    // https:// www.baidu.com/s?wd=site%3A(baike.baidu.com)%20title%3A%20(%E7%8E%8B%E6%AF%85%20%E9%93%B6%E8%A1%8C)
    const { name, modifier__set } = entity
    const keyword__list = _.concat(Array.from(modifier__set), name)
    const query = _.join(keyword__list, ' ')
    return query
}
