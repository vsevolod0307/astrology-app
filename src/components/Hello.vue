<template>
  <p>{{ $t("hello") }}</p>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Hello"
})
export default class Hello extends Vue {
  mounted(): void {
    console.log("mounted")
  }
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  }
}
</i18n>
