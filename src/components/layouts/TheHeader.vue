<template>
  <header>
    <h1>
      <router-link to="/">
        <img src="../../assets/logo.png" /> Vue Test</router-link
      >
    </h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: $primary;
  align-items: center;

  & a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    border: 1px solid transparent;
  }
}

img {
  width: 3em;
}

h1 {
  margin: 0;

  & a {
    color:$white;
    margin: 0;

    &:hover,
    &:active,
    &.router-link-active {
      border-color: transparent;
    }
  }
}
</style>