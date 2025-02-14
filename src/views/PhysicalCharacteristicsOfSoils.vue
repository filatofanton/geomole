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
        {id:2, number:'222', genesis:'m, l IV', description:'Пески пылеватые, плотные, неоднородные, серые и серовато-коричневые, влажные и водонасыщенные, с растительными остатками'},
        {id:3, number:'222а', genesis:'m, l IV', description:'Пески пылеватые, средней плотности, неоднородные, серые и сероватокоричневые, влажные и водонасыщенные, с растительными остатками.'},
        {id:4, number:'333', genesis:'lg III', description:'Суглинки тяжелые пылеватые, текучие, с прослоями текучепластичных, ленточные, тиксотропные, коричневые и серовато-коричневые, с прослоями песков пылеватых, водонасыщенных.'},
        {id:5, number:'666', genesis:'g III', description:'Супеси пылеватые, пластичные (Il>0,50), серые, с линзами и гнездами песков разной крупности, с гравием и галькой изверженных пород до 10-15 %, с отдельными валунами.'},
      ],
      samples : [
        {id: 1, egeId:2, boreholeId: 1, number: 1000, depth: 1.5, density: 2.11, waterContent: 0.255},
        {id: 2, egeId:2, boreholeId: 2, number: 1001, depth: 2.5, density: 2.05, waterContent: 0.255},
        {id: 3, egeId:2, boreholeId: 3, number: 1002, depth: 1.2, density: 2.21, waterContent: 0.255},
        {id: 4, egeId:2, boreholeId: 4, number: 1003, depth: 2.7, density: 2.13, waterContent: 0.255},
        {id: 4, egeId:2, boreholeId: 5, number: 1004, depth: 1.1, density: 2.01, waterContent: 0.255},
        {id: 4, egeId:2, boreholeId: 1, number: 1005, depth: 2.5, density: 1.99, waterContent: 0.255},
        {id: 4, egeId:2, boreholeId: 2, number: 1006, depth: 1.8, density: 2.12, waterContent: 0.255},
        {id: 4, egeId:2, boreholeId: 3, number: 1007, depth: 1.5, density: 2.01, waterContent: 0.255},
        {id: 5, egeId:3, boreholeId: 1, number: 1008, depth: 4.9, density: 1.99, waterContent: 0.255},
        {id: 6, egeId:3, boreholeId: 2, number: 1009, depth: 4.1, density: 2.01, waterContent: 0.255},
        {id: 7, egeId:3, boreholeId: 3, number: 1010, depth: 3.5, density: 2.02, waterContent: 0.255},
        {id: 7, egeId:3, boreholeId: 4, number: 1011, depth: 4.8, density: 2.06, waterContent: 0.255},
        {id: 7, egeId:3, boreholeId: 5, number: 1012, depth: 4.5, density: 2.12, waterContent: 0.255},
        {id: 7, egeId:3, boreholeId: 1, number: 1015, depth: 3.5, density: 2.01, waterContent: 0.255},
        {id: 7, egeId:3, boreholeId: 2, number: 1016, depth: 4.5, density: 1.97, waterContent: 0.255},
        {id: 7, egeId:3, boreholeId: 3, number: 1017, depth: 4.5, density: 2.08, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 1, number: 1018, depth: 14.3, density: 2.21, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 2, number: 1019, depth: 12.5, density: 2.15, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 3, number: 1020, depth: 17.5, density: 2.18, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 4, number: 1023, depth: 14.1, density: 2.19, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 5, number: 1025, depth: 19.5, density: 2.02, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 1, number: 1026, depth: 14.5, density: 1.95, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 2, number: 1027, depth: 17.1, density: 2.22, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 3, number: 1028, depth: 14.5, density: 2.11, waterContent: 0.255},
        {id: 7, egeId:5, boreholeId: 4, number: 1029, depth: 16.5, density: 2.08, waterContent: 0.255},
      ],

      selectedEge: null,
      samplesByEge: null,
    }
  },

  methods: {
    getEgeData(egeId) {
      return this.eges.find(ege => ege.id === egeId);
    },

    averageDensity(){
      if (!this.samplesByEge) return null;
      const densities = this.samplesByEge.map(sample => sample.density);
      const sum = densities.reduce((a, b) => a + b, 0);
      if(densities.length == 0) return null;
      const average = sum / densities.length;
      return average.toFixed(2);
    },

    averageWaterContent(){
      if (!this.samplesByEge) return null;
      const waterContents = this.samplesByEge.map(sample => sample.waterContent);
      const sum = waterContents.reduce((a, b) => a + b, 0);
      if(waterContents.length == 0) return null;
      const average = sum / waterContents.length;
      return average.toFixed(3);
    },
    printPage() {
      window.print();
    }
  },

  mounted() {
    this.selectedEge = this.eges[1];
    this.samplesByEge = this.samples.filter(sample => sample.egeId == this.selectedEge.id);
  },
  watch: {
    selectedEge() {
      this.samplesByEge = this.samples.filter(sample => sample.egeId == this.selectedEge.id);
    }
  }

}
</script>

