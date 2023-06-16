import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faUserSecret, faStore, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faStore, faMagnifyingGlass, faHeart, faCartShopping, faFacebook, faTwitter, faInstagram)

const app = createApp(App)

app.use(createPinia())
app.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
