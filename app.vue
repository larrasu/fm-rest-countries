<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
