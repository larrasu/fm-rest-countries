<template>
  <div>
    <div class="search">
      <Icon name="heroicons:magnifying-glass" />
      <input type="text" placeholder="Search for a country..." />
    </div>
    <div class="filter"></div>
    <div class="countries">
      <div class="country" v-for="country of countries">
        <div class="flag">
          <img
            :src="country.flags.png"
            :alt="`Flag of ${country.name.common}`"
          />
        </div>
        <div class="info">
          <h3>{{ country.name.common }}</h3>
          <p>
            <span>Population:</span>
            {{ country.population }}
          </p>
          <p>
            <span>Region:</span>
            {{ country.region }}
          </p>
          <p>
            <span>Capital:</span>
            {{ country.capital }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: countries } = await useFetch(
  "https://restcountries.com/v3.1/all"
);
</script>
