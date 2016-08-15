// @flow
import type {State} from '../reducer';

/**
 * Place to manipulate the dom from the page the extension is inject in.
 */
export default function manipulateDom(state: State) {
  setTitle(state.title);
}

function setTitle(title) {
  document.title = title;
}