<template>
  <UApp>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </UApp>
</template>

<script setup lang="ts">
useHead({
  title: "Postal Wiki",
  script: [
    {
      defer: true,
      src: "https://analyze.jianyuelab.co/script.js",
      "data-website-id": "5f7bf075-4715-4bee-876d-687ca0297a84",
    },
  ],
});
</script>
