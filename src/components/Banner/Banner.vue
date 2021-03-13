<template>
  <div class="-banner">
    <div class="position-absolute -overlay"></div>
    <div class="mx-3 py-5">
      <div class="d-flex justify-content-end pe-4">
        <div
          class="col-1 d-md-none d-block -z-index -animation-3"
        >
          <div @click="burguerModal = !burguerModal">
            <header-burguer />
          </div>
        </div>
        <div
          v-if="!aboutModal"
          class="col-10 p-1 text-center -animation-3 -z-index d-none d-md-block"
        >
          <Header />
        </div>
        <div
          class="
            d-flex -animation-3 col-10 justify-content-md-start justify-content-end col-md-1 -z-index
          "
        >
          <language-selected />
        </div>
      </div>
      <div class="-content-banner d-flex">
        <div
          class="
            col-1 text-muted -pointer d-md-flex d-none justify-content-center align-items-center flex-column
          "
        >
          <p
            class="-rotate -animation-3 -fs-7 -link-h"
            @click="aboutModal = !aboutModal"
          >
            {{ !aboutModal ? $t('about') : $t('close') }}
          </p>
        </div>
        <div v-if="aboutModal" class="col-10 -z-index">
          <about-modal :aboutModal="aboutModal" />
        </div>
        <div
          v-if="!aboutModal"
          class="
            col-md-10 col-12 d-flex flex-wrap justify-content-center align-items-center
          "
        >
          <div
            class="text-white text-center -z-index"
            :class="burguerModal ? 'd-none' : ''"
          >
            <h1 class="fs-1 -space -animation-1">
              Andrés Romero
            </h1>
            <p class="-space -animation-2 -fs-7">
              {{ $t('tittle') }}
            </p>
          </div>
          <div
            class="align-self-end position-absolute -animation-3"
            :class="burguerModal ? 'd-none' : ''"
          >
            <i
              class="text-muted -link-h -pointer fas fa-long-arrow-alt-down"
            >
            </i>
          </div>
        </div>
        <div
          class="
            col-1 text-muted -pointer flex-column d-md-flex d-none align-items-center justify-content-center
          "
        >
          <email-copied />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LanguageSelected from '../LanguageSelected'
import AboutModal from '../Modal/AboutModal'
import Header from '../Header/Header'
import HeaderBurguer from '../Header/HeaderBurguer'
import EmailCopied from '../EmailCopied.vue'

export default {
  name: 'Banner',
  components: {
    LanguageSelected,
    AboutModal,
    Header,
    HeaderBurguer,
    EmailCopied
  },
  data() {
    return {
      aboutModal: false,
      burguerModal: false
    }
  }
}
</script>
