<script>

</script>
<template>
    <div class="cardPriceContainer">
        <div class="sezioneTitle">
            <p class="poppins-semibold text-white text-4xl text-left "></p>
        </div>
        <div class="wrapperCard">
            <div class="cardSmall">
                <div class="titleCard">
                    <p class="poppins-semibold text-white text-2xl text-left ">Basic</p>
                </div>
                <div class="bodyCard">
                    <p class="text-white text-xs">Ideal for individuals who only need access to basic features.</p>
                    <p class=" poppins-light  text-white text-left mt-3 text-sm"> - Ability to explore the app</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - No card needed</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - Basic features</p> 
                </div>
                <div class="bodyPrice">
                    <p class=" poppins-semibold  text-white text-left mt-5 text-2xl">Free</p> 
                </div>
                <div class="bodyPrice mt-5">
                    <button class="button type1">
                         <span class="btn-txt text-sm poppins-semibold">DOWNLOAD FREE</span>
                      </button>
                </div>
            </div>

            <div class="cardSmall">
                <div class="titleCard">
                    <p class="poppins-semibold text-white text-2xl text-left ">Yearly</p>
                </div>
                <div class="bodyCard">
                    <p class="text-white text-xs">Ideal for individuals who need advanced features with annual billing.</p>
                    <p class=" poppins-light  text-white text-left mt-3 text-sm"> - Access to premium features</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - Support 24/7</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - Yearly billing</p> 
                </div>
                <div class="bodyPrice">
                    <p class=" poppins-semibold  text-white text-left mt-5 text-2xl"> 24.90€</p> 
                </div>
                <div class="bodyPrice mt-5">
                    <button class="button type1">
                         <span class="btn-txt poppins-semibold">DOWNLOAD APP</span>
                      </button>
                </div>
            </div>
            <div class="cardSmall">
                <div class="titleCard">
                    <p class="poppins-semibold text-white text-2xl text-left ">Monthly</p>
                </div>
                <div class="bodyCard">
                    <p class="text-white text-xs">Ideal for individuals who need advanced features.</p>
                    <p class=" poppins-light  text-white text-left mt-3 text-sm"> - Access to premium features</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - Support 24/7</p> 
                    <p class=" poppins-light  text-white text-left mt-2 text-sm"> - Monthly billing</p> 
                </div>
                <div class="bodyPrice">
                    <p class=" poppins-semibold  text-white text-left mt-5 text-2xl"> 2.90€</p> 
                </div>
                <div class="bodyPrice mt-5">
                    <button class="button type1">
                         <span class="btn-txt poppins-semibold">DOWNLOAD APP</span>
                      </button>
                </div>
            </div>
        </div>

        <div>


        </div>

    </div>
</template>
<style scoped>
.cardPriceContainer{
    height: 100%;
    width: 100%;
    padding: 20px;
}
.wrapperCard{
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    margin-top: 50px;
}
.cardSmall{
    width: 30%;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    padding-bottom: 50px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);


}
.cardBig{
    width: 30%;
    height: auto;
    padding: 20px;
    padding-bottom: 50px;

    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);
}
.evidenceColor{
    color: #9d191d;
}
.titleCard{
    width: 100%;
}
.bodyPrice{
    width: 100%;
    display: flex;
    justify-content: center;
}
.sezioneTitle{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.button {
  height: 50px;
  width: 200px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  border: 3px solid #9d191d;
  overflow: hidden;
  border-radius: 10px;
  color:#9d191d;
  transition: all 0.5s ease-in-out;
}

.btn-txt {
  z-index: 1;
  letter-spacing: 5px;
}

.type1::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.5s ease-in-out;
  background-color:  #9d191d;
  border-radius: 30px;
  visibility: hidden;
  height: 10px;
  width: 10px;
  z-index: -1;
}

.button:hover {
  box-shadow: 1px 1px 200px #252525;
  color: #fff;
  border: none;
}

.type1:hover::after {
  visibility: visible;
  transform: scale(100) translateX(2px);
}

@media (max-width: 767px) {
    .wrapperCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
}
.cardSmall{
    width: 100%;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);


}
.cardBig{
    width: 100%;
    height: auto;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.476);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.18);
}
}
</style>