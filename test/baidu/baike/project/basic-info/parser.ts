import * as assert from 'assert'

import localizer from '../../../../../src/baidu/baike/project/basic-info/localizer'
import parser from '../../../../../src/baidu/baike/project/basic-info/parser'

import get_html from '../../../../../src/get_html'

describe('Localizer for basic-info', function () {
    this.slow(1000)

    it('basic test', async function () {
        const url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/2652548'
        const html = await get_html(url)
        const target_html_try = localizer(html)
        assert(target_html_try.isSuccess())
        const target_html = target_html_try.get()
        const map_try = parser(target_html)
        assert(map_try.isSuccess())
        const map = map_try.get()
        assert.equal(map.size, 8)
        assert.equal(map.get('出生地'), '北京')
        assert.equal(map.get('出生日期'), '1953年10月')
    })
})
