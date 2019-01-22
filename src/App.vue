<template>
  <div>
   
    <Navbar/>
    <!-- <Carousel/> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Partial/Navbar';
import Footer from './components/Partial/Footer';
import Carousel from './components/Partial/Carousel';
export default {
  data(){
    return{
      
    }
  }, 
  components:{
    Footer,
    Navbar,
    Carousel

  }
}
</script>



