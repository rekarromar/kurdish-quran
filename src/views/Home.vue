<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { QuranStore } from "../stores/quran";

const { searchQuran } = QuranStore();
const { filteredQuran } = storeToRefs(QuranStore());

const search = ref("");
</script>

<template>
  <div class="flex flex-col items-center p-5 lg:p-10 w-full max-w-6xl">
    <img src="../assets/images/quran.png" class="w-60 flex justify-center" />

    <div
      class="bg-white rounded-full w-1/2 mt-10 mb-5 px-3 py-1 flex flex-row items-center"
    >
      <div class="bg-forty bg-opacity-50 p-1 rounded-md">
        <MagnifyingGlassIcon class="text-white w-7" />
      </div>
      <input
        v-model="search"
        @keyup="searchQuran(search)"
        type="text"
        placeholder="گەڕان بۆ سوڕەت"
        class="w-full flex-1 text-right focus:outline-none px-3 placeholder:text-black placeholder:opacity-75"
      />
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-between w-full"
    >
      <div v-for="surah in filteredQuran" :key="surah">
        <div
          class="flex flex-row items-center justify-between rounded-md bg-sixty bg-opacity-80 p-2 hover:scale-95 hover:cursor-pointer"
        >
          <div
            class="bg-fify bg-opacity-50 flex justify-center items-center h-9 w-9 text-forty rounded-md"
          >
            {{ surah.versesNumber }}
          </div>
          <div class="text-black flex flex-row items-center gap-x-2">
            <div class="flex flex-col items-end">
              <span>{{ surah.name }}</span>
              <span class="opacity-50">{{
                surah.type == "Medinan" ? "مەدینە" : "مەککە"
              }}</span>
            </div>
            <div
              class="bg-forty bg-opacity-50 flex justify-center items-center h-9 w-9 text-white rounded-md"
            >
              {{ surah.index }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
