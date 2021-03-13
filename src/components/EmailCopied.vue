<template>
  <p
    class="-animation-3 -fs-7 -link-h -pointer"
    v-clipboard:copy="'amclres@gmail.com'"
    @click="copied"
  >
    amclres@gmail.com
  </p>
</template>
<script>
export default {
  name: 'EmailCopied',
  methods: {
    copied() {
      alert(this.$t('copied'))
    }
  }
}
</script>
