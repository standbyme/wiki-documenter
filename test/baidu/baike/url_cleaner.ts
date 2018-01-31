import * as assert from 'assert'

import url_cleaner from '../../../src/baidu/baike/url_cleaner'
describe('URL Cleaner', function () {
    it('basic test', function () {
        const result = url_cleaner('https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005?fr=aladdin')
        assert.equal(result, 'baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005')
    })
})
