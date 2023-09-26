<script setup>
import { MagnifyingGlassIcon, StopIcon } from "@heroicons/vue/24/solid";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { QuranStore } from "../stores/quran";

const { searchQuran } = QuranStore();
const { filteredQuran } = storeToRefs(QuranStore());

const search = ref("");
const isIndex = ref(null);

const router = useRouter();

function toSurah(index) {
  router.push({
    name: "surah",
    params: { index: index },
  });
}

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 800);
});
</script>

<template>
  <div
    v-if="loading"
    class="h-screen w-screen flex justify-center items-center"
  >
    <StopIcon class="w-10 animate-spin text-thirty" />
  </div>
  <div
    v-show="loading == false"
    class="flex flex-col gap-y-6 items-center p-5 w-full max-w-7xl"
  >
    <div
      class="relative flex flex-col gap-y-6 items-center justify-center bg-thirty p-5 md:p-10 rounded-lg w-full"
    >
      <img
        src="../assets/images/quds.jpg"
        class="w-full h-full absolute inset-0 object-cover opacity-20"
      />
      <img src="../assets/images/quran.webp" class="w-52 z-0 md:w-60" />
      <div
        class="bg-white rounded-full w-full lg:w-1/2 p-1 md:p-2 flex flex-row items-center relative"
      >
        <div class="bg-thirty p-1 rounded-full">
          <MagnifyingGlassIcon class="text-white w-7" />
        </div>
        <input
          v-model="search"
          @keyup="searchQuran(search)"
          type="text"
          placeholder="گەڕان بکە بۆ ناوی سوڕەت"
          class="w-full flex-1 text-right bg-transparent focus:outline-none px-3"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-between w-full"
    >
      <div v-for="surah in filteredQuran" :key="surah">
        <div
          @mouseenter="isIndex = surah.index"
          @mouseleave="isIndex = 0"
          @click="toSurah(surah.index)"
          :class="isIndex == surah.index ? 'border-forty' : ''"
          class="flex flex-row items-center justify-between border-[0.5px] rounded-md bg-sixty bg-opacity-80 p-2 hover:cursor-pointer"
        >
          <span
            :class="isIndex == surah.index ? 'text-thirty' : 'text-black'"
            class="items-center text-black rounded-md font-bold"
          >
            {{ surah.versesNumber }}
          </span>
          <div class="flex flex-row items-center gap-x-2">
            <div class="flex flex-col items-end">
              <span class="font-bold text-md">{{ surah.name }}</span>
              <span
                :class="
                  isIndex == surah.index
                    ? 'text-thirty opacity-100'
                    : 'text-black opacity-50'
                "
                class="font-bold text-sm"
                >{{ surah.type == "Medinan" ? "مەدینە" : "مەککە" }}</span
              >
            </div>
            <div
              :class="
                isIndex == surah.index
                  ? '-rotate-45 bg-thirty text-white'
                  : 'rotate-45 bg-forty bg-opacity-25 border-[0.5px] text-black'
              "
              class="flex justify-center items-center h-9 w-9 rounded-md transition-all duration-300"
            >
              <span
                :class="isIndex == surah.index ? 'rotate-45' : '-rotate-45'"
                class="font-bold"
                >{{ surah.index }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
