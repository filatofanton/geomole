<script>

export default {
  data() {
    return {
      token:'empty token',
          }
      
  },
  methods: {    
    
  async getToken(){
      try {
        const response = await fetch('http://82.97.253.52:8080/auth/sign-in', {
          method: 'POST',
          headers: {
            'Username':'user',
            'Password':'53027ec3-6d15-45b0-b5b4-2c666a024188',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                "company_id":32,
                "name":"Ar1",
                "surname":"Ar2",
                "login":"astralightv3@gmail.com",
                "password":"!astralightv3!"
          })
        })

        const jsonData = await response.json()
        this.token = jsonData.token
        sessionStorage.setItem('globalToken', jsonData.token)
      } catch (error) {
        console.error(error)
      }
  },
    
  }
}
</script>

<template>
  <h5 class="mb-2">Admin panel</h5>
  <div class="mb-2">
    <button @click="getToken()" class="btn btn-primary">Получить токен</button>
  </div>
  <div class="col-4">
    <textarea class="form-control" rows="10">{{ token }}</textarea>
  </div>
</template>

