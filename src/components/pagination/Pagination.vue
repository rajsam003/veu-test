<template>
  <div>
    <div class="pagination-row">
        <h4>Limit</h4>
      <span v-for="perPage in [5, 15, 30, 50, 100]" :key="perPage">
        <button
          :class="['per-page-button', limit == perPage ? 'active' : '']"
          @click="changePerPage(perPage)"
        >
          {{ perPage }}
        </button>
      </span>
    </div>
    <div class="pagination-row">
        <h4>Page</h4>
      <button
        class="pagination-button"
        @click="onPrevButtonClick"
        :disabled="startIndex == 0"
      >
        &lt;
      </button>
      <span
        v-for="(item, index) in numbersPages.slice(startIndex, endIndex)"
        :key="index"
      >
        <button
          :class="['pagination-button', pageNumber == item + 1 ? 'active' : '']"
          @click="onPageNumberClick(item)"
        >
          {{ item + 1 }}
        </button>
      </span>
      <button
        class="pagination-button"
        @click="onNextButtonClick"
        :disabled="endIndex >= numbersPages[numbersPages.length - 1]"
      >
        &gt;
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: Number(this.$route.query.pageNumber) || 1,
      limit: Number(this.$route.query.limit) || 30,
    };
  },
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
  },
  computed: {
    numbersPages() {
      const numberOfPages = Math.ceil(this.totalItems / this.limit);
      const numberofPagesInArray = Array.from(Array(numberOfPages).keys());
      return numberofPagesInArray;
    },
    startIndex() {
      if (this.$route.query.pageNumber) {
        const { pageNumber } = this.$route.query;
        if(pageNumber%5 === 0){
            return pageNumber-5;
        }
        return Math.floor(Number(pageNumber) / 5) * 5;
      }
      return 0;
    },
    endIndex() {
      if (this.$route.query.pageNumber) {
        return this.startIndex + 5;
      }
      return 5;
    },
  },
  methods: {
    onPageNumberClick(index) {
      this.pageNumber = index + 1;
      this.$emit("pagination-click", this.pageNumber, this.limit);
      this.changePageNumber(this.pageNumber);
    },
    onPrevButtonClick() {
      this.pageNumber = this.pageNumber - 5;
      this.startIndex = this.startIndex - 5;
      this.endIndex = this.endIndex - 5;
      this.$emit("pagination-click", this.pageNumber, this.limit);
      this.changePageNumber(this.pageNumber);
    },
    onNextButtonClick() {
      this.pageNumber = this.startIndex + 6;
      this.startIndex = this.startIndex + 5;
      this.endIndex = this.endIndex + 5;

      this.$emit("pagination-click", this.pageNumber, this.limit);
      this.changePageNumber(this.pageNumber);
    },
    changePageNumber(clikedNumber) {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          pageNumber: clikedNumber,
        },
      });
    },
    changePerPage(newLimit) {
      this.limit = newLimit;
      let newNumberPages = Math.ceil(this.totalItems / newLimit);
      if (newNumberPages <= this.pageNumber) {
          this.pageNumber = newNumberPages;
      }
      this.$emit("pagination-click", this.pageNumber, this.limit);

      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          limit: newLimit,
          pageNumber: this.pageNumber,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-row {
  text-align: center;
  padding: 1em;
}

h4{
    color: $primary;
    margin: 3px;
}

.pagination-button,
.per-page-button {
  padding: 8px;
  margin: 2px;
  border-radius: 30px;
  font-size: 1em;
  padding: 0.75rem 1.5rem;
  background-color: $primary;
  border: 1px solid $primary;
   color: $white;
  cursor: pointer;

  &.active {
    background-color: $primary-backgroud;
    border-color: $primary-backgroud;
    cursor: auto;
  }

  &:focus{
    outline: 0;
  }

  &:disabled {
    background-color: $primary-light-backgroud;
    border-color: $primary-light-backgroud;
    cursor: auto;
  }
}
</style>