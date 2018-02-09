import * as assert from 'assert'

import localizer from '../../../../../src/baidu/baike/project/basic-info/localizer'
import get_html from '../../../../../src/get_html'

describe('Localizer for basic-info', function () {
    this.slow(1000)
    this.timeout(6000)
    it('should return success when basic-info exists', async function () {
        const url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005?fr=aladdin'
        const html = await get_html(url)
        const result = localizer(html)
        assert(result.isSuccess())
    })

    it('should return failure when basic-info exists', async function () {
        const url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/8731166'
        const html = await get_html(url)
        const result = localizer(html)
        assert(result.isFailure())
    })
})
