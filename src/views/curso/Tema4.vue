<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'unidad 1. Bases genéticas del desarrollo humano'" :subTitulo="'4. Factores genéticos y ambientales en el desarrollo humano'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .row.mb-4.mx-0
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.align-items-center.bg-gris-claro-2.p-4
          p.mb-0(data-aos="fade-up") ¿Todos los seres vivos deben su fenotipo exclusivamente a su ADN?, o ¿hay interacción entre los genes y el medio?, pues desde antes de la descripción del Genoma Humano ya se tenía conocimiento sobre la importancia de considerar los factores ambientales al considerar enfermedades hereditarias, condiciones conductuales y capacidades excepcionales en las personas. Los genetistas contemporáneos afirman que es un error explicar las enfermedades y trastornos humanos con solo hacer un análisis de los genes. Enfermedades como hipertensión, diabetes, cáncer o patologías cardíacas, son causadas por una interacción entre los genes y el entorno, traducido esto como el ambiente, la alimentación, los hábitos, las rutinas, los contextos, la cultura, entre otras dimensiones. 

      p.mb-4 Aunque la genética puede explicar una posible predisposición a una enfermedad, probablemente los hábitos y costumbres saludables, mitigarán el desarrollo de una enfermedad, a menos que exista otro factor ambiental desencadenante. Por lo tanto, una preocupación actual de los genetistas es la de explicar cómo los genes y el entorno interactúan y cómo podemos modificar el entorno para las personas con susceptibilidad genética a una o varias patologías. 
      p.mb-5.text-bold Durante el desarrollo de cada humano, hay 4 capacidades que se destacan:

      .row.mb-5
        .col-12.col-lg-7(data-aos="fade-right")
          AcordionA(tipo="b")
            .div(titulo="Desarrollo físico")
              p.mb-0 Sobre el cual se hace énfasis en el crecimiento, la alimentación, el cuidado de cada estructura externa o interna (tejido, órgano o parte específica).
            .div(titulo="Desarrollo mental")
              p.mb-0 En el que se hace énfasis sobre el pensamiento, las capacidades cognitivas, la evolución de su aprendizaje.
            .div(titulo="Desarrollo del orden emocional")
              p.mb-0 Corresponde a la forma como interpreta la realidad y la asume como sentimientos, deseos y en general las respuestas psicológicas.
            .div(titulo="Desarrollo social")
              p.mb-0 Que da cuenta de los mecanismos y habilidades con las que cada ser asume su interacción con otros y lo otro en un contexto comunitario o de sociedad.
        .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
          img.-mt-18px(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')

      p.mb-4 Aunque todas las células humanas heredan los mismos genes, estos deben transcribirse y traducirse en proteínas, como se revisó en los temas anteriores y, en esa dinámica, puede haber incidencia del ambiente. Por ejemplo, las cualidades físicas se pueden modificar con ejercicio, alimentación, maquillaje, cambios de estilo, etc. En el caso de los procesos de aprendizaje, hay condicionantes del contexto que pueden incidir en la motivación, hábitos adquiridos, contextos culturales y sociales, entre otros. 
      p.mb-5.text-bold De acuerdo con la proyección de estudios genéticos, se puede clasificar la herencia en 4 tipos:

      .row.mb-5
        .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
          img.-mt-18px(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7(data-aos="fade-right")
          AcordionA(tipo="b")
            .div(titulo="Herencia dominante")
              p.mb-0 Cuando uno de los alelos anula o enmascara la expresión del otro. Al primero se le llama Gen Dominante o activo y al segundo se le llama Recesivo tal y como se explicó en los principios o leyes de la herencia Mendeliana).
            .div(titulo="Herencia intermedia")
              p.mb-0 Se da cuando ambos alelos tienen la misma intensidad de expresión.
            .div(titulo="Herencia ligada al sexo")
              p.mb-0 Que se genera a través de los genes asociados a los cromosomas sexuales y que están determinados por el cromosoma X o Y recibido de los progenitores. El Daltonismo, La hemofilia, son ejemplos de enfermedades hereditarias determinadas por la herencia ligada al sexo.
            .div(titulo="Herencia multifactorial")
              p.mb-0 En donde las enfermedades no podrían asociarse exclusivamente a una expresión de los genes, sino que puede tener incidencia en temas de hábitos alimenticios, ambientes o entornos de la persona, entre otros. Ejemplos de enfermedades asociadas a herencia multifactorial están la Esquizofrenia y el Labio Leporino.

      p.text-bold.mb-4 La relación entre la herencia genética y el ambiente o entorno, es inevitable en el desarrollo físico, cognitivo, psicosocial y moral.
      p.mb-4(data-aos="zoom-in") Al igual que el ser humano efectúa 4 potencialidades desarrolladas de la herencia, el ambiente influye también al ser humano en 4 potencialidades. Los rasgos físicos del individuo se desarrollarán en un ambiente físico, los rasgos mentales del mismo se desarrollarán en los ambientes mentales, los rasgos psicológicos o emocionales se desarrollan en ambientes emocionales y los rasgos sociales se desarrollarán en ambientes culturales y sociales.

      .tarjeta.box-shadow.p-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/componentes/pdf-icon-circle.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-bold.mb-2 Factores genéticos y ambientales en el desarrollo humano
                p.text-small.pe-4.pe-lg-5.me-xxl-4 Para profundizar sobre los factores genéticos y ambientales en el desarrollo humano, lo invitamos a consultar el PDF.   
              .col-sm-auto
                a.download-btn.boton.bg-morado.text-white(:href="obtenerLink('/downloads/Anexo_Biología_del_desarrollo_humano.pdf')" target="_blank")
                  span.text-small Descargar
                  i.fas.fa-arrow-right




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
