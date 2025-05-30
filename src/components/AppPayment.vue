<script>

</script>

<template>
    <div class="containerGeneral">
       <div class="wrapperGeneral">
           <div class="containerPlan">
                <div class="plan1">
                    <div>
                        <p class="text-white testStyle titleStyle text-xl text-center">ABBONAMENTO MENSILE</p>
                    </div>
                    <div class="">
                        <ul class="text-white anta-regular">
                            <li>Accesso a tutti gli overlay</li>
                            <li>Nessun limite fps</li>
                            <li>Nessun limite di personalizzazione</li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-white anta-regular text-3xl text-center">4,90 € </p>
                    </div>
                    <div>
                        <button class="button type1">
                           <span class="btn-txt font-bold anta-regular">DOWNLOAD</span>
                        </button>
                    </div>
                   
                </div>
                <div class="plan2">
                    <p class="consigliatoStyle anta-regular">BESTSELLER</p>
                    <div>
                        <p class="text-white testStyle titleStyle text-3xl text-center">ABBONAMENTO TRIMESTRALE</p>
                    </div>
                    <div class="">
                        <ul class="text-white anta-regular">
                            <li>Accesso a tutti gli overlay</li>
                            <li>Nessun limite fps</li>
                            <li>Nessun limite di personalizzazione</li>
                            <li>Acquistando tre abbonamenti trimestrali <br>riceverai un mese gratis</li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-white anta-regular text-3xl text-center">4,90 € </p>
                    </div>
                    <div>
                        <button class="button type1">
                           <span class="btn-txt font-bold anta-regular">DOWNLOAD</span>
                        </button>
                    </div>
                </div>

                <div class="plan3">
                    <div>
                        <p class="text-white testStyle titleStyle text-xl text-center">ABBONAMENTO ANNUALE</p>
                    </div>

                    <div class="">
                        <ul class="text-white anta-regular">
                            <li>Accesso a tutti gli overlay</li>
                            <li>Nessun limite fps</li>
                            <li>Nessun limite di personalizzazione</li>
                            <li>Acquistando il piano annuale il prezzo<br> rimane invariato in modo permanente</li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-white anta-regular text-3xl text-center">4,90 € </p>
                    </div>
                    <div>
                        <button class="button type1">
                           <span class="btn-txt font-bold anta-regular">DOWNLOAD</span>
                        </button>
                    </div>
                </div>
                
           </div>
        
       </div>
    </div>
</template>

<style scoped>
/**CSS CONTAINER  */
.containerGeneral{
    width: 100%;
    display: flex;
    align-items: center;

}
.wrapperGeneral{
    width: 90%;
    margin: auto;
    height: 700px;
    display: flex;
    flex-direction: column;
}
.containerPlan{
    width: 100%;
    height: 80%;
    display: flex;
    gap: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    overflow-y: scroll;
}
.containerPlanFree{
    width: 100%;
    height: 20%;
    padding: 10px; 
}
.plan1{
   width: 30%; 
   height: 80%;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   border-radius: 10px;
   background-color: #9d191d78;

}
.plan2{
   width: 40%; 
   height: 100%;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   border-radius: 10px;
   background-color: #9d191d78;
   position: relative;
}
.consigliatoStyle{
    position: absolute;
    color: #9d191d;
    top: -45px;
    font-weight: bold;
    font-size: 30px;
}
.plan3{
   width: 30%; 
   height: 80%;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   border-radius: 10px;
   background-color: #9d191d78;
}
.planFree{
    width: 100%;
    padding: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;

}
.testStyle{
    font-family: 'test';
}
ul {
        list-style-type: disc; 
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
  font-weight: 900;
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


/**CSS MEDIA QUERY */
@media (max-width: 950px) {
.containerPlan{
    flex-direction: column;
    gap: 10px;
}
.plan1{
   width: 100%; 
}
.plan2{
   width: 100%; 
}
.plan3{
   width: 100%; 
}
.consigliatoStyle{
display: none;
}
.containerPlanFree{
    width: 100%;
    margin-top: 0px;
}
button{

    margin-top: 10px;
    margin-bottom: 5px;
}
}
</style>