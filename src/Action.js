// @flow
export default class Action {
  type: string;

  constructor() {
    this.type = this.constructor.name;
  }
}