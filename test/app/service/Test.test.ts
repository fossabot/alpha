import * as assert from 'assert'
import {Context} from 'egg'
// tslint:disable-next-line:no-submodule-imports
import {app} from 'egg-mock/bootstrap'

describe('test/app/service/Test.test.js', () => {
  let ctx: Context

  before(async () => {
    ctx = app.mockContext()
  })

  it('sayHi', async () => {
    const result = await ctx.service.test.sayHi('egg')
    assert(result.startsWith('hi, egg'))
  })
})
