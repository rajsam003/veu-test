<template>
    <div class="image-caption">
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
.image-caption{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3px;
  z-index: 1;
  opacity: 0;
  display: flex;
  height: 2.75em;
  align-items: center;
  text-overflow: ellipsis;
  font-weight: bold;
  text-align: center;
  color:$white;
  justify-content: center;
  padding: 0 0.5em;
  border-top: 0;
  background-color: $primary;
  border-radius: 0px 0px 3px 3px;
}
</style>