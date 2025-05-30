<script>

</script>

<template>
    <div class="containerGeneral">
        <div class="wrapperContainer">
            <div class="wrapperTitleContainer">
                <div class="containerLogo">
                    <img class="logo" src="/img/appOverlay.svg" alt="">
                </div>
                <div class="containerMotto">
                    <div>
                        <p class="poppins-light text-white text-MD styleDescription"><span class="poppins-semibold text-5xl"><span class="colorpers">S</span>PEED <span class="colorpers">F</span>EVER</span> <br>{{ $t('motto') }}</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>

</template>

<style scoped>
.containerGeneral{
    width: 100%;
    height: 100%;
    padding: 40px;
    overflow-x: hidden ;
}
.wrapperContainer{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.containerLogo{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
}
.containerMotto{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    margin-top: 250px;
}
.containerTitleMotto{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo{
    width: 90%;
}
.wrapperTitleContainer{
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 0px;
}
.testStyle{
    font-family: 'test';
}
.titleStyle{
    font-size: 70px;
}
.colorpers{
    color: #9d191d;
}
/**MEDIA QUERY TABLET */
@media (max-width: 950px) {
    .containerGeneral{
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-x: hidden ;
}
    .wrapperContainer{
    width: 90%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.containerLogo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
.logo{
    width: 100%;
}
.containerMotto{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin-top: 0;
}

.wrapperTitleContainer{
    flex-direction: column;

}
.titleStyle{
    font-size: 40px;
}
.styleDescription{
    font-size: 18px;
}
}
</style>