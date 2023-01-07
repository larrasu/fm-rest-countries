<template>
  <NuxtLink :to="`/country/${country.name}`">
    <div class="country">
      <div class="flag">
        <nuxt-img
          :src="country.flags.png"
          :alt="`Flag of ${country.name}`"
          width="320px"
          height="188px"
          loading="lazy"
        />
      </div>
      <div class="info">
        <h3>{{ country.name }}</h3>
        <p>
          <span class="font-semibold">Population:</span>
          {{ country.population.toLocaleString() }}
        </p>
        <p>
          <span class="font-semibold">Region:</span>
          {{ country.region }}
        </p>
        <p>
          <span class="font-semibold">Capital: </span>
          {{ country.capital }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  country: {
    type: Object,
    required: true,
  },
});
</script>
