<template>
  <div class="horoscope">
    {{ descrHoroscope }}
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class EveryDayHoroscope extends Vue {
  descrHoroscope = "";

  async mounted(): Promise<void> {
    fetch("https://aztro.sameerkumar.website?sign=aries&day=today", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.descrHoroscope = json.description;
      })
      .catch((e) => console.log(e));
  }
}
</script>
