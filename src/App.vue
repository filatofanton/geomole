<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/main/Header.vue'
import HeaderAuth from './components/main/HeaderAuth.vue'
import Footer from './components/main/Footer.vue'
import ApplicationDescription from './components/main/ApplicationDescription.vue'

export default {
  components: {Header,HeaderAuth,Footer,ApplicationDescription},
  data() {
    return {
      showHeader: false,
      token: ''
    }
  },
  methods: {
    addTokenToUser(){
      localStorage.setItem('globalToken', this.token)
    }
  }
}
</script>

<template>
  <div v-if="showHeader">
    <Header :showHeader="showHeader" @logout="showHeader = $event" />
    <div class="container-fluid">
      <RouterView />
    </div>
    <Footer />
  </div>
  <div v-else>
    <HeaderAuth :showHeader="showHeader" @login="showHeader = $event" />
    <div class="container-fluid">
      <RouterView 
      @token="token = $event"
      @showHeader="showHeader = $event"
      />
    </div>
  </div>
</template>
