import type { SiteContent } from '$lib/types/content';

export const contentEs: SiteContent = {
  meta: {
    siteTitle: 'Manuel Rodríguez — Portafolio Académico y de Ingeniería',
    homeDescription:
      'Estudiante de tercer año de bachillerato próximo a graduarse. Ingeniería en robótica, diseño CAD, liderazgo horizontal y proyectos con impacto.',
    cvDescription:
      'Currículum Vitae formal de Manuel Enrique Rodríguez Nicolás: trayectoria académica, robótica FTC, liderazgo organizativo y competencias técnicas.',
    privacyDescription:
      'Aviso de Privacidad conforme a la LFPDPPP para manuelrodz.work.'
  },
  nav: {
    skipToContent: 'Saltar al contenido principal',
    projects: 'Proyectos',
    cv: 'Currículum',
    contact: 'Contacto',
    switchLanguageLabel: 'Cambiar idioma a inglés'
  },
  hero: {
    academicStatus: "DISEÑO MECÁNICO · SISTEMAS EMBEBIDOS · DESARROLLO WEB",
    fullName: "Manuel Enrique Rodríguez Nicolás",
    coreStatement:
      "Diseño mecanismos en Onshape y programo robots de competencia en C++ y Java. También desarrollo plataformas web para equipos. Combino diseño, programación y trabajo en equipo para llevar proyectos del prototipo a la competencia.",
    primaryCta: "Descargar CV (PDF · ES)",
    secondaryCta: "Explorar trayectoria y proyectos",
    location: "Mérida, Yucatán, México",
    coreStackLabel: 'STACK PRINCIPAL:',
    coreStackValues: 'ONSHAPE CAD · C++ / JAVA · KICAD · SVELTEKIT',
    imageAlt:
      'Render CAD isométrico del chasis del robot de competencia del equipo FTC 22571, con mecanismos de recolección, tracción y torreta visibles.',
    imageCaption: 'Equipo FTC 22571 · Render CAD',
    diagramLabel: 'Diagrama técnico de chasis robótico',
    sidebarLabel: 'Render del robot y datos destacados',
    quickFactsLabel: 'Datos rápidos',
    stats: [
      { value: '10+', label: 'Competencias de robótica' },
      { value: '4', label: 'Reconocimientos FTC' },
      { value: '1', label: 'Premio internacional' },
      { value: '80+', label: 'Personas impactadas' }
    ],
    quickFacts: [
      { icon: 'academic', text: 'Bachillerato · Gen. 2024–2027' },
      { icon: 'globe', text: 'Español (nativo) · Inglés B2 (intermedio alto)' },
      { icon: 'cog', text: 'Robótica · CAD · Desarrollo web · Liderazgo' }
    ]
  },
  method: {
    eyebrow: '01 / Metodología',
    heading: 'Cómo pienso y construyo',
    intro:
      'Combino análisis, criterio técnico y trabajo en equipo para resolver retos de ingeniería.',
    philosophyTitle: 'Aprender para compartir',
    philosophyBody:
      'Me mueve entender cómo funcionan las cosas y probar ideas con los recursos disponibles. Compartir lo que aprendo también es parte del proceso: acompaño a nuevos integrantes de robótica y preparo asesorías gratuitas para mis compañeros.',
    stepsTitle: 'Proceso de resolución de problemas',
    steps: [
      {
        name: 'Análisis previo del problema',
        detail:
          'Antes de fabricar o escribir código, descompongo las restricciones reales del reto, el reglamento o el entorno operativo.'
      },
      {
        name: 'Mapeo de alternativas',
        detail:
          'Identifico distintas rutas técnicas o logísticas en lugar de comprometerme con la primera idea disponible.'
      },
      {
        name: 'Elegir con criterio',
        detail:
          'Comparo la viabilidad, el plazo, los recursos y las capacidades del equipo antes de decidir.'
      },
      {
        name: 'Validación iterativa',
        detail:
          'Pruebo en CAD antes de fabricar y ajusto cada ciclo según los resultados.'
      }
    ],
    fevTitle: 'Metodología de ingeniería FEV',
    fevSummary:
      'En diseño mecánico y robótica de competencia aplico tres criterios para evaluar cada subsistema:',
    fevPillars: [
      {
        term: 'Fiabilidad',
        definition: 'Que el mecanismo responda de forma consistente bajo la exigencia real de competencia.'
      },
      {
        term: 'Eficiencia',
        definition: 'Maximizar el rendimiento aprovechando cada componente, peso y ciclo de tiempo.'
      },
      {
        term: 'Viabilidad',
        definition: 'Que pueda manufacturarse, ensamblarse y mantenerse con nuestros tiempos y capacidades.'
      }
    ]
  },
  projectsSection: {
    eyebrow: '02 / Trayectoria',
    heading: 'Hitos y proyectos',
    intro:
      'Cuatro proyectos muestran mi evolución: desde mi primer robot en secundaria hasta el liderazgo técnico, la cofundación de un equipo FTC y la organización de ValladolidMUN.',
    readCaseLabel: 'Leer caso de estudio completo',
    caseLabels: {
      backToHome: 'Volver al dossier principal',
      jumpHeading: 'Contenido del caso',
      sectionContext: 'Contexto y restricciones',
      sectionDecisions: 'Análisis, alternativas y criterios',
      sectionExecution: 'Ejecución y trabajo en equipo',
      sectionOutcomes: 'Resultados verificables y aprendizajes',
      sectionEvidence: 'Evidencia documental',
      glanceHeading: 'De un vistazo',
      glanceRole: 'Rol',
      glancePeriod: 'Periodo',
      glanceOutcome: 'Resultado clave',
      glanceFocus: 'Enfoque',
      attributionHeading: 'Atribución de rol y autoría',
      curatingNote:
        'Evidencia en proceso de curaduría: repositorio, modelo CAD o registro fotográfico en organización para enlace público.',
      externalLinkHint: 'Abre enlace externo en una nueva pestaña',
      inspectPhotoLabel: 'Ampliar fotografía documental',
      closeModalLabel: 'Cerrar vista ampliada',
      nextProjectLabel: 'Siguiente proyecto'
    },
    items: [
      {
        slug: 'aztecbot',
        tier: 'flagship',
        title: 'Aztecbot — Robótica competitiva FIRST Tech Challenge (FTC)',
        period: '2024 – 2026 · 1.º y 2.º año de bachillerato',
        roleSummary: 'Constructor, Capitán de Diseño y Drive Coach',
        collaborationModel: 'Equipo escolar de preparatoria pública',
        contextNote: 'Temporadas Into the Deep (2024–2025) y Decode (2025–2026)',
        tags: ['Robótica FTC', 'Flujo CAD', 'Drive Coach'],
        executiveSummary:
          'Entré a FTC sin experiencia y crecí de constructor a Capitán de Diseño y Drive Coach. En Decode impulsé con el equipo el flujo CAD-first bajo la metodología FEV y programé la corrección de tiro y el autoapuntado. Mi contribución fue clave para los resultados y reconocimientos colectivos de Aztecbot.',
        keyOutcome:
          'Inspire Award 1st Place y Top 10 Nacional (Into the Deep) · Winning Alliance Captain Regional y Design Award 1st Place en Mexico Premier Event (Decode).',
        caseStudy: {
          openingSummary: 'Me uní a Aztecbot sin experiencia en FTC. Con el tiempo pasé de ayudar a construir el robot a liderar su diseño y asumir como Drive Coach. En Decode también programé la corrección de tiro y el autoapuntado que usamos en el Mexico Premier Event.',
          attributionStatement:
            'Los premios los ganó el equipo Aztecbot. En Into the Deep participé en la integración del robot. En Decode, como Capitán de Diseño, trabajé con un compañero en el CAD y la fabricación; también fui Drive Coach y programé la corrección de tiro y el autoapuntado. Mi aporte fue clave para los resultados que logramos como equipo.',
          contextAndConstraints: [
            'Me uní a Aztecbot en primer año de preparatoria, durante Into the Deep (2024–2025), sin haber participado antes en FTC. Nuestro equipo de una preparatoria pública todavía no tenía experiencia en torneos nacionales.',
            'Al año siguiente, en Decode (2025–2026), queríamos mejorar la precisión y consistencia del robot con los recursos disponibles. Cuando nos invitaron al Mexico Premier Event, tuvimos pocas semanas para diseñar uno nuevo.'
          ],
          analysisAndDecisions: [
            'En Decode nos dimos cuenta de que construir directamente en físico nos hacía repetir trabajo. Con un compañero propuse usar Onshape para revisar los ensambles antes de fabricar; el equipo adoptó ese flujo CAD-first.',
            'Para decidir cómo diseñar cada subsistema usamos FEV: Fiabilidad, Eficiencia y Viabilidad. También pensamos desde el inicio en las piezas que podíamos fabricar con impresión 3D y corte láser.',
            'Para el Mexico Premier Event programé un sistema que ajustaba el ángulo y la velocidad del tiro y orientaba el robot hacia la canasta, reduciendo los cálculos que los drivers debían hacer durante el partido.'
          ],
          executionAndTeamwork: [
            'En Into the Deep me involucré en pensar y armar el robot con mis compañeros, mientras aprendía cómo funcionaba la competencia.',
            'En Decode coordiné la revisión de los ensambles en CAD antes de fabricarlos. Como Drive Coach, ayudé a preparar a los drivers, repasar el reglamento y decidir la estrategia durante los partidos del Nacional y el Mexico Premier Event.'
          ],
          outcomesAndLessons: [
            'En Into the Deep (2024–2025) llegamos a la final regional y ganamos el Inspire Award 1st Place. Después clasificamos al Campeonato Nacional, donde avanzamos a playoffs y terminamos en el Top 10.',
            'En Decode (2025–2026) fui capitán de la alianza ganadora del torneo regional y Aztecbot obtuvo el pase al Nacional. Más tarde nos invitaron al Mexico Premier Event, donde el equipo ganó el Design Award 1st Place.',
            'Aprendí que revisar y probar el diseño antes de fabricar ahorra tiempo y nos ayuda a aprovechar mejor los recursos del equipo.'
          ],
          evidence: [
            {
              type: 'onshape',
              title: 'CAD del robot del Mexico Premier Event (Onshape)',
              description:
                'Modelo paramétrico completo del robot, desarrollado bajo el flujo CAD-first y la metodología FEV.',
              status: 'active',
              url: 'https://cad.onshape.com/documents/9996eb6f6e3343715753fcfa'
            },
            {
              type: 'github',
              title: 'Código del robot Aztecbot 22571 en el Premier Event',
              description:
                'Código del robot del Mexico Premier Event, incluida la lógica de corrección automática de ángulo y velocidad de tiro y de auto-apuntado a la canasta.',
              status: 'active',
              url: 'https://github.com/manu2w2/Aztecbot-22571'
            },
            {
              type: 'photo',
              title: 'Registro de competencias y reconocimientos FTC',
              description:
                'Fotografías de Inspire Award 1st Place, Winning Alliance Captain y Design Award 1st Place.',
              status: 'curating'
            }
          ]
        }
      },
      {
        slug: 'velocity-bucks',
        tier: 'active',
        title: 'Velocity Bucks — Cofundación de equipo independiente FTC',
        period: 'Actualidad · 3.er año de bachillerato',
        roleSummary: 'Cofundador, Programador Principal y Mentor Técnico',
        collaborationModel: 'Equipo independiente fuera de estructura escolar',
        contextNote: 'Construcción organizativa y técnica desde cero',
        tags: ['Cofundación', 'Arquitectura Java', 'Web'],
        executiveSummary:
          'Cofundé un equipo FTC independiente y desarrollo el software del robot y el sitio web del equipo. También apoyo el diseño y el armado, y comparto con mis compañeros lo aprendido en temporadas anteriores.',
        keyOutcome:
          'Creación y puesta en marcha de un equipo autónomo con arquitectura de software modular y transferencia activa de conocimiento.',
        caseStudy: {
          openingSummary: 'Fundé Velocity Bucks con mis compañeros como equipo independiente de FTC. Me encargo de programar el robot y desarrollar el sitio del equipo; también participo en el trabajo del taller y comparto lo que he aprendido.',
          attributionStatement:
            'El equipo lo fundamos entre varios. Yo me encargo de organizar el trabajo junto con mis compañeros, definir la arquitectura y programar el robot, desarrollar el sitio web y apoyar a otros integrantes con CAD y ensamblaje.',
          contextAndConstraints: [
            'Al no depender de una preparatoria, tenemos que conseguir nuestros propios recursos y espacio de trabajo, además de decidir cómo organizarnos.',
            'El equipo reúne integrantes con distintos niveles de experiencia. Por eso estamos acordando una forma de trabajar y estándares técnicos que todos podamos seguir.'
          ],
          analysisAndDecisions: [
            'Queríamos aprovechar lo aprendido en temporadas anteriores, pero adaptarlo al presupuesto y al tiempo de un equipo independiente. Por eso priorizamos revisar los diseños antes de fabricar y repartir con claridad las tareas.',
            'Organicé el código en subsistemas y comandos. Así podemos probar cada mecanismo por separado y mis compañeros pueden entender y mantener el programa con más facilidad.'
          ],
          executionAndTeamwork: [
            'Además de programar el robot y desarrollar el sitio web, trabajo con mis compañeros en el diseño y el armado mecánico.',
            'En el taller comparto lo que he aprendido sobre CAD, tolerancias de fabricación y estrategia de competencia.'
          ],
          outcomesAndLessons: [
            'Ya pusimos en marcha un equipo independiente, con una base de software modular y una dinámica para compartir conocimientos entre compañeros.',
            'Aprendí que fundar un equipo no es solo construir el robot: también hay que crear la manera de trabajar y aprender juntos.'
          ],
          evidence: [
            {
              type: 'github',
              title: 'Código de control del robot Velocity Bucks (temporada BIOBUZZ)',
              description:
                'Arquitectura modular por subsistemas y comandos para competencia FTC.',
              status: 'active',
              url: 'https://github.com/manu2w2/BIOBUZZ_velocity_bucks'
            },
            {
              type: 'onshape',
              title: 'CAD del robot Velocity Bucks (temporada BIOBUZZ, Onshape)',
              description:
                'Modelo paramétrico completo del robot de la temporada BIOBUZZ, diseñado bajo el flujo CAD-first.',
              status: 'active',
              url: 'https://cad.onshape.com/documents/69a50231a2f32c50d2c20f8f/w/252a05a2cc4d919d4cb5bba9/e/061ff5da347421369982ad5b'
            },
            {
              type: 'github',
              title: 'Código de la página web del equipo Velocity Bucks',
              description:
                'Código fuente del sitio web del equipo, que desarrollo y mantengo.',
              status: 'active',
              url: 'https://github.com/manu2w2/VelocityBucks'
            }
          ]
        }
      },
      {
        slug: 'valladolid-mun',
        tier: 'active',
        title: 'Comisión de Valladolid — ValladolidMUN / SMMUN 2027 "Our Spark"',
        period: '2026 · Organización de Modelo de Naciones Unidas',
        roleSummary: 'Representante de la Comisión de Valladolid (Dirección operativa / SG)',
        collaborationModel: 'Equipo horizontal de iguales junto a consultorías',
        contextNote: 'Más de 60 delegaciones participantes en 6 comités',
        tags: ['Modelo ONU', 'Liderazgo Horizontal', '60+ Delegaciones'],
        executiveSummary:
          'Como representante de la Comisión de Valladolid en SMMUN 2027, participé en la planeación, logística, vinculación y ejecución de ValladolidMUN. Trabajé con el equipo organizador y las consultorías de logística, finanzas y vinculación bajo un modelo horizontal.',
        keyOutcome:
          'Ejecución exitosa de un modelo con más de 60 delegaciones y 6 comités mediante gobernanza horizontal entre iguales.',
        caseStudy: {
          openingSummary: 'Como representante de la Comisión de Valladolid, ayudé a coordinar la organización de ValladolidMUN. Mi papel incluía responsabilidades similares a las de Secretaría General y lo desempeñé junto con las consultorías y el resto del equipo.',
          caseOutcome: 'Organizamos un modelo con más de 60 delegaciones en seis comités, trabajando de forma coordinada entre la Comisión y las consultorías.',
          attributionStatement:
            'ValladolidMUN lo organizamos entre varias personas. Desde la Comisión de Valladolid me encargué de coordinar aspectos generales y trabajé al mismo nivel que las consultorías de Logística, Finanzas y Vinculación. Mis funciones se parecían a las de Secretaría General, pero el trabajo y las decisiones fueron compartidos.',
          contextAndConstraints: [
            'Para sacar adelante un Modelo de Naciones Unidas con varios comités tuvimos que coordinar la sede, la agenda, el presupuesto, la vinculación institucional y los protocolos académicos.',
            'Cada área dependía de las demás. Mantenernos comunicados y responder a tiempo a los cambios era clave durante los debates.'
          ],
          analysisAndDecisions: [
            'En vez de concentrar las decisiones en una sola persona, organizamos el trabajo de forma horizontal. Las consultorías de logística, finanzas y vinculación aportaron su experiencia para anticipar problemas y resolverlos entre todos.'
          ],
          executionAndTeamwork: [
            'Coordiné parte de la planeación general y la vinculación institucional, y ayudé a resolver imprevistos durante las sesiones.',
            'El trabajo cercano entre la Comisión de Valladolid y las consultorías permitió mantener activos los seis comités al mismo tiempo.'
          ],
          outcomesAndLessons: [
            'Más de 60 delegaciones participaron en los seis comités de debate y redacción de resoluciones.',
            'Aprendí que coordinar un proyecto así significa escuchar a cada área, confiar en su experiencia y llegar a acuerdos en conjunto.',
          ],
          evidence: [
            {
              type: 'photo',
              title: 'Memoria operativa de ValladolidMUN / SMMUN 2027',
              description:
                'Registro del presidium, comités y equipo organizador.',
              status: 'curating'
            }
          ]
        }
      },
      {
        slug: 'yucatan-i6',
        tier: 'origin',
        title: 'Competencia Yucatán i6 — Primer robot recolector',
        period: '3.º de Secundaria · Punto de origen vocacional',
        roleSummary: 'Diseño, armado y programación en dupla',
        collaborationModel: 'Equipo de dos estudiantes',
        contextNote: '3.er lugar en categoría de robótica',
        tags: ['Origen Vocacional', 'Mecanismo Recolector', '3.er Lugar'],
        executiveSummary:
          'Junto con un amigo diseñé, armé y programé mi primer robot de competencia: un recolector de bolas de papel y tapas. Obtuvimos el tercer lugar en robótica de Yucatán i6.',
        keyOutcome:
          'Ese primer proyecto despertó mi interés por la ingeniería y la programación.',
        caseStudy: {
          openingSummary: 'En tercero de secundaria, mi amigo y yo construimos un robot recolector de bolas de papel y tapas para competir en robótica en Yucatán i6. Programamos sus movimientos y obtuvimos el tercer lugar.',
          attributionStatement:
            'Mi compañero y yo compartimos todo el proyecto: diseñamos y armamos el robot, lo probamos y programamos sus movimientos.',
          contextAndConstraints: [
            'Era la primera vez que diseñábamos y programábamos un robot para competir. Empezamos con curiosidad y fuimos aprendiendo mientras probábamos ideas.'
          ],
          analysisAndDecisions: [
            'Necesitábamos recoger objetos ligeros —bolas de papel y tapas— y llevarlos a un contenedor. Por eso optamos por un mecanismo recolector sencillo.'
          ],
          executionAndTeamwork: [
            'Probamos el robot varias veces y fuimos ajustando el armado y sus movimientos hasta que pudo recoger los objetos y dejarlos en el contenedor.'
          ],
          outcomesAndLessons: [
            'Obtuvimos el 3.er lugar en la competencia de robótica Yucatán i6 con nuestro robot recolector.',
            'Ver que algo que habíamos imaginado y construido funcionaba en una competencia despertó mi interés por la ingeniería y la programación.'
          ],
          evidence: [
            {
              type: 'photo',
              title: 'Constancia y registro de Yucatán i6',
              description:
                'Reconocimiento de 3.er lugar en la categoría de robótica.',
              status: 'curating'
            }
          ]
        }
      }
    ]
  },
  projectsIndex: {
    eyebrow: 'Trayectoria',
    heading: 'Proyectos',
    intro:
      'Estos proyectos reúnen mi experiencia en robótica, programación y organización de equipos: desde mi primer robot hasta competencias FTC y la coordinación de ValladolidMUN.'
  },
  recognitionsSection: {
    eyebrow: '03 / Competencias',
    heading: 'Otros resultados destacados',
    intro:
      'Además de FTC, he participado en competencias de robótica, ciencia y tecnología. Estos resultados incluyen logros individuales y de equipo.',
    items: [
      {
        result: '1.er lugar · Robot Fútbol',
        event: 'Competencia nacional organizada por SECIHTI',
        detail: 'Participaron equipos de distintos estados del país.'
      },
      {
        result: '2.º lugar · Categoría Robótica',
        event: 'LIT Anáhuac Junior'
      },
      {
        result: '6.º lugar estatal',
        event: 'Olimpiada Estatal de Biología'
      },
      {
        result: '2.º lugar estatal · Nominación global',
        event: 'NASA Space Apps Challenge 2024',
        detail: 'Resultado obtenido junto con mi equipo.'
      }
    ]
  },
  complementary: {
    eyebrow: '04 / Otras experiencias',
    heading: 'Más allá de la ingeniería',
    intro:
      'Fuera de mis proyectos técnicos, también doy asesorías, colaboro con una organización comunitaria y hago música.',
    items: [
      {
        title: 'Asesorías académicas entre pares',
        role: 'Tutor voluntario',
        summary:
          'Doy asesorías gratuitas en materias académicas y técnicas. Preparo materiales visuales y ejercicios según lo que necesita cada estudiante.'
      },
      {
        title: 'SMMUN 2027',
        role: 'Secretario de Tecnología, Logística y Eventos',
        summary:
          'Coordino la tecnología, la logística y los eventos de SMMUN 2027 "Our Spark" junto con el equipo organizador.'
      },
      {
        title: 'Crecer Sin Barreras',
        role: 'Secretario de Vinculación y Finanzas',
        summary:
          'Apoyo la gestión financiera y el contacto con aliados para impulsar las iniciativas comunitarias de la organización.'
      },
      {
        title: 'Broken Sticks',
        role: 'Cofundador y músico',
        summary:
          'Con la banda escribí, compuse y publiqué tres canciones originales. También obtuvimos el primer lugar en el festival de talentos de la escuela.'
      }
    ]
  },
  contact: {
    heading: 'Contacto y verificación',
    intro:
      '¿Formas parte de un comité de becas o admisiones, o quieres conversar sobre alguno de mis proyectos? Escríbeme directamente.',
    emailLabel: 'Correo electrónico directo',
    copyButton: 'Copiar correo',
    copiedAnnouncement: 'Correo electrónico copiado al portapapeles.',
    copyFallbackAnnouncement: 'No se pudo copiar automáticamente; puedes usar el enlace directo de correo.',
    linksLabel: 'Perfiles y documentación externa',
    privacyLinkLabel: 'Aviso de Privacidad (LFPDPPP)'
  },
  cv: {
    heading: 'Currículum Vitae',
    subtitle: 'Manuel Enrique Rodríguez Nicolás · Estudiante de tercer año de bachillerato próximo a graduarse',
    downloadPdfLabel: 'Descargar versión oficial en PDF',
    printPageLabel: 'Imprimir esta vista',
    lastUpdated: 'Actualizado en noviembre de 2026',
    sections: {
      education: {
        heading: 'Formación académica',
        items: [
          {
            institution: 'Preparatoria Estatal No. 13 Plantel Azteca Yucatán',
            program: 'Bachillerato General · Tercer año (próximo a graduarse)',
            period: '2024 – 2027',
            detail: 'Mérida, Yucatán, México.'
          }
        ]
      },
      experience: {
        heading: 'Ingeniería, liderazgo y participación organizativa',
        items: [
          {
            organization: 'Velocity Bucks (Equipo independiente FIRST Tech Challenge)',
            role: 'Cofundador, Programador Principal y Mentor Técnico',
            period: 'Actualidad',
            highlights: [
              'Cofundación y estructuración operativa de un equipo FTC independiente fuera de una institución escolar.',
              'Desarrollo del código de competencia del robot y de la página web oficial del equipo.',
              'Mentoría técnica en diseño CAD, ensamblaje físico y metodología de trabajo.'
            ]
          },
          {
            organization: 'ValladolidMUN / SMMUN 2027 "Our Spark"',
            role: 'Secretario de Tecnología, Logística y Eventos · Oficial de Conferencias · Delegado',
            period: '2024 – 2027',
            highlights: [
              'Coordino tecnología, logística y eventos de SMMUN 2027 "Our Spark" en colaboración con las demás áreas organizadoras.',
              'Apoyé la organización de un modelo con más de 60 delegaciones en 6 comités y participé como delegado en cinco ocasiones.',
              'Fui oficial de conferencias y miembro de mesa directiva; mi comité recibió el reconocimiento a Mejor Comité en Jenaro MUN.'
            ]
          },
          {
            organization: 'Aztecbot (Equipo FIRST Tech Challenge — Preparatoria)',
            role: 'Capitán de Diseño y Drive Coach (2026) · Mecánico principal y miembro del equipo (2025)',
            period: '2024 – 2026',
            highlights: [
              'Lideré el diseño CAD en Onshape y el desarrollo mecánico del robot Decode bajo la metodología FEV (Fiabilidad, Eficiencia y Viabilidad).',
              'Programé la corrección automática del ángulo y la velocidad de tiro y el autoapuntado para el Mexico Premier Event.',
              'Como Drive Coach, guié la estrategia del equipo en el Campeonato Nacional y en el Mexico Premier Event; mi trabajo fue clave para los resultados que obtuvimos como equipo.',
              'En 2025, fui responsable del ensamblaje, mantenimiento y optimización mecánica del robot Into the Deep.'
            ]
          },
          {
            organization: 'Competencias de robótica',
            role: 'Participante',
            period: '2024 – 2026',
            highlights: [
              'Participé en más de 10 competencias de robótica entre 2024 y 2026.'
            ]
          },
          {
            organization: 'Crecer Sin Barreras (ONG)',
            role: 'Secretario de Vinculación y Finanzas',
            period: '2025 – Actualidad',
            highlights: [
              'Apoyo en la gestión de vinculación y finanzas para iniciativas comunitarias.'
            ]
          },
          {
            organization: 'Mentoría Académica entre Pares',
            role: 'Tutor voluntario',
            period: '2025 – Actualidad',
            highlights: [
              'Doy asesorías académicas gratuitas con presentaciones visuales y ejercicios prácticos.'
            ]
          },
          {
            organization: 'Un Nuevo Bosque',
            role: 'Voluntario',
            period: '2023 – 2024',
            highlights: [
              'Participé en campañas de reforestación y actividades de educación ambiental.'
            ]
          },
          {
            organization: 'Broken Sticks',
            role: 'Cofundador y músico',
            period: 'Proyecto escolar',
            highlights: [
              'Escribí, compuse y publiqué tres canciones originales; el proyecto obtuvo el primer lugar en el festival de talentos de la escuela.'
            ]
          }
        ]
      },
      honors: {
        heading: 'Reconocimientos y resultados destacados',
        items: [
          {
            award: '1.er lugar en Robot Futbol',
            event: 'Competencia nacional organizada por SECIHTI Yucatán',
            year: '2026'
          },
          {
            award: 'Design Award 1st Place',
            event: 'Mexico Premier Event (FTC — Temporada Decode)',
            year: '2026'
          },
          {
            award: '15.º lugar nacional',
            event: 'FIRST Tech Challenge México (Temporada Decode)',
            year: '2026'
          },
          {
            award: '2.º lugar en robótica',
            event: 'LIT Anáhuac Junior',
            year: '2026'
          },
          {
            award: 'Winning Alliance Captain y clasificación al Campeonato Nacional',
            event: 'Torneo Regional FTC (Temporada Decode)',
            year: '2026'
          },
          {
            award: 'Inspire Award 1st Place, finalista de la alianza y 9.º lugar nacional',
            event: 'FTC México (Temporada Into the Deep)',
            year: '2025'
          },
          {
            award: '1.er lugar en la categoría Brazo',
            event: 'Tec Conkal',
            year: '2025'
          },
          {
            award: '2.º lugar estatal y nominación global del equipo',
            event: 'NASA Space Apps Challenge',
            year: '2024'
          },
          {
            award: '6.º lugar',
            event: 'Olimpiada Estatal de Biología',
            year: '2024'
          },
          {
            award: '3.er lugar con un robot recolector',
            event: 'Competencia de Robótica Yucatán i6',
            year: 'Secundaria'
          }
        ]
      },
      capabilities: {
        heading: 'Competencias técnicas y metodológicas',
        groups: [
          {
            area: 'Ingeniería mecánica y CAD',
            items: 'Onshape (ensambles paramétricos, flujo CAD-first), diseño para impresión 3D y corte láser, metodología FEV.'
          },
          {
            area: 'Programación y robótica',
            items: 'Java (control de robots FTC, arquitectura por subsistemas), C/C++ (microcontroladores), Python, algoritmos de control de tiro.'
          },
          {
            area: 'Desarrollo web',
            items: 'TypeScript, SvelteKit, HTML semántico, CSS, accesibilidad web (WCAG 2.2 AA).'
          },
          {
            area: 'Liderazgo y gestión',
            items: 'Trabajo horizontal entre iguales, logística de eventos académicos, mentoría, comunicación técnica y coordinación de equipos.'
          }
        ]
      },
      languages: {
        heading: 'Idiomas',
        items: [
          { language: 'Español', proficiency: 'Lengua materna' },
          { language: 'Inglés', proficiency: 'B2 · Intermedio alto' }
        ]
      }
    }
  },
  privacy: {
    heading: 'Aviso de Privacidad',
    effectiveDate: 'Última actualización: noviembre de 2026',
    paragraphs: [
      {
        title: '1. Responsable y alcance',
        body: 'Manuel Enrique Rodríguez Nicolás, con domicilio en Mérida, Yucatán, México, es responsable del contenido publicado en el dominio manuelrodz.work, de conformidad con los principios de licitud, información y minimización establecidos en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).'
      },
      {
        title: '2. Ausencia de recolección automatizada y cookies',
        body: 'Este sitio web es de carácter exclusivamente informativo y académico. No utiliza formularios de captura, bases de datos de visitantes, cookies publicitarias ni herramientas de analítica de terceros que rastreen su navegación o recopilen datos personales de forma automática.'
      },
      {
        title: '3. Contacto voluntario por correo electrónico y derechos ARCO',
        body: 'En caso de que usted decida enviar un correo electrónico voluntariamente a la dirección publicada en este sitio, sus datos de contacto serán utilizados únicamente para atender su mensaje relacionado con postulaciones universitarias, becas o proyectos académicos, sin ser transferidos a terceros. Usted puede solicitar el acceso, rectificación, cancelación u oposición (derechos ARCO) respecto de dicha comunicación escribiendo directamente al mismo correo de contacto.'
      }
    ]
  },
  footer: {
    rightsNote: 'Manuel Enrique Rodríguez Nicolás · Mérida, Yucatán, México.'
  }
};

