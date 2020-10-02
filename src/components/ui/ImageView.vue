<template>
    <img class="image" :src="download_url" />
</template>

<script>
export default {
    props:['download_url']
}
</script>

<style lang="scss" scoped>
.image{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px 3px 0px 0px;
}
</style>