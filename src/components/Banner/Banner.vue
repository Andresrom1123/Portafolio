<template>
  <div class="-banner">
    <div class="position-absolute -overlay"></div>
    <div class="mx-3 py-5">
      <div
        class="d-flex"
        :class="modalAbout ? 'justify-content-end pe-5' : ''"
      >
        <div
          v-if="!modalAbout"
          class="col-11 p-1 text-center -animation-3 -z-index"
        >
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
        <div class="-animation-3 -z-index">
          <selected-language />
        </div>
      </div>
      <div class="-content-banner d-flex">
        <div class="col-1 text-muted -pointer d-flex align-items-center">
          <p
            class="-rotate-a -animation-3 -fs-7 -link-h"
            @click="modalAbout = !modalAbout"
          >
            {{ !modalAbout ? $t('about') : $t('close') }}
          </p>
        </div>
        <div v-if="modalAbout" class="col-10 -z-index">
          <modal-about :modalAbout="modalAbout" />
        </div>
        <div
          v-if="!modalAbout"
          class="col-10 d-flex flex-wrap justify-content-center align-items-center"
        >
          <div class="text-white text-center -z-index">
            <h1 class="fs-1 -space -animation-1">
              Andrés Romero
            </h1>
            <p class="-space -animation-2 -fs-7">
              {{ $t('tittle') }}
            </p>
          </div>
          <div class="align-self-end position-absolute -animation-3">
            <i
              class="text-muted -link-h -pointer fas fa-long-arrow-alt-down"
            >
            </i>
          </div>
        </div>
        <div class="col-1 text-muted -pointer d-flex align-items-center">
          <p class="-rotate-t -animation-3 -fs-7 -link-h">
            amclres@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectedLanguage from '../SelectedLanguage'
import ModalAbout from '../Modal/ModalAbout'

export default {
  name: 'Banner',
  components: {
    SelectedLanguage,
    ModalAbout
  },
  data() {
    return {
      modalAbout: false
    }
  }
}
</script>
