<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Genética y Herencia',
      titulo: 'Cuestionario de Evaluación',
      introduccion:
        '<b>Objetivo:</b> Evaluar los conocimientos sobre conceptos básicos de genética, herencia y expresión génica.',
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
}
</script>
