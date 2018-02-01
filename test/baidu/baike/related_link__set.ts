import * as assert from 'assert'

import related_link__set from '../../../src/baidu/baike/related_link__set'
import { URL_constructor } from '../../../src/baidu/baike/related_link__set_utility'
import { EntityInterface } from '../../../src/interface'

describe('Related Link Set', function () {

    describe('Utility', function () {
        it('URL_constructor', function () {
            const mock: EntityInterface = {
                name: '王毅',
                modifier__set: new Set(['中华', '外交部'])
            }
            const result = URL_constructor(mock)
            assert.equal(result, 'https://www.bing.com/search?q=site%3Abaike.baidu.com++intitle%3A%E4%B8%AD%E5%8D%8E+intitle%3A%E5%A4%96%E4%BA%A4%E9%83%A8+intitle%3A%E7%8E%8B%E6%AF%85')
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
            const result__opt = await related_link__set(mock)
            assert(result__opt.nonEmpty())
            const result = result__opt.get()
            assert.equal(result.size, 2)
            assert(result.has('https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005'))
            assert(result.has('https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/5062689'))
        })

        it('should return None when entity does not exist', async function () {
            const result__opt = await related_link__set(wrong_mock)
            assert(result__opt.isEmpty())
        })
    })
})
