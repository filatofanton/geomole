<script>
export default {
  data() {
    return {
      users: [
        {id: 1, name: 'Иван', surname: 'Иванов', email: '1@1.1', company: '1', status: 'active', finish: '20.12.2024', subscription: ''},
        {id: 2, name: 'Петр', surname: 'Петров', email: '2@2.2', company: '2', status: 'new', finish: '', subscription: '1'},
        {id: 3, name: 'Сидор', surname: 'Сидоров', email: '3@3.3', company: '1', status: 'active', finish: '01.03.2025', subscription: ''},
        {id: 4, name: 'Василий', surname: 'Васильев', email: '4@4.4', company: '4', status: 'active', finish: '10.11.2024', subscription: ''},
        {id: 5, name: 'Павел', surname: 'Павлов', email: '5@5.5', company: '5', status: 'new', finish: '', subscription: '12'},
        {id: 6, name: 'Александр', surname: 'Александров', email: '6@6.6', company: '2', status: 'new', finish: '', subscription: '3'},
        {id: 7, name: 'Максим', surname: 'Максимов', email: '7@7.7', company: '4', status: 'new', finish: '', subscription: '3'},
        {id: 8, name: 'Дмитрий', surname: 'Дмитриев', email: '8@8.8', company: '5', status: 'new', finish: '', subscription: '12'},
        {id: 9, name: 'Николай', surname: 'Николаев', email: '9@9.9', company: '7', status: 'new', finish: '', subscription: '1'},
        {id: 10, name: 'Михаил', surname: 'Михаилов', email: '10@10.10', company: '7', status: 'new', finish: '', subscription: '3'},
      ],
      user: null
    }
  },
  methods: {
    selectUser(user) {
      this.user = user
      console.log(this.user)
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
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Почта</th>
          <th>Компания</th>
          <th>Стутус</th>
          <th>Подписка до</th>
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
            <button class="btn btn-sm btn-secondary">
              Выбрать
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<style>

</style>