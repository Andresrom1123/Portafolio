<template>
  <div>
    <div class="d-flex justify-content-center mb-5">
      <h3 class="me-5">
        INTRO
      </h3>
      <p class="col-5" style="overflow-wrap: anywhere;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div class="d-flex mb-5 justify-content-center">
      <div class="col-3 border-end ps-4" style="height: 7rem;">
        <b-button variant="outline-secondary">
          <i class="fas fa-long-arrow-alt-right"></i> {{ $t('visit') }}
        </b-button>
      </div>
      <div class="col-3 border-end ps-4" style="height: 7rem;">
        <h5 class="-fs-7 mb-3">
          {{ $t('tech') }}
        </h5>
        <p>lorem</p>
      </div>
      <div class="col-3 border-end ps-4" style="height: 7rem;">
        <h5 class="-fs-7 mb-3">
          {{ $t('release')  }}
        </h5>
        <p>lorem</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Details'
}
</script>
