<template>
  <div id="app">
    <SelectedLanguage />
    {{ $t('w-the-masculine') }}
  </div>
</template>

<script>
import SelectedLanguage from './components/selectedLanguage.vue'

export default {
  name: 'App',
  components: {
    SelectedLanguage
  }
}
</script>
<style>
  @import './assets/styles/styles.css';
</style>
