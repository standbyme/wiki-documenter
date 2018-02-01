import * as assert from 'assert'

import attribute_complete from '../../src/project/attribute_complete'

describe('Attribute Complete', function () {
    it('basic test', async function () {
        const mock = {
            para: '4月15日，“世界一流大学建设与教育基金发展的中国路径”研讨会在中国人民大学逸夫会议中心举行。财政部科教司司长赵路，中国人民大学党委书记、教育基金会理事长靳诺，中国教育发展基金会副秘书长陈希原，中国人民大学副校长贺耀敏，党委副书记郑水泉，原党委书记、公共治理研究院院长程天权，北京中医药大学副校长陶晓华，以及财政部、教育部、民政部等部委相关司局负责人出席本次研讨会。'
        }
        const result = await attribute_complete(mock)
    })
})
