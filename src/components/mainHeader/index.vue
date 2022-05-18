<template>
  <header class="header">
    <div class="header__wrapper container">
      <router-link to="/" class="header__logo">
        <img src="@/assets/icons/logo.png" class="header__logo-image" alt="logo">
      </router-link>

      <nav class="header__nav">
        <router-link to="/" class="header__link">Конвертация</router-link>
        <router-link to="/currencies" class="header__link">Курсы валют</router-link>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: "MainHeader",
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;

  &__wrapper {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $brand-color;
  }

  &__select {
    width: 240px;
  }

  &__logo-image {
    width: 37px;
  }

  &__link {
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    &:not(:first-child) {
      margin-left: 40px;
    }
  }

  &__link.router-link-exact-active {
    color: $brand-color;
  }
}
</style>
