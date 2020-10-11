/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-constructor */
export class Pokemon {
  constructor(
    readonly name: string,
    readonly url: string,
    public icon: string,
  ) {}
}
