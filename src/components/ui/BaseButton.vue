<template>
  <button>
    <slot/>
  </button>
</template>

<style lang="scss" scoped>

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: $primary;
  border: 1px solid $primary;
  color: $white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;

  &:hover,
  &:active,
  &:focus{
    background-color: $primary-backgroud;
    border-color: $primary-backgroud;
    outline: 0;
  }
}
</style>