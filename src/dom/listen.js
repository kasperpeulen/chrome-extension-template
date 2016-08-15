// @flow
import Actions from '../Actions';
import Action from "redux-support-action-class";
/**
 * Place to listen to dom events from the page the extension is inject in,
 * and dispatch action to the store.
 */
export default function listenToDom(dispatch: (action: Action) => void) {
  on('keydown', {code: 'Equal', meta: true, alt: true}, () => {
    dispatch(new Actions.Counter.Increment());
  });
  on('keydown', {code: 'Minus', meta: true, alt: true}, () => {
    dispatch(new Actions.Counter.Decrement());
  });

  on('keydown', {code: 'KeyH', meta: true, alt: true}, () => {
    dispatch(new Actions.Counter.Hide());
  });

  on('keydown', {code: 'KeyS', meta: true, alt: true, log: true}, () => {
    dispatch(new Actions.Counter.Show());
  });

  on('keydown', {code: 'KeyT', meta: true, alt: true, log: true}, () => {
    dispatch(new Actions.Counter.Toggle());
  });
}

type KeyboardInfo = {
  key?: string,
  code?: string,
  meta?: boolean,
  alt?: boolean,
  ctrl?: boolean,
  shift?: boolean,
  prevent?: boolean,
  log?: boolean
}

function on(event: KeyboardEventTypes, {key, meta, alt, code, shift, ctrl, prevent = true, log = false}: KeyboardInfo, callback) {
  window.addEventListener(event, (e: KeyboardEvent) => {
    if (log) {
      console.log(e);
    }

    if (key && e.key !== key) {
      return;
    }
    if (meta && e.metaKey !== meta) {
      return;
    }
    if (code && e.code !== code) {
      return;
    }
    if (ctrl && e.ctrlKey !== ctrl) {
      return;
    }
    if (alt && e.altKey !== alt) {
      return;
    }
    if (shift && e.shiftKey !== shift) {
      return;
    }
    if (prevent) {
      e.preventDefault();
    }
    callback(e);
  });
}
