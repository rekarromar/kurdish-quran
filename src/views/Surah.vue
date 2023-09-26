<script setup>
import { ChevronLeftIcon, StopIcon } from "@heroicons/vue/24/solid";
import { storeToRefs } from "pinia";
import { onMounted, onUpdated, ref } from "vue";
import { QuranStore } from "../stores/quran";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
const route = useRoute();

const { quran } = storeToRefs(QuranStore());

const search = ref("");
const surah = ref([]);
const loading = ref(true);

function convertToThreeDigits(number) {
  let numberStr = number.toString();
  while (numberStr.length < 3) {
    numberStr = "0" + numberStr;
  }
  return numberStr;
}

function englishToArabicNumbers(englishNumber) {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return englishNumber.replace(/\d/g, (digit) => arabicNumerals[digit]);
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 800);
  surah.value = quran.value.filter((e) => e.index == route.params.index);
});
</script>

<template>
  <div
    v-if="loading"
    class="h-screen w-screen flex justify-center items-center"
  >
    <StopIcon class="animate-spin w-10 text-thirty" />
  </div>

  <div
    v-if="loading == false"
    class="flex flex-col items-center w-full max-w-7xl"
  >
    <!-- appbar -->
    <div
      class="flex flex-row justify-between items-center w-full p-3 mb-6 bg-white shadow-md"
    >
      <ChevronLeftIcon
        @click="$router.back()"
        class="text-center cursor-pointer w-10 hover:bg-thirty hover:text-white rounded-full p-1 transition-all duration-150"
      />

      <h1 class="font-surahname text-5xl text-center text-thirty">
        {{ convertToThreeDigits(surah[0].index) }}
      </h1>

      <div class="flex flex-col items-end">
        <h1 class="font-rabar21 font-bold text-sm text-center">
          {{ surah[0].index }} ڕیزبەندی
        </h1>
        <h1 class="font-rabar21 font-bold text-sm text-center">
          {{ surah[0].versesNumber }} ژمارەی ئایەت
        </h1>
      </div>
    </div>

    <!-- verses -->

    <div class="flex flex-col items-end w-full">
      <div
        class="text-right leading-loose border-b-[0.1px] py-7 px-3 w-full"
        v-for="ayah in surah[0].verses"
        :key="ayah"
      >
        <h1 class="font-quran text-3xl">
          {{ ayah.arabic_text }} {{ englishToArabicNumbers(ayah.aya) }}
        </h1>

        <h1 class="font-rabar21 text-md font-bold mt-4 tracking-wide">
          {{ ayah.translation }}
        </h1>
      </div>
    </div>
  </div>
</template>
