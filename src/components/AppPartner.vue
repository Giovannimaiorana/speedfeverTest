<script>

</script>

<template>
<div class="containerPartner">
    <div class="sliderBackground layer1"></div>
    <div class="containerTitlePartner">
        <p class="font-bold text-white anta-regular textTitle">I Nostri Partners</p>
    </div>
    <div class="containerLoghiPartner" >

    </div>
    

</div>

</template>

<style scoped>
.containerPartner {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

}

.sliderBackground {
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 
}

.layer1 {
  opacity: 1;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  z-index: 2;
}

.containerTitlePartner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;

}

.containerLoghiPartner {
  width: 100vw;
  display: flex;
  overflow: hidden;
  z-index: 100;
}

.logo {
  height: 100px;
  margin-right: 150px;
  transition: transform 4s ease-in; 
}

.textTitle {
  font-size: 70px;
  text-align: center;
  z-index: 20;
}


</style>