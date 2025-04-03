
<template>
    <div class="container">
      <Header />
      <div id="main">
        <Menu />
        <Content />
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Menu from '../components/Menu.vue'
  import Content from '../components/Content.vue'
  import Footer from '../components/Footer.vue'
  
  export default {
    name: 'Bmw',
    components: {
      Header,
      Menu,
      Content,
      Footer
  }
  }
  </script>
  