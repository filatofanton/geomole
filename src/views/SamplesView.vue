<script>
export default {
  data() {
    return {
      samples : [
        {id: 1, ege: 'не распределено', number: 1000, borehole: 1, depth: 1.5, density: 2.1, waterContent: 0.255},
        {id: 2, ege: '1a', number: 1001, borehole: 3, depth: 3.5, density: 2.1, waterContent: 0.255},
        {id: 3, ege: '2', number: 1002, borehole: 2, depth: 8.2, density: 2.1, waterContent: 0.255},
        {id: 4, ege: 'не распределено', number: 1000, borehole: '555а', depth: 1.5, density: 2.1, waterContent: 0.255},
        {id: 5, ege: '4', number: 1004, borehole: 1, depth: 15.9, density: 2.1, waterContent: 0.255},
        {id: 6, ege: '7', number: 1006, borehole: 4, depth: 8.1, density: 2.1, waterContent: 0.255},
        {id: 7, ege: 'не распределено', number: 1018, borehole: 15, depth: 1.5, density: 2.1, waterContent: 0.255},
      ]
    }
  }

}
</script>

<template>
<div class="row m-3">
    <div class="d-flex mb-2">
      <h5 class="me-2 align-self-center">Список образцов</h5>
      <div>
        <button class="btn btn-primary me-2">
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
    </div>
    <div class="overflow-y-auto" style="height: 500px;">
      <table class="table table-sm table-bordered tbCustom">
        <thead>
        <tr>
          <th style="width: 50px;">Select</th>
          <th style="width: 50px;">Action</th>
          <th>ИГЭ</th>
          <th>Номер</th>
          <th>Выработка</th>
          <th>Глубина отбора, м</th>
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
          <th><i>ρ, г/см<sup>3</sup></i></th>
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
            <button class="btn btn-sm btn-light">
              <img src="../assets/delete.png" alt="">
            </button>
          </td>
          <td>{{ sample.ege }}</td>
          <td>{{ sample.number }}</td>
          <td>{{ sample.borehole }}</td>
          <td>{{ sample.depth }}</td>
          <td>{{ sample.density }}</td>
          <td>{{ sample.waterContent }}</td>
          <td>...</td>
        </tr>
      </tbody>
      </table>
      <div class="d-flex">
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
  </div>
</template>
