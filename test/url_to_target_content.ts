import * as assert from 'assert'

import localizer from '../src/baidu/baike/project/basic-info/localizer'
import parser from '../src/baidu/baike/project/basic-info/parser'

import url_to_target_content from '../src/url_to_target_content'

describe('URL to Target Content', function () {
    this.slow(1000)
    it('basic test', async function () {
        const url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005?fr=aladdin'
        const result = await url_to_target_content(url, { parser, localizer })

        assert.equal(result.get('出生地'), '湖北省南漳县')
    })
})
