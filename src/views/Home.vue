<template>
  <h2>Welcome to My site</h2>
  <h3>Ежедневный гороскоп</h3>
  <every-day-horoscope/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EveryDayHoroscope from "@/components/EveryDayHoroscope.vue"
@Options({
  name: "Home",
  components: { EveryDayHoroscope }
})

export default class Home extends Vue {
  
};
</script>
