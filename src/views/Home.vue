<template>
  <div class="home">
    <div class="home__wapper container">
      <h1 class="home__title">Конвертация валют</h1>
      <div class="home__form">
        <div class="home__form-row">
          <custom-select placeholder="Конвертировать из"
                         class="home__select"
                         :value="currencyFromSelected"
                         :items="currencies"
                         @change="currencySelected('from', $event)"/>
          <custom-select placeholder="Конвертировать в"
                         class="home__select"
                         :value="currencyToSelected"
                         :items="currencies"
                         @change="currencySelected('to', $event)"/>
        </div>
        <div class="home__form-row">
          <input type="number" class="home__inp"
                 :placeholder="disabled ? 'Валюта не выбрана' : currencyFromSelected.name"
                 :disabled="disabled"
                 v-model="inputValue">

          <button class="home__form-btn"
                  :class="{'home__form-btn_rotate': btnRotate}"
                  title="Поменять валюту"
                  @click="convert">
            <img src="@/assets/icons/logo.png" alt="сurrencies">
          </button>
        </div>
        <div class="home__result" v-if="result">
          {{ result.toLocaleString() }}
          <span>{{ currencyToSelected.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import currencies from "@/api/currencies";
import CustomSelect from "@/components/UI/customSelect";

export default {
  name: 'Home',
  components: {
    CustomSelect
  },
  data() {
    return {
      inputValue: '',
      result: '',
      btnRotate: false,
      currencies: [],
      currencyFromSelected: {},
      currencyToSelected: {},
    }
  },
  computed: {
    disabled() {
      return !this.currencyFromSelected.name && !this.currencyToSelected.name
    }
  },
  mounted() {
    this.getCurrencies()
  },
  methods: {
    async getCurrencies() {
      try {
        const response = await currencies.getCurrenciesList()
        for (let key in response.currencies) {
          this.currencies.push({
            id: key,
            name: key
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    async convert() {
      this.btnRotate = !this.btnRotate
      try {
        const response = await currencies.getCurrencies({
          to: this.currencyToSelected.id,
          from: this.currencyFromSelected.id,
          amount: this.inputValue
        })
        this.result = response.result
      } catch (e) {
        console.log(e)
      }
    },
    currencySelected(type, value) {
      if (type === 'from') {
        this.currencyFromSelected = value
        localStorage.setItem('currencyFrom', this.currencyFromSelected.name)
      }
      if (type === 'to') {
        this.currencyToSelected = value
        localStorage.setItem('currencyTo', this.currencyToSelected.name)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__wapper {
    height: calc(100vh - 100px);
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-size: 33px;
  }

  &__form {
    height: 250px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__select {
    width: 175px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }

  &__form-row {
    margin-top: 10px;
    display: flex;
  }

  &__inp {
    width: 300px;
  }

  &__form-btn {
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 14px;
    background-color: $brand-color;
    border: none;
    outline: none;
    cursor: pointer;

    img {
      width: 33px;
      transition: .4s;
    }

    &_rotate {
      img {
        transform: rotate(-360deg);
      }
    }
  }

  &__result {
    height: 50px;
    padding: 0 20px;
    margin-top: 15px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background-color: $dark-blue-02;

    span {
      margin-left: 5px;
    }
  }
}
</style>
