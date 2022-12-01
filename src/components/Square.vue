<template>
  <!-- <div> -->
    <v-row class="d-flex">
      <v-col cols="1">
        <v-select
          density="compact"
          variant="outlined"
          label="День"
          :items="items.days"
          v-model="date.day"
        />
      </v-col>
      <v-col cols="2">
        <v-select
          density="compact"
          variant="outlined"
          label="Месяц"
          :items="items.months"
          v-model="date.month"
        />
      </v-col>
      <v-col cols="1">
        <v-select
          density="compact"
          variant="outlined"
          label="Год"
          :items="items.years"
          v-model="date.year"
        />
      </v-col>
      <v-col>
        <v-btn
          height="40"
          variant="outlined"
          @click="calculateDate"
        >
          Рассчитать дату
        </v-btn>
      </v-col>
    </v-row>
    <!-- <v-row>
      <select>
        <option v-for="num in days" :key="num">
          {{ num }}
        </option>
      </select>
    </v-row> -->
  <!-- </div> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Dates } from "@/types/main"
@Options({
  name: "Square", 
  props: {
    msg: String
  }
})
export default class Square extends Vue {
  date = {
    day: "",
    month: "",
    year: ""
  }

  get items(): Dates {
    return {
      days: (new Array(31)).fill(1).map((e, i) => i+1),
      months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      years: (new Array(60)).fill(1).map((e, i) => i+(new Date().getFullYear() - 59))
    }
  }

  calculateDate() {
    console.log(this.date)
  }
}
</script>

<style lang="scss" scoped>
.v-select::v-deep {
  .v-field {
    padding-right: 2px !important;
    .v-field__input {
      padding-left: 8px !important;
    }
    .v-label {
      margin-left: 8px !important;
      max-width: max-content;
    }
  }
}
</style>
