import * as assert from 'assert'

import { EntityInterface } from '../src/interface'
import related_link__set from '../src/related_link__set'
import { URL_constructor } from '../src/related_link__set_utility'

describe('Related Link Set', function () {

    describe('Utility', function () {
        it('URL_constructor', function () {
            const mock: EntityInterface = {
                name: '王毅',
                modifier__set: new Set(['中华', '外交部'])
            }
            const result = URL_constructor(mock)
            assert.equal(result, 'http://www.baidu.com/s?wd=site%3A(baike.baidu.com)%20title%3A%20(%E4%B8%AD%E5%8D%8E%20%E5%A4%96%E4%BA%A4%E9%83%A8%20%E7%8E%8B%E6%AF%85)')
        })
    })

    describe('Main', function () {
        this.slow(5000)
        this.timeout(10000)
        const mock: EntityInterface = {
            name: '王毅',
            modifier__set: new Set(['银行'])
        }

        const wrong_mock: EntityInterface = {
            name: '王毅',
            modifier__set: new Set(['正则表达式'])
        }
        it('should return Some when entity exists', async function () {
            const result_opt = await related_link__set(mock)
            assert(result_opt.nonEmpty())
            const result = result_opt.get()
            assert.equal(result.size, 2)
            assert(result.has('baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005'))
            assert(result.has('baike.baidu.com/item/%E7%8E%8B%E6%AF%85/5062689'))
        })

        it('should return None when entity does not exist', async function () {
            const result_opt = await related_link__set(wrong_mock)
            assert(result_opt.isEmpty())
        })
    })
})
