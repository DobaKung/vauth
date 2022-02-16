<!-- Credit: https://stephanwagner.me/only-css-loading-spinner -->

<template>
  <div class="spinner"></div>
</template>

<style scoped>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 24px;
  height: 24px;
  display: block;
}
.spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  margin-top: 2px;
  margin-bottom: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #000;
  animation: spinner 0.6s linear infinite;
}
</style>
