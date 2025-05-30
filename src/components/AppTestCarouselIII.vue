<script>
import AppDropDown from './AppDropDown.vue';
import { store } from '../store.js';
import { useI18n } from 'vue-i18n';


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
        getLocalizedDescription(key) {
            const { locale } = useI18n(); // Ottieni la lingua corrente
            return locale.value === 'it'
                ? this.sliderElements[key].description
                : this.sliderElements[key].descriptionEn;
        },
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
        this.currentImageKey = 'Live Telemetry';
        this.updateAdjacentImages();
    },
    components: { AppDropDown }
};
</script>
<!--<div class="text-left contIndex" v-for="(element, key) in sliderElements" :key="key" >
    <p :class="{ 'current': key === currentImageKey }" @click="changeImage(key)" class="text-white poppins-semibold cursor-pointer text-xl">{{myToUpperCase(key) }}</p>
</div>  -->

<template>
<div class="containerGeneralCarousel">
    <div class="continerLeft">
        <div class="container1">
            <p class="poppins-light text-md text-center">WIDGET OVERLAY</p>
        </div>

        <div class="grid grid-cols-2 gap-4">
        <div class="text-left contIndex" v-for="(element, key) in sliderElements" :key="key">
            <p :class="{ 'current': key === currentImageKey }" @click="changeImage(key)" class="text-white poppins-bold cursor-pointer rect text-xl">{{ myToUpperCase(key) }}</p>
        </div>
    <div>

    </div>
    <div></div>
</div>

       
    </div>
    <div class="continerRight">
        
        <div class="containerOverlay">

            <p class="poppins-light text-md text-center text-white mucc ">WIDGET OVERLAY</p>
        </div>

        <div class="containerTransparent">
            <div  >
       
            </div>
            <div>
                <img :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]" :src="getImagePath(sliderElements[currentImageKey].img)" alt="">

            </div>
            <div class="text-left">
                <p class="nameStyle poppins-semibold text-4xl ">{{myToUpperCase(currentImageKey)}}</p> 
                <p :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]"  class="descriptionStyle poppins-light text-xs"> {{ getLocalizedDescription(currentImageKey) }}</p>
            </div>
        </div>



        <div class="containerMobile">
            <div class="containerImgMobile">
                <img :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]" :src="getImagePath(sliderElements[currentImageKey].img)" alt="">

            </div>
            <div class="containerIndex">
                <p @click="goBackward" class="text-white cursor-pointer"> -PREV</p>
                <p @click="goForward" class="text-white cursor-pointer">NEXT-</p>

            </div>

            <div>
                <p class="nameStyle poppins-semibold text-4xl ">{{myToUpperCase(currentImageKey)}}</p> 
                <p :class="[{ forward: animationDirection === 'forward', backward: animationDirection === 'backward' }, { activeAnimation: isAnimating }]"  class="descriptionStyle poppins-light text-xs"> {{ getLocalizedDescription(currentImageKey) }}</p>
            </div>

        </div>
    </div>
</div>
</template>

<style scoped>
.container1{
    width: 100%;
    color: #9d191d;
}
.mucc{
    display: none;
}
.containerGeneralCarousel{
    width: 100%;
    height: 600px;
    display: flex;
}
.contIndex{
    width: 200px;
}
.rect{
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
}
.containerOverlay{
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.135));
    backdrop-filter: blur(4px); /* Applicazione del blur */
}
.continerLeft{
width: 50%;
height: 100%;
background-color: black;
display: flex;
padding: 35px;
gap: 90px;
align-items: flex-start;
flex-direction: column;
color: black;
}
.nameStyle{
    color: #9d191d;
}
.current{
    color: black;
    background-color: #9d191d;
    height: 100%;
    padding-left: 10px;
    border-radius: 5px;
}
.continerRight{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(/img/widgetBackTest.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;

}
.line{
    letter-spacing: -5px;
}
.containerTransparent{
max-width: 400px;    height: 500px;
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color:#3c3c3ca8;
    border-radius: 5px;
    position: absolute;
    left: -40px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.18);
}
.descriptionStyle{
    color: white;
}
.containerMobile{
display: none;
}
@media (max-width: 984px) {
    .containerTransparent{
     max-width: 400px;    
     height: 500px;
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color:#3c3c3ca8;
    border-radius: 5px;
    position: absolute;
    left: -10px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.18);
} 
}
.containerOverlay{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.611);
    backdrop-filter: blur(4px); /* Applicazione del blur */
}
@media (max-width: 900px) {
    .containerTransparent{
display: none;
    }   
    .continerLeft{
        display: none;
    }
    .continerRight{
      width: 100%;
    }
    .containerMobile{
        display: block;
        width: 90%;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 10px;
        transform: translate(-50%,-50%);
        background-color: rgba(0, 0, 0, 0.643);
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.18);
        z-index: 10;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
    }
    .containerOverlay{
        padding-top: 10px;
    }
    .mucc{
        display: block;
    }
.containerImgMobile{
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.containerImgMobile img{
    height: 100%;
}
.containerIndex{
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

}
</style>