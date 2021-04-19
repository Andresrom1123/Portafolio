<template>
  <div class="-banner">
    <div
      class="mx-5 pt-5"
    >
      <div class="d-flex justify-content-between">
        <router-link class="text-decoration-none text-muted fs-1" to="/">
          <i class="far fa-times-circle"></i>
        </router-link>
        <div class="mt-3">
          <language-selected />
        </div>
      </div>
      <div class="-content-banner d-flex justify-content-center p-5">
        <div>
          <div v-if="!details">
            <h1 class="-fs-md-7rem fs-1 pt-5 mb-4">
              {{ name.replace(/\b\w/g, l => l.toUpperCase()) }}
            </h1>
            <div class="d-flex justify-content-center">
              <b-button variant="outline-secondary" @click="details = !details">
                <i class="fas fa-long-arrow-alt-right"></i> {{ $t('details') }}
              </b-button>
            </div>
          </div>
          <div v-if="details">
            <details-modal :data="detailsData[0]" />
            <div class="d-flex justify-content-center">
              <i
                class="far fa-times-circle -pointer fs-4 text-muted"
                @click="details = !details"
              >
              </i>
            </div>
          </div>
          <a class="text-center -mt-6 mb-0 d-block" :href="'#' + $t('content')">
            <i
              class="text-muted -pointer fas fa-long-arrow-alt-down"
            >
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LanguageSelected from '../LanguageSelected'
import DetailsModal from '../Modal/DetailsModal'
import DetailsData from '../../data/details'

export default {
  name: 'BannerPage',
  components: {
    LanguageSelected,
    DetailsModal
  },
  data() {
    return {
      name: this.$route.params.name.replace('_', " "),
      details: false,
      detailsData: null
    }
  },
  mounted() {
    this.detailsData = DetailsData.filter((detail) => {
      return detail.name === this.$route.params.name
    })
  }
}
</script>
