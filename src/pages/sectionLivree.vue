<script></script>

<template>
    <div class="containerGeneral">
        <div class="containerwave">
            <img class="wave" src="/img/wave4.png" alt="">
        </div>
        <div class="containerLivree">
            <div class="containerTitle">
                <p class="text-white testStyle titleStyle"> BE A BETTER DRIVER</p>
            </div>

            <div class="containerContent">
                <div class="wrapperLivrea">
                  
                </div>
                <div class="wrapperText">
                    <p class="text-white anta-regular">Non lasciare Indietro nessun decimo di secondo e non sprecare il tuo tempo. Ottimizza i tempi, gestisci al meglio i tuoi tempi, crea strategie e tanto altro. Cosa stai aspettando? </p>
                </div>
            </div>
       
        </div>     
        <div class="containerwaveBottom">
            <img class="waveBottom" src="/img/wave4.png" alt="">
        </div>   
    </div>
</template>

<style scoped>
.containerGeneral{
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
}
/**CSS CONTAINER WAVE */
.containerwave{
    height: 200px;
}
.containerwaveBottom{
    height: 200px;
    display: flex;
    align-items: flex-end;
    margin-bottom: -5px;
}
.wave{
  
    width: 100%;
    object-fit: cover;
}
.waveBottom{
    width: 100%;
    object-fit: cover;
    transform: rotate(180deg);
}
/**CSS CONTAINER LIVREE */
.containerLivree{
    width: 90%;
    height: calc(100%-400px);
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
}
.titleStyle{
    font-size: 70px;
}
.containerContent{
    width: 100%;
    height: calc(100%-400px);

    display: flex;
    padding: 20px;
}
.imgStyle{
    width: 300px;
}
.testStyle{
    font-family: 'test';
}
.containerTitle{
   width: 100%;
}
.wrapperLivrea{
    width: 50%;
}
.wrapperText{
    width: 50%;
}
/**MEDIA QUERY TABLET */
@media (max-width: 950px) {
.containerContent{
    width: 100%;

    display: flex;
    flex-direction: column-reverse;
}
.titleStyle{
    font-size: 45px;
    text-align: center;
}
.wrapperLivrea{
    width: 100%;
}
.wrapperText{
    width: 100%;
}

}

</style>