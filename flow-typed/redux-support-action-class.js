import type {StoreEnhancer, Middleware} from 'redux'

declare module 'redux-support-action-class' {
  declare class Action {
    type: string;
  }
  declare function supportActionClassMiddleware<S, A>(a: A): Middleware<S, A>;
  declare function supportActionClassEnhancer<S, A>(actions: [A] | Object): StoreEnhancer<S, A>;
}
