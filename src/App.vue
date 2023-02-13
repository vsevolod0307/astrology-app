<template>
  <v-app>
    <v-main>
      <nav class="d-flex justify-center">
        <router-link class="main_link" to="/astrology">Astrology</router-link>
        <router-link class="main_link" to="/numerology">Numerology</router-link>
      </nav>
      <v-autocomplete :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]" />
      <hello/>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Hello from "@/components/Hello.vue";
import Square from "@/components/Square.vue";
import "@/scss/index.scss";

@Options({
  name: "App",
  components: { Hello, Square }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.main_link {
  text-decoration: none;
  padding: 0 8px;
  border-right: 1px solid gray;
  width: 100px;
  text-align: center;
  &:first-child {
    border-left: 1px solid gray;
  }
}
</style>
