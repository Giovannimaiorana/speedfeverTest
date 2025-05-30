<script>
export default {
  name: "sectionPrivacy"
}
</script>

<template>
    <div class="containerGenPrivacy">
        <div class="containerLogo">
            <router-link to="/"><img class="logo" src="/img/biancoSuRosso.webp"  alt=""></router-link> 
          <!--  <router-link to="/" class="text-white text-4xl poppins-semibold cursor-pointer hov">HOME</router-link>-->
        </div>
        <div class="wrapperPrivacy">
            <div class="rectangleInfoPrivacy">
                <p class="font-bold text-white poppins-light text-center">{{ $t('step1') }}</p>
                <span class=" text-white poppins-light personalizedtraf mt-2"> {{ $t('step2') }} : </span>
                <span class=" text-white poppins-light personalizedtraf1"> 23/01/2025</span>
                <p class="text-white poppins-light text-sm mt-2">{{ $t('step3') }}</p>
                <p class="text-white poppins-light text-lg personalizedtraf2 mt-2">{{ $t('step4') }}</p>
                <p class=" text-white poppins-light personalizedtraf"> {{ $t('step5') }}</p>
                <span class="text-white poppins-light personalizedtraf">- {{ $t('step6') }} : </span> <span class="text-white poppins-light text-sm ">{{ $t('step7') }}</span>
                <p class="text-white poppins-light text-sm "> {{ $t('step8') }}</p>
                <p class="text-white poppins-light text-lg personalizedtraf2 mt-2">{{ $t('step9') }}</p>
                <p class=" text-white poppins-light personalizedtraf"> {{ $t('step10') }}</p>
                <p class="text-white poppins-light text-sm">- {{ $t('step11') }} </p>
                <p class="text-white poppins-light text-sm">-  {{ $t('step12') }}</p>
                <p class="text-white poppins-light text-sm">{{ $t('step13') }}</p>
                <p class="text-white poppins-light text-lg personalizedtraf2 mt-2">{{ $t('step14') }}</p>
                <p class="text-white poppins-light text-sm">{{ $t('step15') }}</p>
                <p class="text-white poppins-light text-lg personalizedtraf2 mt-2"> {{ $t('step16') }}</p>
                <span class="text-white poppins-light personalizedtraf">-{{ $t('step17') }}</span> <span class="text-white poppins-light text-sm "> {{ $t('step18') }}</span>
                <p></p>
                <span class="text-white poppins-light personalizedtraf">-{{ $t('step19') }} </span> <span class="text-white poppins-light text-sm "> {{ $t('step20') }}</span>
                <p></p>
                <span class="text-white poppins-light personalizedtraf">- {{ $t('step21') }} </span> <span class="text-white poppins-light text-sm ">{{ $t('step22') }}</span>
                <p></p>
                <span class="text-white poppins-light personalizedtraf"></span> <span class="text-white poppins-light text-sm "> {{ $t('step24') }}</span>
                    <p></p>
                <p class="text-white poppins-light text-lg personalizedtraf2 mt-2">{{ $t('step25') }}</p>
                <p class="text-white poppins-light text-sm">{{ $t('step26') }}</p>
                <p class="text-white poppins-light text-lg personalizedtraf2 mt-2"> {{ $t('step27') }}</p>
                <p class="text-white poppins-light text-sm">{{ $t('step28') }}</p>
                <p class="text-white poppins-light text-lg personalizedtraf2 mt-2"> {{ $t('step29') }}</p>
                <p class="text-white poppins-light text-sm"> {{ $t('step30') }}</p>
                <p class="text-white poppins-light text-lg personalizedtraf2 mt-2">{{ $t('step31') }}</p>
                <p class=" text-white poppins-light personalizedtraf"> {{ $t('step32') }}</p>
                <span class="text-white poppins-light personalizedtraf">- Email :{{ $t('step33') }} </span> <span class="text-white poppins-light text-sm "> Inserire Email di Contatto]</span>
                <p></p>
                <span class="text-white poppins-light personalizedtraf">- {{ $t('step35') }}</span> <span class="text-white poppins-light text-sm "> VIA COLLE FICORONE 11 - 00020 - AGOSTA (RM)</span>
                <p class="text-white poppins-light text-sm">{{ $t('step37') }}.
                </p>
                <router-link to="/"><p class="text-white text-center mt-5">BACK</p></router-link> 
            </div>
        </div>

    </div>
</template>

<style scoped>
.containerGenPrivacy{
    width: 100%;
    height: 100vh;
    background-color: black;
    background-image: url(/img/backgroundimage8.png);
    /**t4 figa */
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
}
.wrapperPrivacy{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

}
.rectangleInfoPrivacy{
    width: 90%;
    height: 70vh;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.68);
    border-radius: 10px;
    padding: 20px;
}
.textcolor{
    color: #9d191d;
}
.containerLogo{
    width: 100%;
    display: flex;
    align-items: center;
}
.containerLogo img{
    height: 100px;
}
.hov:hover{
    color: #9d191d;
}
.personalizedtraf{
    font-size: 10px;
    font-weight: bold;
}
.personalizedtraf1{
    font-size: 10px;
}
.personalizedtraf2{
    font-weight: bold;
}
</style>