<script>
export default {
  emits:['showHeader'],
  props: {
    showHeader: Boolean,
  },
  data() {
    return {
    }
  },
  methods: {
    logout() {
      if(this.showHeader){
        this.$emit('logout', false)
      }
    },
    showToken() {
      console.log(localStorage.getItem('globalToken'))
    }

  }
}
</script>

<template>
  <header>
    <div class="container-fluid m-0 p-0">
      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" alt="Bootstrap" width="30" height="30">
          </a>
          <a class="navbar-brand" href="#">Geomole</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" @click.prevent="$router.push('/projects')">Проекты</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Поле
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="points.html" @click.prevent="$router.push('/points')">Список выработок</a></li>
                  <li><a class="dropdown-item" href="#">Статическое зондирование</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Лаборатория
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="samples.html" @click.prevent="$router.push('/samples')">Список образцов грунтов и их свойств</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Камералка
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="eges.html" @click.prevent="$router.push('/eges')">Список ИГЭ</a></li>
                  <li><a class="dropdown-item" href="layers.html" @click.prevent="$router.push('/layers')">Послойное описание</a></li>
                  <li><a class="dropdown-item" href="#" @click.prevent="$router.push('/physicalcharacteristicsofsoils')">Состав и физические характеристики грунтов</a></li>
                </ul>
              </li>
            </ul>
            <ul class="nav navbar-nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" @click.prevent="$router.push('/employee')">
                  <img src="@/assets/user.png" width="24px" alt="Image alt text">
                  Кабинет
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" @click.prevent="$router.push('/') && logout()">
                  <img src="@/assets/exit.png" width="24px" alt="Image alt text">
                  Выход
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>

</style>