<template>
  <div class="mainpage">
    <h1>Home Page</h1>
    <p>Images will be displayed here</p>
    <div id="image-container">
      <div v-for="(item, index) in 8" :key="index" class="image">
        <h1>Cool image</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.mainpage {
  width: 80vw;
  border: red solid 1px;
}

#image-container {
  border: red solid 1px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 20px;
  padding: 10px;
}

.image {
  width: 100%; /* Ensures flexibility */
  max-width: 200px;
  height: 200px;
  background-color: #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
