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
      </div>
      <div class="overflow-y-auto" style="height: 500px;">
        <table class="table table-sm table-bordered tbCustom">
          <tr>
            <th>No.</th>
            <th>Тип</th>
            <th>Номер</th>
            <th>Глубина, м</th>
            <th>Абс. отм., м</th>
            <th>X</th>
            <th>Y</th>
            <th>Тип установки</th>
            <th>Площадь конуса, см<sup>2</sup> / диаметр, мм</th>
            <th>Нач. диаметр, мм</th>
            <th>Кон. диаметр, мм</th>
            <th>Дата начала</th>
            <th>Дата окончания</th>
            <th>Геолог</th>
            <th>Бур. мастер</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>скв.</td>            
            <td>101</td>
            <td>25</td>
            <td>-2.5</td>
            <td>12121.25</td>
            <td>253546.22</td>
            <td>УРБ-2А2</td>
            <td></td>
            <td>127</td>
            <td>112</td>
            <td>06.06.2022</td>
            <td>07.06.2022</td>
            <td>Иванов И.И.</td>
            <td>Петров П.П.</td>
            <td>
              <button class="btn btn-sm btn-primary">
                Редактировать
              </button>
            </td>
          </tr>
          <tr>
          <td>1</td>
          <td>т.с.з.
          </td>
          <td>101</td>
          <td>20</td>
          <td>-2.0</td>
          <td>12121.10</td>
          <td>253546.33</td>
          <td>Тест-К4М</td>
          <td>10 / 35.7</td>
          <td></td>
          <td></td>
          <td>08.06.2022</td>
          <td>09.06.2022</td>
          <td>Иванов И.И.</td>
          <td>Петров П.П.</td>
          <td>
            <button class="btn btn-sm btn-primary">
              Редактировать
            </button>
          </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="col-4">
      <h5>Схема расположения выработок</h5>
      <div class="border h-75 mt-4">
        <div style="position: relative; left: 50px; top: 50px">
          <span style="position: absolute; left: 50px; top: -20px">Скв.1</span>
          <img src="../assets/borehole.png" style="width: 16px; height: 16px;">
        </div>
      </div>
    </div>
  </div>
</template>
