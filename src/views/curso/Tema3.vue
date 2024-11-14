<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 1. Bases genéticas del desarrollo humano'" :subTitulo="'3. Bases biológicas del desarrollo y diferenciación celular'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4
        p.mb-0(data-aos="fade-up") Cada célula humana somática (diploide), contiene 23 pares de cromosomas, de los cuales 22 pares son cromosomas denominados <strong>Autosomas</strong> y con cualidades y genes particulares. El par restante corresponde a los <strong>cromosomas sexuales</strong> denominados X y Y.
    
    p.mb-4 <strong>Figura 6.</strong> Representación visual y organizada de los cromosomas en una célula humana (cariotipo).
    img.mb-5(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

    p.mb-4 Al ser fecundado un óvulo por un espermatozoide, se da el proceso de <strong>Fecundación</strong> (ver figura), el cual permite la formación de una célula diploide (zigoto o cigoto) que contiene la mitad de la información genética proveniente de la madre y la otra mitad del padre. Este encuentro de gametos sexuales para formar el cigoto, comienza con la penetración del espermatozoide en el óvulo, le sigue la activación del macrogameto, la Singamia o unión de los núcleos y, finalmente, la formación de membrana de fecundación.
    p.mb-4 <strong>Figura 7.</strong> Recorrido de los espermatozoides hasta la ubicación del óvulo en el proceso de fecundación.
    img.mb-5(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

    p.mb-4 Posterior a la fecundación, el <strong>cigoto</strong> empieza a descender por la <strong>trompa de Falopio</strong> hacia el <strong>útero</strong>. En ese trayecto, el cigoto va teniendo divisiones mitóticas que dan lugar al embrión de dos células. El término cigoto, solamente se usa en el primer estadio embrionario de una única célula.

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.px-3.py-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-38.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") A medida que avanza por la trompa, el embrión seguirá dividiéndose formando un <strong>blastocisto</strong>, que es una estructura con muchas células que empiezan a diferenciarse y que tiene la capacidad para implantarse en el útero y dar lugar al embarazo.
        p La secuencia de las etapas son las siguientes:
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')  

    
    .row.mb-5.justify-content-center.card_hover(data-aos="zoom-in-up")
      .col-10.col-sm-9.col-md-6.col-lg-4.col-xl-3.mb-4(data-aos="fade-up-right")
        .custom-image-card.d-flex.justify-content-between.p-2.h-100
          img.me-3(src='@/assets/curso/unidad/img-40.svg', style="width: 68px")
          p.me-auto.my-auto a. Segmentación.
      .col-10.col-sm-9.col-md-6.col-lg-4.col-xl-3.mb-4(data-aos="fade-up-left")
        .custom-image-card.d-flex.justify-content-between.p-2.h-100
          img.me-3(src='@/assets/curso/unidad/img-40.svg', style="width: 68px")  
          p.me-auto.my-auto b. Blastogenia.
      .col-10.col-sm-9.col-md-6.col-lg-4.col-xl-3.mb-4(data-aos="fade-down-right")
        .custom-image-card.d-flex.justify-content-between.p-2.h-100
          img.me-3(src='@/assets/curso/unidad/img-40.svg', style="width: 68px")
          p.me-auto.my-auto c. Implantación. 
      .col-10.col-sm-9.col-md-6.col-lg-4.col-xl-3.mb-4(data-aos="fade-down-left")
        .custom-image-card.d-flex.justify-content-between.p-2.h-100
          img.me-3(src='@/assets/curso/unidad/img-40.svg', style="width: 68px")
          p.me-auto.my-auto d. Formación del disco germinativo bilaminar.

    p.mb-4 Las etapas del desarrollo embrionario humano, se describen a continuación:

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Fecundación")
            p.mb-4 Con el desprendimiento de uno de los óvulos del ovario femenino, luego de los 14 días posteriores a la última fecha de menstruación (en el ciclo menstrual corresponde al período de ovulación), los espermatozoides que ingresan a través de la vagina, siguen el camino por el cuello uterino hasta encontrarse con el óvulo.
            p.mb-0 Esto ocurre específicamente en las Trompas de Falopio, donde en condiciones normales, se da la unión para dar lugar al cigoto. 
          .div(titulo="Cigoto")
            p Al unirse el óvulo y el espermatozoide, se crea esta célula diploide que tiene la capacidad de dividirse hasta desarrollarse por completo. Este cigoto recorre desde las Trompas de Falopio hasta el útero, por más o menos 3 a 5 días, y en ese trayecto, continúa dividiéndose a través del proceso de mitosis descrito anteriormente.
          .div(titulo="Mórula")
            p.mb-1 El cigoto que se convierte en una estructura multicelular y da la forma tipo “mora” se denomina mórula. Continúa su reproducción celular hasta convertirse en blastocisto, que ya se ancla o implanta en el útero, dando inicio a la etapa embrionaria.
            p En esta etapa las células no están diferenciadas y pueden dar lugar a cualquier tipo de célula del organismo. A medida que las células de la mórula siguen dividiéndose, comienzan a reorganizarse y a diferenciarse en dos grupos de células: el <strong>embrioblasto</strong>, que dará lugar al embrión y el <strong>trofoblasto</strong>, que formará parte de la placenta y otras estructuras de soporte.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Blastocisto")
            p.mb-0 El embrión continúa sus múltiples divisiones y forma una estructura hueca que se implanta en el revestimiento del útero femenino 6 días después de la fecundación.  
            
          .div(titulo="Gástrula")
            p.mb-0 En esta etapa se empiezan a generar capas que luego darán paso a los tejidos y órganos; estructuras funcionales del embrión y continuación de la diferenciación celular. 
          .div(titulo="Embrión")
            p.mb-4 Esta etapa se da desde la segunda semana después de la fecundación y se prolonga hasta la décima semana del embarazo. El embrión se desarrolla dentro de un saco <strong>amniótico</strong> o <strong>placenta</strong> que lo protege del entorno y le permite el crecimiento.          
            p.mb-0 De la misma manera, en esta etapa se genera la formación del <strong>tubo neural</strong>, que dará lugar al cerebro y la médula espinal, el desarrollo del corazón y los vasos sanguíneos, y la aparición de los primeros glóbulos rojos. 
 
          .div(titulo="Feto")
            p.mb-4 Contempla desde la undécima semana del embarazo hasta el nacimiento; sus características faciales y corporales se definen, así como el sistema nervioso central sigue madurando, y el cerebro experimenta un rápido crecimiento.
            p.mb-4 Los órganos internos continúan desarrollándose y madurando, mientras que el sistema circulatorio y el corazón aumentan su capacidad para bombear sangre.
            p.mb-0 Cuando se acerca el momento del parto o nacimiento, el feto desarrolla la mayor proporción de movimientos para poder encontrar la posición adecuada de salida por el canal de parto. Para esto, durante toda la etapa fetal, el individuo genera movimientos permanentes, lo cual es un indicio de bienestar y salud.


    p.mb-5 De la semana 1 a la semana 38 aproximadamente, el proceso de desarrollo del cigoto hacia el embrión, va acompañado de cambios morfológicos importantes, para lo cual es clave entender el proceso de diferenciación celular, desde el que la célula va convirtiéndose de totipotencial a una célula funcional, que hará parte de un tejido o un órgano. 

    h2.mb-4 Sobre la diferenciación celular
    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-gris.px-3.py-4.mb-4(data-aos="fade-left")
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La diferenciación celular es un proceso que permite a las células contar con un tipo de funcionalidad, o cambiarla. Esto ocurre en los organismos multicelulares a través de distintos factores como el nivel de desarrollo, las sustancias químicas al interior de la célula o el organismo, o las condiciones ambientales.      
        p.mb-4 En el ADN, cada gen tiene información valiosa para determinar el tipo de célula que es, de acuerdo con las características fenotípicas o genotípicas del organismo. Si existe algún error en este proceso (mutación), habrá cambios en la diferenciación celular. 
        p.text-bold En el orden ambiental, se pueden generar factores que determinan la diferenciación celular como:
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')  

    .row.mb-5.justify-content-center.card_hover(data-aos="zoom-in-up")
      .col-10.col-sm-9.col-md-6.col-lg-4.mb-4(data-aos="fade-up-right")
        .custom-image-card.d-flex.justify-content-between.p-2.h-100
          img.me-3(src='@/assets/curso/unidad/img-44.svg', style="width: 68px")
          p.me-auto.my-auto El cambio en la temperatura.
      .col-10.col-sm-9.col-md-6.col-lg-4.mb-4(data-aos="fade-up-left")
        .custom-image-card.d-flex.justify-content-between.p-2.h-100
          img.me-3(src='@/assets/curso/unidad/img-44.svg', style="width: 68px")  
          p.me-auto.my-auto La ausencia o aumento de oxígeno.
      .col-10.col-sm-9.col-md-6.col-lg-4.mb-4(data-aos="fade-down-right")
        .custom-image-card.d-flex.justify-content-between.p-2.h-100
          img.me-3(src='@/assets/curso/unidad/img-44.svg', style="width: 68px")
          p.me-auto.my-auto Las hormonas o rayos UV o IR.

    p.mb-4 Todo este impacto se verá reflejado en la diferenciación celular o en el desarrollo de la célula. 

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.px-3.py-4.mb-4(data-aos="fade-left")
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La importancia de la diferenciación celular en los seres vivos se debe a que esta función desempeña un papel importante en el desarrollo embrionario, su crecimiento y la función real de las células a lo largo de la vida. De la misma manera, es clave en el reemplazo de las células viejas y dañadas. De la misma manera es clave advertir que si hay posibilidad de mutación celular o daño, la diferenciación celular ayuda a evitar mayores daños en el ADN.
        p.mb-0 En las investigaciones médicas recientes, la diferenciación celular ha permitido avanzar sobre el conocimiento de las células madre, como parte de terapias genéticas para regenerar o reparar células dañadas. 

    h3.mb-4 La importancia del trasplante de las células madre en pacientes con cáncer
    p.mb-4 Las células madre, son un tipo de célula que tienen el potencial de formar cualquier otro tipo de célula y su reproducción puede dar lugar a nuevos tejidos y órganos. 

    .row.mb-5
      .col-12.col-xl-12.col-xxl-8.d-flex.flex-column
        .bloque-texto-c.bg-gris-claro.p-4
          i.fas.fa-quote-left.text-morado.mb-4
          h3.mb-2 Las células madre son un tipo especial de células que tienen una gran capacidad proliferativa, poder de renovarse y ser capaces de dar origen a diferentes tipos celulares especializados, todo lo cual las hace únicas. Se encuentran en el embrión, el feto y los adultos, se subdividen en diferentes clases y todas tienen, bajo ciertas condiciones, la capacidad de reproducirse a sí misma, por un período de tiempo prolongado. Por ejemplo, en el caso de las “células madre adultas”, ellas lo hacen a lo largo de toda la vida del organismo, dando lugar a las células especializadas que forman los tejidos y órganos del cuerpo.
          span - Arévalo (2014)
      .d-none.d-xxl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')  

    p.mb-5 El estudio de este tipo de células, ha permitido avanzar con investigaciones aplicadas en tratamientos médicos y en la ingeniería genética.

    .row
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-gris.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-47.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.mb-0(data-aos="fade-up") Por ejemplo, el trasplante de células madre a personas que padecen algunos tipos de cáncer, permite restaurar las células que forman la sangre después de un tratamiento de quimioterapia o radioterapia; también se usan en algunos tipos de padecimientos como enfermedades autoinmunes o con trastornos sanguíneos.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
