<template>
  <main>
    <div>
      <NuxtLink to="/" class="btn-back">
        <Icon name="heroicons:arrow-left-20-solid" class="text-xl" />
        <p>Back</p>
      </NuxtLink>
      <div class="detail" v-for="detail of country">
        <div class="flag">
          <nuxt-img
            :src="detail.flags.png"
            :alt="`Flag of ${detail.name}`"
            width="100%"
            loading="lazy"
          />
        </div>
        <div class="content">
          <h1 class="text-3xl font-extrabold">{{ detail.name }}</h1>
          <div class="info">
            <div>
              <p><span>Native Name:</span> {{ detail.nativeName }}</p>
              <p>
                <span>Population:</span>
                {{ detail.population.toLocaleString() }}
              </p>
              <p><span>Region:</span> {{ detail.region }}</p>
              <p><span>Sub Region:</span> {{ detail.subregion }}</p>
              <p><span>Capital:</span> {{ detail.capital }}</p>
            </div>
            <div>
              <p>
                <span>Top Level Domain:</span> {{ detail.topLevelDomain[0] }}
              </p>
              <p><span>Currencies:</span> {{ detail.currencies[0].name }}</p>
              <p>
                <span>Languages: </span>
                <span v-for="(language, index) of detail.languages">{{
                  language.name +
                  (index < detail.languages.length - 1 ? ", " : "")
                }}</span>
              </p>
            </div>
            <div class="col-span-full" v-show="detail.borders">
              <h2 class="text-xl font-extrabold">Border Countries:</h2>
              <div class="border-countries">
                <NuxtLink
                  v-for="border of detail.borders"
                  :key="border"
                  :to="`/country/${
                    countries.filter(
                      (country) => country.alpha3Code === border
                    )[0].name
                  }`"
                  class="border-country"
                >
                  {{
                    countries.filter(
                      (country) => country.alpha3Code === border
                    )[0].name
                  }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const countries = useCountries();
const country = computed(() => {
  return countries.value.filter((country) => {
    return country.name === route.params.name;
  });
});
</script>
