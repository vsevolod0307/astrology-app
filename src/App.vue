<template>
  <v-app>
    <v-main>
      <router-link to="/astrology">Astrology</router-link> | 
      <router-link to="/numerology">Numerology</router-link>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "App"
})

export default class App extends Vue {
};
</script>
