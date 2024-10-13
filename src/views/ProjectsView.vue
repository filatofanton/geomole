<script>

export default {
  data() {
    return {
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJpZCI6MzMsImxvZ2luIjoiYXN0cmFsaWdodHYzQGdtYWlsLmNvbSIsInN1YiI6ImFzdHJhbGlnaHR2M0BnbWFpbC5jb20iLCJpYXQiOjE3Mjg4MzM4OTQsImV4cCI6MTcyODk3Nzg5NH0.plS74T52oywfsyyVV9MvDwg6c0aIlz-4abaeNDTXAsU',
      projects: [
        {id:1, number: '100-24', project_name: 'Project 1', description: 'Lorem ipsum', latitude: 59.57, longitude: 30.19},
      ],
      projectId: null,
      projectName: 'New project',
      latitude: 59.57,
      longitude: 30.19,
      isActive: false,

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
    selectProject(id) {
      this.getSingleProject(id)
      sessionStorage.setItem('currentProjectId', this.projectId)
      sessionStorage.setItem('currentProjectName', this.projectId)
    },
    async getAllProjects(employeeId = 3) {
      try {
        let token = this.token
        const response = await fetch('http://82.97.253.52:8080/api/project/getByCreator/' + employeeId, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        })
        const jsonData = await response.json()
        this.projects = jsonData
        return jsonData
      } catch (error) {
        console.error(error)
      }
    },
    async deleteProject(id){
      try {
        let token = this.token
        const response = await fetch('http://82.97.253.52:8080/api/project/delete/', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "id": id
          })
        })
        const jsonData = await response.json()
        console.log(jsonData)
        this.getAllProjects()
      } catch (error) {
        console.error(error)
      }
    },
    async createProject(){
      try {
        let token = this.token
        const response = await fetch('http://82.97.253.52:8080/api/project/create/', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "project_name": this.projectName,
              "created_by": {
                  "id": 3,
                  "company": {
                      "id": 1,
                      "name": "root"
                  },
                  "name": "Bob",
                  "surname": "Smith",
                  "login": "bob1",
                  "password": "qwerty"
              },
              "executor": {
                  "id": 1,
                  "company": {
                      "id": 1,
                      "name": "root"
                  },
                  "name": "Bob",
                  "surname": "Smith",
                  "login": "bob1",
                  "password": "qwerty"
              },
              "approver": {
                  "id": 1,
                  "company": {
                      "id": 1,
                      "name": "root"
                  },
                  "name": "Bob",
                  "surname": "Smith",
                  "login": "bob1",
                  "password": "qwerty"
              },
              "company": {
                  "id": 1,
                  "name": "root"
              },
              "projecting_stage": "212",
              "start_date": "2024-08-14",
              "end_date": "2024-08-18",
              "address": "ТМ 1: ыв 12, 231, 1",
              "contact_number": "89112223344",
              "latitude": this.latitude,
              "longitude": this.longitude,
              "is_deleted": false
          })
        })

        const jsonData = await response.json()
        console.log(jsonData)
        this.getAllProjects()
      } catch (error) {
        console.error(error)
      }
    },
    async getSingleProject(id){
      try {
        let token = this.token
        const response = await fetch('http://82.97.253.52:8080/api/project/get/' + id, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
          })
        const jsonData = await response.json()
        this.projectId = jsonData.id
        this.projectName = jsonData.project_name
        this.latitude = jsonData.latitude
        this.longitude = jsonData.longitude
        console.log(jsonData)
      } catch (error) {
        console.error(error)
      }
    },
    async updateProject(){
      try {
        let token = this.token
        const response = await fetch('http://82.97.253.52:8080/api/project/update/', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "id": this.projectId,
              "project_name": this.projectName,
              "created_by": {
                  "id": 3,
                  "company": {
                      "id": 1,
                      "name": "root"
                  },
                  "name": "Bob",
                  "surname": "Smith",
                  "login": "bob1",
                  "password": "qwerty"
              },
              "executor": {
                  "id": 1,
                  "company": {
                      "id": 1,
                      "name": "root"
                  },
                  "name": "Bob",
                  "surname": "Smith",
                  "login": "bob1",
                  "password": "qwerty"
              },
              "approver": {
                  "id": 1,
                  "company": {
                      "id": 1,
                      "name": "root"
                  },
                  "name": "Bob",
                  "surname": "Smith",
                  "login": "bob1",
                  "password": "qwerty"
              },
              "company": {
                  "id": 1,
                  "name": "root"
              },
              "projecting_stage": "212",
              "start_date": "2024-08-14",
              "end_date": "2024-08-18",
              "address": "ТМ 1: ыв 12, 231, 1",
              "contact_number": "89112223344",
              "latitude": this.latitude,
              "longitude": this.longitude,
              "is_deleted": false
          })
        })

        const jsonData = await response.json()
        console.log(jsonData)
        this.getAllProjects()
      } catch (error) {
        console.error(error)
      }
    },
    showProjectsOnMap(){
      this.getAllProjects().then(() => {

      ymaps.ready(() => {
      var myMap = new ymaps.Map("map", {
        center: [59.942249, 30.314476],
        zoom: 10
      }, {
        searchControlProvider: 'yandex#search'
      });

      console.log(this.projects) // should work now

      for (const project of this.projects) {
        var myPlacemark = new ymaps.Placemark([project.latitude, project.longitude], {
          iconCaption: project.project_name
        }, {
          preset: 'islands#pinkDotIcon'
        });

        myMap.geoObjects.add(myPlacemark);
      }
      });
      })
      
    },
    getGlobalToken(){
      const globalToken = sessionStorage.getItem('globalToken')
      this.token = globalToken
      console.log(globalToken)
    },
    refreshProjectsOnMap(){
      this.showProjectsOnMap()
    }
  },
  mounted(){
    this.getAllProjects()
    this.showProjectsOnMap()
  }
}
</script>

