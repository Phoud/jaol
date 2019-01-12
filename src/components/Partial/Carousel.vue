<template>
    <div>
        <carousel :per-page="1" 
        :mouse-drag="true" 
        :autoplay="true" 
        :autoplayHoverPause="false"
        :autoplayTimeout="3000"
        :paginationEnabled="false"
        :loop="true">
            <slide v-for="(slide, index) in slides" :key="index">
                <div
                class="slider_bck"
                :style="{'background':`url(${slide.bck})`}"

                >

                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import bck1 from '../../assets/bannerone.png';
import bck2 from '../../assets/bannertwo.png';
export default {
    data(){
        return {
            slides: [
                {
                    bck: bck1
                },
                {
                    bck: bck2
                }
            ]
        }
    },
    components:{
        Carousel,
        Slide
    }
}
</script>

<style>
    .slider_bck {
    height: 500px;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}
    
</style>