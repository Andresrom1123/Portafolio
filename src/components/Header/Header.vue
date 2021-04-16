<template>
  <div>
    <a
      class="text-muted -fs-7 -link-h -link-f text-decoration-none me-3"
      :href="'#' + $t('projects').replace(/\b\w/g, l => l.toLowerCase())"
    >
      {{  $t('projects') }}
    </a>
    <a
      class="text-muted -fs-7 -link-h -link-f text-decoration-none"
      :href="'#' + $t('practices').replace(/\b\w/g, l => l.toLowerCase())"
    >
      {{ $t('practices') }}
    </a>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
