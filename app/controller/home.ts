import {Controller} from 'egg'

export default class HomeController extends Controller {
  public async index() {
    const {ctx} = this
    ctx.body = await ctx.service.test.sayHi('egg')
  }

  public async render() {
    const ctx = this.ctx

    if (ctx.isAuthenticated()) {
      ctx.body = `<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
</head>
<body>
    <div>
        <h2>${ctx.path}</h2>
        <hr>
        Logged in user: <img src="${ctx.user.photo}"> ${
        ctx.user.displayName
      } / ${ctx.user.id} | <a href="/logout">Logout</a>
        <pre><code>${JSON.stringify(ctx.user, null, 2)}</code></pre>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
    </div>
</body>
</html>`
    } else {
      ctx.session.returnTo = ctx.path
      ctx.body = `
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
</head>
<body>
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/github">Github</a> |
          <a href="/passport/wechat">Wechat</a> |
          <a href="/passport/citi">Citi</a>
          <hr>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
</body>
</html>
      `
    }
  }
}
