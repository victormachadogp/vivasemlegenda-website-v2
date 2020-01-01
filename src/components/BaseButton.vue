<template>
  <button class="btn" :class="{ white: light }">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.white {
  color: #0095f5 !important;
  background-color: #ffffff !important;
}
button {
  color: #ffffff;
  background-image: linear-gradient(
    to right,
    #0095f5,
    #0095f5,
    #50bafe
  ) !important;
  border-color: #707070 !important;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
  font-weight: 500;
}

.btn {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  max-width: 100%;
  outline: 0;
  text-decoration: none;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  vertical-align: middle;
  white-space: nowrap;
}
</style>