<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno.text-uppercase(:titulo="'unidad 1. Bases genéticas del desarrollo humano'" :subTitulo="'4. Factores genéticos y ambientales en el desarrollo humano / Influencia de la genética en el desarrollo cognitivo, emocional y conductual'")
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

      .tarjeta.box-shadow.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/componentes/pdf-icon-circle.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.text-bold.mb-2 Factores genéticos y ambientales en el desarrollo humano
                p.text-small.pe-4.pe-lg-5.me-xxl-4 Para profundizar sobre los factores genéticos y ambientales en el desarrollo humano, lo invitamos a consultar el PDF.   
              .col-sm-auto
                a.download-btn.boton.bg-morado.text-white(:href="obtenerLink('/downloads/Anexo_Intersecciones_en_herencia_y_aprendizaje.pdf')" target="_blank")
                  span.text-small Descargar
                  i.fas.fa-arrow-right

      .bg-full-width.border-top-9-azul
        .px-4.px-md-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/122741") Ayala, F (2017). ¿Clonar Humanos? Ingeniería Genética y Futuro de la Humanidad. Alianza Editorial.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0535-51332014000400008") Árvelo, F., Cotte, C., Sojo, F. (2014). Células madre y Cáncer. Revista Invest. clín.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=NYmNdmVRPYQ") Televisión Pública. Todo tiene un por qué [Vídeo]
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')
     
      .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    cuestionario: {
      tema: 'Genética y Herencia',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un fenotipo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La composición genética de un individuo',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Las mutaciones en el ADN', esCorrecta: false },
            {
              id: 'c',
              texto: 'La combinación de alelos en un gen',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La descripción de las características físicas de un organismo',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'La barba, el color del cabello, la estatura y algunos rasgos comportamentales de los seres vivos, corresponden a la expresión de los genes y son su expresión en lo que se refiere al:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Genotipo', esCorrecta: false },
            { id: 'b', texto: 'Fenotipo', esCorrecta: true },
            { id: 'c', texto: 'ADN', esCorrecta: false },
            { id: 'd', texto: 'Transcripción del ADN', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Según Gregor Mendel, ¿qué son los alelos dominantes?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No se transmiten a la siguiente generación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son la versión más fuerte de un par de alelos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Siempre son más raros que los alelos recesivos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se encuentran solo en individuos masculinos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué es una mutación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un proceso de autoinmunidad',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Un tipo de célula sexual', esCorrecta: false },
            {
              id: 'c',
              texto: 'Un cambio en una secuencia del ADN',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Una suma de ADN', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'En el clásico ejemplo de herencia mendeliana, donde se cruzan dos plantas de Arveja, donde el fruto es Amarillo (AA), ¿Qué significa que las letras AA estén en mayúsculas?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'AA significa que tiene dos alelos dominantes para el color Amarillo y es homocigoto',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'AA significa que tiene dos alelos recesivos para el color Amarillo y es homocigoto',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'AA significa que es heterocigoto para el color Amarillo',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'AA no tiene ninguna relación con temas de la genética, es solo un modo de expresión',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),

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
