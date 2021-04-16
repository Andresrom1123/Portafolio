<template>
  <div>
    <banner />
    <a :name="$t('projects').replace(/\b\w/g, l => l.toLowerCase())" />
    <main class="container my-5">
      <h2 class="fs-1 -space text-center">
        {{ $t('projects') }}
      </h2>
      <arrow-up />
      <div class="mx-5 my-5 -pointer" v-for="data in dataProjects" :key="data.id">
        <Card :data="data" />
      </div>
      <a :name="$t('practices').replace(/\b\w/g, l => l.toLowerCase())" />
      <h2 class="fs-1 -space text-center">
        {{ $t('practices') }}
      </h2>
      <div class="mx-5 my-5 -pointer" v-for="data in dataPractices" :key="data.id">
        <Card :data="data" />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import ArrowUp from '../components/ArrowUp'
import Footer from '../components/Footer/Footer'
import DataProjects from '../data/projects'
import DataPractices from '../data/practices'

export default {
  name: 'Index',
  components: {
    Banner,
    Card,
    ArrowUp,
    Footer,
  },
  data() {
    return {
      dataProjects: DataProjects,
      dataPractices: DataPractices
    }
  }
}
</script>
