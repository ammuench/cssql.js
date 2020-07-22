import * as knex from "knex";
import { CONFIG_IDS } from "./enums/config.enum";

export class CSSql {
  private _parentRef: HTMLElement;
  private _config: knex.Config;

  constructor(body: HTMLElement) {
    this._parentRef = body;

    this._config = {
      client: this._getStyleValue(this._parentRef, CONFIG_IDS.CLIENT),
      connection: {
        host: this._getStyleValue(this._parentRef, CONFIG_IDS.HOST),
        user: this._getStyleValue(this._parentRef, CONFIG_IDS.USER),
        password: this._getStyleValue(this._parentRef, CONFIG_IDS.PASSWORD),
        database: this._getStyleValue(this._parentRef, CONFIG_IDS.DB)
      }
    };
  }

  get config(): any {
    return this.config;
  }

  private _getStyleValue(elem: Element, queryTarget: string): string {
    try {
      const htmlElement: HTMLElement = elem.querySelector(queryTarget);
      return htmlElement.style.content;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
