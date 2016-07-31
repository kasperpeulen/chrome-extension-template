declare module 'redux' {
  declare type State = any;
  declare type Action = Object;
  declare type AsyncAction = any;
  declare type Reducer<S, A> = (state: S, action: A) => S;
  declare type BaseDispatch = (a: Action) => Action;
  declare type Dispatch = (a: Action | AsyncAction) => any;
  declare type ActionCreator = (...args: any) => Action | AsyncAction;
  declare type MiddlewareAPI = { dispatch: Dispatch, getState: () => State };
  declare type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch;
  declare type Store<S> = {
    dispatch: Dispatch,
    getState: () => S,
    subscribe: (listener: () => void) => () => void,
    replaceReducer: (reducer: Reducer<S, Action>) => void
  };
  declare type StoreCreator<S> = (reducer: Reducer<S, Action>, initialState?: S) => Store<S>;
  declare type StoreEnhancer<S> = (next: StoreCreator<S>) => StoreCreator<S>;
  declare type ActionCreatorOrObjectOfACs = ActionCreator | { [key: string]: ActionCreator };
  declare type Reducers = { [key: string]: Reducer<any, any> };
  declare class Redux {
  bindActionCreators<actionCreators: ActionCreatorOrObjectOfACs>(actionCreators: actionCreators, dispatch: Dispatch): actionCreators;
  combineReducers(reducers: Reducers): Reducer<any, any>;
  createStore<S>(reducer: Reducer<S, Action>, initialState?: S, enhancer?: StoreEnhancer<S>): Store<S>;
  applyMiddleware<S>(...middlewares: Array<Middleware>): StoreEnhancer<S>;
  compose<S>(...functions: Array<Function | StoreEnhancer<S>>): Function;
  }
  declare var exports: Redux;
}