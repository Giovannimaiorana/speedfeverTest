<script>
export default {
  data() {
    return {
      // Indice dell'immagine attualmente visibile
      currentImage: 0,
      // Array di immagini
      images: [
        {
            image:"/img/astonmartin.webp",
            title:'ASTON MARTIN',
            model:'V8 Vantage GT3 2019',
            rar:"/file/astonmartin.rar"
        },
        {
            image:"/img/bmw.webp",
            title:'BMW',
            model:'M4 GT3 2021',
            rar:"/file/bmw.rar"
        },
        {
            image:"/img/ferrari.webp",
            title:'FERRARI',
            model:'296 GT3 2023',
            rar:"/file/ferrari.rar"
        },
        {
            image: "/img/mclaren.webp",
            title:'MCLAREN',
            model:'720s Evo GT3 2023',
            rar:"/file/mclaren.rar"
        },
        {
            image: "/img/mercedes.webp",
            title:'MERCEDES',
            model:'AMG Evo GT3 2020',
            rar:"/file/mercedes.rar"
        },
        {
            image: "/img/porsche.webp",
            title:'PORSCHE',
            model:'992 GT3R 2023',
            rar:"/file/porsche.rar"
        },
        
       ]
    };
  },

  methods: {
    // Passa alla prossima immagine
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    downloadCurrentRar() {
    const rarPath = this.images[this.currentImage].rar;
    if (!rarPath) return;

    const link = document.createElement('a');
    link.href = rarPath;
    link.download = rarPath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  }
};
</script>

<template>
    <div class="containerGeneral">
        <div class="containerImg">
           <img :src="images[currentImage].image"  alt="">
        </div>
        <div class="containerName">
            <p  class=" poppins-semibold text-white text-left spacing cursor-pointer text-4xl"> {{ images[currentImage].title }} </p>
            <p  class=" poppins-light text-white text-left spacing cursor-pointer text-md"> {{ images[currentImage].model }} </p>
            <button  @click="downloadCurrentRar" class="text-xs text-white hobv">Click here To download</button>
        </div>

        <div class="containerButton">
            <div>
                <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer hobv">- PREV </p>
            </div>
            <div>
                <p @click="nextImage" class=" poppins-semibold text-white text-left spacing cursor-pointer hobv"> NEXT - </p>
            </div>

        </div>
    </div>

</template>

<style scoped>
.containerGeneral{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.containerImg{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(/img/DESIGN2.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
.containerImg img{
    width: 40%;
}
.containerButton{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
}
.containerName{
    margin-top: -60px;
    z-index: 100;
}
.hobv:hover{
    color: #9d191d;
}
@media (max-width: 940px) {
    .containerImg img{
    width: 60%;
} 

.containerImg{
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(/img/DESIGN2.png);
    background-size:cover;
    background-repeat: no-repeat;
    position: relative;
}
}
@media (max-width: 820px) {
    .containerImg img{
    width: 50%;
} 
}
@media (max-width: 767px) {
    .containerImg img{
    width: 100%;
} 
}

</style>