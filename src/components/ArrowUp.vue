<template>
  <div class="position-fixed" style="bottom: 5rem;">
    <a
      href="#"
      class="
        p-2 shadow -z-index position-absolute d-flex justify-content-center shadow rounded
        align-items-center bg-secondary text-white text-decoration-none
      "
      style="width: 2rem;"
      v-if="visible"
    >
        <i class="fas fa-arrow-up "></i>
    </a>
  </div>
</template>
<script>
export default {
  name: 'ArrowUp',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function() {
      this.visible = window.scrollY > 150
    }
  },
  mounted: function() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function() {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>
