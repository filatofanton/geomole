<script>
export default {
  data() {
    return {
      points:[
        {id:1,type:'скважина',number:'111',depth:'30',absMark:'-1.2'},
        {id:2,type:'скважина',number:'115',depth:'25',absMark:'2.1'},
        {id:3,type:'скважина',number:'122',depth:'35',absMark:'3.7'},
        {id:4,type:'скважина',number:'134',depth:'40',absMark:'0.5'}
      ],
      eges: [
        {id:1, number:'1', genesis:'tIV', description:"Насыпные грунты, слежавшиеся: пески разной крупности, перемешанные со строительным мусором (обломки кирпичей, бетона, древесины, лом металла, осколки стекла, шлак углей), с гравием и галькой до 15-20%, с примесью органических веществ, влажные и водонасыщенные. Срок отсыпки более 5 лет."},
        {id:2, number:'2', genesis:'m, l IV', description:'Пески пылеватые, плотные, неоднородные, серые и серовато-коричневые, влажные и водонасыщенные, с растительными остатками'},
        {id:3, number:'2а', genesis:'m, l IV', description:'Пески пылеватые, средней плотности, неоднородные, серые и сероватокоричневые, влажные и водонасыщенные, с растительными остатками.'},
        {id:4, number:'3', genesis:'lg III', description:'Суглинки тяжелые пылеватые, текучие, с прослоями текучепластичных, ленточные, тиксотропные, коричневые и серовато-коричневые, с прослоями песков пылеватых, водонасыщенных.'},
        {id:5, number:'6', genesis:'g III', description:'Супеси пылеватые, пластичные (Il>0,50), серые, с линзами и гнездами песков разной крупности, с гравием и галькой изверженных пород до 10-15 %, с отдельными валунами.'},
      ],
      layers:[
        {id:1,pointId:1,egeId:1,bottomDepth:2.7},
        {id:2,pointId:1,egeId:2,bottomDepth:5.8},
        {id:3,pointId:1,egeId:3,bottomDepth:12.9},
        {id:4,pointId:1,egeId:4,bottomDepth:22.6},
        {id:5,pointId:1,egeId:5,bottomDepth:30.0},
        {id:6,pointId:2,egeId:1,bottomDepth:2.1},
        {id:7,pointId:2,egeId:2,bottomDepth:6.6},
        {id:8,pointId:2,egeId:3,bottomDepth:14.2},
        {id:9,pointId:2,egeId:4,bottomDepth:23.8},
        {id:10,pointId:2,egeId:5,bottomDepth:25}
      ],

      selectedPoint: null,
      selectedEge: null,
      layersByPoint: null,
    }
  },
  methods: {
    getEgeData(egeId) {
      return this.eges.find(ege => ege.id === egeId);
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
    }
  }
}
</script>
<template>
<div class="row m-3">
    <div class="d-flex mb-2 align-items-center">
      <div class="me-2">
        <h5>Послойное описание</h5>
      </div>
      <div class="me-2">
        <select v-model="selectedPoint" class="form-select">
          <option v-for="point in points" :key="point.id" :value="point">{{ point.type }} {{ point.number }}</option>
        </select>
      </div>
      <div v-if="selectedPoint" class="me-2">
        Глубина: {{ selectedPoint.depth }} м
      </div>
      <div v-if="selectedPoint" class="me-2">
        А.о.: {{ selectedPoint.absMark }} м
      </div>
      <div class="ms-3">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createLayerModal">Добавить слой</button>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-8">
        <div class="overflow-y-auto" style="height: 500px;">
          <table class="table table-sm table-bordered tbCustom">
            <thead>
              <tr>
                  <th></th>
                  <th>Номер ИГЭ</th>
                  <th>Генезис</th>
                  <th>Глубина кровли</th>
                  <th>Глубина подошвы</th>
                  <th>Мощность слоя</th>
                  <th>А.о. кровли</th>
                  <th>А.о. подошвы</th>
                  <th>Описание</th>
                  <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="layer in layersByPoint" :key="layer.id">
                  <td>
                    <div>
                      <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                    </div>
                  </td>
                  <td>{{ getEgeData(layer.egeId).number }}</td>
                  <td>{{ getEgeData(layer.egeId).genesis }}</td>
                  <td></td>
                  <td>{{ layer.bottomDepth }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{{ getEgeData(layer.egeId).description }}</td>
                  <td>
                    <button class="btn btn-sm btn-white">
                      <img src="../assets/pencil.png">
                    </button>
                    <button class="btn btn-sm btn-white">
                      <img src="../assets/delete.png">
                    </button>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>  
      </div>
      <div class="col-2 border">
        Колонка
        <img src="../assets/section.png" width="300px">
      </div>
      <div class="col-2 border">
        Статичсекое зондирование
        <img src="../assets/cpt.png" width="300px">
      </div>
    </div>
  </div>

  <!-- Modals -->
  <div class="modal fade" id="createLayerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Добавить слой</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <label for="">ИГЭ<span class="text-danger">*</span></label>
                <select v-model="selectedEge" class="form-select">
                  <option v-for="ege in eges" :key="ege.id" :value="ege">ИГЭ-{{ ege.number }}: {{ ege.genesis }} {{ ege.description.substring(0, 10) }}...</option>
                </select>
              </div>
              <div class="col-6">
                <label for="">Глубина подошвы<span class="text-danger">*</span></label>
                <input type="number" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label for="">Описание</label>
                <a href="#">Классификатор</a>
                <textarea v-if="selectedEge" class="form-control" rows="10" type="text">{{ selectedEge.description }}</textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button @click="addEge()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Добавить</button>
          </div>
      </div>
    </div>
  </div>
</template>
