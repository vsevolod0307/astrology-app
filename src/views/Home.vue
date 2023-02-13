<template>
  <h2>Welcome to My site</h2>
  <h3>Ежедневный гороскоп</h3>
  <div v-for="item in items" :key="item.id">{{ cons(item) }}</div>
  <every-day-horoscope />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EveryDayHoroscope from "@/components/EveryDayHoroscope.vue";
@Options({
  name: "Home",
  components: { EveryDayHoroscope },
})
export default class Home extends Vue {
  get items(): any {
    return [
      { id: Math.random(), text: "text" },
      { id: Math.random(), text: "text" },
    ];
  }

  cons(i: any) {
    console.log(i);
  }
}
</script>
