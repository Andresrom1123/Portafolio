<template>
  <div>
    <div class="d-flex justify-content-center mb-5">
      <h3 class="me-5">
        INTRO
      </h3>
      <p class="col-5">
        {{ $t(data.intro) }}
      </p>
    </div>
    <div class="d-flex mb-5 justify-content-center">
      <div class="col-2 border-end px-4" style="height: 7rem;">
        <a :href="data.link" target="_blank">
          <b-button variant="outline-secondary" class="-fs-7">
            <i class="fas fa-long-arrow-alt-right"></i> {{ $t('visit') }}
          </b-button>
        </a>
      </div>
      <div class="col-2 border-end px-4" style="height: 7rem;">
        <h5 class="-fs-7 mb-3">
          {{ $t('tech') }}
        </h5>
        <p class="-fs-8">{{ data.tech }}</p>
      </div>
      <div class="col-2 border-end px-4" style="height: 7rem;">
        <h5 class="-fs-7 mb-3">
          {{ $t('release')  }}
        </h5>
        <p class="-fs-8">
          {{ data.release === 'developing' ? $t(data.release) : data.release }}
        </p>
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
