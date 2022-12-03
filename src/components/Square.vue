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
    <v-row>
      <div class="square_PF">
        <table>
          <tr>
            <td>
              <span>сила воли, характер</span>
              {{ numbersChar.one }}
            </td>
            <td>
              <span>энергия, харизма</span>
              {{ numbersChar.two }}
            </td>
            <td>
              <span>познание, творчество</span>
              {{ numbersChar.three }}
            </td>
          </tr>
          <tr>
            <td>
              {{ numbersChar.four }}
            </td>
            <td>
              {{ numbersChar.five }}
            </td>
            <td>
              {{ numbersChar.six }}
            </td>
          </tr>
          <tr>
            <td>
              {{ numbersChar.seven }}
            </td>
            <td>
              {{ numbersChar.eight }}
            </td>
            <td>
              {{ numbersChar.nine }}
            </td>
          </tr>
        </table>
      </div>
    </v-row>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Dates } from "@/types/main"
@Options({
  name: "Square",
})
export default class Square extends Vue {
  date = {
    day: "",
    month: "",
    year: ""
  }
  numbersChar = {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: ""
  }

  get items(): Dates {
    return {
      days: (new Array(31)).fill(1).map((e, i) => i+1),
      months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      years: (new Array(60)).fill(1).map((e, i) => i+(new Date().getFullYear() - 59))
    }
  }

  calculateDate(): void {
    console.log(this.date)
    const indexMonth = this.items.months.findIndex(month => month === this.date.month)
    const date = this.date.day + String((indexMonth + 1)) + this.date.year
    const oneStringPF = date.split("").map(i => Number(i))
    const oneNumber = oneStringPF.reduce((a, b) => a + b, 0)
    const twoNumber = String(oneNumber).split("").reduce((a, b) => Number(a) + Number(b), 0)
    const threeNumber = oneNumber - Number(String(oneStringPF)[0]) * 2
    const fourNumber = String(threeNumber).split("").reduce((a, b) => Number(a) + Number(b), 0)
    const twoStringPF = `${oneNumber}${twoNumber}${threeNumber}${fourNumber}`.split("").map(i => Number(i))
    const numbersChar = [...oneStringPF, ...twoStringPF]
    numbersChar.forEach(num => {
      switch(num) {
        case 1:
          return this.numbersChar.one += num
        case 2:
          return this.numbersChar.two += num
        case 3:
          return this.numbersChar.three += num
        case 4:
          return this.numbersChar.four += num
        case 5:
          return this.numbersChar.five += num
        case 6:
          return this.numbersChar.six += num
        case 7:
          return this.numbersChar.seven += num
        case 8:
          return this.numbersChar.eight += num
        case 9:
          return this.numbersChar.nine += num
      }
    })
    this.numbersChar.one
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
.square_PF {
  table {
    border-collapse: collapse;
  }
  td {
    width: 160px;
    height: 100px;
    border: 2px solid gray;
    text-align: center;
  }
}
</style>
