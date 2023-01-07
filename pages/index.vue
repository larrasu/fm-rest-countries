<template>
  <main>
    <div class="filtering">
      <div class="search">
        <Icon name="heroicons:magnifying-glass" />
        <input
          type="text"
          v-model="search"
          placeholder="Search for a country..."
        />
      </div>
      <div class="filter">
        <Listbox v-model="region" as="div" class="filter-box">
          <ListboxButton class="filter-button">
            <p>Filter by Region</p>
            <Icon name="heroicons:chevron-down-solid" />
          </ListboxButton>
          <ListboxOptions class="filter-options">
            <ListboxOption
              v-for="(region, index) of filters"
              :key="index"
              :value="region"
              class="filter-option"
            >
              {{ region }}
            </ListboxOption>
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
    <!-- <div class="countries"> -->
    <TransitionGroup name="fade" tag="div" class="countries">
      <LazyCountry
        v-for="(country, index) in filteredCountries"
        :key="index"
        :country="country"
      />
    </TransitionGroup>
    <!-- </div> -->
  </main>
</template>

<script setup>
const search = ref("");
const region = ref("");
const filters = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const countries = ref(useCountries());
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

<style>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
