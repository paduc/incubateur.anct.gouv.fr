// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BasicPageLayout from '~/layouts/BasicPage.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faPaperPlane,
  faExternalLinkAlt,
  // faArrowDown,
  // faArrowRight,
  // faNewspaper,
  // faMobileAlt,
  // faBalanceScale,
  // faClipboardList,
  // faAward,
  // faGraduationCap,
  // faVials,
  // faBars,
  } from '@fortawesome/free-solid-svg-icons'
import {
  faEnvelope,
  faChartBar,
  // faFilePdf,
  // faFileWord,
  // faFileAlt,
  // faFileImage,
  // faEdit,
  } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
  faGithub,
  faTwitter,
  faPaperPlane,
  faExternalLinkAlt,
  faEnvelope,
  faChartBar
)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('BasicPage', BasicPageLayout)
  Vue.component('font-awesome', FontAwesomeIcon)

  head.htmlAttrs = { lang: 'fr' }
}
