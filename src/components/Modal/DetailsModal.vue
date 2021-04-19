<template>
  <div>
    <div class="d-flex justify-content-center mb-5">
      <h3 class="me-5">
        INTRO
      </h3>
      <p class="col-10 ps-5">
        {{ $t(data.intro) }}
      </p>
    </div>
    <div class="d-flex mb-5 justify-content-center">
      <div class="col-lg-2 col-4 border-end" style="height: 7rem;">
        <a
          class="d-flex justify-content-end text-decoration-none mx-2"
          :href="data.link"
          target="_blank"
        >
          <b-button variant="outline-secondary" class="-fs-7">
            <i class="fas fa-long-arrow-alt-right"></i> {{ $t('visit') }}
          </b-button>
        </a>
      </div>
      <div class="col-lg-2 col-4 col-md-3 border-end" style="height: 7rem;">
        <div class="mx-2">
          <h5 class="-fs-8 -fs-md-7 mb-3">
            {{ $t('tech') }}
          </h5>
          <p class="-fs-8">{{ data.tech }}</p>
        </div>
      </div>
      <div class="col-lg-2 col-4 col-md-3 border-end" style="height: 7rem;">
        <div class="mx-2">
          <h5 class="-fs-8 -fs-md-7 mb-3">
            {{ $t('release')  }}
          </h5>
          <p class="-fs-8">
            {{ data.release === 'developing' ? $t(data.release) : data.release }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Details',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
