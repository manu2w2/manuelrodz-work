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
      "Diseño mecanismos en Onshape, programo sistemas de control en C++/Java para robótica competitiva y desarrollo plataformas web con SvelteKit. Combino rigor técnico y logística para llevar proyectos desde el prototipo hasta la ejecución.",
    primaryCta: "Descargar CV (PDF · ES)",
    secondaryCta: "Explorar trayectoria y proyectos",
    location: "Mérida, Yucatán, México",
  },
  method: {
    heading: 'Cómo pienso y construyo',
    intro:
      'Más allá de las herramientas técnicas, mi trabajo responde a una misma forma de abordar problemas complejos en ingeniería y organización de equipos.',
    philosophyTitle: 'Aprender para compartir',
    philosophyBody:
      'Mi principal motor es entender cómo funcionan las cosas y experimentar con lo que tengo a mi alcance. Pero considero que el aprendizaje solo se completa cuando se comparte con claridad para impulsar a otras personas, ya sea mentoreando nuevas generaciones en robótica o preparando asesorías visuales gratuitas para mis compañeros.',
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
        name: 'Selección por viabilidad y resonancia',
        detail:
          'Evalúo qué solución es factible dentro del plazo y los recursos reales, y cuál tiene sentido construir con mi equipo.'
      },
      {
        name: 'Validación y ejecución iterativa',
        detail:
          'Documento, pruebo digitalmente antes de manufacturar y optimizo cada ciclo a partir de evidencia.'
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
    heading: 'Hitos y proyectos ancla',
    intro:
      'Cuatro experiencias que resumen mi evolución durante la preparatoria: desde mi primer prototipo en secundaria hasta el liderazgo técnico internacional, la cofundación de un equipo independiente y la organización horizontal de un modelo de Naciones Unidas.',
    readCaseLabel: 'Leer caso de estudio completo',
    caseLabels: {
      backToHome: 'Volver al dossier principal',
      jumpHeading: 'Contenido del caso',
      sectionContext: 'Contexto y restricciones',
      sectionDecisions: 'Análisis, alternativas y criterios',
      sectionExecution: 'Ejecución y trabajo en equipo',
      sectionOutcomes: 'Resultados verificables y aprendizajes',
      sectionEvidence: 'Evidencia documental',
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
        executiveSummary:
          'Comencé en primer año sin experiencia previa en FTC y evolucioné hasta asumir la capitanía de diseño y la dirección estratégica en cancha. Impulsé la transición a ingeniería 100% CAD-first bajo la metodología FEV, llevando al equipo a clasificar al Campeonato Nacional en ambas temporadas y a ganar el Design Award 1st Place en el evento internacional Mexico Premier Event.',
        keyOutcome:
          'Inspire Award 1st Place y Top 10 Nacional (Into the Deep) · Winning Alliance Captain Regional y Design Award 1st Place en Mexico Premier Event (Decode).',
        caseStudy: {
          attributionStatement:
            'Los logros en competencia son resultado del trabajo colectivo de todo el equipo Aztecbot. Mi contribución directa se centró en la integración física inicial (temporada Into the Deep) y, durante la temporada Decode, en la capitanía de diseño CAD en Onshape junto con un compañero, la fabricación en impresión 3D y corte láser, el rol de Drive Coach y el desarrollo de la lógica de auto-apuntado y corrección de tiro para el Mexico Premier Event.',
          contextAndConstraints: [
            'Al ingresar en primer año de preparatoria durante la temporada Into the Deep (2024–2025), partí desde cero dentro de un equipo de escuela pública relativamente joven y sin historial previo en torneos regionales.',
            'Para la segunda temporada (Decode, 2025–2026), el reto consistió en elevar la precisión mecánica y la repetibilidad del robot sin contar con recursos ilimitados, y posteriormente diseñar un robot completamente nuevo en pocas semanas tras recibir la invitación al Mexico Premier Event.'
          ],
          analysisAndDecisions: [
            'En la temporada Decode detectamos que construir directamente en físico generaba retrabajos costosos. Junto con un compañero decidimos migrar a un flujo 100% CAD-first en Onshape: modelar y verificar cada ensamble antes de cortar o imprimir una sola pieza.',
            'Estructuramos las decisiones técnicas bajo tres valores: Fiabilidad, Eficiencia y Viabilidad (metodología FEV), optimizando componentes para impresión 3D y corte láser.',
            'De cara al Mexico Premier Event, analicé los errores humanos habituales en lanzamientos bajo presión y opté por programar una lógica de corrección automática de ángulo y velocidad de tiro, además de auto-apuntado a la canasta.'
          ],
          executionAndTeamwork: [
            'Durante Into the Deep me integré progresivamente en la ideación y armado mecánico junto a mis compañeros, descubriendo que la constancia diaria transforma ideas iniciales en sistemas competitivos.',
            'Como Capitán de Diseño en Decode coordiné la revisión digital previa al ensamblaje físico. Además, asumí el rol de Drive Coach en el Campeonato Nacional y en el Mexico Premier Event, supervisando el entrenamiento de los drivers, el dominio del reglamento y el soporte táctico durante cada partida.'
          ],
          outcomesAndLessons: [
            'Temporada Into the Deep (2024–2025): Finalistas en el Torneo Regional y ganadores del Inspire Award 1st Place; clasificación al Campeonato Nacional de FTC en México, avanzando a playoffs y ubicándonos en el Top 10 nacional.',
            'Temporada Decode (2025–2026): Campeones regionales como Winning Alliance Captain con pase al Campeonato Nacional, e invitación al Mexico Premier Event, donde obtuvimos el Design Award 1st Place en reconocimiento al diseño y la metodología FEV.',
            'Aprendizaje central: las grandes metas nacen de pequeños esfuerzos sostenidos, y la disciplina de validar antes de construir multiplica la capacidad de cualquier equipo.'
          ],
          evidence: [
            {
              type: 'onshape',
              title: 'Modelos CAD del robot — Temporada Decode (Onshape)',
              description:
                'Ensambles completos desarrollados bajo el flujo CAD-first y metodología FEV.',
              status: 'curating'
            },
            {
              type: 'github',
              title: 'Lógica de corrección de ángulo, velocidad y auto-apuntado',
              description:
                'Código de control implementado para el robot del Mexico Premier Event.',
              status: 'curating'
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
        executiveSummary:
          'Cofundé un equipo de robótica FTC completamente independiente de una institución académica. Asumo la programación principal tanto del robot de competencia como de la plataforma web del equipo, además de acompañar el diseño y armado físico transfiriendo la experiencia acumulada en temporadas anteriores.',
        keyOutcome:
          'Creación y puesta en marcha de un equipo autónomo con arquitectura de software modular y transferencia activa de conocimiento.',
        caseStudy: {
          attributionStatement:
            'Proyecto cofundado en equipo. Mis responsabilidades directas abarcan la cofundación organizativa, la arquitectura y programación del robot de competencia, el desarrollo de la página web del equipo y la mentoría técnica en diseño y ensamblaje.',
          contextAndConstraints: [
            'A diferencia de un equipo respaldado por una preparatoria, operar de manera independiente exige gestionar recursos externos, espacios de trabajo y procesos internos desde cero.',
            'El equipo integra compañeros con distintos niveles de experiencia previa, por lo que resultaba indispensable establecer estándares claros de ingeniería y colaboración desde el inicio.'
          ],
          analysisAndDecisions: [
            'Analizamos cómo adaptar las buenas prácticas de temporadas anteriores (diseño previo, modularidad en código y división clara de tareas) a un entorno con recursos acotados.',
            'En software opté por una arquitectura modular basada en subsistemas y comandos para facilitar las pruebas independientes y la lectura del código por otros integrantes.'
          ],
          executionAndTeamwork: [
            'Desarrollo el software de control del robot y la presencia web del equipo, mientras apoyo presencialmente en el taller durante el diseño y armado mecánico.',
            'Comparto con mis compañeros los aprendizajes de diseño CAD, tolerancias de manufactura y estrategia de competencia adquiridos previamente.'
          ],
          outcomesAndLessons: [
            'Consolidación de una estructura funcional de trabajo autónomo donde el conocimiento técnico se documenta y se transmite entre pares.',
            'Aprendizaje central: liderar en un proyecto independiente significa construir tanto la infraestructura técnica como la cultura de aprendizaje del equipo.'
          ],
          evidence: [
            {
              type: 'github',
              title: 'Código base de control del robot Velocity Bucks',
              description:
                'Arquitectura modular por subsistemas y comandos para competencia FTC.',
              status: 'curating'
            },
            {
              type: 'website',
              title: 'Plataforma web oficial del equipo Velocity Bucks',
              description:
                'Sitio informativo y de vinculación desarrollado para el equipo.',
              status: 'curating'
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
        executiveSummary:
          'Como representante de la Comisión de Valladolid dentro de SMMUN 2027 "Our Spark", asumí responsabilidades equivalentes a la Secretaría General en la creación, logística, vinculación y ejecución de ValladolidMUN. Trabajamos como un equipo horizontal de iguales junto a las consultorías de logística, finanzas y vinculación, logrando reunir a más de 60 delegaciones en 6 comités.',
        keyOutcome:
          'Ejecución exitosa de un modelo con más de 60 delegaciones y 6 comités mediante gobernanza horizontal entre iguales.',
        caseStudy: {
          attributionStatement:
            'ValladolidMUN fue posible gracias al esfuerzo conjunto de todo el equipo organizador. Como representante de la Comisión de Valladolid asumí funciones de articulación general equivalentes a Secretaría General, trabajando a la par y en igualdad de condiciones con las consultorías de Logística, Finanzas y Vinculación, quienes actuaron como apoyo y guía fundamental en cada etapa.',
          contextAndConstraints: [
            'Construir y operar un Modelo de Naciones Unidas con múltiples comités exige coordinar sedes, tiempos, finanzas, difusión y protocolos académicos sin margen de improvisación durante los días del evento.',
            'El éxito dependía de mantener una comunicación fluida y corresponsable entre áreas especializadas.'
          ],
          analysisAndDecisions: [
            'Adoptamos un esquema de trabajo horizontal entre iguales: en lugar de una estructura vertical rígida, cada consultoría (logística, finanzas y vinculación) aportó criterio especializado y guía mutua para resolver cuellos de botella antes y durante el modelo.'
          ],
          executionAndTeamwork: [
            'Participé en la planeación integral, vinculación institucional y resolución en tiempo real de imprevistos operativos durante la ejecución de los debates.',
            'La coordinación estrecha entre la Comisión de Valladolid y las consultorías permitió sostener el ritmo de 6 comités simultáneos.'
          ],
          outcomesAndLessons: [
            'Participación de más de 60 delegaciones distribuidas en 6 comités activos de debate y redacción de resoluciones.',
            'Aprendizaje central: el liderazgo más efectivo en proyectos humanos complejos ocurre cuando se reconoce la experiencia de cada integrante y se construye entre iguales.',
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
        executiveSummary:
          'Mi primer acercamiento formal a la robótica de competencia: junto con un amigo diseñé, armé y programé un robot recolector capaz de recoger y depositar bolas de papel y tapas en un contenedor. Obtener el tercer lugar confirmó que podía transformar una idea en una máquina funcional.',
        keyOutcome:
          '3.er lugar en robótica y detonante de mi vocación por la ingeniería y la programación.',
        caseStudy: {
          attributionStatement:
            'Desarrollado en equipo de dos personas junto a un compañero de secundaria, compartiendo el armado físico, las pruebas de recolección y la programación básica.',
          contextAndConstraints: [
            'Primera experiencia construyendo y programando un robot bajo reglas de competencia, partiendo únicamente de curiosidad y experimentación.'
          ],
          analysisAndDecisions: [
            'Definimos un mecanismo recolector sencillo y directo para manipular objetos ligeros (bolas de papel y tapas) y depositarlos con precisión dentro del contenedor objetivo.'
          ],
          executionAndTeamwork: [
            'Iteramos sobre el ensamblaje físico y los tiempos de movimiento hasta comprobar en pruebas reales que el ciclo completo de recolección funcionaba de manera confiable.'
          ],
          outcomesAndLessons: [
            '3.er lugar en la categoría de robótica de Yucatán i6.',
            'Aprendizaje central: comprobar que una idea propia funciona en el mundo físico fue el punto de inflexión que originó toda mi trayectoria posterior en ingeniería.'
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
  complementary: {
    heading: 'Dimensiones complementarias',
    intro:
      'La ingeniería cobra sentido cuando dialoga con la comunidad, la enseñanza y la expresión creativa. Estas actividades forman parte integral de quién soy fuera del taller de competencia.',
    items: [
      {
        title: 'Asesorías académicas gratuitas y material visual',
        role: 'Mentor entre pares',
        summary:
          'Brindo asesorías gratuitas a compañeros y conocidos en temas académicos y técnicos, elaborando presentaciones visuales y ejercicios prácticos adaptados a su forma de aprender.'
      },
      {
        title: 'SMMUN 2027 y Crecer Sin Barreras',
        role: 'Secretario de Tecnología, Logística y Eventos · Secretario de Vinculación y Finanzas',
        summary:
          'Participo en la infraestructura tecnológica y logística de SMMUN 2027 "Our Spark" y colaboro en vinculación y finanzas dentro de la organización social Crecer Sin Barreras.'
      },
      {
        title: 'Broken Sticks',
        role: 'Integrante y compositor',
        summary:
          'Formo parte de la banda estudiantil Broken Sticks, escribiendo canciones originales y participando en presentaciones locales como espacio de creatividad y trabajo colectivo.'
      }
    ]
  },
  contact: {
    heading: 'Contacto y verificación',
    intro:
      'Si formas parte de un comité de becas, admisiones universitarias o buscas conversar sobre algún proyecto documentado en este sitio, puedes escribirme directamente.',
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
            role: 'Representante de la Comisión de Valladolid · Secretario de Tecnología, Logística y Eventos',
            period: '2026 – 2027',
            highlights: [
              'Articulación general (funciones equivalentes a Secretaría General) en equipo horizontal de iguales junto a las consultorías de logística, finanzas y vinculación.',
              'Operación de un modelo con más de 60 delegaciones participantes en 6 comités.'
            ]
          },
          {
            organization: 'Aztecbot (Equipo FIRST Tech Challenge — Preparatoria)',
            role: 'Capitán de Diseño, Drive Coach y Constructor',
            period: '2024 – 2026',
            highlights: [
              'Implementación de flujo de diseño 100% CAD-first en Onshape bajo la metodología FEV (Fiabilidad, Eficiencia y Viabilidad).',
              'Desarrollo de lógica de corrección automática de ángulo y velocidad de tiro y auto-apuntado para el Mexico Premier Event.',
              'Conducción estratégica en cancha como Drive Coach en Campeonato Nacional y evento internacional.'
            ]
          },
          {
            organization: 'Crecer Sin Barreras (ONG) y Mentoría Académica entre Pares',
            role: 'Secretario de Vinculación y Finanzas · Tutor voluntario',
            period: '2025 – Actualidad',
            highlights: [
              'Apoyo en gestión de vinculación y finanzas para iniciativas comunitarias.',
              'Asesorías académicas gratuitas con presentaciones visuales y ejercicios prácticos.'
            ]
          }
        ]
      },
      honors: {
        heading: 'Reconocimientos y resultados destacados',
        items: [
          {
            award: 'Design Award 1st Place',
            event: 'Mexico Premier Event (FTC — Temporada Decode)',
            year: '2026'
          },
          {
            award: 'Winning Alliance Captain y clasificación al Campeonato Nacional',
            event: 'Torneo Regional FTC (Temporada Decode)',
            year: '2026'
          },
          {
            award: 'Inspire Award 1st Place, Finalista Regional y Top 10 Nacional (Playoffs)',
            event: 'Torneo Regional y Campeonato Nacional FTC México (Temporada Into the Deep)',
            year: '2025'
          },
          {
            award: '3.er Lugar en Robótica',
            event: 'Competencia Yucatán i6',
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
            items: 'Trabajo horizontal entre iguales, logística de eventos académicos, mentoría y comunicación técnica.'
          }
        ]
      },
      languages: {
        heading: 'Idiomas',
        items: [
          { language: 'Español', proficiency: 'Lengua materna' },
          { language: 'Inglés', proficiency: 'Competencia profesional y técnica para entornos académicos' }
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

