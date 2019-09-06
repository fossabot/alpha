import {Controller} from 'egg'
import * as querystring from 'querystring'

export default class PassportRelayController extends Controller {
  public async relay() {
    const {ctx} = this

    const referer = await ctx.app.refererCache.get(ctx.query.state)
    // tslint:disable-next-line:no-console
    console.log('referer =========== ', referer)
    await ctx.app.refererCache.delete(ctx.query.state)

    if (referer) {
      ctx.redirect(
        referer +
          (referer.indexOf('?') > 0 ? '&' : '?') +
          querystring.stringify({token: ctx.user.id})
      )
    } else {
      ctx.body = {token: ctx.user.id}
    }
  }
}
