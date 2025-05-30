<script>
import AppDropDown from './AppDropDown.vue';
import { store } from '../store.js'

export default {
    data() {
        return {
            sliderElements: store.sliderElements,
            currentImageKey: '',
            lastImg: '',
            secondLastImg: '',
            showDropdown: false
        };
    },
    methods: {
        changeImage(key) {
            this.currentImageKey = key;
        },
        goBackward() {
            const keys = Object.keys(this.sliderElements);
            const currentIndex = keys.indexOf(this.currentImageKey);
            const newIndex = (currentIndex - 1 + keys.length) % keys.length;
            this.changeImage(keys[newIndex]);
            this.beforeImg();
        },
        goForward() {
            const keys = Object.keys(this.sliderElements);
            const currentIndex = keys.indexOf(this.currentImageKey);
            const newIndex = (currentIndex + 1) % keys.length;
            this.changeImage(keys[newIndex]);
            this.beforeImg();
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        getImagePath(imageName) {
            return `img/${imageName}`;
        },
        myToUpperCase(string) {
            return string.toUpperCase();
        },
        beforeImg() {
            const keys = Object.keys(this.sliderElements);
            const currentIndex = keys.indexOf(this.currentImageKey);
            let newIndex = (currentIndex - 1 + keys.length) % keys.length;
            this.lastImg = this.sliderElements[keys[newIndex]].img;
            newIndex = (currentIndex - 2 + keys.length) % keys.length;
            this.secondLastImg = this.sliderElements[keys[newIndex]].img;
        }
    },
    created() {
        this.currentImageKey = 'Traction Circle';
        this.lastImg = 'laptime-graph.png';
        this.secondLastImg = 'laptime-spread.png';
    },
    components: { AppDropDown }
};
</script>

<template>  
    <div class="sliderContainer  poppins-semibold">
      <img  :src="getImagePath(secondLastImg)" alt="">
        <div class="sliderBackground layer1">
          <img :src="getImagePath(lastImg)" alt="">
        </div>
      <div class="sliderBackground layer2">
       
      </div>
      <div class="slider">
        <div class="sliderControllers">
          <div @click="goBackward" class="arrow rotate"></div>
          <h3 class="widgetName" @click="toggleDropdown">{{myToUpperCase(currentImageKey)}}</h3>
          <div @click="goForward" class="arrow"></div>
        </div>
        
        <div v-if="showDropdown" class="dropDownBox">
          <AppDropDown @toggle-dropdown="toggleDropdown" @change-image="changeImage"/>
        </div>
        <div class="infoContainer">
          <p class="infoBox poppins-light">{{ sliderElements[currentImageKey].description }}</p>
          <img class="infoImg" :src="getImagePath(sliderElements[currentImageKey].img)" :alt="currentImageKey">
        </div>
      </div>
    </div>
</template>
<style scoped>

.arrow{
  background-color: white;
  height: 60px;
  width: 60px;
  clip-path: polygon(0 15%, 15% 0, 60% 49%, 15% 100%, 0 85%, 32% 50%);
}
.arrow:hover {
  cursor: pointer;
  background-color: #9d191d;
}
.dropDownBox{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 8;
}
.infoBox {
  font-size: 20px;
  line-height: 40px;
  padding: 0px 300px 0px 100px;
  height: 95%;
  flex-grow: 1;
  max-height: 75%;
  display: flex;
  align-items: center;

}
.infoContainer {
  color: white;
  width: 100%;
  height: 80%;
  gap: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.infoImg{
  max-height: 75%;
  padding-right: 2.2%;
  max-width: 40%;
}
.layer1{
  opacity: 0.8;
  clip-path: polygon(0 0, 96% 0, 67% 100%, 0 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layer1 > img {
  height: 35%;
  margin-top: 10%;
  padding-right: 13%;
}
.layer2 {
  opacity: 0.7;
  clip-path: polygon(0 0, 65% 0, 36% 100%, 0 100%);
  z-index: 4;
  display: flex;
  align-items: center;
}
.slider{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
}
.sliderBackground {
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.sliderContainer{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
}
.sliderContainer > img {
  padding-left: 2%;
  height: 30%;
  margin-top: 10%;
}
.sliderControllers{

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  gap: 8px;
}
.rotate{
  transform: rotate(180deg);
}
.widgetName{
  text-align: center;
  font-size: 50px;
  color: #9d191d;
  width: 600px;
  cursor: pointer;
}

/*
  media
*/

@media screen and (max-width: 480px) {
  .arrow{
  background-color: white;
  height: 60px;
  width: 60px;
  clip-path: polygon(0 15%, 15% 0, 60% 49%, 15% 100%, 0 85%, 32% 50%);
}
.arrow:hover {
  cursor: pointer;
  background-color: #9d191d;
}
.dropDownBox{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 8;
  display: none;
}
.infoBox {
  font-size: 20px;
  line-height: 20px;
  height: 95%;
  max-height: 75%;
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 0px;

}
.infoContainer {
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  gap: 0px;
}
.infoImg{
  max-height: 75%;
  max-width: 40%;
}
.layer1{
  opacity: 0.8;
  clip-path: polygon(0 0, 96% 0, 67% 100%, 0 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layer1 > img {
  display: none;
}
.layer2 {
  opacity: 0.7;
  clip-path: polygon(0 0, 65% 0, 36% 100%, 0 100%);
  z-index: 4;
  display: flex;
  align-items: center;
}
.slider{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 6;
}
.sliderBackground {
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.sliderContainer{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
}
.sliderContainer > img {
  display: none;
}
.sliderControllers{
  align-items: center;
  justify-content: center;
  height: 20%;
  gap: 8px;
}
.rotate{
  transform: rotate(180deg);
}
.widgetName{
  text-align: center;
  font-size: 32px;
  color: #9d191d;
  width: 600px;
  cursor: pointer;
}
}
</style>