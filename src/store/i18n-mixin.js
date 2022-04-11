import { mapState } from 'vuex'

const i18nMixin = {
  computed: {
    ...mapState({
      currentLang: state => state.app.lang
    })
  },
  methods: {
  }
}

export default i18nMixin
