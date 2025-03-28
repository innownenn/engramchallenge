<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "App",
  setup() {
    const route = useRoute();

    // Hide navigation only on the homepage ("/")
    const showNavigation = computed(() => route.path !== "/");

    return {
      showNavigation,
    };
  },
};
</script>

<template>
  <router-view :key="$route.params.position" />
</template>

<style scoped></style>
