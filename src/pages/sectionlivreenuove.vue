<script>
export default {
  data() {
    return {
      // Indice dell'immagine attualmente visibile
      currentImage: 0,
      // Array di immagini
      images: [
        "/img/astonmartinfrontale.png",
        "/img/astonmartinlaterale.png",
        "/img/bmwfrontale.png",
        "/img/bmwlaterale.png",
        "/img/ferrarifrontale.png",
        "/img/ferrarilaterale.png", 
        "/img/mclarenfrontale.png",
        "/img/mclarenlaterale.png",
        "/img/mercedesfrontale.png",
        "/img/mercedeslaterale.png",
        "/img/porschefrontale.png",
        "/img/porschelaterale.png",
       ]
    };
  },
  mounted() {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  },
  methods: {
    // Passa alla prossima immagine
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    }
  }
};
</script>
<template>
    <div class="containerLivre">
      <img :src="images[currentImage]" alt="Carosello immagini">
    </div>
</template>

<style scoped>
.containerLivre {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center; /* Centra l'immagine */
}
img {
  width: 100%; /* Adatta l'immagine alla larghezza del contenitore */
  height: auto; /* Mantiene il rapporto aspetto originale dell'immagine */
}
</style>