<template>
  <div v-for="country of countries" v-motion-slide-visible-once-bottom>
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
            <span class="font-extrabold">Population:</span>
            {{ country.population.toLocaleString() }}
          </p>
          <p>
            <span class="font-extrabold">Region:</span>
            {{ country.region }}
          </p>
          <p>
            <span class="font-extrabold">Capital: </span>
            {{ country.capital }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  countries: {
    type: Array,
    required: true,
  },
});
</script>
