<template>
  <div>
    <input
      type="search"
      placeholder="Search your author in this page"
      autocomplete="off"
      @input="onInput"
      v-model="name"
    />
  </div>
</template>

<script>
export default {
  props: {
    authorName: String,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onInput(event) {
      this.$emit("set-search", event);
    },
  },
  watch: {
    authorName(newVal) {
      this.name = newVal;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  padding: 1em 0;
  box-sizing: border-box;

  @include breakpoint {
    padding: 1em 5em;
  }
}

input {
  font-size: 1rem;
  width: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABAlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbdVJFAAAAVXRSTlMA+UO0BvoBsrgI+z2A7FvMQEUMtvM+7Sh/Qesnywc/Y8okyWzYGVyfI2aKzbPXGGAiiRc7X6LqiCZpsfQWXqGHaAv42aDy/MNCyA4N1ryDIdDVgjliZoLccwAAAaxJREFUSMftltdWwkAQhjfEBKR3pKMgvRcRlCbYe8n7v4ozgSOYnaV4pec4d/n//TI7u5M5YeyPxHGyU3IoSsQ1/KhuBbjlK+0rrOXARuDQohnCl19PDM40LvzZdcTbfNHDyBSdTEKmbmX+bBcTT/qCo/BSeb9ezwzQlQrqqqaOJVSdgsqxDofNKAeCWE+dRPCsJBuvJxQwZPI+cAMFyumhQ7yLyaDfqhSipsAyE11iBT1BVxnGPmhychLkV9FZZsCscWoH1JEIaYA549QSqCYR4gEzxqkOUE9FSBTME07FS/aKEC+YFyRyL0LuSOQHG3NtKj/FqUNQuyKkCGaOvMqKCJmC2ebUKjaMmyZMYCnnvF7GD5JuS6yzTxgBbPExhaTRaVGOD9MTYyus0L0PkfeDFeT6340f8uUzXWUWN6D0vo+LNObQXvYFZ2nXJ1DsZuWsXIv5Z1nPaJmGJ+T1hjzF6XJmChmnXxOFLy5g6rJxqfy4KQ+zma3L9Uq/xfbMGxnWrM1iEUmKpHJtvUu2YYzxzzAW9y0YJ9s1z8EuvxA6sxOhMzsSUI+T/fL4BGlFkbhqWRgtAAAAAElFTkSuQmCC)
    no-repeat scroll 7px 7px;
  background-position: right 15px center;
  background-size: 20px;
  border: 1px solid $primary;
  box-shadow: 0 5px 15px 0 $primary-light ;
  border-radius: 10px;
  padding: 15px 25px;
  &:focus {
    outline: none;
    background: none;
  }
}
</style>