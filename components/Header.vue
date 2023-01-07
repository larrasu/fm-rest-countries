<template>
  <header>
    <div class="navbar">
      <NuxtLink to="/" class="font-extrabold text-2xl"
        >Where in the world?</NuxtLink
      >
      <div>
        <button @click="toggleDark()" class="flex items-center gap-2">
          <Icon v-if="isDark" name="heroicons:moon" />
          <Icon v-else name="heroicons:moon-solid" />
          <p>Dark Mode</p>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
