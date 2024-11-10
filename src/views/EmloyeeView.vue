<script>
export default {
  data() {
    return {
      user: null,
      id: null,
      email: '',
      password: '',
      token: '',
      err : null,
      subscription: [
        {id: 1, token: 'bfgbfgbfgbfgbfgbf', rate: '3 мес.', dateEnd: '01.02.2025'},
        {id: 2, token: 'fgbfgbfgbfgbfgbfgbfg', rate: '1 мес.', dateEnd: '01.11.2024'},
        {id: 3, token: 'kyukyukyukyukyukyuky', rate: '12 мес.', dateEnd: '01.05.2024'},
        {id: 4, token: 'l9lu9luululiluiluilui', rate: '1 мес.', dateEnd: '01.02.2024'},
      ],
    }
  },

  mounted() {
    this.token = localStorage.getItem('currentSimpleTokenForUser')
    this.getUserDataByToken()
  },

  methods: {
    async getUserDataByToken() {
      try {
        const response = await fetch('http://82.97.253.52:8080/registered/api/employee/getFull/', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Content-Type': 'application/json'
          }
        })
        const jsonData = await response.json()
        this.user = jsonData
        console.log(jsonData)
      } catch (error) {
        console.error(error)
      }
    },
    async subscriptionRequest(months) {
      try {
        const response = await fetch('http://82.97.253.52:8080/registered/api/token/registerNew/', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + this.token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "number_of_month": months
          })
        })
        const jsonData = await response.json()
        console.log(jsonData)
      } catch (error) {
        console.error(error)
      }
    }
  },

}
</script>

<template>
  <h4 class="mt-3">Кабинет пользователя</h4>
  <div class="row">
    <div class="col-5">
      <div class="d-flex">
        <h5>Данные пользователя:</h5>
        <!-- <button 
        class="btn btn-primary mb-2 btn-sm" 
        @click="getUserDataByToken()">
        Получить данные
        </button> -->
      </div>
      <table class="table table-sm table-bordered">
        <tbody>
          <tr>
            <td>Токен (токен сессии)</td>
            <td><textarea v-model="token" class="form-control" rows="5" readonly disabled></textarea></td>
            <td></td>
          </tr>
          <tr>
            <td>id</td>
            <td>{{ user?.id }}</td>
            <td><button class="btn btn-secondary btn-sm">Изменить</button></td>
          </tr>
          <tr>
            <td>login (email)</td>
            <td> {{ user?.login }} </td>
            <td><button class="btn btn-secondary btn-sm">Изменить</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-5">
      <h5>Подписки (временные токены):</h5>
      <table class="table table-sm table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>Токен</th>
            <th>Срок действия</th>
            <th>Дата окончания</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sub in subscription" :key="sub.id">
            <td>{{ sub.id }}</td>
            <td>{{ sub.token }}</td>
            <td>{{ sub.rate }}</td>
            <td>{{ sub.dateEnd }}</td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>
  <h5>Оформить новую подписку:</h5>
  <div class="row">
    <div class="col-2">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Подписка на 1 мес.</h5>
          <p class="card-text">Включает все возможности программы</p>
          <h5 class="card-text mb-3">6 000 руб.-</h5>
          <a @click.prevent="subscriptionRequest(1)" href="#" class="btn btn-primary">Получить доступ</a>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Подписка на 3 мес.</h5>
          <p class="card-text">Включает все возможности программы</p>
          <h5 class="card-text mb-3">15 000 руб.-</h5>
          <a @click.prevent="subscriptionRequest(3)" href="#" class="btn btn-primary">Получить доступ</a>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Подписка на 1 год</h5>
          <p class="card-text">Включает все возможности программы</p>
          <h5 class="card-text mb-3">45 000 руб.-</h5>
          <a @click.prevent="subscriptionRequest(12)" href="#" class="btn btn-primary">Получить доступ</a>
        </div>
      </div>
    </div>
  </div>
</template>

