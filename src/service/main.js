import Images from "./images";
import ImageService from "./images/service";

class Main {
  constructor() {
    if (!Main.instance) {

    this.images = new Images({
        service: new ImageService()
    });

    //--> Comment this line to test with mock service
    //this.images = new Images();

      Main.instance = this;
    }

    return Main.instance;
  }
}

const instance = new Main();
Object.freeze(instance);
export default instance;
