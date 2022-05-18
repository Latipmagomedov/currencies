<template>
  <div class="custom-select">
    <div class="custom-select__main" @click="open = !open">
      <p class="custom-select__main-title" v-if="!value.id">{{ placeholder }}</p>
      <p class="custom-select__main-title" v-if="value.id">{{ value.name }}</p>
      <img src="@/assets/icons/arrow-down.svg" class="custom-select__arrow"
           :class="{'custom-select__arrow_active': open}" alt="arrow">
    </div>
    <div class="custom-select__options" v-if="open">
      <div class="custom-select__option"
           v-for="item in items"
           :key="item.id"
      @click="selectItem(item)">{{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    placeholder: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    value: Object
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('change', item)
      this.open = false
    }
  }
}
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;

  &__main {
    width: 100%;
    height: 30px;
    padding: 0 10px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $dark-blue-01;
    border: 1px solid $dark-blue-02;
    cursor: pointer;
  }

  &__main-title {
    font-size: 14px;
  }

  &__arrow {
    width: 20px;
    transition: .3s;

    &_active {
      transform: rotate(-180deg);
    }
  }

  &__options {
    position: absolute;
    top: 33px;
    width: 100%;
    padding: 0 10px;
    border-radius: 7px;
    background-color: $dark-blue-01;
    max-height: 300px;
    overflow-y: scroll;
    z-index: 9;

    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &__option {
    padding: 5px 0;
    font-size: 16px;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 1px solid $dark-blue-02;
    }
  }
}
</style>
