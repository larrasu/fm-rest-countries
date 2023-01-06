<template>
  <main>
    <div class="filtering">
      <div class="search">
        <Icon name="heroicons:magnifying-glass" />
        <input
          type="text"
          v-model="search"
          @keyup="searchCountry()"
          placeholder="Search for a country..."
        />
      </div>
      <div class="filter">
        <Listbox v-model="region">
          <ListboxButton>Filter by Region</ListboxButton>
          <ListboxOptions>
            <ListboxOption
              v-for="(region, index) of filters"
              :key="index"
              :value="region"
            >
              {{ region }}
            </ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
    <div class="countries">
      <!-- <TransitionGroup name="list" tag="div" class="countries"> -->
      <LazyCountry :countries="filteredCountries" />
      <!-- </TransitionGroup> -->
    </div>
  </main>
</template>

<script setup>
const search = ref("");
const region = ref("");
const filters = ["Africa", "America", "Asia", "Europe", "Oceania"];
const countries = useCountries();
const filteredCountries = computed(() => {
  if (search.value === "" && region.value === "") {
    return countries.value;
  } else if (search.value !== "" && region.value === "") {
    return countries.value.filter((country) => {
      return country.name.toLowerCase().includes(search.value.toLowerCase());
    });
  } else if (search.value === "" && region.value !== "") {
    return countries.value.filter((country) => {
      return country.region === region.value;
    });
  } else {
    return countries.value.filter((country) => {
      return (
        country.name.toLowerCase().includes(search.value.toLowerCase()) &&
        country.region === region.value
      );
    });
  }
});
</script>
