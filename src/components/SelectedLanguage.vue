<template>
  <div class="d-flex col-1">
    <p
      class="-pointer"
      :class="lang === 'en' ? 'text-muted' : 'text-white'"
      @click="handleChange('es')"
    >
      Es
    </p>
    <i style="font-size: 0.1rem" class="pt-2 text-muted mx-2 fas fa-circle"></i>
    <p
      class="-pointer"
      :class="lang === 'es' ? 'text-muted' : 'text-white'"
      @click="handleChange('en')"
    >
      En
    </p>
  </div>
</template>
<script>
export default {
  name: 'selectedLanguage',
  data() {
    const lang = localStorage.getItem('lang') || 'es'
    return {
      lang: lang
    }
  },
  methods: {
    handleChange(event) {
      localStorage.setItem('lang', event)
      window.location.reload()
    }
  }  
}
</script>
