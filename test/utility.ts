import * as assert from 'assert'

import { get_final_url } from '../src/utility'

describe('Utility', function () {
    this.slow(5000)
    this.timeout(10000)

    describe('Get Final URL', function () {
        it('basic test', async function () {
            const mock = 'http://baike.baidu.com/link?url=LsHJvH4ok8tw_4jWIE480gq6Uv2R5mhYeC8YBHOi4iZS6lLLUMFsT3JyvjBn6FkJo267aM8f4_AA_DMpzcpXqnfqUs4ZvXiTagSTnob76N_'
            const result = await get_final_url(mock)
            assert.equal(result, 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005?fr=aladdin')
        })
    })

})
