<template>
  <div>
    <div id="navbar">
      <button>Login</button>
      <button>kill myself</button>
      <button>be diamond</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteNavigation",
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
#navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
