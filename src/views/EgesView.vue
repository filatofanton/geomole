<script>
import techno from '../assets/hatch/techno.png';
import peat from '../assets/hatch/peat.png';
import dusty_sand from '../assets/hatch/dusty_sand.png';
import fine_sand from '../assets/hatch/fine_sand.png';
import medium_sand from '../assets/hatch/medium_sand.png';
import coarse_sand from '../assets/hatch/coarse_sand.png';
import gravel_sand from '../assets/hatch/gravel_sand.png';
import sandy_clay from '../assets/hatch/sandy_clay.png';
import sandy_clay_gravel from '../assets/hatch/sandy_clay_gravel.png';
import silty_clay from '../assets/hatch/silty_clay.png';
import silty_clay_gravel from '../assets/hatch/silty_clay_gravel.png';
import clay from '../assets/hatch/clay.png';
import limestone from '../assets/hatch/limestone.png';
import granite from '../assets/hatch/granite.png';

export default {
  data() {
    return {
      eges: [
        {id:1, number:'1', genesis:'tIV', decription:"Насыпные грунты, слежавшиеся: пески разной крупности, перемешанные со строительным мусором (обломки кирпичей, бетона, древесины, лом металла, осколки стекла, шлак углей), с гравием и галькой до 15-20%, с примесью органических веществ, влажные и водонасыщенные. Срок отсыпки более 5 лет."},
        {id:2, number:'2', genesis:'m, l IV', decription:'Пески пылеватые, плотные, неоднородные, серые и серовато-коричневые, влажные и водонасыщенные, с растительными остатками'},
        {id:3, number:'2а', genesis:'m, l IV', decription:'Пески пылеватые, средней плотности, неоднородные, серые и сероватокоричневые, влажные и водонасыщенные, с растительными остатками.'},
        {id:4, number:'3', genesis:'lg III', decription:'Суглинки тяжелые пылеватые, текучие, с прослоями текучепластичных, ленточные, тиксотропные, коричневые и серовато-коричневые, с прослоями песков пылеватых, водонасыщенных.'},
        {id:5, number:'6', genesis:'g III', decription:'Супеси пылеватые, пластичные (Il>0,50), серые, с линзами и гнездами песков разной крупности, с гравием и галькой изверженных пород до 10-15 %, с отдельными валунами.'},
      ],
      hatching:[
        {id:1,name:'Насыпной грунт',img: techno},
        {id:2,name:'Торф',img: peat},
        {id:3,name:'Песок пылеватый',img: dusty_sand},
        {id:4,name:'Песок мелкий',img: fine_sand},
        {id:5,name:'Песок средней кр.',img: medium_sand},
        {id:6,name:'Песок крупный',img: coarse_sand},
        {id:7,name:'Песок гравелистый',img: gravel_sand},
        {id:8,name:'Супесь',img: sandy_clay},
        {id:9,name:'Супесь моренная',img: sandy_clay_gravel},
        {id:10,name:'Суглинок',img: silty_clay},
        {id:11,name:'Суглинок моренный',img: silty_clay_gravel},
        {id:12,name:'Глина',img: clay},
        {id:13,name:'Известняк',img: limestone},
        {id:14,name:'Гранит',img: granite},
      ],
      number: '',
      genesis: '',
      decription: '',
    }
  },

  methods: {
    addEge() {
     this.eges.push({
      id: this.eges.length+1, 
      number: this.number, 
      genesis: this.genesis, 
      decription: this.decription,
      selectedHatchingId: null,
      selectedHatching: null,
    })
    this.number = ''
    this.genesis = ''
    this.decription = '' 
    },
    deleteEge(id) {
      this.eges = this.eges.filter(ege => ege.id != id)
    },
    updateSelectedHatching(ege) {
      ege.selectedHatching = this.hatching.find(hatch => hatch.id === ege.selectedHatchingId)?.img || null;
    }
  },
}
</script>

<template>
<div class="row m-3">
    <div class="col-12">
      <div class="d-flex mb-2 align-items-center">
        <h5 class="me-2">Список ИГЭ</h5>
        <div class="me-2">
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createEgeModal">
            Добавить
          </button>
        </div>
      </div>
      <div class="overflow-y-auto" style="height: 500px;">
        <table class="table table-sm table-bordered tbCustom">
          <thead>
            <tr>
              <th style="width: 30px">Номер</th>
              <th style="width: 150px">Генезис</th>
              <th style="width: 100px">Штриховка</th>
              <th style="width: 200px">Штриховка</th>
              <th>Описание</th>
              <th style="width: 100px">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ege in eges" :key="ege.id">
              <td>{{ ege.number }}</td>
              <td>{{ ege.genesis }}</td>
              <td><img :src="ege.selectedHatching" height="50px"></td>
              <td>
                <div class="d-flex align-items-center">
                  <select v-model="ege.selectedHatchingId" @change="updateSelectedHatching(ege)" class="form-select">
                    <option v-for="hatch in hatching" :key="hatch.id" :value="hatch.id">
                      {{ hatch.name }}
                    </option>
                  </select>
                </div>
              </td>
              <td>{{ ege.decription }}</td>
              <td>
                <button class="btn btn-sm btn-white">
                  <img src="../assets/edit.png" width="24px">
                </button>
                <button @click="deleteEge(ege.id)" class="btn btn-sm btn-white">
                  <img src="../assets/delete.png" width="24px">
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <div class="modal fade" id="createEgeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Добавить ИГЭ</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <label for="">Номер<span class="text-danger">*</span></label>
                <input v-model="number" class="form-control" type="text" />
              </div>
              <div class="col-6">
                <label for="">Генезис</label>
                <select v-model="genesis" name="" id="" class="form-select">
                  <option value="tIV" selected>tIV</option>
                  <option value="mIV">mIV</option>
                  <option value="lgIII">lgIII</option>
                  <option value="gIII">gIII</option>
                  <option value="lgII">lgII</option>
                  <option value="gII">gII</option>
                  <option value="gI">gI</option>
                  <option value="AR">AR</option>
                  <option value="V2kt">V2kt</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label for="">Описание</label>
                <a href="#">Классификатор</a>
                <textarea v-model="decription" class="form-control" rows="3" type="text">
                </textarea>
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