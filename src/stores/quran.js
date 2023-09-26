import { defineStore } from "pinia";
import quran from "../assets/quran.json";

export const QuranStore = defineStore("quran", {
  state: () => ({
    quran: quran,
    filteredQuran: quran,
  }),
  actions: {
    searchQuran(surah) {
      if (surah != "" || surah.length > 0) {
        this.filteredQuran = this.quran.filter(
          (e) => e.name.indexOf(surah) != -1
        );
      } else {
        this.filteredQuran = this.quran;
      }
    },
  },
});
