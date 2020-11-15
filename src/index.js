import VSkeleton from './components/VSkeleton'

export default {
  install (Vue = {}) {
    Vue.component(VSkeleton.name, VSkeleton)
  }
}