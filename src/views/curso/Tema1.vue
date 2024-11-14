<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 1. Bases genéticas del desarrollo humano'" :subTitulo="'1. Bases genéticas del desarrollo humano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Se estima que el ser humano está conformado por 100 billones de células, todas ellas del tipo eucariota, que se caracterizan por tener un núcleo definido que aloja y protege la información genética, o ADN. El ADN es la molécula fundamental de la herencia, se encuentra en gran parte en el núcleo celular, pero se ha identificado ADN alojado en las mitocondrias (ADN mitocondrial).

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris.p-4
        p.mb-0(data-aos="fade-up") La composición del ADN está determinada por dos cadenas complementarias, que se enrollan entre sí, dando la apariencia como una escalera en forma de caracol; en realidad, a esta apariencia, se le conoce como doble hélice. Cada una de estas hebras, contiene una estructura esencial conformada por un azúcar (desoxirribosa), un fosfato y unida a cada azúcar, se encuentra una de las 4 bases nitrogenadas: adenina (A), citosina (C), guanina (G) o timina (T). Estas bases, funcionan como un “alfabeto de 4 letras”, por eso la secuencia de estas bases, determinan el mapa o el genoma del individuo y codifican información biológica; por ejemplo, las instrucciones para producir una proteína o molécula de ARN.

    p.mb-5 Las dos hebras están unidas mediante enlaces químicos entre las bases, de la siguiente manera: enlaces de adenina con timina y enlaces de citosina con guanina, como se ve a continuación:

    p.mb-3 <strong>Figura 1.</strong> Estructura del ADN
    figure(data-aos="flip-up").mb-4
      img.mb-2(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
      figcaption <strong>Nota.</strong> Tomado y adaptado de <a class="ui_link" href="https://www.genome.gov/es/genetics-glossary/Proyecto-Genoma-Humano">https://www.genome.gov/es/genetics-glossary/Proyecto-Genoma-Humano</a>


    .row.mb-4
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.px-3.py-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-13.svg', alt='Texto que describa la imagen')
          p.pe-xl-3(data-aos="fade-up") Entre los años 1990–2003, se avanzó con una gran iniciativa de colaboración internacional denominada Proyecto Genoma Humano, cuyo propósito fue descifrar (mapear y secuenciar) el mapa completo del ADN en los humanos, teniendo como referente el ADN de cientos de personas de todo el mundo, cultura, etnia, lo que permitió de manera única en la historia de la ciencia, reservar datos genómicos de la humanidad.

    p.mb-4 Esta información ha sido clave para el abordaje de la medicina, la biomédica y la ingeniería genética; en pocas palabras, la comprensión de la herencia genética dejó de ser la misma.

    .row.bg-gris.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2 Proyecto genoma humano
          p.mb-1 Para conocer más sobre el proyecto genoma humano, ingresar a la página de National Human Genoma Research Institute, en donde se alojan recursos de información y videos para la mayor comprensión de este gran proyecto:
          a.mt-4.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.hover-zoom(data-aos="zoom-in" style="width: 340px" href="https://www.youtube.com/watch?v=sQUEc7nS9Gk" target="_blank")
            div.bg-rojo-claro(style="width: 48px" )
              img.h-100.mx-auto(style="width: 26px" src='@/assets/componentes/video-icon.svg', alt='Texto que describa la imagen')
            p.fs-14px.my-auto.p-2 <strong>Video.</strong> Estructura del ADN  
          a.mt-4.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.hover-zoom(data-aos="zoom-in" style="width: 340px" href="https://www.genome.gov/About-Genomics/Educational-Resources" target="_blank")
            div.bg-azul-claro(style="width: 48px" )
              img.h-100.mx-auto(style="width: 22px" src='@/assets/componentes/link-icon.svg', alt='Texto que describa la imagen')
            p.fs-14px.my-auto.p-2 <strong>Sitio web.</strong> Recursos educativos  
          a.mt-4.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.hover-zoom(data-aos="zoom-in" style="width: 340px" href="https://www.genome.gov/genetics-glossary " target="_blank")
            div.bg-azul-claro(style="width: 48px" )
              img.h-100.mx-auto(style="width: 22px" src='@/assets/componentes/link-icon.svg', alt='Texto que describa la imagen')
            p.fs-14px.my-auto.p-2 <strong>Sitio web.</strong> Glosarios
        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    p.mb-4(data-aos="fade-up") Habiendo comprendido de qué se trata el ADN y su rol en la herencia, es clave entender que el ADN sufre cambios importantes durante el ciclo de vida de una célula. El <strong>ciclo celular</strong> es el sinónimo del ciclo de vida de una célula, en donde además de crecer y cumplir con sus funciones vitales, también se reproduce, generando nuevas células. 
    p.text-bold.mb-4 El ciclo celular tiene las siguientes etapas:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="70%" y="61%" numero="+")
        .h5.mb-3 GAP 1 (G1)
        p Es la etapa previa a la división o reproducción celular. Allí la célula crece, genera los insumos necesarios para mantener sus estructuras, para luego avanzar en la fase de duplicación del ADN donde requerirá nuevas moléculas y bases nitrogenadas. Adicionalmente, la célula crece en tamaño y sigue cumpliendo con sus funciones vitales.

      .tarjeta.bg-white.p-4(x="21%" y="60%" numero="+")
        .h5.mb-3 Fase de síntesis (S)
        p En esta fase es cuando el ADN inicia su proceso de síntesis o duplicación. En este momento el ADN desarrolla el proceso mediante el cual dispondrá de un ADN duplicado para que, previo a la división o reproducción celular, cada célula hija disponga de la cantidad de ADN necesario. Durante esta fase, el ADN está en estado “desenrollado”, o sea que no se encuentran cromosomas dentro del núcleo celular.

      .tarjeta.bg-white.p-4(x="44%" y="12%" numero="+")
        .h5.mb-3 GAP 2 (G2)
        p En esta fase, el ADN sufre un proceso de condensación, lo que significa que el ADN se asocia a proteínas denominadas Histonas, las cuales permiten conformar unidades empaquetadas denominadas Cromosomas. Cuando se condensa el ADN y se organiza el material genético, la célula está lista para la división celular.

      .tarjeta.bg-white.p-4(x="52%" y="22%" numero="+")
        .h5.mb-3 Fase de Meiosis o Mitosis (Fase M)
        p Dependiendo del tipo de célula, esta entrará al ciclo de mitosis o meiosis.

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/video-icon-circle.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-2 Ciclo Celular
              p.text-small.pe-4.pe-lg-5.me-xxl-4 Para conocer más en detalle el funcionamiento del Ciclo Celular, lo invitamos a visualizar el video Ciclo Celular y sus fases – Interfase y Mitosis. 
            .col-sm-auto
              a.download-btn.boton.bg-morado.text-white(href="https://www.youtube.com/watch?v=w6iJZrI2SHQ" target="_blank")
                span.text-small Ver video
                i.fas.fa-arrow-right

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 Como se planteó anteriormente, hay dos tipos de reproducción o división celular:
        AcordionA(tipo="b")
          .div(titulo="Mitosis")
            p Es elemental para el crecimiento y el mantenimiento de todos los tejidos y órganos, pues al finalizar las etapas, se generan dos células idénticas a la célula original. Las células que realizan la mitosis son somáticas, es decir, aquellas que conforman los tejidos y órganos del cuerpo y que son <strong>diploides</strong>, denominación asociada a la cantidad de cromosomas. Las células diploides mantienen la misma cantidad de cromosomas que la célula madre (2N).

          .div(titulo="Meiosis")
            p Es el proceso de reproducción que da origen a las células sexuales o gametos (óvulos y espermatozoides), las cuales más adelante darán origen a un nuevo ser vivo a través de la fecundación. Tanto el óvulo como el espermatozoide, cuentan con la mitad de su ADN, pues en la reproducción o división celular se generan cuatro células hijas, cada una con la mitad de los cromosomas que la célula original <strong>(células haploides)</strong>.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')


    p.mb-4 <strong>Figura 2.</strong> Comparación procesos de mitosis y meiosis
    
    img.mb-5(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/link-icon-circle.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-2 Procesos de reproducción celular
              p.text-small.pe-4.pe-lg-5.me-xxl-4 Para conocer más sobre la estructura celular y los procesos de reproducción celular, hacer lectura de: Gutiérrez, F. (2010). Biología: La célula. Firmas Press. Páginas 48 y 159.
            .col-sm-auto(data-aos="flip-up")
              a.download-btn.boton.bg-morado.text-white(href="https://elibro.net/es/ereader/tecnologicadeloriente/36344?page=48 " target="_blank")
                span.text-small Ir al sitio
                i.fas.fa-arrow-right

    h3 Un poco de historia

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4
        p.mb-0(data-aos="fade-up") Hacia el siglo XVI y XVII y con la escasa revolución de los primeros microscopios, se hacían observaciones del semen humano y de otros animales, así como de células de otro tipo. Nicolás Hartsoeker, hizo un hallazgo denominado “Animalúnculos”, que describía que en la cabeza de los espermatozoides había un individuo en miniatura. De allí se planteó una explicación sobre la herencia, en donde se afirmaba que cada espermatozoide tenía un mini-humano que solo requería un lugar femenino para ser depositado y que de allí empezaría su crecimiento. 
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

    p.mb-4 Esta explicación dio origen a los:

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Espermistas")
            p Naturalistas que, describieron que, desde el origen de la humanidad, Adán, tenía en su organismo toda la humanidad en miniatura, y que estos humanos se irían transmitiendo de padre a hijo.

          .div(titulo="Ovistas")
            p Naturalistas que afirmaban que el pequeño humano se alojaba dentro del óvulo femenino, dado su tamaño (mucho más grande que un espermatozoide).
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    .row
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-gris.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-20.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.mb-0(data-aos="fade-up") Después del desarrollo tecnológico de los microscopios y de las explicaciones experimentales futuras sobre la herencia, ambas explicaciones, la de los espermistas y la de los ovistas, quedaron totalmente refutadas.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
