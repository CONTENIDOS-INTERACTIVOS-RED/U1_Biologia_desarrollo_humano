<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'unidad 1. Bases genéticas del desarrollo humano'" :subTitulo="'2. Principios de genética humana y herencia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-amarillo.px-3.py-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-21.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.text-bold ¿Qué es la genética?
            p.pe-xl-3.mb-0(data-aos="fade-up") La genética es el estudio sobre los mecanismos que intervienen en la transmisión de ciertos genes a la descendencia; por ejemplo, la apariencia física, el color de piel, ojos y cabello. 
        p Sin embargo, la explicación sobre la herencia no es reciente, tal y como se detalló anteriormente; naturalistas del siglo XVI y XVII, construían explicaciones, de acuerdo con las observaciones que hacían de los fenómenos
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')  

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/link-icon-circle.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-2 El Día del ADN. Un paseo por la historia de la Genética Humana
              p.text-small.pe-4.pe-lg-5.me-xxl-4 Para recorrer la historia sobre la herencia y la genética, puede visualizar el Blog Genotipia. Megía, R. Álvarez S. El Día del ADN. Un paseo por la historia de la Genética Humana. Que integra los hitos de este gran campo de conocimiento. 
            .col-sm-auto(data-aos="flip-up")
              a.download-btn.boton.color-acento-botones.text-white(href="https://genotipia.com/historia-adn/#:~:text=Esta%20historia%20comienza%20en%201865,leyes%20de%20la%20herencia%20simple. " target="_blank")
                span.text-small Ir al sitio
                i.fas.fa-arrow-right

    p.mb-4 Para el año 1865, el fraile <strong>Gregor Johann Mendel</strong>, hace la publicación de sus trabajos sobre la herencia simple, que, aunque no expresaba la molécula de ADN o los genes (porque para esa época no se conocía), sí explicaba, de manera contundente, los mecanismos sobre los cuales se sustentan los fundamentos de la herencia. A estas explicaciones provenientes de estos estudios, se les denomina <strong>Herencia Mendeliana</strong>.

    .row.mb-5
      .d-none.d-lg-block.col-lg-5.col-xxl-4(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')  
      .col-12.col-lg-7.col-xxl-8.d-flex.flex-column
        p.mb-4 A través de las conclusiones de sus trabajos, Mendel genera las <strong>Leyes de la herencia</strong> que son principios que explican la transmisión de características físicas (caracteres) y biológicas de padres, a descendientes. Dentro de las premisas, estos caracteres se heredan por dos versiones de un mismo gen, que Mendel denominó alelos, cada uno proveniente de uno de los padres. Cuando los alelos son iguales, el individuo es homocigoto; cuando los <strong>alelos</strong> son diferentes, el individuo es <strong>heterocigoto</strong>.
        div.ps-4.p-4.mb-4.bg-gris.w-full.px-0
          p La primera ley de Mendel se denomina Principio de la uniformidad y explica que cuando se cruzan dos individuos homocigotos para una característica diferente, los hijos de primera generación (filial), serán heterocigotos para esa característica. 
        p Para entender este principio, es importante tener algunas comprensiones esenciales:

    .row.mb-5
      .col-12.col-xl-11.mx-auto
        p.mb-4 <strong>Tabla 1.</strong> Tipos de alelos

        .tabla-a
          table.text-center
            thead
              tr
                th.text-center(width="35%") Alelos
                th.text-center Explicación
            tbody
              tr
                td.text-bold A
                td Alelo Dominante (la letra en mayúscula).
              tr
                td.text-bold a
                td Alelo recesivo (la letra en minúscula).
              tr
                td.text-bold AA
                td Los dos alelos son iguales y son dominantes: Homocigoto Dominante.
              tr
                td.text-bold aa
                td Los dos alelos son iguales y son recesivos: homocigoto Recesivo.
              tr
                td.text-bold Aa
                td Los dos alelos son distintos: Heterocigoto.

    p.mb-5 Ahora bien, lo que intentó explicar a través del principio de la uniformidad, se puede graficar de la siguiente manera, con respecto a un rasgo, que es el color de una flor:

    p.mb-4 <strong>Figura 3.</strong> Explicación gráfica del principio de la uniformidad de la herencia mendeliana 
    img.mb-4(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
    p.mb-4 De acuerdo con el gráfico, la flor roja es dominante frente al color morado, lo que explica que el 100 % de la descendencia de dos homocigotos, uno dominante y otro recesivo, siempre será del color dominante, aunque en sus genes sean heterocigotos.
    p.mb-5 Hay una herramienta denominada <strong>Cuadro de Punnett</strong>, que permitiría “predecir” estas variedades de los caracteres y los alelos.

    
    .bg-fondo-1.bg-full-width.mb-5
      div.px-5.pb-md-3.py-4
    
        p <strong>Tabla 2.</strong> Cuadro de Punnett

        .tabla-a.mb-5
          table.text-center
            thead
              tr
                th.text-center(width="35%").border-none
                th.text-center(colspan="3").border-left-gris Homocigoto recesivo (aa)
            tbody
              tr
              tr
                td(rowspan="0").border-none.bg-modaro-oscuro.text-white.text-bold 
                  th.mb-2.d-flex.flex-column.align-items-center Homocigoto 
                    p.text-bold dominante (AA)
                td
                td.text-center.text-bold a
                td.text-center.text-bold.border-left-gris a
              tr
                td.text-bold A
                td 
                  | Aa
                  br
                  | Heterocigoto
                td.border-left-gris
                  | Aa
                  br
                  | Heterocigoto
              tr
                td.text-bold A
                td
                  | Aa
                  br
                  | Heterocigoto
                td.border-left-gris
                  | Aa
                  br
                  | Heterocigoto

        p.mb-4 Es así como una pregunta que podría hacerse es por qué los heterocigotos son todos rojos. La respuesta es sencilla, debido a que en este carácter se explicó que el alelo dominante es precisamente el color rojo. Quizá en la cotidianidad es posible evidenciar físicamente algunos alelos dominantes; por ejemplo, en Sudamérica, para la población es dominante el color de ojos café, frente al color de ojos verde o azul.
        p.text-bold.mb-5 Es momento de explorar más allá: 
        
        .row
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center ¿Qué sucedería si se cruzan dos homocigotos recesivos?
                p.text-small.px-4.text-center.pb-2 En este caso el 100 % de la descendencia sería de color morada.
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center ¿Qué sucedería si se cruzan dos heterocigotos? 
                p.text-small.px-4.text-center.pb-2 La respuesta a esta pregunta, Mendel la representaría quizá de la siguiente manera:

    p.mb-4 <strong>Figura 4.</strong> Explicación gráfica del principio de la uniformidad de la herencia mendeliana
    img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

    p.mb-4 Si se viese la representación de los alelos para este cruce, sería de la siguiente manera: 
    p.mb-4 <strong>Tabla 3.</strong> Cuadro de Punnet para explicar los alelos del cruce entre dos individuos heterocigotos

    .tabla-a.mb-5
      table.text-center
        thead
          tr
            th.text-center(width="35%").border-none
            th.text-center(colspan="3").border-left-gris Homocigoto recesivo (aa)
        tbody
          tr
          tr
            td(rowspan="0").border-none.bg-modaro-oscuro.text-white.text-bold 
              th.mb-2.d-flex.flex-column.align-items-center Homocigoto 
                p.text-bold dominante (AA)
            td
            td.text-center.text-bold a
            td.text-center.text-bold.border-left-gris a
          tr
            td.text-bold A
            td 
              | AA
              br
              | Homocigoto
            td.border-left-gris
              | Aa
              br
              | Heterocigoto
          tr
            td.text-bold A
            td
              | Aa
              br
              | Heterocigoto
            td.border-left-gris
              | aa
              br
              | Homocigoto recesivo

    p.mb-4 Con las anteriores explicaciones, es posible entender también la segunda Ley de Mendel, denominada <strong>principio de la segregación</strong>, que explica que cada alelo (ahora conocido como genes), se separa en las células sexuales de cada individuo (ya se sabe que esto ocurre durante la fase de Meiosis cuando cada célula hija cuenta con la mitad de la información genética de la célula original). De esta manera, cada alelo tiene la misma posibilidad de ser heredados a la descendencia: en los cuadros de Punnet presentados anteriormente, se plasma esta segregación.     

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-modaro-claro.px-3.py-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-28.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.text-bold Ahora, ¿cómo se explica la herencia de más de un alelo (gen)?
            p.pe-xl-3.mb-0(data-aos="fade-up") Mendel tuvo en cuenta más de un rasgo y pudo demostrar que los rasgos se pueden heredar de manera independiente y lo denominó principio de la transmisión independiente. 
        p Para entenderlo, observe la siguiente figura: 
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')  

    p.mb-4 <strong>Figura 5.</strong> Explicación gráfica del principio de la segregación independiente
    img.mb-4(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
    p.mb-5 Si se explicara a través de un cuadro de Punnett, el cruce entre <strong>AaBb x AaBb</strong>:

    p.mb-4 <strong>Tabla 4.</strong> Cuadro de Punnett para explicar la ley de la segregación independiente, teniendo como referente color de flor y textura del tallo
    p.mb-4 AaBb (Heterocigoto tanto para color y tallo. Su apariencia física es roja y de tallo liso).

    .tabla-a.mb-5
      table.text-center
        thead
          tr
            th.text-center
            th.text-center A (rojo) B (liso)
            th.text-center A (rojo) b (rugoso)
            th.text-center a (morado) B (liso)
            th.text-center a (morado) b (rugoso)
        tbody
          tr
            td.text-bold A (rojo) B (liso)
            td AA BB (rojo y liso)
            td AA Bb (rojo y liso)
            td Aa BB (rojo y liso)
            td Aa Bb (rojo y liso)
          tr
            td.text-bold A (rojo) b (rugoso)
            td AA Bb (rojo y liso)
            td AA Bb (rojo y liso)
            td Aa Bb (rojo y liso)
            td Aa bb (rojo y rugoso)
          tr
            td.text-bold a (morado) B (liso)
            td Aa BB (rojo y liso)
            td Aa Bb (rojo y liso)
            td aa BB (morado y liso)
            td aa Bb (morado y liso)
          tr
            td.text-bold a (morado) b (rugoso)
            td Aa Bb (rojo y liso)
            td Aa bb (rojo y rugoso)
            td aa Bb (morado y liso)
            td aa bb (morado y rugoso)

    p.mb-5 Los rasgos color y tipo de tallo (liso o rugoso) no son codependientes, asunto que permitió describir esta ley, la cual sigue siendo comprendida en la actualidad. Sin embargo, con los desarrollos posteriores y tras nuevos estudios, se pueden reconocer algunas excepciones a las leyes de Mendel, las cuales se explican a continuación:

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Alelos múltiples")
            p Gregor Mendel solo estudió dos alelos de los genes, pero las poblaciones e individuos reales frecuentemente tienen múltiples alelos de un gen dado. Incluso actualmente es visible que hay rasgos como el color de ojos, piel, textura del pelo, que tienen más de dos variables.

          .div(titulo="Dominancia incompleta")
            p Significa que dos alelos pueden producir un fenotipo intermedio cuando ambos están presentes, en lugar que uno determine completamente el fenotipo. Esto se evidencia frecuentemente en el color de piel en los humanos. 
          .div(titulo="Codominancia")
            p Esto ocurre cuando dos alelos pueden expresarse de manera simultánea, cuando ambos están presentes, en lugar que uno determine completamente el fenotipo. Esto se evidencia en la <strong>heterocromia visual</strong>, cuando un individuo tiene cada ojo de distinto color, aunque no es muy común en la sociedad, se presenta en un 1 % de la población mundial. 
          .div(titulo="Pleitropía")
            p Algunos genes afectan muchas características diferentes, no solo una característica. Esta evidencia fue evidente tras los estudios de mapeo del genoma humano.
          .div(titulo="Alelos letales")
            p Algunos genes tienen alelos que previenen la supervivencia cuando son homocigotos o heterocigotos. Entre los ejemplos de enfermedades humanas causadas por alelos recesivos letales están la fibrosis quística, la anemia falciforme y la acondroplasia.
          .div(titulo="Ligamiento al sexo")
            p Son los genes que llevan los cromosomas sexuales, como el cromosoma X de los humanos, muestran diferentes patrones de herencia que los genes en los cromosomas autosómicos (no sexuales).
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img.-mt-18px(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    h2.mb-5 Transitando de las Leyes de Mendel, a las explicaciones de la genética       
    p.mb-4 Pasaron décadas desde la época de Mendel hasta que, en el año de 1944, Oswald Theodore Avery, Colin McLeod y Maclyn McCarty, demostraron que el ADN es el material genético. Años después de los trabajos de Avery, McLeod y McCarty, en 1952, James Watson, Rosalind Franklin y Francis Crick, descubrieron la estructura helicoidal del ADN. Su trabajo es un hito en la historia de la genética y dieron paso a múltiples investigaciones, alrededor de la “molécula de la vida”. 

    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p La década de los 50´s fue un momento cúspide para el campo de la Genética, pues en el año de 1956, Joe Hin Tjio y Albert Levan, establecieron que, en los humanos, el número de cromosomas es 46. En 1958, el experimento de los biólogos Matthew Meselson y Franklin Stahl, demostró que la replicación del ADN es replicación semiconservativa. Esto quiere decir que, en cada ciclo de replicación, cada hélice de ADN formada, mantiene una cadena de la hélice original.
        div.d-flex.align-items-start.bg-amarillo.px-3.py-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-33.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Para entender la herencia desde la genética molecular, es necesario recurrir de nuevo al Ciclo Celular, específicamente la fase de Síntesis (S) en la que el ADN desarrolla su duplicación, previa a la división celular. Allí, con la participación de la molécula de ARN, es posible la generación de una copia exacta a la original. Para que esto ocurra, el ADN primero tiene que transcribirse del ADN, con la ayuda del ARN (Ácido Ribonucleico). 

    .tarjeta.box-shadow.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/link-icon-circle.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-2 Educaplus. Genotipo y Fenotipo
              p.text-small.pe-4.pe-lg-5.me-xxl-4 Lo invitamos a ingresar a los siguientes simuladores para afianzar las lecturas y conceptos: Educaplus. Genotipo y Fenotipo.
            .col-sm-auto(data-aos="flip-up")
              a.download-btn.boton.color-acento-botones.text-white(href="https://www.educaplus.org/game/genotipo-y-fenotipo" target="_blank")
                span.text-small Ir al sitio
                i.fas.fa-arrow-right

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        div.d-flex.align-items-start.bg-morado-claro.px-3.py-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-33.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Los errores en los procesos de duplicación celular, puede llevar a errores en las moléculas de ADN, lo que se denomina una <strong>Mutación</strong>, lo que puede generar la muerte del individuo, problemas graves en la generación o descendencia e incluso, no generar ninguna consecuencia (ser neutra).
        p Además de la síntesis o duplicación de ADN, la genética incluye la traducción del ADN a proteínas, estas últimas “los ladrillos” de la constitución del individuo. La traducción del ADN es el proceso por el cual una célula construye proteínas, a partir de la información genética que lleva el ARN mensajero (ARNm). 
        p.text-bold El ARNm se produce al copiar el ADN (transcripción del ADN) y la información que lleva, le indica a la célula cómo enlazar juntos los aminoácidos para formar proteínas.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')  


    .tarjeta.box-shadow.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/video-icon-circle.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-2 ADN
              p.text-small.pe-4.pe-lg-5.me-xxl-4 Para afianzar los conceptos, lo invitamos a ver el siguiente video: <strong>Khan Academy. (s.f.). AND (video). KKhan Academy</strong>
            .col-sm-auto
              a.download-btn.boton.bg-morado.text-white(href="https://www.youtube.com/watch?v=w6iJZrI2SHQ" target="_blank")
                span.text-small Ver video
                i.fas.fa-arrow-right



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
