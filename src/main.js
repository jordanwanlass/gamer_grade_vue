import { createApp } from 'vue'
import App from './App.vue'
import GamerGradeTable from './components/GamerGradeTable/GamerGradeTable.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
let app = createApp(GamerGradeTable);

app.mount('#app');

// Make BootstrapVue available throughout your project
// vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// vue.use(IconsPlugin)

// createApp(GamerGradeTable).mount('#app')
