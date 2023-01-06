<template>
  <main>
    <div>
      <button @click="router.back()" class="btn-back">
        <Icon name="heroicons:arrow-left" />
        <p>Back</p>
      </button>
      <div class="detail" v-for="detail of country">
        <div class="flag">
          <nuxt-img
            :src="detail.flags.png"
            :alt="`Flag of ${detail.name}`"
            width="100%"
          />
        </div>
        <div class="content">
          <h1>{{ detail.name }}</h1>
          <div class="info">
            <div>
              <p>Native Name: {{ detail.nativeName }}</p>
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
