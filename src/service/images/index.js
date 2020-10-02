import MockService from "./service.mock";
import {
  toImages
} from "./adapter";

export default class Images {
    constructor({ service } = {}) {
      this.service = service || new MockService();
    }

    get(data) {
        return this.service
        .getImages(data)
        .then(response => {
          return toImages(response)});
      }
}