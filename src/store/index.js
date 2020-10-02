import { createStore } from 'vuex'

import imagesModules from './modules/images'

export default createStore({
  modules: {
    images : imagesModules
  }
})
