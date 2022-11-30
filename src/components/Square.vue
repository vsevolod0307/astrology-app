<template>
  <v-input
    v-model="msg"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "Square", 
  props: {
    msg: String
  }
})
export default class Square extends Vue {

}
</script>
