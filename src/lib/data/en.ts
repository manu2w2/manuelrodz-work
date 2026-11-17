import type { SiteContent } from '$lib/types/content';

export const contentEn: SiteContent = {
  meta: {
    siteTitle: 'Manuel Rodríguez | Robotics, CAD Design & Web Development',
    homeDescription:
      'Graduating high school senior in Mexico. Robotics engineering, CAD design, horizontal leadership, and evidence-backed projects.',
    cvDescription:
      'Formal Curriculum Vitae of Manuel Enrique Rodríguez Nicolás: academic background, FTC robotics, event organization, and technical capabilities.',
    privacyDescription:
      'Privacy Notice and data minimization statement for manuelrodz.work.'
  },
  nav: {
    skipToContent: 'Skip to main content',
    projects: 'Projects',
    cv: 'Resume',
    contact: 'Contact',
    switchLanguageLabel: 'Switch language to Spanish'
  },
  hero: {
    academicStatus: "MECHANICAL DESIGN · EMBEDDED SYSTEMS · WEB DEVELOPMENT",
    fullName: "Manuel Enrique Rodríguez Nicolás",
    coreStatement:
      "I design mechanisms in Onshape and program competition robots in C++ and Java. I also build web platforms for teams. I combine design, programming, and teamwork to take projects from prototype to competition.",
    primaryCta: "Download CV (PDF · EN)",
    secondaryCta: "Explore my projects and experience",
    location: "Mérida, Yucatán, Mexico",
    coreStackLabel: 'CORE STACK:',
    coreStackValues: 'ONSHAPE CAD · C++ / JAVA · KICAD · SVELTEKIT',
    imageAlt:
      'Isometric CAD render of the FTC Team 22571 competition robot chassis, with intake, drivetrain and turret assemblies visible.',
    imageCaption: 'FTC Team 22571 · CAD render',
    diagramLabel: 'Technical diagram of a robotic chassis',
    sidebarLabel: 'Robot render and highlights',
    quickFactsLabel: 'Quick facts',
    stats: [
      { value: '10+', label: 'Robotics Competitions' },
      { value: '4', label: 'FTC Awards' },
      { value: '2', label: 'International Recognitions', detail: 'Design Award · Mexico Premier Event / Global Nomination · NASA Space Apps Challenge 2024' },
      { value: '80+', label: 'People Impacted', detail: 'ValladolidMUN + Aztecbot' }
    ],
    quickFacts: [
      { icon: 'academic', text: 'High School Senior · Class of 2027' },
      { icon: 'globe', text: 'Spanish (Native) · English B2 (Upper-intermediate)' },
      { icon: 'cog', text: 'Robotics · CAD · Web Dev · Leadership' }
    ]
  },
  method: {
    eyebrow: '03 / Method',
    heading: 'How I Think and Build',
    intro:
      'I combine analysis, engineering judgment, and teamwork to solve technical challenges.',
    philosophyTitle: 'Learn and share',
    philosophyBody:
      'I enjoy understanding how things work and testing ideas with the resources available. Sharing what I learn is part of the process, whether mentoring new robotics teammates or preparing free study sessions for peers.',
    stepsTitle: 'Problem-solving workflow',
    steps: [
      {
        name: 'Deep problem analysis',
        detail:
          'Before fabricating parts or writing code, I break down the real constraints of the challenge, rulebook, and operating environment.'
      },
      {
        name: 'Mapping viable alternatives',
        detail:
          'I identify multiple technical or operational paths instead of committing prematurely to the first available idea.'
      },
      {
        name: 'Choosing with clear criteria',
        detail:
          'I compare feasibility, timeline, resources, and team capabilities before deciding.'
      },
      {
        name: 'Iterative validation',
        detail:
          'I test designs in CAD before manufacturing and adjust each iteration based on results.'
      }
    ],
    fevTitle: 'FEV Engineering Methodology',
    fevSummary:
      'In mechanical design and competitive robotics, every subsystem is evaluated against three core criteria:',
    fevPillars: [
      {
        term: 'Reliability',
        termAlt: 'Fiabilidad',
        definition: 'Consistent mechanical and software response under real match conditions.'
      },
      {
        term: 'Efficiency',
        termAlt: 'Eficiencia',
        definition: 'Get more from each component and every second of match time while staying within the weight limit.'
      },
      {
        term: 'Feasibility',
        termAlt: 'Viabilidad',
        definition: 'Manufacturable, maintainable, and realistic within our timeline and tools.'
      }
    ]
  },
  projectsSection: {
    eyebrow: '01 / Experience',
    heading: 'Selected Projects & Milestones',
    intro:
      'Four projects show my growth: from my first robot in middle school to technical leadership, co-founding an FTC team, and organizing ValladolidMUN.',
    readCaseLabel: 'Read full case study',
    caseLabels: {
      backToHome: 'Back to portfolio',
      jumpHeading: 'On this page',
      sectionContext: 'Context and constraints',
      sectionDecisions: 'Analysis, alternatives, and criteria',
      sectionExecution: 'Execution and teamwork',
      sectionOutcomes: 'Verified outcomes and lessons',
      sectionEvidence: 'Project documentation',
      glanceHeading: 'At a glance',
      glanceRole: 'Role',
      glancePeriod: 'Period',
      glanceOutcome: 'Key outcome',
      glanceFocus: 'Focus',
      attributionHeading: 'My role and contributions',
      curatingNote: 'Project documentation is being prepared for public sharing.',
      externalLinkHint: 'Opens external link in a new tab',
      inspectPhotoLabel: 'View project photo',
      closeModalLabel: 'Close enlarged view',
      nextProjectLabel: 'Next project'
    },
    items: [
      {
        slug: 'aztecbot',
        tier: 'flagship',
        title: 'Aztecbot — FIRST Tech Challenge (FTC) Competitive Robotics',
        period: '2024 – 2026 · 10th & 11th Grade (High School Years 1–2)',
        roleSummary: 'Builder, Design Captain, and Drive Coach',
        collaborationModel: 'Public high school robotics team in Mexico',
        contextNote: 'Into the Deep (2024–2025) and Decode (2025–2026) seasons',
        tags: ['FTC Robotics', 'CAD-First', 'Drive Coach'],
        executiveSummary:
          'I joined FTC with no prior experience and grew from builder to Design Captain and Drive Coach. In Decode, I helped establish our CAD-first workflow using the FEV method and programmed shot correction and auto-aim. I also taught CAD modeling classes to 20+ people at Aztecbot. My contribution was key to Aztecbot’s team results and awards.',
        keyOutcome:
          'Inspire Award 1st Place & National Top 10 (Into the Deep) · Regional Winning Alliance Captain & Mexico Premier Event Design Award 1st Place (Decode).',
        caseStudy: {
          openingSummary: 'I joined Aztecbot with no FTC experience. I grew from helping build the robot to leading its design and serving as Drive Coach. In Decode, I also programmed the shot correction and auto-aim systems we used at the Mexico Premier Event.',
          attributionStatement:
            'Aztecbot earned its awards as a team. I helped integrate the robot in Into the Deep. In Decode, I co-led CAD design and fabrication with a teammate, served as Drive Coach, and programmed shot correction and auto-aim. My contribution was key to the results we achieved together.',
          contextAndConstraints: [
            'I joined Aztecbot in my first year of high school during Into the Deep (2024–2025), with no prior FTC experience. The public-school team had not yet competed at a national tournament.',
            'In Decode (2025–2026), we aimed to improve the robot’s accuracy and repeatability with limited resources. After receiving an invitation to the Mexico Premier Event, we had only a few weeks to design a new robot.'
          ],
          analysisAndDecisions: [
            'In Decode, we saw that building directly in hardware led to rework. With a teammate, I proposed modeling and reviewing each assembly in Onshape before making parts; the team adopted this CAD-first workflow.',
            'We applied our FEV criteria—Reliability, Efficiency, and Feasibility—to evaluate subsystems and adapt parts for 3D printing and laser cutting.',
            'For the Mexico Premier Event, I programmed automatic shot angle and velocity correction, along with auto-aim, to reduce execution errors under pressure.'
          ],
          executionAndTeamwork: [
            'I taught CAD modeling classes to 20+ Aztecbot members.',
            'During Into the Deep, I worked with teammates on ideation and mechanical assembly while learning the design and build process for FTC.',
            'In Decode, I coordinated CAD reviews before fabrication. As Drive Coach at the National Championship and Mexico Premier Event, I guided driver practice, rulebook review, and match strategy.'
          ],
          outcomesAndLessons: [
            'Into the Deep (2024–2025): the team became a regional finalist, won the Inspire Award 1st Place, and qualified for the National Championship, where it reached playoffs and finished in the national Top 10.',
            'Decode (2025–2026): I captained the regional Winning Alliance, and Aztecbot qualified for Nationals. The team was invited to the Mexico Premier Event and won the Design Award 1st Place.',
            'Lesson: validating a design before fabrication reduces rework and helps a team make better use of its time and resources.'
          ],
          evidence: [
            {
              type: 'onshape',
              title: 'Mexico Premier Event Robot CAD (Onshape)',
              description:
                'Full-robot parametric model built under our CAD-first and FEV workflow.',
              status: 'active',
              url: 'https://cad.onshape.com/documents/9996eb6f6e3343715753fcfa'
            },
            {
              type: 'github',
              title: 'Aztecbot 22571 Premier Event Robot Codebase',
              description:
                'Robot code from the Mexico Premier Event, including the automated shot angle and velocity correction and basket auto-aim logic.',
              status: 'active',
              url: 'https://github.com/manu2w2/Aztecbot-22571'
            },
            {
              type: 'photo',
              title: 'FTC Competition & Award Documentation',
              description:
                'Photographs from Inspire Award 1st Place, Winning Alliance Captain, and Design Award 1st Place.',
              status: 'curating'
            }
          ]
        }
      },
      {
        slug: 'velocity-bucks',
        tier: 'active',
        title: 'Velocity Bucks — Co-Founding an Independent FTC Team',
        period: 'Present · Final Year of High School',
        roleSummary: 'Co-Founder, Lead Programmer, and Technical Mentor',
        collaborationModel: 'Independent community team outside a school structure',
        contextNote: 'Building technical and organizational capacity from scratch',
        tags: ['Team Founder', 'Java Architecture', 'Web Dev'],
        executiveSummary:
          'I co-founded an independent FTC team and develop the robot software and team website. I also support the mechanical design and build, sharing what I learned in previous seasons with teammates.',
        keyOutcome:
          'Launching an autonomous robotics team with modular robot software and peer-to-peer engineering mentorship.',
        caseStudy: {
          openingSummary: 'I co-founded Velocity Bucks with my teammates as an independent FTC team. Along with programming the robot and building the team website, I help in the workshop and share what I’ve learned with the team.',
          attributionStatement:
            'I co-founded the team with my peers. My direct responsibilities include team organization, robot software architecture and programming, website development, and technical mentorship in CAD and assembly.',
          contextAndConstraints: [
            'Operating outside a school program meant sourcing resources and workspace and creating team processes from scratch.',
            'Because members had different levels of experience, we needed shared technical standards and clear ways to collaborate.'
          ],
          analysisAndDecisions: [
            'We adapted lessons from previous FTC seasons—validating designs before fabrication and assigning clear responsibilities—to an independent team’s budget and timeline.',
            'I organized robot code into subsystems and commands so mechanisms could be tested independently and teammates could understand and maintain them.'
          ],
          executionAndTeamwork: [
            'I develop the robot control software and team website, and work with teammates on mechanical design and assembly.',
            'I share what I have learned about CAD, manufacturing tolerances, and competition strategy with teammates.'
          ],
          outcomesAndLessons: [
            'The team now has an independent workflow, modular robot software, and practices for sharing technical knowledge.',
            'Lesson: founding a team means building its technical infrastructure and a culture of shared learning.'
          ],
          evidence: [
            {
              type: 'github',
              title: 'Velocity Bucks Robot Control Codebase (BIOBUZZ season)',
              description:
                'Modular subsystem and command-based FTC software architecture.',
              status: 'active',
              url: 'https://github.com/manu2w2/BIOBUZZ_velocity_bucks'
            },
            {
              type: 'onshape',
              title: 'Velocity Bucks Robot CAD (BIOBUZZ season, Onshape)',
              description:
                'Full-robot parametric model for the BIOBUZZ season, designed CAD-first.',
              status: 'active',
              url: 'https://cad.onshape.com/documents/69a50231a2f32c50d2c20f8f/w/252a05a2cc4d919d4cb5bba9/e/061ff5da347421369982ad5b'
            },
            {
              type: 'github',
              title: 'Velocity Bucks Team Website Codebase',
              description:
                'Source code of the team website, which I develop and maintain.',
              status: 'active',
              url: 'https://github.com/manu2w2/VelocityBucks'
            }
          ]
        }
      },
      {
        slug: 'valladolid-mun',
        tier: 'active',
        title: 'Valladolid Commission — ValladolidMUN / SMMUN 2027 "Our Spark"',
        period: '2026 · Model United Nations Organization',
        roleSummary: 'Valladolid Commission Representative · General Coordination',
        collaborationModel: 'Horizontal team of equals alongside specialized consultancies',
        contextNote: '60+ participating delegations across 6 committees',
        tags: ['Model UN', 'Horizontal Leadership', '60+ Delegations'],
        executiveSummary:
          'As the Valladolid Commission Representative at SMMUN 2027, I contributed to the planning, logistics, outreach, and delivery of ValladolidMUN. I worked with the organizing team and the Logistics, Finance, and Outreach consultancies in a horizontal structure.',
        keyOutcome:
          'A conference with 60+ delegations across six committees, organized through shared leadership.',
        caseStudy: {
          openingSummary: 'As Valladolid Commission Representative, I helped coordinate the planning and operations of ValladolidMUN. I worked alongside the organizing team and consultancies, sharing decisions and responsibilities.',
          caseOutcome: 'We organized a conference with 60+ delegations across six committees through close coordination between the Commission and consultancies.',
          attributionStatement:
            'We organized ValladolidMUN as a team. As the Valladolid Commission Representative, I coordinated several overall tasks and worked as an equal with the Logistics, Finance, and Outreach consultancies. My role included general coordination similar to some Secretary-General duties, while decisions were shared across the team.',
          contextAndConstraints: [
            'Organizing a multi-committee Model UN conference requires coordinating the venue, schedule, budget, outreach, and academic protocols.',
            'Operations depended on steady communication and shared responsibility across specialized teams.'
          ],
          analysisAndDecisions: [
            'We chose a horizontal structure: the Logistics, Finance, and Outreach consultancies applied their expertise to anticipate issues and solve them together.'
          ],
          executionAndTeamwork: [
            'I coordinated parts of the overall planning and institutional outreach and helped resolve operational issues during the debates.',
            'Coordination between the Valladolid Commission and the consultancies kept six committees running simultaneously.'
          ],
          outcomesAndLessons: [
            'The conference brought together more than 60 delegations across six debate and resolution-writing committees.',
            'Lesson: leading a collective project means valuing each area’s expertise and building decisions together.'
          ],
          evidence: [
            {
              type: 'photo',
              title: 'ValladolidMUN / SMMUN 2027 Operational Archive',
              description:
                'Documentation of committees, dais, and organizing team.',
              status: 'curating'
            }
          ]
        }
      },
      {
        slug: 'yucatan-i6',
        tier: 'origin',
        title: 'Yucatán i6 Robotics Competition — First Ball-Collecting Robot',
        period: '9th Grade · First Robotics Competition',
        roleSummary: 'Two-person design, assembly, and programming',
        collaborationModel: 'Student duo',
        contextNote: '3rd Place · Robotics Competition',
        tags: ['First Robot', 'Collector Mechanism', '3rd Place'],
        executiveSummary:
          'With a friend, I designed, built, and programmed my first competition robot to collect paper balls and bottle caps. We earned third place in the robotics category at Yucatán i6.',
        keyOutcome:
          'That first project sparked my interest in engineering and programming.',
        caseStudy: {
          openingSummary: 'In my third year of middle school, a friend and I built a robot that collected paper balls and bottle caps for the Yucatán i6 robotics competition. We programmed its movements and earned third place.',
          attributionStatement:
            'I built the robot with a middle-school classmate. We shared the design, assembly, testing, and basic programming.',
          contextAndConstraints: [
            'It was our first experience designing and programming a robot for a competition; we started with curiosity and experimentation.'
          ],
          analysisAndDecisions: [
            'We designed a simple intake mechanism to collect lightweight objects—paper balls and bottle caps—and deposit them in a target container.'
          ],
          executionAndTeamwork: [
            'We adjusted the assembly and movement through repeated trials until the robot could complete the pickup-and-deposit cycle.'
          ],
          outcomesAndLessons: [
            'We earned 3rd place in the Yucatán i6 robotics competition with our ball-collecting robot.',
            'Lesson: building a machine that worked in competition sparked my interest in engineering and programming.'
          ],
          evidence: [
            {
              type: 'photo',
              title: 'Yucatán i6 Award Documentation',
              description:
                '3rd Place recognition in the robotics competition.',
              status: 'curating'
            }
          ]
        }
      }
    ]
  },
  projectsIndex: {
    eyebrow: 'Experience',
    heading: 'Projects',
    intro:
      'These projects bring together my work in robotics, programming, and team organization, from my first robot to FTC competitions and coordinating ValladolidMUN.'
  },
  recognitionsSection: {
    eyebrow: '02 / Competitions',
    heading: 'Additional Results',
    intro:
      'Beyond FTC, I have competed in robotics, science, and technology events. These results include both individual and team achievements.',
    items: [
      {
        result: '1st Place · Robot Soccer',
        event: 'National competition organized by SECIHTI Yucatán',
        detail: 'Teams from across Mexico took part.'
      },
      {
        result: '2nd Place · Robotics Category',
        event: 'LIT Anáhuac Junior'
      },
      {
        result: '6th Place at State Level',
        event: 'State Biology Olympiad'
      },
      {
        result: '2nd Place at State Level · Global Nominee',
        event: 'NASA Space Apps Challenge 2024',
        detail: 'Achieved with my team.'
      }
    ]
  },
  complementary: {
    eyebrow: '04 / Other Experiences',
    heading: 'Beyond Engineering',
    intro:
      'Outside my technical projects, I tutor students, support a community organization, and make music.',
    items: [
      {
        title: 'Peer Academic Tutoring',
        role: 'Volunteer Tutor',
        summary:
          'I offer free academic and technical tutoring, with visual materials and exercises tailored to each student.'
      },
      {
        title: 'SMMUN 2027',
        role: 'Secretary of Technology, Logistics & Events',
        summary:
          'I coordinate technology, logistics, and events for SMMUN 2027 "Our Spark" with the organizing team.'
      },
      {
        title: 'Crecer Sin Barreras',
        role: 'Secretary of Outreach & Finance',
        summary:
          'I support the organization’s community initiatives by helping manage finances and build outreach partnerships.'
      },
      {
        title: 'Broken Sticks',
        role: 'Co-Founder & Musician',
        summary:
          'I co-founded the band, wrote, composed, and released three original songs. We also won first place at our school talent festival.'
      }
    ]
  },
  contact: {
    heading: 'Contact & Further Information',
    intro:
      'Are you part of a scholarship or admissions committee, or interested in discussing one of my projects? Get in touch directly.',
    emailLabel: 'Direct email address',
    copyButton: 'Copy email',
    copiedAnnouncement: 'Email address copied to clipboard.',
    copyFallbackAnnouncement: 'Automatic copy unavailable; please use the direct email link.',
    linksLabel: 'External profiles and documentation',
    privacyLinkLabel: 'Privacy Notice (LFPDPPP)'
  },
  cv: {
    heading: 'Curriculum Vitae',
    subtitle: 'Manuel Enrique Rodríguez Nicolás · Graduating High School Senior (Mérida, Yucatán, Mexico)',
    downloadPdfLabel: 'Download Official PDF Version',
    printPageLabel: 'Print this view',
    lastUpdated: 'Updated November 2026',
    sections: {
      education: {
        heading: 'Education',
        items: [
          {
            institution: 'Preparatoria Estatal No. 13 Plantel Azteca Yucatán',
            program: 'General upper-secondary education · Final year of high school',
            period: '2024 – 2027',
            detail: 'Mérida, Yucatán, Mexico.'
          }
        ]
      },
      experience: {
        heading: 'Engineering, Leadership & Organizational Experience',
        items: [
          {
            organization: 'Velocity Bucks (Independent FIRST Tech Challenge Team)',
            role: 'Co-Founder, Lead Programmer & Technical Mentor',
            period: 'Present',
            highlights: [
              'Co-founded and structured an independent FTC robotics team operating outside a school institution.',
              'Developed competition robot control software and the team’s official website.',
              'Mentored teammates in CAD modeling, physical assembly, and engineering workflows.'
            ]
          },
          {
            organization: 'ValladolidMUN / SMMUN 2027 "Our Spark"',
            role: 'Secretary of Technology, Logistics & Events · Conference Officer · Delegate',
            period: '2024 – 2027',
            highlights: [
              'Coordinate technology, logistics, and events for SMMUN 2027 "Our Spark" with the other organizing teams.',
              'Helped organize a conference with 60+ delegations across 6 committees and participated as a delegate five times.',
              'Served as a conference officer and board member; my committee received the Best Committee recognition at Jenaro MUN.'
            ]
          },
          {
            organization: 'Aztecbot (Public High School FIRST Tech Challenge Team)',
            role: 'Design Captain & Drive Coach (2026) · Lead Mechanic and Team Member (2025)',
            period: '2024 – 2026',
            highlights: [
              'Led CAD design in Onshape and mechanical development of the Decode robot using FEV (Reliability, Efficiency, Feasibility).',
              'Programmed automatic shot angle and speed correction and auto-aim for the Mexico Premier Event.',
              'As Drive Coach, guided team strategy at the National Championship and Mexico Premier Event; my work was key to the results we achieved as a team.',
              'In 2025, I was responsible for assembly, maintenance, and mechanical improvements to the Into the Deep robot.'
            ]
          },
          {
            organization: 'Robotics Competitions',
            role: 'Competitor',
            period: '2024 – 2026',
            highlights: [
              'Competed in more than 10 robotics competitions between 2024 and 2026.'
            ]
          },
          {
            organization: 'Crecer Sin Barreras (NGO)',
            role: 'Secretary of Outreach & Finance',
            period: '2025 – Present',
            highlights: [
              'Supported outreach partnerships and financial organization for community initiatives.'
            ]
          },
          {
            organization: 'Peer Academic Mentoring',
            role: 'Volunteer Tutor',
            period: '2025 – Present',
            highlights: [
              'Provided free academic tutoring with visual presentations and practice exercises.'
            ]
          },
          {
            organization: 'Un Nuevo Bosque',
            role: 'Volunteer',
            period: '2023 – 2024',
            highlights: [
              'Took part in reforestation campaigns and environmental education activities.'
            ]
          },
          {
            organization: 'Broken Sticks',
            role: 'Co-Founder & Musician',
            period: 'School project',
            highlights: [
              'Wrote, composed, and released three original songs. The project won first place at the school talent festival.'
            ]
          }
        ]
      },
      honors: {
        heading: 'Honors & Competition Results',
        items: [
          {
            award: '1st Place in Robot Soccer',
            event: 'National competition organized by SECIHTI Yucatán',
            year: '2026'
          },
          {
            award: 'Design Award 1st Place',
            event: 'Mexico Premier Event (FTC — Decode Season, International)',
            year: '2026'
          },
          {
            award: '15th Place Nationally',
            event: 'FIRST Tech Challenge Mexico (Decode Season)',
            year: '2026'
          },
          {
            award: '2nd Place in Robotics',
            event: 'LIT Anáhuac Junior',
            year: '2026'
          },
          {
            award: 'Winning Alliance Captain & National Championship Qualifier',
            event: 'FTC Regional Tournament (Decode Season)',
            year: '2026'
          },
          {
            award: 'Inspire Award 1st Place, Finalist Alliance, and 9th Place Nationally',
            event: 'FTC Mexico (Into the Deep Season)',
            year: '2025'
          },
          {
            award: '1st Place in the Robot Arm category',
            event: 'Tec Conkal',
            year: '2025'
          },
          {
            award: '2nd Place statewide; team selected as a Global Nominee',
            event: 'NASA Space Apps Challenge',
            year: '2024'
          },
          {
            award: '6th Place',
            event: 'Yucatán State Biology Olympiad',
            year: '2024'
          },
          {
            award: '3rd Place in Robotics with a ball-collecting robot',
            event: 'Yucatán i6 Robotics Competition',
            year: 'Middle School'
          }
        ]
      },
      capabilities: {
        heading: 'Technical & Methodological Capabilities',
        groups: [
          {
            area: 'Mechanical Engineering & CAD',
            items: 'Onshape (parametric assemblies, CAD-first workflow), 3D printing and laser-cut fabrication design, FEV methodology.'
          },
          {
            area: 'Programming & Robotics',
            items: 'Java (FTC robot control, subsystem architecture), C/C++ (microcontrollers), Python, automated targeting algorithms.'
          },
          {
            area: 'Web Development',
            items: 'TypeScript, SvelteKit, semantic HTML, CSS, web accessibility (WCAG 2.2 AA).'
          },
          {
            area: 'Leadership & Operations',
            items: 'Peer leadership, academic conference logistics, mentoring, technical communication, and team coordination.'
          }
        ]
      },
      languages: {
        heading: 'Languages',
        items: [
          { language: 'Spanish', proficiency: 'Native' },
          { language: 'English', proficiency: 'B2 · Upper-intermediate' }
        ]
      }
    }
  },
  privacy: {
    "heading": "Privacy Notice",
    "effectiveDate": "Last updated: November 16, 2026",
    "paragraphs": [
        {
            "title": "1. Controller and contact",
            "body": "Manuel Enrique Rodríguez Nicolás, located in Mérida, Yucatán, Mexico, is responsible for personal data received in connection with this academic and engineering portfolio at manuelrodz.work. For privacy questions and requests concerning your data, email contact@manuelrodz.work."
        },
        {
            "title": "2. Information you may provide",
            "body": "Email correspondence may include your name, email address, organization, subject, message content and attachments. Only information relevant to handling the correspondence will be used. This site does not request sensitive personal data, passwords, banking information or identity documents for ordinary inquiries; avoid sending them unnecessarily."
        },
        {
            "title": "3. Purposes of correspondence",
            "body": "Contact details and message content will be used to answer and follow up on inquiries about admissions, scholarships, projects, collaborations and the experience presented here. They will not be used for advertising campaigns, commercial mailing lists or data sales. You may ask to stop further follow-up by emailing the contact address."
        },
        {
            "title": "4. Browsing, cookies and hosting",
            "body": "The site code does not include intake forms, visitor accounts, advertising cookies or third-party analytics tools. The site is hosted on Vercel: when you request a page, its infrastructure may process technical information such as IP address, browser information, requested path and access logs to deliver content, operate the service and protect against abuse. The absence of forms or analytics does not mean hosting involves no technical data processing. Portfolio fonts, images and icons are served from this site."
        },
        {
            "title": "5. Email and service providers",
            "body": "Messages sent to contact@manuelrodz.work pass through Porkbun’s email forwarding service and are delivered to a private Gmail (Google) account managed by the controller. Porkbun and Google participate in transmission, receipt and storage as applicable to their services. Vercel provides website hosting. These providers may operate infrastructure outside Mexico and use additional providers under their terms. This notice therefore does not promise that data remains exclusively in Mexico or that no service provider processes it."
        },
        {
            "title": "6. Disclosure of information",
            "body": "The controller will not sell personal data or disclose it for advertising. Using hosting and email providers must be distinguished from disclosing data for another recipient’s own purposes. Any additional disclosure will be subject to the required consent or an applicable legal exception, including obligations to respond to competent authorities."
        },
        {
            "title": "7. Retention and protection",
            "body": "Received messages are currently kept indefinitely in Gmail, with no automatic deletion period. You may ask for the need to retain correspondence to be reviewed and exercise cancellation or opposition rights through the contact email. Retention must remain consistent with the stated purposes and applicable legal obligations; deletion requests will be assessed under those rules. Provider logs and backups are also subject to each service’s conditions. You may request cancellation of your data; deletion may be subject to retention obligations. Do not send unnecessary confidential information: no Internet service guarantees absolute security."
        },
        {
            "title": "8. ARCO rights",
            "body": "To request access, rectification, cancellation or opposition concerning your personal data, email contact@manuelrodz.work with the subject “Privacy / ARCO”. Include your name, a reply channel, the right you wish to exercise and information to locate the correspondence. For rectification, describe and support the requested change. Identity or authority to represent the data subject must be verified before information is disclosed or changed; only relevant documentation will be requested through an agreed channel. The decision will be communicated within twenty days of receipt, and an approved request implemented within fifteen days of the response, subject to justified extensions and other rules allowed by law."
        },
        {
            "title": "9. Restricting use or withdrawing consent",
            "body": "You may request restrictions on use or disclosure, ask to stop follow-up messages or withdraw consent for processing that relies on it. Use the same email address and describe your request. Requests will be assessed under applicable legal obligations; withdrawal is not retroactive and may prevent continued handling of your inquiry."
        },
        {
            "title": "10. External links",
            "body": "Links to GitHub, Onshape, icon sources and other websites lead to services outside this portfolio. When opened, those services may process information under their own notices and terms. Providing a link does not mean this portfolio controls the destination’s privacy practices."
        },
        {
            "title": "11. Changes to this notice",
            "body": "Changes will be published at manuelrodz.work/es/privacidad and the English version at manuelrodz.work/en/privacy, with the update date shown at the top. Where a change requires additional information or fresh consent, applicable requirements will be addressed before the new processing begins. You may request clarification or a copy of this notice by email."
        }
    ]
},
  footer: {
    rightsNote: 'Manuel Enrique Rodríguez Nicolás · Mérida, Yucatán, Mexico.'
  }
};

