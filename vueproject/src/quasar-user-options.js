
import './styles/quasar.sass'
import lang from 'quasar/lang/pt-BR.js'
import { Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: { Notify
  },
  lang: lang
}