<template>
<!-- <p>{{  }}</p> -->
<h5 class="me-2 align-self-center">Состав и физические характеристики грунтов</h5>
<div class="row mb-3">
  <div class="col-5">
    <select v-model="selectedEge" class="form-select">
      <option v-for="ege in eges" :key="ege.id" :value="ege">ИГЭ-{{ ege.number }}: {{ ege.genesis }} {{ ege.description.substring(0, 60) }}...</option>
    </select>
  </div>
  <div class="col-6 ms-auto">
    <div class="d-flex align-items-center">
      <span class="me-1">Шаблон для печати:</span>
      <div class="me-2">
        <select class="form-select">
          <option value="A4">A3 штамп 420*297</option>
          <option value="A4_border">A2 штамп 694*420</option>
        </select>
      </div>
      <div class="me-2">
        <select class="form-select">
          <option value="A4">Печать текущего ИГЭ</option>
          <option value="A4_border">Печать всех ИГЭ</option>
        </select>
      </div>
      <button @click="printPage" class="btn btn-success">*.pdf</button>
    </div>
  </div>
  <div class="row mt-2">
    <div class="overflow-y-auto" style="height: 90vh;">
  <table class="table table-sm table-bordered tbCustom">
    <thead>
      <tr>
        <th class="width-50">Select</th>
        <th class="width-50">Action</th>
        <th class="width-50">ИГЭ</th>
        <th class="width-50">Номер</th>
        <th class="width-50">Выработка</th>
        <th class="width-50">Глубина отбора, м</th>
        <th colspan="12">Содержание фракций грунта, %, размерами, мм</th>
        <th>Плотность, г/см<sup>3</sup></th>
        <th>Влажность, д.е.</th>
        <th>...</th>
      </tr>
      <tr>
        <th>sel</th>
        <th>act</th>
        <th>ege</th>
        <th><i>№</i></th>
        <th></th>
        <th><i>h, м</i></th>
        <th><i>X<sub>10</sub></i></th>
        <th><i>X<sub>10-5</sub></i></th>
        <th><i>X<sub>5-2</sub></i></th>
        <th><i>X<sub>2-1</sub></i></th>
        <th><i>X<sub>1-0.5</sub></i></th>
        <th><i>X<sub>0.5-0.25</sub></i></th>
        <th><i>X<sub>0.25-0.1</sub></i></th>
        <th><i>X<sub>0.1-0.05</sub></i></th>
        <th><i>X<sub>0.05-0.01</sub></i></th>
        <th><i>X<sub>0.01-0.002</sub></i></th>
        <th><i>X<sub>0.002</sub></i></th>
        <th><i>&#931;</i></th>
        <th><i>ρ, г/см<sup>3</sup></i></th>
        <th><i>W, д.е.</i></th>
        <th><i>...</i></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="sample in samplesByEge" :key="sample.id">
        <td>
          <div>
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
          </div>
        </td>
        <td>
          <button class="btn btn-sm btn-light">
            <img src="../assets/delete.png" alt="" width="24px">
          </button>
        </td>
        <td>{{ sample.egeId }}</td>
        <td>{{ sample.number }}</td>
        <td>{{ sample.boreholeId }}</td>
        <td>{{ sample.depth }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ sample.density }}</td>
        <td>{{ sample.waterContent }}</td>
        <td>...</td>
      </tr>
    </tbody>
    <tfoot class="footerText">
      <tr>
        <td colspan="6" class="text-end footerText">Среднее:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{{ averageDensity() }}</td>
        <td>{{ averageWaterContent() }}</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="6" class="text-end">Мин.:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="6" class="text-end">Макс.:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="6" class="text-end">Число определний (мин.: 6):</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="5" rowspan="2" class="text-end">Расчетное значение для доверительной вероятности:</td>
        <td>0.85</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>0.95</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  </table>
</div>
  </div>
</div>
</template>

<style scoped>
  .footerText {
    font-weight: bold;
  }

  .width-50 {
    width: 50px;
  }
</style>
