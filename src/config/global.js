export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
        unidad: 'Unidad 1',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases genéticas del desarrollo humano',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios de genética humana y herencia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Bases biológicas del desarrollo y diferenciación celular',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Factores genéticos y ambientales en el desarrollo humano',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Biologia desarrollo humano_U1.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Árvelo, F. Cotte, C. Sojo, F. (2014). Células madre y Cáncer. Revista. Invest. clín vol.55 no.4 Maracaibo dic. 2014.',
      link:
        'https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0535-51332014000400008',
    },
    {
      referencia:
        'Ayala, F (2017). ¿Clonar Humanos? Ingeniería Genética y Futuro de la Humanidad (175p). Madrid, España: Alianza Editorial.',
      link: 'e-libro',
    },
    {
      referencia:
        'Curtis H., Barnes N., Massarini A., Schnerck A., BIOLOGÍA. Edición 7º. Editorial Médica Panamericana (2008). Capítulo 8. Desarrollo: de la ejecución de un programa genético',
      link: 'Se anexa PDF',
    },
    {
      referencia:
        'Förster, J. López, I. (2022). Neurodesarrollo humano: un proceso de cambio continuo de un sistema abierto y sensible al contexto. Revista Médica Clínica Las Condes',
      link:
        'https://www.elsevier.es/es-revista-revista-medica-clinica-las-condes-202-articulo-neurodesarrollo-humano-un-proceso-cambio-S0716864022000724',
    },
    {
      referencia:
        'Gutiérrez, F. (2010). Capítulo 2: Reproducción Celular (48p). *Biología: la célula* (159 p). Firmas Press.',
      link: 'e-libro',
    },
    {
      referencia:
        'Solari, A. J (2007). Capítulo 1. Desarrollo Histórico de la Genética Humana. Genética Humana: fundamentos y aplicaciones en medicina (568p.) Buenos Aires, Argentina: Médica Panamericana.',
      link:
        'https://bibliotecas.unr.edu.ar/muestra/medica_panamericana/9789500602693.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ácido desoxirribonucleico - ADN',
      significado:
        'Es la molécula que contiene la información genética esencial para el desarrollo y funcionamiento de todos los seres vivos, así como de algunos virus. Su estructura se compone de dos cadenas de nucleótidos que forman una doble hélice. Cada nucleótido está formado por un azúcar (desoxirribosa), un grupo fosfato y una base nitrogenada (adenina, guanina, citosina o timina)',
    },
    {
      termino: 'Alelo',
      significado:
        'Es una de las diferentes versiones de un gen que se pueden encontrar en un organismo. Cada individuo hereda dos alelos para cada gen, uno de cada progenitor. Estos alelos pueden ser idénticos, lo que se denomina homocigoto, o diferentes, conocido como heterocigoto',
    },
    {
      termino: 'Alelo Dominante',
      significado:
        'Es una forma de un gen que se expresa en el fenotipo de un organismo, incluso si solo hay una copia presente. Esto significa que, para que un rasgo asociado a un alelo dominante se manifieste, basta con que uno de los dos alelos heredados (uno de cada progenitor) sea dominante',
    },
    {
      termino: 'Alelo recesivo',
      significado:
        'A diferencia de un alelo dominante, un alelo recesivo necesita estar presente en dos copias para que su rasgo se exprese',
    },
    {
      termino: 'Autosoma',
      significado:
        'Tipo de cromosoma que no está involucrado en la determinación del sexo de un organismo. En los humanos los cromosomas del 1 al 22 son autosomas',
    },
    {
      termino: 'Bases nitrogenadas',
      significado:
        'Son compuestos orgánicos esenciales que forman parte de los ácidos nucleicos, como el ADN y el ARN. Estas bases son fundamentales para la codificación de la información genética y se clasifican en dos grupos principales: purinas y pirimidinas',
    },
    {
      termino: 'Célula Diploide',
      significado:
        'Son todas las células humanas de tipo somáticas que tienen 23 pares de cromosomas. Cada uno de los cromosomas de los pares, proviene de uno de los progenitores',
    },
    {
      termino: 'Célula Haploide',
      significado:
        'Son las células sexuales humanas (óvulos y espermatozoides) que contienen un solo juego de cromosomas. Son haploides al culminar el proceso de reproducción celular por Meiosis',
    },
    {
      termino: 'Célula Sexual',
      significado:
        'Son también denominadas gametos y fundamentales en la reproducción sexual de los organismos. Existen dos tipos principales de células sexuales: óvulos y espermatozoides. Son células haploides',
    },
    {
      termino: 'Célula Somática',
      significado:
        'Son todas aquellas que constituyen la mayor parte de los tejidos y órganos en los organismos pluricelulares como los seres humanos',
    },
    {
      termino: 'Cigoto',
      significado:
        'Es la primera etapa del desarrollo embrionario y se forma inmediatamente después de la fecundación (unión del óvulo y el espermatozoide). Es una célula unicelular que contiene el material genético de ambos progenitores, es decir, 46 cromosomas (23 de cada uno)',
    },
    {
      termino: 'Cromosoma',
      significado:
        'Son estructuras que se encuentran en el núcleo de las células eucariotas. Compuestas por ADN y proteínas. Los cromosomas son fundamentales para el almacenamiento y la transmisión de la información genética de un organismo en la reproducción celular',
    },
    {
      termino: 'Eucariota',
      significado:
        'Corresponde al tipo de célula que tiene núcleo definido, rodeado por una membrana nuclear. Esta cualidad permite la clasificación taxonómica de organismos',
    },
    {
      termino: 'Fenotipo',
      significado:
        'Son las características observables de un organismo: rasgos físicos, bioquímicos y conductuales, en interacción con el ambiente',
    },
    {
      termino: 'Gen',
      significado:
        'Unidad básica de herencia en los organismos, compuesta por una secuencia de nucleótidos en el ADN. Los genes son los responsables de codificar la información necesaria para la síntesis de proteínas',
    },
    {
      termino: 'Genotipo',
      significado: 'Es la composición genética de los organismos',
    },
    {
      termino: 'Heterocigoto',
      significado:
        'Es un organismo que tiene dos alelos diferentes para un mismo gen en sus cromosomas homólogos. Esto significa que, en un locus específico, uno de los alelos proviene del padre y el otro de la madre, resultando en una combinación de características genéticas distintas',
    },
    {
      termino: 'Histonas',
      significado:
        'Son proteínas fundamentales en la organización y regulación del ADN dentro de las células eucariotas. Estas proteínas permiten el empaquetamiento del ADN en cromosomas, lo que facilita su almacenamiento en el núcleo celular',
    },
    {
      termino: 'Homocigoto',
      significado:
        'Es lo contrario a heterocigoto. En este caso, es un organismo que tiene dos alelos idénticos para un mismo gen en sus cromosomas homólogos. Lo que significa que ambos alelos, heredados de cada progenitor, son iguales, lo que puede influir en la expresión de características específicas',
    },
    {
      termino: 'Multicelular',
      significado: 'Seres vivos compuestos por más de una célula',
    },
    {
      termino: 'Mutación',
      significado:
        'Cualquier cambio en la secuencia de ADN de un organismo, puede ocurrir de manera natural o ser inducida por factores externos como radiación o sustancias químicas. Estas alteraciones pueden tener diversas consecuencias en el organismo, clasificándose generalmente en tres categorías: beneficiosas, perjudiciales y neutras',
    },
    {
      termino: 'Reproducción celular',
      significado:
        'Proceso mediante el cual una célula madre se divide para formar nuevas células hijas. Este proceso es esencial para el crecimiento, la reparación de tejidos y la reproducción en organismos unicelulares y multicelulares',
    },
    {
      termino: 'Traducción de ADN',
      significado:
        'Proceso biológico que ocurre después de la transcripción del ADN por parte del ARN mensajero (ARNm); como resultado, se genera una cadena de aminoácidos, formando así una proteína. Este proceso ocurre en los ribosomas dentro del citoplasma de la célula y es fundamental para la expresión génica',
    },
    {
      termino: 'Transcripción de ADN',
      significado:
        'Primer paso en la expresión genética, donde la información contenida en la secuencia de ADN se copia a una molécula de ARN, específicamente ARN mensajero (ARNm). Este proceso es fundamental para la síntesis de proteínas y se lleva a cabo en el núcleo de las células eucariotas',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
