<template>
  <div class="d-flex">
    <p
      class="-pointer"
      :class="lang === 'en' ? 'text-muted' : ''"
      @click="handleChange('es')"
    >
      Es
    </p>
    <i style="font-size: 0.1rem" class="pt-2 text-muted mx-2 fas fa-circle"></i>
    <p
      class="-pointer"
      :class="lang === 'es' ? 'text-muted' : ''"
      @click="handleChange('en')"
    >
      En
    </p>
  </div>
</template>
<script>
export default {
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
