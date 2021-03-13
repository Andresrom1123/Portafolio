<template>
  <div v-if="aboutModal" class="col-10 -z-index">
    <div class="mb-3 p-4 -animation-4">
      <p class="fs-2 text-white mb-3">
        {{ $t('about-description' )}}
        <a
          class="text-decoration-none -link-h text-muted fs-3"
          href="https://www.academlo.com/"
          target="_blank"
        >
          Academlo.
        </a>
      </p>
      <p class="fs-3 text-white">
        {{ $t('about-description-2') + '.' }}
      </p>
    </div>
    <div class="d-flex ms-3 -animation-4">
      <a
        class="mx-2 -fs-7 -link-h text-muted text-decoration-none"
        href="https://www.linkedin.com/in/andres-romero-069b961a8/"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        class="me-2 -fs-7 -link-h text-muted text-decoration-none"
        href="https://github.com/Andresrom1123"
        target="_blank"
      >
        GitHub
      </a>
      <a
        class="me-5 -fs-7 -link-h text-muted text-decoration-none"
        href="https://www.hackerrank.com/amclres"
        target="_blank"
      >
        HackerRank
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutModal',
  props: {
    aboutModal: {
      type: Boolean,
      default: false
    }
  }
}
</script>
