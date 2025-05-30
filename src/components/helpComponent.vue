<script></script>

<template>
   <div class="containerHelp">
    <div class="containertext">
        <p class="poppins-semibold text-white text-6xl text-left">{{ $t('help') }}</p>
        <p class="poppins-semibold text-white text-3xl text-left"> {{ $t('contact') }} <span class="text-sm cursor-pointer hov"> <a href="mailto:support@speedfever.app" >support@speedfever.app</a></span></p>
    </div>

   </div> 
</template>

<style scoped>
.containerHelp{
    width: 100%;
    height: auto;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
}
.hov:hover{
    color: #9d191d;
}

</style>