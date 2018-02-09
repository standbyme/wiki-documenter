import * as Koa from 'koa'

import related_link__set from './baidu/baike/related_link__set'
import { EntityInterface } from './interface'
const mock: EntityInterface = {
    name: '王毅',
    modifier__set: new Set(['银行'])
}

// async function main() {
//     const result__opt = await related_link__set(mock)
//     console.log(result__opt)
// }

// main()

const app = new Koa()

app.use(async ctx => {
    try {
        const result__opt = (await related_link__set(mock)).map(result => ({ status: 0, result: Array.from(result) }))
        ctx.body = result__opt.getOrElse({ status: 1 })
    } catch (error) {
        ctx.body = { status: 2 }
    }
})

app.listen(3000)
