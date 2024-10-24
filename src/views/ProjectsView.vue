<script>
  export default {
    data(){
      return {
        projects: [
          {"id": 1, "number": "421-58", "project_name": "Project 1", "description": "Lorem ipsum 1", "latitude": 59.973017, "longitude": 30.220557},
          {"id": 2, "number": "422-58", "project_name": "Project 2", "description": "Lorem ipsum 2", "latitude": 59.853, "longitude": 30.263},
          {"id": 3, "number": "423-58", "project_name": "Project 3", "description": "Lorem ipsum 3", "latitude": 59.845, "longitude": 30.273},
          {"id": 4, "number": "424-58", "project_name": "Project 4", "description": "Lorem ipsum 4", "latitude": 59.833, "longitude": 30.213},
          {"id": 5, "number": "425-58", "project_name": "Project 5", "description": "Lorem ipsum 5", "latitude": 59.847, "longitude": 30.223},
          {"id": 6, "number": "426-58", "project_name": "Project 6", "description": "Lorem ipsum 6", "latitude": 59.843, "longitude": 30.19},
          {"id": 7, "number": "427-58", "project_name": "Project 7", "description": "Lorem ipsum 7", "latitude": 59.842, "longitude": 30.18},
          {"id": 8, "number": "428-58", "project_name": "Project 8", "description": "Lorem ipsum 8", "latitude": 59.841, "longitude": 30.185},
          {"id": 9, "number": "429-58", "project_name": "Project 9", "description": "Lorem ipsum 9", "latitude": 59.840, "longitude": 30.187},
          {"id": 10, "number": "430-58", "project_name": "Project 10", "description": "Lorem ipsum 10", "latitude": 59.851, "longitude": 30.191},
          {"id": 11, "number": "431-58", "project_name": "Project 11", "description": "Lorem ipsum 11", "latitude": 59.852, "longitude": 30.203},
          {"id": 12, "number": "432-58", "project_name": "Project 12", "description": "Lorem ipsum 12", "latitude": 59.854, "longitude": 30.205},
          {"id": 13, "number": "433-58", "project_name": "Project 13", "description": "Lorem ipsum 13", "latitude": 59.855, "longitude": 30.207},
          {"id": 14, "number": "434-58", "project_name": "Project 14", "description": "Lorem ipsum 14", "latitude": 59.856, "longitude": 30.209},
          {"id": 15, "number": "435-58", "project_name": "Project 15", "description": "Lorem ipsum 15", "latitude": 59.857, "longitude": 30.204},
        ],
      projectId: null,
      number: '100-24',
      projectName: 'New project',
      description: 'Lorem ipsum',
      latitude: 59.57,
      longitude: 30.19,
      isActive: false,
      currentProject: null,
      }
    },
    methods: {
      getMap(){
        ymaps.ready(() => {
        var myMap = new ymaps.Map("map", {
          center: [59.942249, 30.314476],
          zoom: 10
        }, {
          searchControlProvider: 'yandex#search'
        });
        
        for(const project of this.projects){
          var myPlacemark = new ymaps.Placemark([project.latitude, project.longitude], {
            iconCaption: project.number
          }, {
            preset: 'islands#pinkDotIcon'
          });
          myMap.geoObjects.add(myPlacemark);
        }
        })
      },
      addProject(){
        this.projects.push({id: this.projects.length+1, number: this.number, project_name: this.projectName, description: this.description, latitude: this.latitude, longitude: this.longitude})
        this.getMap()
      }
    },
    mounted() {
      this.getMap()
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
        </div>
        <div class="overflow-y-auto" style="height: 50vh;">
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
                  <button class="btn btn-light btn-sm"  data-bs-toggle="modal" data-bs-target="#updateProjectModal">
                    <img src="../assets/pencil.png" alt="">
                  </button>
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm" >
                    Выбрать
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>  
      <div class="row mt-3">
        <h5>Информация по текущему проекту:</h5>
        <table class="table table-sm table-bordered ms-3">
          <tbody>
          <tr>
            <td>Описание:</td>
            <td>
              99999999
            </td>
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
                <input v-model="number" class="form-control" type="text" />
              </div>
              <div class="col-6">
                <label for="">Название</label>
                <input v-model="projectName" class="form-control" type="text" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label for="">Описание</label>
                <textarea v-model="description" class="form-control" rows="3" type="text"></textarea>
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
            <button @click="addProject()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Добавить</button>
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
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Удалить</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
          </div>
      </div>
    </div>
  </div>
</template>
