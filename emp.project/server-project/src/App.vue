<template>
  <div class="container">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Header from'./layouts/HeaderComponent.vue'
import Footer from'./layouts/FooterComponent.vue'

export default {
  components : {
    Header,
    Footer
  }
}
</script>

