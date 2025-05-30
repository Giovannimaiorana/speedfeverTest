<script>
import axios from "axios";
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
      email: "",
      errorMessage: "",
    };
  },
  computed: {
    allChecked() {
      return this.checkbox1 && this.checkbox2;
    },
    isValidEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
    isValidForm() {
      return this.email && this.isValidEmail && this.allChecked;
    },
  },
  methods: {
    validateEmail() {
      if (!this.isValidEmail) {
        this.errorMessage = "Please enter a valid email address.";
      } else if (!this.allChecked) {
        this.errorMessage = "Please check both checkboxes.";
      } else {
        this.errorMessage = ""; // Nessun errore se tutto è valido
      }
    },

    async submitForm() {
  console.log("API URL:", import.meta.env.VITE_API_URL); // Debug



  this.validateEmail();

  if (!this.isValidForm) {
    return;
  }

  try {
    const response = await axios.post("https://speedfeverapi.bubbleapps.io/version-test/api/1.1/wf/createnewsletteremail", {
      email: this.email,
      key: "ldU$@gzA*qac81!BCVDfzE#D3c6*HNPB!G9O" // Chiave richiesta
    });

    if (response.status === 200) {
      alert("Subscription successful!");
      this.email = "";
      this.checkbox1 = false;
      this.checkbox2 = false;
      this.errorMessage = "";
    }
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    this.errorMessage = "An error occurred. Please try again.";
  }
}
  }
};
</script>



<template>
    <div class="containerGeneral">
        <div class="clipped-rectangle">
            <div class="containerLeft">
                <p class="styleColor poppins-semibold">JOIN</p>
                <p class="styletext poppins-semibold">{{ $t('subscribe') }}</p>

            </div>
            <div class="containerRight">
                <div class="inputContainer">
                    <input class="" type="text" id="userInput" placeholder="Email"  @blur="validateEmail" v-model="email">
                    
                    <!---->
                    <svg @click="submitForm" v-if="isValidForm" class="active" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-466.000000, -985.000000)" fill="#000000"> <path d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z" id="arrow-right-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                    <svg v-else class="inactive" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-466.000000, -985.000000)" fill="#ffffff"> <path d="M489.535,1001.879 L483.879,1007.54 C483.488,1007.93 482.855,1007.93 482.465,1007.54 C482.074,1007.14 482.074,1006.51 482.465,1006.12 L486.586,1002 L476,1002 C475.447,1002 475,1001.552 475,1001 C475,1000.447 475.447,1000 476,1000 L486.586,1000 L482.465,995.879 C482.074,995.488 482.074,994.854 482.465,994.465 C482.855,994.074 483.488,994.074 483.879,994.465 L489.535,1000.121 C489.775,1000.361 489.85,1000.689 489.795,1001 C489.85,1001.311 489.775,1001.639 489.535,1001.879 L489.535,1001.879 Z M494,985 L470,985 C467.791,985 466,986.791 466,989 L466,1013 C466,1015.21 467.791,1017 470,1017 L494,1017 C496.209,1017 498,1015.21 498,1013 L498,989 C498,986.791 496.209,985 494,985 L494,985 Z" id="arrow-right-square" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>                   
                 </div>
                 <p v-if="errorMessage" class="text-xs font-bold ">*{{ errorMessage }}</p>
                <p class="text-black poppins-semibold text-xs mt-1">{{ $t('completing') }}</p>
              
                <div class="flex mt-2">
                    <input type="checkbox" v-model="checkbox1">
                    <label class="checkboxText ml-1" for="">{{ $t('readOne') }} <router-link to="/privacy"  class="underline cursor-pointer font-bold">Privacy Policy</router-link> {{ $t('readTwo') }}
                    </label>
                </div>     
                <div class="flex mt-1">
                    <input type="checkbox" v-model="checkbox2">
                    <label class="checkboxText ml-1" for="">{{ $t('consent') }}
                    </label>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.containerGeneral{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    padding-top: 50px;
}
.clipped-rectangle {
    width: 80%;
    height: 200px;
    background-color: #9d191d;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 15% 100%);
    display: flex;
}
.containerLeft{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.containerRight{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
}
.styleColor{
font-size: 100px;
}
.styletext{
    margin-top:-30px;
    margin-left: 65px;
    font-size: 10px;
}
#userInput{
    width: 50%;
    height: 50px;
    border-bottom:3px solid black;
    background-color: #9d191d;
}
.containerRight input[type="text"]::placeholder {
    color: black;
    opacity: 0.5;
    font-size: 25px; 
    font-family: "Poppins", sans-serif;
}
.containerRight input[type="text"]:focus {
    outline: none;
    border-color: initial; 
    box-shadow: none;    
      
}
.containerRight input[type="text"] {
    font-size: 20px;        
    line-height: 30px;      
}
.checkboxText{
    font-size: 9px;
}
.inputContainer{
    position: relative;
    width: 100%;
    display: flex;

}
.inputContainer .active{
    cursor: pointer;
    height: 35px;
    margin-top: 5px;
}
.inactive{
    cursor: not-allowed;
    height: 35px;
    margin-top: 5px;
}
@media (max-width: 1023px) {

}

@media (max-width: 950px) {
    .containerGeneral{
    flex-direction: column;
}
.clipped-rectangle {
    width: 100%;
    height: auto;
    background-color: #9d191d;
    clip-path: none;
    display: flex;
    flex-direction: column;
    padding: 20px;
} 
.containerLeft{
    width: 100%;
    display: flex;
    justify-content: center;
}
.styletext{
    margin-top:0;
    margin-left: 0px;
    font-size: 15px;
}
.containerRight{
    width: 100%;
    align-items: center;
    margin-top: 20px;
}
.containerRight input[type="text"] {
    font-size: 20px;        /* Dimensione del testo */
    line-height: 30px;      /* Altezza del cursore */
    text-align: center;
}
.containerGeneral{
 
    padding-bottom: 0px;
    padding-top: 0px;
}
.inputContainer{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
}
</style>