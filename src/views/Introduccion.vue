<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(:titulo="'unidad 1. Bases genéticas del desarrollo humano'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-rosa.px-3.py-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          p.pe-xl-3(data-aos="fade-up") Al estudiar las bases genéticas del desarrollo humano, nos centramos en explorar la forma como los humanos, siendo seres vivos <strong>multicelulares</strong>, se originan a partir de una única <strong>célula</strong>: el <strong>cigoto</strong> y cómo esta, a su vez, logra procesos de diferenciación en distintos tipos de células que, durante el desarrollo embrionario, conforman los tejidos y los órganos.
        p Este proceso involucra la interacción entre la <strong>información genética</strong> y los factores ambientales, por lo que se identificará la <strong>genética</strong> como un estudio que hace parte de las ciencias de la vida, encargada de comprender cómo se desarrollan los procesos de transmisión de características y rasgos físicos de una generación a otra (herencia).
    p.mb-5(data-aos="fade-up") Para lograr esta comprensión, es necesario estudiar las células, unidades fundamentales que componen a todos los seres vivos, sus tejidos y órganos. Dentro del núcleo de cada <strong>célula eucariota</strong>, tipo de células que compone a los humanos, se encuentra la información genética, codificada en la molécula denominada <strong>ADN (Ácido Desoxirribonucleico)</strong>, en la que se encuentran <strong>los genes</strong>, unidades de información que pueden ser transmitidas a través de distintas generaciones y se sabe que la especie humana tiene unos 30.000 genes.

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4
        p.mb-0(data-aos="fade-up") El estudio de la herencia y los factores que inciden a nivel celular, son el inicio para explicar fenómenos mayores en el ser humano, como sus cualidades físicas, comportamentales e intelectuales; la expresión genética, las alteraciones <strong>cromosómicas</strong>, las <strong>mutaciones</strong> y su correlación con la sobrevivencia, el aprendizaje y el intelecto.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

    p.mb-4 De esta manera, el resultado del aprendizaje de la presente unidad, es el de conocer los fundamentos biológicos y genéticos del desarrollo humano, identificando la influencia de los factores genéticos y ambientales en el crecimiento, el desarrollo cognitivo y el comportamiento, aplicando estos conocimientos en el contexto educativo y clínico. 
    p.text-bold.mb-5 Para lograrlo, la unidad cuenta con la siguiente estructura (subtemas):
    
    .row.mb-5.justify-content-center.card_hover(data-aos="zoom-in-up")
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-right")
        .custom-image-card.d-flex.justify-content-between.p-3.h-100
          img.me-3(src='@/assets/curso/unidad/img-4.svg', style="width: 68px")
          p.me-auto.my-auto Principios de genética humana y herencia.
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-up-left")
        .custom-image-card.d-flex.justify-content-between.p-3.h-100
          img.me-3(src='@/assets/curso/unidad/img-5.svg', style="width: 68px")  
          p.me-auto.my-auto Factores genéticos y ambientales en el desarrollo humano.
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-right")
        .custom-image-card.d-flex.justify-content-between.p-3.h-100
          img.me-3(src='@/assets/curso/unidad/img-6.svg', style="width: 68px")
          p.me-auto.my-auto Bases biológicas del desarrollo y diferenciación celular.
      .col-10.col-sm-9.col-md-6.mb-4(data-aos="fade-down-left")
        .custom-image-card.d-flex.justify-content-between.p-3.h-100
          img.me-3(src='@/assets/curso/unidad/img-7.svg', style="width: 68px")
          p.me-auto.my-auto Influencia de la genética en el desarrollo cognitivo, emocional y conductual.

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-gris.px-3.py-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-9.svg', alt='Texto que describa la imagen')
          p.pe-xl-3(data-aos="fade-up") A través de las actividades de aprendizaje sugeridas como un quiz diagnóstico, lecturas, video, foro temático y construcción de un podcast, se contará con los insumos necesarios para examinar la interacción entre los factores genéticos y ambientales que influyen en el desarrollo humano; por esta razón, es importante la revisión de los recursos proporcionados, la participación y el compromiso, para aprovechar al máximo la unidad y así aplicar conceptos biológicos para explicar alteraciones del desarrollo en un entorno clínico o educativo.

    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
