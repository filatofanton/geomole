<script>
export default {
  data() {
    return {
      points:[
        {id:1,type:'т.с.з.',number:'1',depth:'30',absMark:'-1.2'},
        {id:2,type:'т.с.з.',number:'2',depth:'25',absMark:'2.1'},
        {id:3,type:'т.с.з.',number:'3',depth:'35',absMark:'3.7'},
        {id:4,type:'т.с.з.',number:'4',depth:'40',absMark:'0.5'}
      ],
      points2:[
        {id:1,type:'скв.',number:'1',depth:'30',absMark:'-1.2'},
        {id:2,type:'скв.',number:'2',depth:'25',absMark:'2.1'},
        {id:3,type:'скв.',number:'3',depth:'35',absMark:'3.7'},
        {id:4,type:'скв.',number:'4',depth:'40',absMark:'0.5'}
      ]
    }
  },
  methods: {
    getEgeData(egeId) {
      return this.eges.find(ege => ege.id === egeId);
    },
    printPage() {
      window.print();
    }
  },
  mounted() {
    this.selectedPoint = this.points[0];
    this.selectedEge = this.eges[0];
    this.layersByPoint = this.layers.filter(layer => layer.pointId == this.selectedPoint.id);
  },
  watch: {
    selectedPoint() {
      this.layersByPoint = this.layers.filter(layer => layer.pointId == this.selectedPoint.id);
    },
    selectedPoint2() {
      this.layersByPoint = this.layers.filter(layer => layer.pointId == this.selectedPoint.id);
    }
  }
}
//оффсет по муфте
//qc fs 
</script>
<template>
  <div class="row mb-3">
    <div class="col-3">
      <label for="formFileSm" class="form-label">Выберите файл/файлы стат. зонд.</label>
      <input class="form-control form-control-sm" id="formFileSm" type="file">
    </div>
  </div>
  <div class="row mb-3">
    <div class="d-flex align-items-center">
      <span class="me-2">Точка:</span>
      <div class="me-3">
        <select class="form-select">
          <option v-for="point in points" :key="point.id" :value="point">{{ point.type }} {{ point.number }} | {{ point.depth }} | {{ point.absMark }}</option>
        </select>
      </div>
      <span class="me-2">Сопоставление с выработкой:</span>
      <div class="me-2">
        <select class="form-select">
          <option v-for="point in points2" :key="point.id" :value="point">{{ point.type }} {{ point.number }} | {{ point.depth }} | {{ point.absMark }}</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-2 border no-print">
        <img src="../assets/cpt_layers.png" width="500px">
      </div>
  </div>
</template>