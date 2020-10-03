<template>
  <BaseDialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </BaseDialog>
  <section>
    <Pagination
      @pagination-click="onPaginationClick"
      @page-reload="loadImages"
      :totalItems="totalItems"
    >
      <ImageFilter :authorName="authorName" @set-search="setSearch" />
      <div v-if="isLoading">
        <BaseSpinner />
      </div>
      <ul v-else-if="hasImages && filteredImages.length > 0">
        <ImageItem
          v-for="image in filteredImages"
          :key="image.id"
          :id="image.id"
          :author="image.author"
          :width="image.width"
          :height="image.height"
          :url="image.url"
          :download_url="image.download_url"
        />
      </ul>
      <h3 v-else>No images found :(</h3>
    </Pagination>
  </section>
</template>

<script>
import ImageItem from "@/components/images/ImageItem.vue";
import ImageFilter from "@/components/images/ImageFilter.vue";
import Pagination from "@/components/pagination/Pagination.vue";
import {TOTAL_ITEMS, DEFAULT_PAGE_LIMIT} from "../../service/constants";

export default {
  components: {
    ImageItem,
    ImageFilter,
    Pagination,
  },
  data() {
    return {
      authorName: "",
      isLoading: false,
      error: null,
      totalItems : TOTAL_ITEMS
    };
  },
  computed: {
    filteredImages() {
      const allImages = this.$store.getters["images/images"];
      return allImages.filter((image) => {
        return (
          !this.authorName ||
          image.author.toLowerCase().search(this.authorName.toLowerCase()) !==
            -1
        );
      });
    },
    hasImages() {
      return !this.isLoading && this.$store.getters["images/hasImages"];
    },
  },
  created() {
    const { pageNumber, limit } = this.$route.query;
    if (pageNumber) {
      if(limit){
        this.loadImages(pageNumber, limit);
      }else{
        this.loadImages(pageNumber, DEFAULT_PAGE_LIMIT);
      }
    } else {
      this.loadImages();
    }
  },
  methods: {
    setSearch(event) {
      this.authorName = event.target.value;
    },
    async loadImages(pageNumber, limit) {
      this.isLoading = true;
      const paginatedData = { pageNumber, limit };
      try {
        await this.$store.dispatch("images/loadImages", paginatedData);
      } catch (error) {
        this.error = "Something went wrong !!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    onPaginationClick(pageNumber, limit) {
      this.loadImages(pageNumber, limit);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100%;
  padding: 1em 0.5em 0.5em;
  margin: 1em;
  overflow-y: auto;
  transition: color 0.3s;
  color: $dark;

  &:hover {
    color: $primary;
  }

  @include breakpoint() {
    margin: 0 0.25rem;
    color: $dark;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: $dark;
  }
  &::-webkit-scrollbar-thumb {
    border: 1px solid $dark;
    background-clip: content-box;
    border-radius: 7px;
    box-shadow: inset 0 0 0 10px;
  }
  &::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-corner {
    background-color: $dark;
  }
}

h3 {
  color: $primary;
}

ul {
  display: grid;
  padding: 0;
  margin: 0 0 5em 0;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
</style>

