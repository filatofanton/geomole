<script>
  export default{
    props: {
      selectedProject: Object
    },
    data(){
      return {
        points:[
            {id:1,project_id:1,type:'скважина',number:'1',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '2', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:2,project_id:1,type:'скважина',number:'2',depth:'25',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '4', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:3,project_id:1,type:'скважина',number:'3',depth:'35',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '6', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:4,project_id:2,type:'скважина',number:'4',depth:'25',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '7', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:5,project_id:2,type:'скважина',number:'5',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'УРБ 2А2',
            coneArea:'', startDiameter: '132', endDiameter: '8', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:6,project_id:2,type:'т.с.з.',number:'1',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'Геотест',
            coneArea:'10 / 35.7', startDiameter: '', endDiameter: '', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:7,project_id:2,type:'т.с.з.',number:'2',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'Геотест',
            coneArea:'10 / 35.7', startDiameter: '', endDiameter: '', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:8,project_id:2,type:'т.с.з.',number:'3',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'Геотест',
            coneArea:'10 / 35.7', startDiameter: '', endDiameter: '', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:9,project_id:2,type:'т.с.з.',number:'4',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'Геотест',
            coneArea:'10 / 35.7', startDiameter: '', endDiameter: '', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
            {id:10,project_id:2,type:'т.с.з.',number:'5',depth:'30',absMark:'-1.2',
            startDate:'2020-01-01',endDate:'2020-01-01',x:10,y:10,rigType:'Геотест',
            coneArea:'10 / 35.7', startDiameter: '', endDiameter: '', geologist:'Иванов И.И.', drillmaster: 'Петров П.П.'},
        ],
        filteredPoints: [],
      }
    },
    methods: {
      filterSampleByProject(){
        this.filteredPoints = points.filter(point => point.project_id === currentProject.id);
        console.log(this.filteredPoints)
      },
      printPage() {
        window.print();
      }
    },
    mounted() {
    },
    computed: {
    filteredPoints() {
        return this.points.filter(point => point.type !== 'т.с.з.');
      },
    },
  }
</script>

<template>
  <div class="row m-3">
    <div class="col-8">
      <div class="d-flex mb-2">
        <h5 class="me-2 align-self-center">Список выработок</h5>
        <div>
          <button class="btn btn-primary">
            Добавить
          </button>
        </div>
        <div class="ms-3 ms-auto">
        <div class="d-flex align-items-center">
          <span class="me-1">Шаблон для печати:</span>
          <div class="me-2">
            <select class="form-select">
              <option value="A4">A4 штамп 297*210</option>
              <option value="A4_border">A4</option>
            </select>
          </div>
          <div class="me-2">
            <select class="form-select">
              <option value="A4">Печать всех выработок</option>
              <option value="A4_border">Печать только скважин</option>
              <option value="A4_border">Печать только т.с.з.</option>
            </select>
          </div>
          <button @click="printPage" class="btn btn-success">*.pdf</button>
        </div>
      </div>
      </div>
      <div class="overflow-y-auto" style="height: 500px;">
        <table class="table table-sm table-bordered tbCustom">
          <thead>
          <tr>
            <th>No.</th>
            <th>Тип</th>
            <th>Номер</th>
            <th>Сопоставление с выработкой</th>
            <th>Глубина, м</th>
            <th>Отметка устья выработки, м</th>
            <th>Дата начала проходки</th>
            <th>Дата окончания проходки</th>
            <th>X</th>
            <th>Y</th>
            <th>Тип установки</th>
            <th>Площадь конуса, см<sup>2</sup> / диаметр, мм</th>
            <th>Нач. диаметр, мм</th>
            <th>Кон. диаметр, мм</th>
            <th>Геолог</th>
            <th>Бур. мастер</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="point in points" :key="point.id">
              <td>{{ point.id }}</td>
              <td>{{ point.type }}</td>            
              <td>{{ point.number }}</td>
              <td>
                <select name="" id="" class="form-select" v-if="point.type === 'т.с.з.'">
                  <option value="-">-</option>
                  <option v-for="point in filteredPoints" :key="point.id" value="point.id">
                    {{ point.type }} {{ point.number }}
                  </option>
                </select>
              </td>
              <td>{{ point.depth }}</td>
              <td>{{ point.absMark }}</td>
              <td>{{ point.startDate }}</td>
              <td>{{ point.endDate }}</td>
              <td>{{ point.x }}</td>
              <td>{{ point.y }}</td>
              <td>{{ point.rigType }}</td>
              <td>{{ point.coneArea }}</td>
              <td>{{ point.startDiameter }}</td>
              <td>{{ point.endDiameter }}</td>
              <td>{{ point.geologist }}</td>
              <td>{{ point.drillmaster }}</td>
              <td>
                <button class="btn btn-sm btn-primary">
                  Редактировать
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-4">
      <h5>Схема расположения выработок</h5>
      <div class="border h-75 mt-4">
        <div style="position: relative; left: 30px; top: 30px">
          <span style="position: absolute; left: 20px; top: -20px">Скв.111</span>
          <img src="../assets/borehole.png" style="width: 16px; height: 16px;">
        </div>
        <div style="position: relative; left: 170px; top: 30px">
          <span style="position: absolute; left: 20px; top: -20px">Скв.112</span>
          <img src="../assets/borehole.png" style="width: 16px; height: 16px;">
        </div>
        <div style="position: relative; left: 350px; top: 30px">
          <span style="position: absolute; left: 20px; top: -20px">Скв.122</span>
          <img src="../assets/borehole.png" style="width: 16px; height: 16px;">
        </div>
      </div>
    </div>
  </div>
</template>