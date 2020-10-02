import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue';
import ImageCaption from './components/ui/ImageCaption.vue'
import ImageView from './components/ui/ImageView.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App)

app.use(store)
app.use(router)

app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('ImageCaption', ImageCaption)
app.component('ImageView', ImageView)
app.component('BaseSpinner', BaseSpinner)
app.component('BaseDialog', BaseDialog)

app.mount('#app')
