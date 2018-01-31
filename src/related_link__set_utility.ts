import * as _ from 'lodash'

import { EntityInterface } from './interface'

export function URL_constructor(entity: EntityInterface): string {
    const { name, modifier__set } = entity
    const keyword__list = _.concat(Array.from(modifier__set), name)
    const query = encodeURIComponent(_.join(keyword__list, ' '))
    const result = `http://www.baidu.com/s?wd=site%3A(baike.baidu.com)%20title%3A%20(${query})`
    return result
}
