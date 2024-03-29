import { Controller } from 'egg'
// @ts-ignore
import querystring from 'querystring'

export default class PassportRelayController extends Controller {
  public async relay() {
    const { ctx } = this

    ctx.logger.info(`query = `, { query: ctx.query })
    const referer = await ctx.app.refererCache.get(ctx.query.state)
    ctx.logger.info('referer get = ', referer)
    await ctx.app.refererCache.delete(ctx.query.state)

    if (referer) {
      ctx.redirect(
        referer +
        (referer.indexOf('?') > 0 ? '&' : '?') +
        querystring.stringify({
          token: ctx.app.jwt.sign(ctx.user.id, ctx.app.config.jwt.secret),
          traceId: ctx.traceId,
        })
      )
    } else {
      ctx.body = { token: ctx.app.jwt.sign(ctx.user.id, ctx.app.config.jwt.secret), traceId: ctx.traceId }
    }
  }
}
