<script>
import { store } from '../store.js'

export default {
    
    data() {
        return {
            store,
            loadingOpacity: 1,
            componentHidden: false
        }
    },
    created() {
        setTimeout(() => {
            this.fadeOutLoading()
        }, 3000);
    },
    methods: {
        fadeOutLoading() {
            this.loadingOpacity = 0;
            setTimeout(() => {
                this.componentHidden = true;
                this.$emit('loading-finished');
            }, 500);
        }
    }
}
</script>

<template>
     <div class="load" v-show="store.loading && !componentHidden" :style="{ opacity: loadingOpacity }">
       <!-- <img src="/img/logoPbianco.png" alt="">-->
       <img src="/img/biancoSuRosso.webp" alt="">
</div>
</template>


<style scoped>

.load {
    background-color: black;
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.2s ease-in; 
}

.load[style*="opacity: 0"] {
    display: none;
}

img {
    animation: animationdeliveboo 3.5s ease-in-out;
    width: 15vw;
    will-change: opacity;
}

@keyframes animationdeliveboo {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@media (max-width: 767px) {
    img {
    animation: animationdeliveboo 3.5s ease-in-out;
    width: 50vw;
    will-change: opacity;
}
}
</style>
