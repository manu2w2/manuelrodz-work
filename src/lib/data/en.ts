import type { SiteContent } from '$lib/types/content';

export const contentEn: SiteContent = {
  meta: {
    siteTitle: 'Manuel Rodríguez — Academic & Engineering Portfolio',
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
      "I design mechanisms in Onshape, program C++/Java control architectures for competitive robotics, and build web platforms with SvelteKit—combining technical rigor and logistics from prototype to execution.",
    primaryCta: "Download CV (PDF · EN)",
    secondaryCta: "Explore trajectory & projects",
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
      { value: '4', label: 'National Awards' },
      { value: '1', label: 'Intl. Design Award' },
      { value: '60+', label: 'MUN Delegations Led' }
    ],
    quickFacts: [
      { icon: 'academic', text: 'High School Senior · Class of 2027' },
      { icon: 'globe', text: 'Spanish (Native) · English (Professional)' },
      { icon: 'cog', text: 'Robotics · CAD · Web Dev · Leadership' }
    ]
  },
  method: {
    eyebrow: '01 / Method',
    heading: 'How I Think and Build',
    intro:
      'Beyond specific tools or programming languages, my work follows a consistent decision-making framework across engineering and collaborative leadership.',
    philosophyTitle: 'Learning in order to share',
    philosophyBody:
      'My primary drive is understanding how systems work and experimenting with available resources. Yet learning feels incomplete until it is shared clearly to help others grow—whether mentoring incoming robotics teammates or creating free visual study sessions for peers.',
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
        name: 'Selecting by feasibility and resonance',
        detail:
          'I evaluate which solution is achievable within real deadlines and resources, and aligns best with the team’s strengths.'
      },
      {
        name: 'Digital validation and iterative execution',
        detail:
          'I validate assemblies digitally before manufacturing and refine every iteration using empirical test evidence.'
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
        definition: 'Maximizing output from every component, weight budget, and cycle second.'
      },
      {
        term: 'Feasibility',
        termAlt: 'Viabilidad',
        definition: 'Manufacturable, maintainable, and realistic within our timeline and tools.'
      }
    ]
  },
  projectsSection: {
    eyebrow: '02 / Track record',
    heading: 'Anchor Milestones & Projects',
    intro:
      'Four experiences that define my three-year high school trajectory: from building my first prototype in middle school to international robotics design leadership, co-founding an independent team, and co-organizing a Model UN conference.',
    readCaseLabel: 'Read full case study',
    caseLabels: {
      backToHome: 'Back to main dossier',
      jumpHeading: 'Case study sections',
      sectionContext: 'Context and constraints',
      sectionDecisions: 'Analysis, alternatives, and criteria',
      sectionExecution: 'Execution and teamwork',
      sectionOutcomes: 'Verified outcomes and lessons',
      sectionEvidence: 'Documentary evidence',
      attributionHeading: 'Role and authorship attribution',
      curatingNote:
        'Evidence currently being curated: repository, CAD assembly, or documentary photo being organized for public linking.',
      externalLinkHint: 'Opens external link in a new tab',
      inspectPhotoLabel: 'Inspect documentary photograph',
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
          'I joined Aztecbot in my first year of high school with zero prior FTC experience and grew into Design Captain and Drive Coach. By leading a shift toward 100% CAD-first engineering under our FEV methodology, our public-school team reached the Mexican National Championship twice and won the Design Award 1st Place at the international Mexico Premier Event.',
        keyOutcome:
          'Inspire Award 1st Place & National Top 10 (Into the Deep) · Regional Winning Alliance Captain & Mexico Premier Event Design Award 1st Place (Decode).',
        caseStudy: {
          attributionStatement:
            'All competition honors belong to the collective Aztecbot team. My direct contributions included physical assembly and ideation during Into the Deep, and during Decode: co-leading full-robot CAD modeling in Onshape, 3D printing and laser-cut fabrication, serving as Drive Coach, and programming the automated shot angle/velocity correction and basket auto-aim logic for the Mexico Premier Event.',
          contextAndConstraints: [
            'Entering high school during the Into the Deep season (2024–2025), I started from scratch on a young public-school team that had never competed at a regional tournament before.',
            'In the Decode season (2025–2026), our goal was to eliminate costly trial-and-error builds and later engineer a brand-new robot in just a few weeks after earning an invitation to the international Mexico Premier Event.'
          ],
          analysisAndDecisions: [
            'Together with a teammate, I introduced a 100% CAD-first workflow in Onshape so the entire chassis and mechanism geometry were verified digitally before fabricating physical parts.',
            'We evaluated every subsystem using our FEV criteria (Reliability, Efficiency, and Feasibility), tailoring designs for 3D printing and laser cutting.',
            'Ahead of the Mexico Premier Event, I identified driver aiming pressure as a key bottleneck and implemented automated shot angle correction, velocity compensation, and basket auto-aiming in robot code.'
          ],
          executionAndTeamwork: [
            'In year one, consistent daily work alongside teammates turned initial uncertainty into a finalist-caliber robot.',
            'As Design Captain in year two, I oversaw pre-assembly CAD verification, and as Drive Coach at the National Championship and Mexico Premier Event, I led driver practice, rulebook mastery, and live match strategy.'
          ],
          outcomesAndLessons: [
            'Into the Deep (2024–2025): Regional Finalist and Inspire Award 1st Place winner; qualified for the FTC Mexico National Championship, advancing to playoffs and finishing in the National Top 10.',
            'Decode (2025–2026): Regional Winning Alliance Captain (qualifying again for Nationals) and invited to the international Mexico Premier Event, winning Design Award 1st Place for our engineering process and FEV methodology.',
            'Core takeaway: ambitious results grow out of disciplined daily effort, and validating designs digitally multiplies what a resource-constrained team can achieve.'
          ],
          evidence: [
            {
              type: 'onshape',
              title: 'Decode Robot CAD Assemblies (Onshape)',
              description:
                'Full-robot parametric models built under our CAD-first and FEV workflow.',
              status: 'curating'
            },
            {
              type: 'github',
              title: 'Automated Shot Angle, Velocity & Auto-Aim Logic',
              description:
                'Control logic developed for the Mexico Premier Event robot.',
              status: 'curating'
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
          'I co-founded an independent FIRST Tech Challenge team operating outside any single school institution. I serve as lead programmer for both the competition robot and the team website while mentoring teammates in CAD design and mechanical assembly.',
        keyOutcome:
          'Launching an autonomous robotics team with modular robot software and peer-to-peer engineering mentorship.',
        caseStudy: {
          attributionStatement:
            'Co-founded collaboratively with peers. My direct responsibilities include organizational co-founding, robot control software architecture, team website development, and hands-on technical mentorship in CAD and assembly.',
          contextAndConstraints: [
            'Operating independently of an institutional school program requires sourcing external funding, workspace, and equipment while building team workflows from zero.',
            'Members bring varying levels of prior experience, making clear documentation and shared engineering standards essential.'
          ],
          analysisAndDecisions: [
            'We adapted lessons from previous FTC seasons—prioritizing upfront CAD validation and clear role ownership—to fit an independent team’s timeline and budget.',
            'On the software side, I structured robot code into modular subsystems and commands so teammates can read, test, and maintain mechanisms independently.'
          ],
          executionAndTeamwork: [
            'I write the robot control codebase and build the team’s web presence while collaborating directly at the workbench during physical assembly.',
            'I actively transfer practical knowledge in Onshape modeling, 3D printing tolerances, and match strategy to newer teammates.'
          ],
          outcomesAndLessons: [
            'Established a self-sustaining engineering workflow where technical knowledge is shared openly across the team.',
            'Core takeaway: building from scratch teaches that organizational resilience is just as important as mechanical precision.'
          ],
          evidence: [
            {
              type: 'github',
              title: 'Velocity Bucks Robot Control Codebase',
              description:
                'Modular subsystem and command-based FTC software architecture.',
              status: 'curating'
            },
            {
              type: 'website',
              title: 'Velocity Bucks Official Team Website',
              description:
                'Public outreach and team documentation site.',
              status: 'curating'
            }
          ]
        }
      },
      {
        slug: 'valladolid-mun',
        tier: 'active',
        title: 'Valladolid Commission — ValladolidMUN / SMMUN 2027 "Our Spark"',
        period: '2026 · Model United Nations Organization',
        roleSummary: 'Valladolid Commission Representative (Secretary-General operational scope)',
        collaborationModel: 'Horizontal team of equals alongside specialized consultancies',
        contextNote: '60+ participating delegations across 6 committees',
        tags: ['Model UN', 'Horizontal Leadership', '60+ Delegations'],
        executiveSummary:
          'As Representative of the Valladolid Commission within SMMUN 2027 "Our Spark", I carried out operational responsibilities equivalent to Secretary-General for the creation, logistics, outreach, and execution of ValladolidMUN. Working in a horizontal team of equals alongside the Logistics, Finance, and Outreach consultancies, we convened over 60 delegations across 6 committees.',
        keyOutcome:
          'Successful delivery of a 60+ delegation, 6-committee conference through horizontal peer leadership.',
        caseStudy: {
          attributionStatement:
            'ValladolidMUN was built through shared collective effort. As Representative of the Valladolid Commission, I coordinated general operations alongside the Logistics, Finance, and Outreach consultancies, working side by side as equals who provided essential guidance and support at every stage.',
          contextAndConstraints: [
            'Organizing a multi-committee Model UN conference requires synchronizing venue logistics, budgeting, institutional outreach, and academic protocols with zero room for breakdown during live sessions.',
            'Success depended on mutual trust and fast horizontal communication across specialized teams.'
          ],
          analysisAndDecisions: [
            'Rather than enforcing a rigid top-down hierarchy, we operated as a horizontal team of equals where each consultancy contributed specialized judgment and mutual guidance to resolve bottlenecks early.'
          ],
          executionAndTeamwork: [
            'I worked across event planning, partner outreach, and real-time operational problem-solving throughout the conference.',
            'Close coordination between the Valladolid Commission and all three consultancies kept 6 simultaneous committees running smoothly.'
          ],
          outcomesAndLessons: [
            'Hosted more than 60 delegations debating and drafting resolutions across 6 committees.',
            'Core takeaway: in complex human initiatives, the strongest leadership empowers equals rather than centralizing credit.'
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
        title: 'Yucatán i6 Competition — First Collector Robot',
        period: '9th Grade (Middle School) · Vocational Origin',
        roleSummary: 'Two-person design, assembly, and programming',
        collaborationModel: 'Student duo',
        contextNote: '3rd Place in Robotics category',
        tags: ['Robotics Origin', 'Mechanical Intake', '3rd Place'],
        executiveSummary:
          'My first competitive robotics build: working alongside a friend, I designed, assembled, and programmed a collector robot to gather paper balls and bottle caps and deposit them into a target container. Earning 3rd place proved I could turn an idea into a working machine.',
        keyOutcome:
          '3rd Place in Robotics and the spark that launched my engineering and programming path.',
        caseStudy: {
          attributionStatement:
            'Built in a two-student partnership with a middle school classmate, sharing mechanical assembly, testing, and programming.',
          contextAndConstraints: [
            'First experience designing and programming an autonomous/controlled mechanism under competition rules, driven purely by curiosity.'
          ],
          analysisAndDecisions: [
            'We chose a straightforward intake and deposit geometry tailored to lightweight objects (paper balls and caps) to ensure repeatable scoring.'
          ],
          executionAndTeamwork: [
            'We iterated on chassis balance and collection cycles through repeated physical trials until the full pickup-and-deposit sequence worked reliably.'
          ],
          outcomesAndLessons: [
            '3rd Place in the Yucatán i6 Robotics category.',
            'Core takeaway: seeing an idea we built from scratch perform in the real world gave me the confidence to pursue competitive engineering.'
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
  complementary: {
    eyebrow: '03 / Dimensions',
    heading: 'Complementary Dimensions',
    intro:
      'Engineering gains depth when connected to teaching, community service, and creative expression. These commitments reflect who I am beyond competition.',
    items: [
      {
        title: 'Free Peer Academic Tutoring & Visual Study Guides',
        role: 'Peer Mentor',
        summary:
          'I provide free academic and technical tutoring to classmates and peers, designing custom visual presentations and practice exercises tailored to how each person learns best.'
      },
      {
        title: 'SMMUN 2027 & Crecer Sin Barreras',
        role: 'Secretary of Technology, Logistics & Events · Secretary of Outreach & Finance',
        summary:
          'I support technology and event operations for SMMUN 2027 "Our Spark" and contribute to outreach and finance initiatives at the youth-led NGO Crecer Sin Barreras.'
      },
      {
        title: 'Broken Sticks',
        role: 'Band Member & Songwriter',
        summary:
          'I write original songs and perform at local student events with the band Broken Sticks as an outlet for creativity and collaborative expression.'
      }
    ]
  },
  contact: {
    heading: 'Contact & Verification',
    intro:
      'If you represent a university scholarship committee, admissions office, or wish to discuss any project documented on this site, feel free to reach out directly.',
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
            program: 'General High School Diploma (Bachillerato) · Graduating Senior',
            period: '2024 – 2027',
            detail: 'Mérida, Yucatán, Mexico (Mexican 3-year preparatory system).'
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
            role: 'Valladolid Commission Representative · Secretary of Technology, Logistics & Events',
            period: '2026 – 2027',
            highlights: [
              'Coordinated general conference operations (Secretary-General scope) in a horizontal team of equals alongside Logistics, Finance, and Outreach consultancies.',
              'Delivered a conference hosting 60+ delegations across 6 active committees.'
            ]
          },
          {
            organization: 'Aztecbot (Public High School FIRST Tech Challenge Team)',
            role: 'Design Captain, Drive Coach & Builder',
            period: '2024 – 2026',
            highlights: [
              'Led transition to a 100% CAD-first workflow in Onshape guided by FEV criteria (Reliability, Efficiency, Feasibility).',
              'Programmed automated shot angle/velocity correction and basket auto-aim logic for the Mexico Premier Event.',
              'Served as Drive Coach at the Mexican National Championship and international Mexico Premier Event.'
            ]
          },
          {
            organization: 'Crecer Sin Barreras (NGO) & Peer Academic Tutoring',
            role: 'Secretary of Outreach & Finance · Volunteer Peer Tutor',
            period: '2025 – Present',
            highlights: [
              'Supported outreach partnerships and financial organization for community initiatives.',
              'Delivered free one-on-one academic tutoring with custom visual presentations and practice sets.'
            ]
          }
        ]
      },
      honors: {
        heading: 'Honors & Competition Results',
        items: [
          {
            award: 'Design Award 1st Place',
            event: 'Mexico Premier Event (FTC — Decode Season, International)',
            year: '2026'
          },
          {
            award: 'Winning Alliance Captain & National Championship Qualifier',
            event: 'FTC Regional Tournament (Decode Season)',
            year: '2026'
          },
          {
            award: 'Inspire Award 1st Place, Regional Finalist & National Top 10 (Playoffs)',
            event: 'FTC Regional & Mexican National Championship (Into the Deep Season)',
            year: '2025'
          },
          {
            award: '3rd Place in Robotics',
            event: 'Yucatán i6 Competition',
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
            items: 'Horizontal peer leadership, academic conference logistics, technical mentorship.'
          }
        ]
      },
      languages: {
        heading: 'Languages',
        items: [
          { language: 'Spanish', proficiency: 'Native' },
          { language: 'English', proficiency: 'Full academic and technical working proficiency' }
        ]
      }
    }
  },
  privacy: {
    heading: 'Privacy Notice',
    effectiveDate: 'Last updated: November 2026',
    paragraphs: [
      {
        title: '1. Data Controller and Scope',
        body: 'Manuel Enrique Rodríguez Nicolás, based in Mérida, Yucatán, Mexico, is responsible for the content published on manuelrodz.work, adhering to data minimization and transparency principles under Mexico’s Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP).'
      },
      {
        title: '2. No Automated Data Collection or Tracking Cookies',
        body: 'This website is strictly informational and academic. It does not use web intake forms, visitor databases, advertising cookies, or third-party tracking analytics that monitor browsing behavior or collect personal data automatically.'
      },
      {
        title: '3. Voluntary Email Contact and ARCO Rights',
        body: 'If you voluntarily send an email to the contact address published on this site, your contact details will be used exclusively to respond to inquiries regarding university admissions, scholarships, or academic collaboration, and will never be shared with third parties. You may exercise your rights of Access, Rectification, Cancellation, or Opposition (ARCO rights) regarding such correspondence by writing directly to the same contact address.'
      }
    ]
  },
  footer: {
    rightsNote: 'Manuel Enrique Rodríguez Nicolás · Mérida, Yucatán, Mexico.'
  }
};

