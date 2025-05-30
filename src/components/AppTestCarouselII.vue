<script>
import AppDropDown from './AppDropDown.vue';
import { store } from '../store.js'

export default {
    data() {
        return {
            sliderElements: store.sliderElements,
            currentImageKey: '',
            lastImg: '',
            afterImg: '',
            afterImgII:'',
            lastImgII:'',
            showDropdown: false,
            isAnimating: false,
            animationDirection: '' 
        };
    },
    methods: {
        changeImage(key) {
            this.currentImageKey = key;
            this.updateAdjacentImages(); 
        },
        goBackward() {
       
            this.animationDirection = 'backward'; 
            this.triggerAnimation();
            const keys = Object.keys(this.sliderElements);
            const currentIndex = keys.indexOf(this.currentImageKey);
            const newIndex = (currentIndex - 1 + keys.length) % keys.length;
            this.changeImage(keys[newIndex]);
        },
        goForward() {
            this.animationDirection = 'forward'; 
            this.triggerAnimation();
            const keys = Object.keys(this.sliderElements);
            const currentIndex = keys.indexOf(this.currentImageKey);
            const newIndex = (currentIndex + 1) % keys.length;
            this.changeImage(keys[newIndex]);

;
        },
        startAnimation(direction) {
            this.isAnimating = false;
            this.$nextTick(() => {
                this.isAnimating = true;
                this.animationDirection = direction;
            });
        },
        handleAnimationEnd() {
            this.isAnimating = false;
        },
        triggerAnimation() {
    this.isAnimating = false;  // Disattiva l'animazione momentaneamente

    this.$nextTick(() => {
        setTimeout(() => {
            this.isAnimating = true;  // Riattiva l'animazione con un piccolo delay
        }, 10);  // Delay di 10ms per assicurare il reset
     });
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
        updateAdjacentImages() {
            const keys = Object.keys(this.sliderElements);
            const currentIndex = keys.indexOf(this.currentImageKey);
            
            // Calcolo dell'immagine precedente
            const lastIndex = (currentIndex - 1 + keys.length) % keys.length;
            this.lastImg = this.sliderElements[keys[lastIndex]].img;

            const lastIndexII = (currentIndex - 2 + keys.length) % keys.length;
            this.lastImgII = this.sliderElements[keys[lastIndexII]].img;

            // Calcolo dell'immagine successiva
            const nextIndex = (currentIndex + 1) % keys.length;
            this.afterImg = this.sliderElements[keys[nextIndex]].img;
            
            const nextIndexII = (currentIndex + 2) % keys.length;
            this.afterImgII = this.sliderElements[keys[nextIndexII]].img;
        },


    },
    created() {
        this.currentImageKey = 'Live Telelemetry';
        this.updateAdjacentImages();
    },
    components: { AppDropDown }
};
</script>

<template>
    <div class="sliderContainer  poppins-semibold">
        <div class="containerContent">
            <div class="wrapperContainerLeft">
                <div  class="containerLeft">
                    <div class="containerNUmber">

                    <p class="nameStyle poppins-semibold " :class="{ 'slide-out-down': isAnimating }"
                    @animationend="handleAnimationEnd">{{myToUpperCase(currentImageKey)}}</p> 
                    </div>
                    <div class="containerImg">
                        <div class="containerSmallImg">
                            <img :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]"  @animationend="isAnimating = false" :src="getImagePath(lastImg)"  alt="">
                        </div>
                        <div class="containerBigImg">
                            <img :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]"  @animationend="isAnimating = false" :src="getImagePath(sliderElements[currentImageKey].img)" alt="">
                        </div>
                        <div class="containerSmallImg">
                            <img :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]"  @animationend="isAnimating = false" :src="getImagePath(afterImg)" alt="">
                        </div>
                        <div class="containerExtraSmall">
                            <img  :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]"  @animationend="isAnimating = false" :src="getImagePath(afterImgII)" alt="">
                            <div class="overlay"></div>
                        </div>
                        <div class="containerExtraSmallII">
                            <img :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]"  @animationend="isAnimating = false" :src="getImagePath(lastImgII)" alt="">
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="containerButton">
                        <div>
                            <div @click="goBackward" class="arrow rotate"></div>
                        </div>
                        <div class="containerIndex">
                            <div v-for="(element, key) in sliderElements" :key="key" :class="['rectIndex', { 'activeIndex': key === currentImageKey }]" class="rectIndex cursor-pointer" @click="changeImage(key)"></div>
                        </div>
                        <div>
                            <div @click="goForward" class="arrow"></div>
                        </div>
                    </div>
                    <div class="containerDescription">
                        <p :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]"  @animationend="isAnimating = false"  class="descriptionStyle poppins-light">{{ sliderElements[currentImageKey].description }}</p>
                        
                    </div>
                </div>
   
            </div>

        </div>
        
    </div>
