<template>
  <div>
    <banner-page />
      <a :name="$t('content')" />
    <!-- <main class="m-5">
      <arrow-up />
      <div class="d-flex justify-content-center">
        <card-image />
      </div>
    </main> -->
    <div class="mt-5">
      <Footer />
    </div>
  </div>
</template>
<script>
// import ArrowUp from '../components/ArrowUp.vue'
import BannerPage from '../components/Banner/BannerPage'
// import CardImage from '../components/Card/CardImage'
import Footer from '../components/Footer/Footer.vue'

export default {
  name: 'Page',
  components: {
    BannerPage,
    // CardImage,
    Footer,
    // ArrowUp
  }
}
</script>
