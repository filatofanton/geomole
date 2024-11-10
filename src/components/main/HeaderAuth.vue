<script>
  export default {
    emits:['showHeader'],
    props: {
      showHeader: Boolean,
    },
    methods: {
      login() {
        if (!this.showHeader) {
          this.$emit('login', true)
        }
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
                <a class="nav-link active" aria-current="page" href="#" @click.prevent="$router.push('/')">Документация</a>
              </li>
            </ul>
            <ul class="nav navbar-nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" @click.prevent="$router.push('/login')">
                  <img src="@/assets/login.png" width="24px" alt="Image alt text">
                  Вход
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" @click.prevent="$router.push('/register')">
                  <img src="@/assets/register.png" width="24px" alt="Image alt text">
                  Регистрация
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" @click.prevent="$router.push('/admin')">
                  <img src="@/assets/admin2.png" width="24px" alt="Image alt text">
                  Админка
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