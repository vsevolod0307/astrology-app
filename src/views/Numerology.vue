<template>
  <div class="astrology">
    <h1>Нумерология</h1>
    <square msg="введите значение для рассчёта"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Square from "@/components/Square.vue"

@Options({
  name: "Numerology",
  components: { Square }
})

export default class Numerology extends Vue {
  
}
</script>