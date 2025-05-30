<script>

</script>

<template>
    <div class="containerGeneral">
        <div class="wrapperContainer">
            <div class="containerLeft">
                <img src="/img/discordIcon.svg" alt="">
            </div>
            <div class="containerRight">
                <p class="styleColor poppins-semibold">JOIN</p>
                <p class="styleColorIII poppins-semibold">US.</p>
                <div class="bodyPrice">
                    <button class="button type1">
                        <a href="https://discord.gg/EEwqq6dxGc" target="_blank"> <span class="btn-txt poppins-semibold">{{ $t('join') }}</span></a>
                      </button>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped>
.containerGeneral{
    width: 100%;
    height: auto;
    padding: 40px;
}
.wrapperContainer{
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
}

.containerLeft{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}
.containerLeft img{
    width: 70%;
}
.containerRight{
    width: 50%;
    height: 100%;
}
.styleColor{
    color: #9d191d;
    font-size: 150px;
}
.styleColorII{
    color: #9d191d;
    font-size: 20px;
    margin-top: -60px;
    margin-left: 295px;
}
.styleColorIII{
    color: #9d191d;
    font-size: 150px;
    margin-top: -100px;  
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
  margin-top: -40px;
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
.type1:hover::after {
  visibility: visible;
  transform: scale(100) translateX(2px);
}
.button:hover {
  box-shadow: 1px 1px 150px #9d191d;
  color: #9d191d;
  border: 2px solid  #9d191d;
}

.type1:hover::after {
  visibility: visible;
  transform: scale(100) translateX(2px);
}

@media (max-width: 950px) {
    .wrapperContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
}
    .containerLeft{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.containerLeft img{
    width: 70%;
}
.containerRight{
    width: 100%;
    height: 100%;
    text-align: center;
}

}
@media (max-width: 762px) {
    .styleColor{
    color: #9d191d;
    font-size: 120px;
}
}
</style>