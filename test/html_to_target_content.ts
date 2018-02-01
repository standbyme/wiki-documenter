import * as assert from 'assert'

import localizer from '../src/baidu/baike/project/basic-info/localizer'
import parser from '../src/baidu/baike/project/basic-info/parser'
import get_html from '../src/get_html'
import html_to_target_content from '../src/html_to_target_content'

describe('Html to Target Content', function () {
    this.slow(1000)
    it('basic test', async function () {
        const url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005?fr=aladdin'
        const html = await get_html(url)
        const result__try = html_to_target_content(html, { parser, localizer })
        assert(result__try.isSuccess())
        const result = result__try.get()
        assert.equal(result.get('出生地'), '湖北省南漳县')
    })
})
