import 'egg'

declare module 'egg' {
  // tslint:disable-next-line:interface-name
  interface Application {
    passport: {
      serializeUser<TUser = any>(
        fn: (ctx: Context, user: TUser) => Promise<any>
      )

      serializeUser<TUser, TID>(
        fn: (user: Tuser, done: (err: any, id?: TID) => void) => void
      ): void

      deserializeUser<TUser = any>(
        fn: (ctx: Context, user: TUser) => Promise<any>
      )

      deserializeUser<TUser, TID>(
        fn: (id: TID, done: (err: any, user?: TUser) => void) => void
      ): void

      verify(fn: (ctx: Context, user: any) => Promise<any>)

      mount(strategy: string, options?: IMountOptions): void

      authenticate(
        strategy: string | string[],
        options?: passport.AuthenticateOptions
      ): any
    }

    factory: any

    model: any

    all: any

    oAuth2Server: any
  }

  // tslint:disable-next-line:interface-name
  interface Context {
    user?: any

    login(user: any, options?: any): Promise<void>

    logout(): void

    isAuthenticated(): boolean
  }

  // tslint:disable-next-line:interface-name
  interface EggAppConfig {
    passportLocal?: {
      usernameField: string
      passportField: string
    }

    passportGithub?: {
      key: string
      secret: string
      callbackURL?: string
      proxy?: boolean
    }
  }
}
