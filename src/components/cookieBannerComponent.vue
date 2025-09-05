<script>
export default {
  name: 'CookieBannerComponent',
  data() {
    return {
      showBanner: false,
    };
  },
  mounted() {
    const consent = localStorage.getItem('cookiesAccepted');
    if (consent === null) {
      this.showBanner = true;
    }
  },
  methods: {
    acceptCookies() {
      localStorage.setItem('cookiesAccepted', 'true');
      this.showBanner = false;
      this.$emit('consent-given', true);
    },
    rejectCookies() {
      localStorage.setItem('cookiesAccepted', 'false');
      this.showBanner = false;
      this.$emit('consent-given', false);
    },
  },
};
</script>


<template>
    <div class="wrapp">


<div  id="cookie-banner" class="containerText">
<p>Tipologie di cookie utilizzate
Speed Fever utilizza esclusivamente cookie tecnici, indispensabili per garantire il corretto funzionamento dell’app e del sito. Non utilizziamo cookie di profilazione, pubblicitari o di terze parti.

I cookie tecnici impiegati possono includere:

Cookie di sessione: permettono il login e la gestione sicura dell’account utente.

Cookie di preferenze: salvano le impostazioni dell’utente (es. lingua).

Cookie di sicurezza: aiutano a prevenire accessi non autorizzati o comportamenti sospetti.

Cookie per il salvataggio del consenso: registrano le scelte dell’utente in materia di privacy e cookie.</p>
</div>
<div class="containerButton">
    <button class="button" @click="acceptCookies">Accetta</button>

</div>
</div>
</template>

<style>
.wrapp{
    display: flex;
    flex-direction: column;
}
.containerText{
    width: 100%;
    height: auto;
}
.containerButton{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 50px;
}
.button{
    padding: 5px 10px;
    border: 1px solid #9d191d;
    border-radius: 5px;
    
}
</style>