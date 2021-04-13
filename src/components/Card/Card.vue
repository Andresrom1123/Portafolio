<template>
  <div
    class="-card shadow position-relative"
    @click="Click(data.slug)"
  >
    <img
      class="position-absolute"
      :src="data.image"
    >
    <div
      class="-overlay -opacity position-absolute d-flex justify-content-center align-items-center"
    >
      <p class="text-white fs-6 -fs-md-1 -z-index">
        {{ data.tittle }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    Click(slug) {
      if (slug === 'project') {
        this.$router.push(`${this.$t('projects').replace(/\b\w/g, l => l.toLowerCase())}/${this.data.name}`)
      } else {
        this.$router.push(`${this.$t('practices').replace(/\b\w/g, l => l.toLowerCase())}/${this.data.name}`)
      }
    }
  }
}
</script>
