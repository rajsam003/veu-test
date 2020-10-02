<template>
  <iframe :src="imageUrl" target="_parent" ></iframe>
</template>

<script>
export default {
   computed:{
      imageUrl(){
         const allImages = this.$store.getters["images/images"];
         const paramId = this.$route.params.imageId;
         const selectedImage = allImages.find(image => image.id === paramId);
         return selectedImage.url;

      }
   }
};
</script>

<style lang="scss" scoped>
iframe{
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
}
</style>