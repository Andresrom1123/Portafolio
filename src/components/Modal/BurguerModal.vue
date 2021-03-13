<template>
  <div v-if="burguerModal" class="text-white -z-index p-3 d-flex col-12">
    <div class="col-4 me-2 -animation-4">
      <div class="mb-3">
        <a
          href=""
          class="text-muted -link-h -fs-7 text-decoration-none"
        >
          {{ $t('projects' )}}
        </a>
      </div>
      <div>
        <a
          href=""
          class="text-muted -link-h -fs-7 text-decoration-none"
        >
          {{ $t('practices' )}}
        </a>
      </div>
    </div>
    <div class="col-8 -animation-4">
      <div>
        <h3 class="text-white fs-5">{{ $t('about') }}</h3>
        <p class="text-muted -fs-7 mb-2">
          {{ $t('about-description')}}
          <a
            href="https://academlo.com/"
            class="text-muted -link"
            target="_blank"
          >
            academlo.
          </a>
        </p>
        <p class="text-muted -fs-7">
          {{ $t('about-description-2') + '.'}}
        </p>
      </div>
      <div class="d-flex flex-wrap">
        <a
          class="me-2 -fs-7 -link-h text-muted text-decoration-none"
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
      <div>
        <p class="text-white fs-5 my-2">
          {{ $t('email') }}
        </p>
        <div class="text-muted">
          <email-copied />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EmailCopied from '../EmailCopied'

export default {
  name: 'BurguerModal',
  props: {
    burguerModal: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EmailCopied
  }
}
</script>
