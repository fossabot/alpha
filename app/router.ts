import {Application} from 'egg'

export default (app: Application) => {
  const {controller, router} = app

  router.get('/health-check', controller.home.index)
  router.get('/', controller.home.render)
  app.router.get('/user', 'home.render')

  app.passport.mount('github', app.config.passportGithub)
  app.passport.mount('wechat', app.config.passportWechat)
  app.passport.mount('citi', app.config.passportCiti)

  app.router.get('/logout', 'user.logout')

  app.router.resources('users', '/users', controller.users)
  // app.router.get('/users', controller.users.index)
}
