<script>
import {store} from '../store.js'
export default {
    props: ['changeImage'],
  data() {
    return {
      sliderElements: store.sliderElements,
      hoveredImageSrc: 'img/standings.png'
    };
  },
  methods: {
    toggleDropdown() {
      this.$emit('toggle-dropdown');
    },
    changeImage2(img) {
      this.hoveredImageSrc = `img/${img}`;
    },
    emitKey(mykey) {
        this.$emit('toggle-dropdown');
        this.$emit('change-image', mykey);
       
        
    }
   
   

}};
</script>

<template>
    <div class="dropDownContainer">
        <div class="closeDropDown" @click="toggleDropdown">X</div>
        <div class="widgetContainer">
            <ul>
                <li v-for="(element, key, index) in sliderElements" :key="key" @mouseover="changeImage2(element.img)" @click="emitKey(key)">{{ key }}
            </li>
            </ul>
            <img :src="hoveredImageSrc"  alt="">
        </div>
    </div>
</template>
<style scoped>

    .closeDropDown{
        height: 40px;
        width: 40px;
        font-size: 32px;
        color: white;
        position: absolute;
        top: 15px;
        right: 20px;
        cursor: pointer;
       
    }
    .closeDropDown:hover{
        color: black;
    }
    .dropDownContainer{
        position: relative;
        height: 100%;
        width: 100%;
        background-color: #9d191d;
    }
    .widgetContainer{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 120px;
    }
    .widgetContainer > img{
        max-height: 65%;
        max-width: 40%;
        padding-right: 60px;
    }
    .widgetContainer > ul{
        display: flex;
        flex-direction: column;
        font-size: 46px;
        height: 80%;
        overflow-y: scroll;
    }
    .widgetContainer > ul > li{
        padding-right: 38px;
        font-size: 42px;
    }
    .widgetContainer > ul > li:hover{
        color: white;
        cursor: pointer;
    }
    img{
        border-radius: 10px;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.306);
    }
    

</style>
