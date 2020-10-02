<template>
  <li @click="openImageUrl()">
    <!-- <router-link :to="imageViewLink"> -->
    <BaseCard>
      <ImageView :download_url="download_url" />
    </BaseCard>
    <ImageCaption>{{ author }}</ImageCaption>
    <!-- </router-link> -->
  </li>
</template>

<script>
export default {
  props: ["id", "author", "width", "height", "url", "download_url"],
  computed: {
    // imageViewLink() {
    //   return this.$route.path + "/" + this.id + "/"+ this.width + "/"+this.height;
    // },
  },
  methods: {
    openImageUrl() {
      window.open(this.url, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 $dark, 0 0 2px 0 $dark;

  &:hover .image-caption {
    opacity: 1;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 200%;
    width: 200%;
    background: $white;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-128%) translateY(25%) rotate(45deg);
    transform: translateX(-128%) translateY(25%) rotate(45deg);
    opacity: 0.1;
  }

  &:hover:after {
    -webkit-transform: translateX(-20%) translateY(-25%) rotate(45deg);
    transform: translateX(-20%) translateY(-25%) rotate(45deg);
  }
}
</style>