<template>
  <div class="-banner">
    <div class="position-absolute -overlay"></div>
    <div class="mx-3 py-5">
      <div class="d-flex">
        <div class="col-11 p-1 text-center -z-index">
          <a
            class="text-muted -fs-7 -link-h -link-f text-decoration-none me-3"
            href="#"
          >
            {{  $t('projects')}}
          </a>
          <a
            class="text-muted -fs-7 -link-h -link-f text-decoration-none"
            href="#"
          >
            {{ $t('practices') }}
          </a>
        </div>
        <selected-language />
      </div>
      <div class="-content-banner d-flex">
        <div class="col-1 text-muted -pointer d-flex align-items-center">
          <p class="-rotate-a -fs-7 -link-h">
            {{ $t('about') }}
          </p>
        </div>
        <div class="col-10 d-flex flex-wrap justify-content-center align-items-center">
          <div class="text-white text-center -z-index">
            <h1 class="fs-1 -space">Andres Romero</h1>
            <p class="-space -fs-7">
              {{ $t('tittle') }}
            </p>
          </div>
          <div class="align-self-end position-absolute">
            <i
              class="text-muted -link-h -pointer fas fa-long-arrow-alt-down"
            >
            </i>
          </div>
        </div>
        <div class="col-1 text-muted -pointer text-end d-flex align-items-center">
          <p class="-rotate-t -fs-7 -link-h">
            amclres@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectedLanguage from '../SelectedLanguage'
export default {
  components: {
    SelectedLanguage
  }
}
</script>
