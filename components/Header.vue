<script setup lang="ts">
const { activeHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'AI Assistant',
  to: '#ai-assistant',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('features')
}])
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Advanced Chat <UBadge label="preview" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="Log in" color="white" variant="ghost" trailing-icon="i-heroicons-arrow-right-20-solid" class="hidden lg:flex" />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block />
    </template>
  </UHeader>
</template>
