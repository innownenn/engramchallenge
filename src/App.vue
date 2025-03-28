<template>
  <SiteNavigation />
  <router-view :key="$route.params.position" />
</template>

<script>
import SiteNavigation from "./components/SiteNavigation.vue";
export default {
  name: "App",
  components: {
    SiteNavigation,
  },
  setup() {},
};
</script>

<style scoped></style>
