<template>
  <div>
    <a
      class="text-muted -fs-7 -link-h -link-f text-decoration-none me-3"
      href="#projects"
    >
      {{  $t('projects') }}
    </a>
    <a
      class="text-muted -fs-7 -link-h -link-f text-decoration-none"
      href="#"
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
