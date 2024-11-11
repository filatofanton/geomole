<script>
export default {
  data() {
    return {
      users: [
        {id: 1, name: 'Иван', surname: 'Иванов', email: '1@1.1', company: '1', status: 'active', finish: '20.12.2024', subscription: '', subscriptions: [{id:1,period:'3',until:'20.12.2024',status:'active'}, {id:2,until:'01.11.2024',status:'ended'}, {id:3,until:'01.11.2024',status:'rejected'}]},
        {id: 2, name: 'Петр', surname: 'Петров', email: '2@2.2', company: '2', status: 'new', finish: '', subscription: '1', subscriptions: [{id:1,period:'1',until:'20.12.2024',status:'new'}]},
        {id: 3, name: 'Сидор', surname: 'Сидоров', email: '3@3.3', company: '1', status: 'active', finish: '01.03.2025', subscription: '', subscriptions: [{id:1,period:'3',until:'25.11.2024',status:'active'}, {id:2,until:'01.11.2024',status:'ended'}]},
        {id: 4, name: 'Василий', surname: 'Васильев', email: '4@4.4', company: '4', status: 'active', finish: '10.11.2024', subscription: '', subscriptions:[{id:1,period:'1',until:'25.12.2024',status:'active'}]},
        {id: 5, name: 'Петр1', surname: 'Петров', email: '22@2.2', company: '4', status: 'new', finish: '', subscription: '12', subscriptions: [{id:1,period:'12',until:'20.12.2024',status:'new'}]},
      ],
      userSubscriptions: null
    }
  },
  methods: {
    selectUser(user) {
      this.userSubscriptions = user.subscriptions ?? null
      console.log(this.userSubscriptions)
    },
    active(userSubscription) {
      userSubscription.status = 'active'
      console.log(userSubscription)
    },
    rejected(userSubscription) {
      userSubscription.status = 'rejected'
      console.log(userSubscription)
    }
  }
}
</script>

<template>
<h4 class="mt-3">Кабинет администратора</h4>
<div class="row">
  <div class="col-6">
    <h5>Список пользователей:</h5>
    <table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Почта</th>
          <th>Компания</th>
          <th>Стутус</th>
          <th>Подписка (токен) до</th>
          <th>Запрос подписки</th>
          <th>Все подписки</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.status }}</td>
          <td>{{ user.finish }}</td>
          <td>{{ user.subscription }}</td>
          <td>
            <button @click="selectUser(user)" class="btn btn-sm btn-secondary">
              Выбрать
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-6">
    <h5>Подписки пользователя (токены):</h5>
    <table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>Период</th>
          <th>Срок действия</th>
          <th>Статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="userSubscription in userSubscriptions" :key="userSubscription.id">
          <td>{{ userSubscription.id }}</td>
          <td>{{ userSubscription.period }}</td>
          <td>{{ userSubscription.until }}</td>
          <td>{{ userSubscription.status }}</td>
          <td>
            <div class="d-flex">
              <button class="btn btn-sm btn-primary me-2" @click="active(userSubscription)">Activate</button>
              <button class="btn btn-sm btn-danger" @click="rejected(userSubscription)">Rejected</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<style>

</style>