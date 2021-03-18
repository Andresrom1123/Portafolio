<template>
  <div>
    <banner />
    <a :name="$t('projects')" />
    <main class="container my-5">
      <h2 class="fs-1 -space text-center">
        {{ $t('projects') }}
      </h2>
      <div class="mx-5 my-5 -pointer" v-for="n in [0,1]" :key="n">
        <Card />
      </div>
      <a :name="$t('practices')" />
      <h2 class="fs-1 -space text-center">
        {{ $t('practices') }}
      </h2>
    </main>
  </div>
</template>
<script>
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'

export default {
  name: 'Index',
  components: {
    Banner,
    Card
  }
}
</script>