</template>

<style scoped>
.sliderContainer{
    width: 100%;
    height: 100%;
    padding: 12px;
    
}
.containerContent{
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    gap: 30px;
}
.containerLeft{
    width: 100%;
    height: 100%;
    padding: 30px;
    border-radius: 10px;
}
.wrapperContainerLeft{
    width: 100%;
    height: 100%;
}
.containerButton{
    margin-top: 10px;
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.containerDescription{
    margin-top: 10px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.descriptionStyle{
   color: white;
    font-size: 20px;
}
.containerIndex{
    display: flex;
    gap: 10px;
}
.rectIndex{
    width: 20px;
    height: 2px;
    background-color: white;
}
.activeIndex{
    background-color: #9d191d;
    width: 20px;
    height: 3px;
}
.containerRight{
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);
    border-radius: 10px;
}
.containerRightI{
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
    overflow-y: scroll;
}
.containerRightII{
    border-radius: 10px;
    background-color: rgba(10, 5, 5, 0.576);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.18);
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
}
.containerNUmber{
display: flex;
align-items: center;
justify-content: center;
overflow-x: hidden;
}
.containerImg{
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
}
.containerSmallImg{
    width: 20%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px ;
    padding: 10px;
    border-radius: 10px;
    z-index: 10;
}
.containerExtraSmall{
    position: absolute;
    width: 10%;
    height: 150px;
    top: 40px;
    padding: 10px;
    right:400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.443);
    z-index:2;
}
.containerExtraSmallII{
    position: absolute;
    width: 10%;
    height: 150px;
    top: 40px;
    left: 400px;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.443);
    z-index:2;
}
.containerExtraSmallII img{
    height: 100%;
}
.overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.717);
    z-index: 3;
    border-radius: 10px;
}
.containerExtraSmall img{
    height: 100%;
}
.containerSmallImg img{
    height: 50%;
    z-index: 2;
}
.containerBigImg{
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
   
}
.containerBigImg img{
    height: 100%;
}
.indexStyle{
   font-size: 150px;
   color: #9d191d;
}
.nameStyle{
    font-size: 150px;
    color: #9d191d;
    margin-left: 20px;
}
.arrow{
  background-color: white;
  height: 40px;
  width:40px;
  clip-path: polygon(0 15%, 15% 0, 60% 49%, 15% 100%, 0 85%, 32% 50%);
}
.arrow:hover {
  cursor: pointer;
  background-color: #9d191d;
}
.rotate{
  transform: rotate(180deg);
}
.forward.activeAnimation {
    animation: slide-in-right 0.9s ease-in both;
}

.backward.activeAnimation {
    animation: slide-in-left 0.9s ease-in both;
}
.containerIndexII{
    width: 100%;
    height: 100%;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.textStyle{
    font-size: 30px;
}
.textStyle:hover{
    color: #9d191d;
}
.current{
    color: #9d191d;
}
@keyframes slide-in-right {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    70% {
        transform: translateX(-10%);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    70% {
        transform: translateX(10%);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
/* Quando scompare verso il basso */
@keyframes slide-out-down {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(100%);
        opacity: 0;
    }
}

/* Quando appare dall’alto */
@keyframes slide-in-top {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Classe per attivare l’animazione in uscita */
.slide-out-down {
    animation: slide-out-down 0.5s ease-in forwards;
}

/* Classe per attivare l’animazione in entrata */
.slide-in-top {
    animation: slide-in-top 0.5s ease forwards;
}

</style>