<script>
export default {
  emits:['token', 'showHeader'],
  data() {
    return {
      email: 'filatofanton@gmail.com',
      password: '123456789',
      token: '',
      err : null
    }
  },
  methods: {
    async login() {
      
      const url = 'http://82.97.253.52:8080/auth/sign-in'
      
      const body = { 
        "login": this.email,
        "password": this.password,
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        const responseData = await response.json()
        this.token = responseData.token
        this.$emit('token', responseData.token)
        this.$emit('showHeader', true)
        localStorage.setItem('currentSimpleTokenForUser', responseData.token)
        // console.log(responseData)ь
        this.$router.push('/employee')
      } catch (e) {
        this.err = e.message
        console.error(e)
      }

    }
  }
}
</script>

<template>
<div class="container d-flex justify-content-center align-items-center" style="height: 80vh">
    <div class="card" style="width: 300px">
      <div class="card-body">
        <h5 class="text-center mb-3">Авторизация</h5>
        <form @submit.prevent="login">
          <div class="mb-1">
            <label for="email" class="form-label">Почта</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="email@domain.com" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input v-model="password" type="password" class="form-control" id="password" required>
          </div>
          <button type="submit" class="btn custom-btn w-100">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .custom-btn {
    background-image: linear-gradient(to right, #79e857, #3498DB);
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .custom-btn:hover {
    background-image: linear-gradient(to right, #79e857, #56B3FA);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    color: #ffffff;
  }
</style>