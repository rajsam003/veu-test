<template>
  <TheHeader />
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.wrapper {
  display: flex;
  padding: 0;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
}

// @media (min-width: 48rem) {
//   .wrapper {
//     padding: 0 2em;
//   }
// } ;
</style>
