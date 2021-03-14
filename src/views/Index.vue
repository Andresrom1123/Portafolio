<template>
  <div>
    <banner />
    <a name="projects" />
    <h2 class="fs-2 -space my-3 text-center">
      {{ $t('projects') }}
    </h2>
  </div>
</template>
<script>
import Banner from '../components/Banner/Banner'
export default {
  name: 'Index',
  components: {
    Banner
  }
}
</script>
