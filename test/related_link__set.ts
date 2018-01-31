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
            assert.equal(result, '中华 外交部 王毅')
        })
    })
})