<template>
  <div class="row m-3">
    <div class="col-7">
      <div class="row">
        <div class="d-flex mb-2">
          <h5 class="me-2 align-self-center">Список проектов</h5>
          <div>
            <button class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#createProjectModal">Добавить</button>
          </div>
          <div>
            <button class="btn btn-secondary me-2" @click="getToken()">Получить токен</button>  
          </div>
          <div>
            <input v-model="token" type="text" class="form-control" />
          </div>
        </div>
          <table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>Number</th>
                <th>Name</th>
                <th>Description</th>
                <th>Lat</th>
                <th>Long</th>
                <th>Creator</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in projects" :key="project.id">
                <td>{{ project.id }}</td>
                <td>{{ project.number }}</td>
                <td>{{ project.project_name }}</td>
                <td>{{  project.description }}</td>
                <td>{{ project.latitude }}</td>
                <td>{{ project.longitude }}</td>
                <td>Employee</td>
                <td>
                  <button class="btn btn-light" @click="getSingleProject(project.id)" data-bs-toggle="modal" data-bs-target="#updateProjectModal">
                    <img src="../assets/pencil.png" alt="">
                  </button>
                </td>
                <td>
                  <button class="btn btn-secondary" :class="{'btn-success': projectId === project.id}" @click="selectProject(project.id)">
                    Выбрать
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
      <div class="row mt-3">
        <h5>Dashboard</h5>
        <table class="table table-sm table-bordered">
          <tbody>
          <tr>
            <td>Текущий проект:</td>
            <td>100-24 / ИГИ1 / Строительство сарая</td>
          </tr>
          <tr>
          <td>Номер уведомления КГА:</td>
          <td>1234-2024</td>
          </tr>
          <tr>
            <td>Скважин пробурено:</td>
            <td>3 из 10 (30%) глуб. от 5 до 30 м</td>
          </tr>
          <tr>
            <td>Стат. зонд.:</td>
            <td>2 из 5 (40%) глуб. от 15 до 25 м</td>
          </tr>
          <tr>
            <td>Образцов отобрано:</td>
            <td>Н-25 М-12 В-2</td>
          </tr>
          <tr>
            <td>Выделено ИГЭ:</td>
            <td>3 (ИГЭ-1: Н-10 М-4; ИГЭ-2: Н-10 М-6; ИГЭ-3: Н-5 М-2)</td>
          </tr>
          <tr>
            <td>Зафиксировано уровней ПВ:</td>
            <td>1 (В-2)</td>
          </tr>
        </tbody>
        </table>
      </div>
      </div>
    </div>
    <div class="col-5">
      <div class="d-flex">
        <div class="me-2">
          <h5>Проекты на карте</h5>
        </div> 
      </div>
      <div class="mt-3">
        <div id="map" style="width: 800px; height: 600px"></div>
      </div>
      <!-- <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A80fd786047cacef5e0f1c90988f2190766613ebe13e83f1730bae81def6b86ab&amp;source=constructor"
        width="800" height="600" frameborder="0"></iframe>
      </div> -->
    </div>
  </div>

  <!-- Modals -->
  <div class="modal fade" id="createProjectModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Добавить проект</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <label for="">Номер<span class="text-danger">*</span></label>
                <input class="form-control" type="text" />
              </div>
              <div class="col-6">
                <label for="">Название</label>
                <input v-model="projectName" class="form-control" type="text" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label for="">Описание</label>
                <textarea class="form-control" rows="3" type="text"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="">Широта</label>
                <input v-model="latitude" class="form-control" type="text" placeholder="60.12345" />
              </div>
              <div class="col-6">
                <label for="">Долгота</label>
                <input v-model="longitude" class="form-control" type="text" placeholder="30.12345" />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="">Дата создания</label>
                <input type="date" class="form-control" value="2024-09-30" disabled>
              </div>
              <div class="col-6">
                <label for="">Объект добавил</label>
                <input type="text" class="form-control" value="Employee" disabled>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button @click="createProject()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Добавить</button>
          </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="updateProjectModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Редактировать проект id:{{ projectId }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <label for="">Номер<span class="text-danger">*</span></label>
                <input class="form-control" type="text" />
              </div>
              <div class="col-6">
                <label for="">Название</label>
                <input v-model="projectName" class="form-control" type="text" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label for="">Описание</label>
                <textarea class="form-control" rows="3" type="text"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="">Широта</label>
                <input v-model="latitude" class="form-control" type="text" placeholder="60.12345" />
              </div>
              <div class="col-6">
                <label for="">Долгота</label>
                <input v-model="longitude" class="form-control" type="text" placeholder="30.12345" />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="">Дата создания</label>
                <input type="date" class="form-control" value="2024-09-30" disabled>
              </div>
              <div class="col-6">
                <label for="">Объект добавил</label>
                <input type="text" class="form-control" value="Employee" disabled>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button @click="deleteProject(projectId)" type="button" class="btn btn-danger" data-bs-dismiss="modal">Удалить</button>
            <button @click="updateProject()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
          </div>
      </div>
    </div>
  </div>
</template>
