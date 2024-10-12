<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ProjectsView from './views/ProjectsView.vue'

const id = 3
const currentProjectId = sessionStorage.getItem('currentProjectId')
const currentProjectName = sessionStorage.getItem('currentProjectName')
</script>

<template>
  <header>
    <div class="container-fluid m-0 p-0">
          <nav class="navbar navbar-expand-lg bg-body">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="./assets/logo.png" alt="Bootstrap" width="30" height="30">
              </a>
              <a class="navbar-brand" href="#">Geomole</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><RouterLink to="/">Проекты</RouterLink></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Поле
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="points.html"><RouterLink to="/points">Список выработок</RouterLink></a></li>
                      <li><a class="dropdown-item" href="#">Статическое зондирование</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Лаборатория
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="samples.html"><RouterLink to="/samples">Список образцов грунтов и их свойств</RouterLink></a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Камералка
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="eges.html"><RouterLink to="/eges">Список ИГЭ</RouterLink></a></li>
                      <li><a class="dropdown-item" href="layers.html"><RouterLink to="/layers">Послойное описание</RouterLink></a></li>
                      <li><a class="dropdown-item" href="#">Статистика</a></li>
                    </ul>
                  </li>
                </ul>
                <ul class="nav justify-content-end">
                  <li class="nav-item align-self-center">
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">Dark</label>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <img src="./assets/user.png" width="24px" alt="Image alt text">
                      <RouterLink to="/employee">Employee id:{{ id }}</RouterLink>
                    </a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="login.html">
                    <img src="./assets/logout.png" width="24px" alt="Image alt text">
                    Выход
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
  </header>
  <div class="container-fluid">
    <RouterView />
  </div>
  <footer class="footer fixed-bottom text-bg-dark p-1" style="height: 30px;">
    <span class="text-center"> Текущий проект: id - {{ currentProjectId }}  Название - {{ currentProjectName }}</span>
  </footer>
</template>
