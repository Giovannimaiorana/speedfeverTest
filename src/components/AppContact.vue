<script>

</script>

<template>
    <div class="containerGeneral">
        <div class="containerImg">
            <img class="logo" src="/img/logobianco.png" alt="">
        </div>
        <div class="containerSocial">
            <div class="logosocial">
                    <a href="https://www.instagram.com/speedfever_?igsh=bHBldXMxNGlkMHRm" target="_blank"> <img src="/img/logoinstagram.svg" alt="logo instagram"></a>
                </div>
                <div class="logosocial">
                    <a href="https://www.tiktok.com/@speed.fever" target="_blank"><img src="/img/logotiktok.svg" alt="logo tik tok"></a>
                </div>
                <div class="logosocial lastSocial">
                    <a href="https://www.youtube.com/channel/UCQw9VWJCOZsdcMFXKt6Ow1g" target="_blank"><img src="/img/logoyoutube.svg" alt="logo tik tok"></a>
                </div>
        </div>
        <div class="containerCo">
            <p class="font-bold text-white poppins-light">* {{ $t('footerOne') }}</p>
            <p class="font-bold text-white poppins-light"> <span class="font-bold"> {{ $t('officeRegistred') }}</span> VIA COLLE FICORONE 11 - 00020 - AGOSTA (RM)</p>
            <p class="font-bold text-white poppins-light"><span class="font-bold">P.IVA</span> 17439841002 </p>
            <p class="font-bold text-white poppins-light">{{ $t('by') }} <span class="font-bold">OVERFAM</span></p>
        </div>

    </div>
</template>
<style scoped>
.containerGeneral{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
}
.containerImg{
    width: 100%;  
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo{
    width: 20%;
}
.containerSocial{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.containerCo{
    width: 50%;
    text-align: center;
    margin-top: 10px;
    
}
.containerCo p{
    font-size: 7px;
}
.logosocial{
    margin-top: 10px;
    width: 20px;
}
@media (max-width: 767px) {
    .logo{
    width: 50%;
}
.containerCo{
    width: 90%;
    text-align: center;
    margin-top: 10px;
    
}
}
</style>