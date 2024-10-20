<script>
export default {
  data() {
    return {
      samples : [
        {id: 1, ege: '', number: 1000, pointNumber: 1, depth: 1.5, density: 2.05, waterContent: 0.201},
        {id: 2, ege: '1a', number: 1001, pointNumber: 3, depth: 3.5, density: 2.15, waterContent: 0.355},
        {id: 3, ege: '2', number: 1002, pointNumber: 2, depth: 8.2, density: 1.96, waterContent: 0.321},
        {id: 4, ege: '', number: 1000, pointNumber: '555а', depth: 1.5, density: 2.12, waterContent: 0.189},
        {id: 5, ege: '4', number: 1004, pointNumber: 1, depth: 15.9, density: 1.98, waterContent: 0.286},
        {id: 6, ege: '7', number: 1006, pointNumber: 4, depth: 8.1, density: 2.03, waterContent: 0.357},
        {id: 7, ege: '', number: 1018, pointNumber: 15, depth: 1.5, density: 2.11, waterContent: 0.287},
      ],
      points:[
            {id:1,type:'скважина',number:'111',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '112', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:2,type:'скважина',number:'112',depth:'25',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '112', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:3,type:'скважина',number:'122',depth:'35',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '112', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:4,type:'скважина',number:'125',depth:'25',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '112', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:5,type:'скважина',number:'131',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '112', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:6,type:'т.с.з.',number:'1',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'Геотест',
            coneArea:'10 / 35.7', startDiameter: '', endDiameter: '', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:7,type:'т.с.з.',number:'2',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'Геотест',
            coneArea:'10 / 35.7', startDiameter: '', endDiameter: '', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
        ],
        number: '',
        ege: '',
        point: null,
        depth: null,
        density: null,
        waterContent: null,

    }
  },
  methods:{
    createSample() {
      this.samples.push({
        id: this.samples.at(-1).id + 1,
        ege: this.ege,
        number: this.number,
        pointNumber: this.point.number,
        depth: this.depth,
        density: this.density,
        waterContent: this.waterContent
      })
    },

    editSample(id) {
      this.number = this.samples.find(sample => sample.id == id).number
      this.ege = this.samples.find(sample => sample.id == id).ege
      this.point = this.samples.find(sample => sample.id == id).pointNumber
      this.depth = this.samples.find(sample => sample.id == id).depth
      this.density = this.samples.find(sample => sample.id == id).density
      this.waterContent = this.samples.find(sample => sample.id == id).waterContent
    },
    removeSample(id) {
      this.samples = this.samples.filter(sample => sample.id != id)
    },

    //calculations
    dryDensity(density, waterContent) {
      if (waterContent == null || density == null || waterContent == 0 || density == 0) return null
      return density / (1 + waterContent)
    }
  },

  mounted() {
    this.number = this.samples.at(-1).number + 1
    this.point = this.points.at(0)
    this.depth = this.samples.at(-1).depth
  }

}
</script>

<template>
<div class="row m-3">
    <div class="d-flex mb-2">
      <h5 class="me-2 align-self-center">Список образцов</h5>
      <div>
        <button class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#createSampleModal">
          Добавить
        </button>
      </div>
      <div>
        <button class="btn btn-light me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="../assets/download.png" width="16px" height="16px"> Импорт CSV
        </button>
      </div>
      <div>
        <button class="btn btn-success me-2">
          Распределить по ИГЭ
        </button>
      </div>
      <div>
        <button type="button" class="btn btn-primary">
          Сохранить
        </button>
      </div>
    </div>
    <div class="overflow-y-auto" style="height: 70vh;">
      <table class="table table-sm table-bordered tbCustom">
        <thead>
        <tr>
          <th class="w50">Select</th>
          <th class="w50">Action</th>
          <th class="w100">ИГЭ</th>
          <th class="w50">Номер</th>
          <th class="w50">Выработка</th>
          <th class="w100">Глубина отбора, м</th>
          <th class="w50">Плотность, г/см<sup>3</sup></th>
          <th class="w50">Плотность скелета, г/см<sup>3</sup></th>
          <th class="w50">Влажность, д.е.</th>
          <th>...</th>
        </tr>
        <tr>
          <th>sel</th>
          <th>act</th>
          <th>ege</th>
          <th><i>№</i></th>
          <th></th>
          <th><i>h, м</i></th>
          <th><i>ρ, г/см<sup>3</sup></i></th>
          <th><i>ρ<sub>d</sub>, г/см<sup>3</sup></i></th>
          <th><i>W, д.е.</i></th>
          <th><i>...</i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sample in samples" :key="sample.id">
          <td>
            <div>
              <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
            </div>
          </td>
          <td>
            <div class="d-flex">
              <button @click="editSample(sample.id)" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#editSampleModal">
                <img src="../assets/pencil.png" alt="">
              </button>
              <button class="btn btn-sm btn-light" @click="removeSample(sample.id)">
                <img src="../assets/delete.png" alt="">
              </button>
            </div>
          </td>
          <td>{{ sample.ege }}</td>
          <td>{{ sample.number }}</td>
          <td>{{ sample.pointNumber }}</td>
          <td>{{ sample.depth }}</td>
          <td>
            <input type="text" class="form-control border-0 outline-0" v-model="sample.density">
          </td>
          <td class="my-grey-background">
            {{ dryDensity(sample.density, sample.waterContent).toFixed(2) }}
          </td>
          <td>
            <input type="text" class="form-control border-0 outline-0" v-model="sample.waterContent">
          </td>
          <td>...</td>
        </tr>
      </tbody>
      </table>
      
    </div>
    <div class="d-flex mt-3">
        <div class="me-2">
          <select name="" id="" class="form-select">
            <option value="">Копировать выделенные</option>
            <option value="">Удалить выделенные</option>
          </select>
        </div>
        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  </div>

  <!-- Modals -->
  <div class="modal fade" id="createSampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Добавить образец</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <label for="">Номер<span class="text-danger">*</span></label>
                <input class="form-control" type="text" v-model="number"/>
              </div>
              <div class="col-6">
                <label for="">Выработка</label>
                <select v-model="point" class="form-select">
                  <option v-for="item in points" :key="item.id" :value="item">{{ item.type }} {{ item.number }}</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="">Глубина отбора, м</label>
                <input v-model="depth" class="form-control" type="number"/>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button @click="createSample()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Добавить</button>
          </div>
      </div>
    </div>
  </div>
  
  <div class="modal fade" id="editSampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Редактировать образец</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <label for="">Номер<span class="text-danger">*</span></label>
                <input class="form-control" type="text" v-model="number"/>
              </div>
              <div class="col-6">
                <label for="">Выработка</label>
                <input class="form-control" type="text" v-model="point"/>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="">Глубина отбора, м</label>
                <input v-model="depth" class="form-control" type="number"/>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button @click="createSample()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
          </div>
      </div>
    </div>
  </div>

</template>
<style scoped>

  th.w50{
    width: 50px;
  }

  th.w100{
    width: 100px;
  }

  .my-grey-background {
    background-color: #ccc; /* or any other grey color code */
  }

</style>