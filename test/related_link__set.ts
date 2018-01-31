import * as assert from 'assert'

import { EntityInterface } from '../src/interface'
import { URL_constructor } from '../src/related_link__set_utility'

describe('Related Link Set', function () {
    const mock: EntityInterface = {
        name: '王毅',
        modifier__set: new Set(['中华', '外交部'])
    }

    describe('Utility', function () {
        it('URL_constructor', function () {
            const result = URL_constructor(mock)
            assert.equal(result, 'https:// www.baidu.com/s?wd=site%3A(baike.baidu.com)%20title%3A%20(%E4%B8%AD%E5%8D%8E%20%E5%A4%96%E4%BA%A4%E9%83%A8%20%E7%8E%8B%E6%AF%85)')
        })
    })
})
