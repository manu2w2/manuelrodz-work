export type Locale = 'es' | 'en';

export type ProjectSlug =
  | 'aztecbot'
  | 'velocity-bucks'
  | 'valladolid-mun'
  | 'yucatan-i6';

export interface EvidenceAsset {
  type: 'github' | 'onshape' | 'website' | 'photo';
  title: string;
  description: string;
  status: 'active' | 'curating';
  url?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface AnchorProject {
  slug: ProjectSlug;
  tier: 'flagship' | 'active' | 'origin';
  title: string;
  period: string;
  roleSummary: string;
  collaborationModel: string;
  contextNote: string;
  tags: string[];
  executiveSummary: string;
  keyOutcome: string;
  caseStudy: {
    openingSummary: string;
    caseOutcome?: string;
    attributionStatement: string;
    contextAndConstraints: string[];
    analysisAndDecisions: string[];
    executionAndTeamwork: string[];
    outcomesAndLessons: string[];
    evidence: EvidenceAsset[];
  };
}

export interface ComplementaryFacet {
  title: string;
  role: string;
  summary: string;
}

export interface SiteContent {
  meta: {
    siteTitle: string;
    homeDescription: string;
    cvDescription: string;
    privacyDescription: string;
  };
  nav: {
    skipToContent: string;
    projects: string;
    cv: string;
    contact: string;
    switchLanguageLabel: string;
  };
  hero: {
    fullName: string;
    academicStatus: string;
    location: string;
    coreStatement: string;
    primaryCta: string;
    secondaryCta: string;
    coreStackLabel: string;
    coreStackValues: string;
    imageAlt: string;
    imageCaption: string;
    diagramLabel: string;
    sidebarLabel: string;
    quickFactsLabel: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    quickFacts: Array<{
      icon: 'academic' | 'globe' | 'cog';
      text: string;
    }>;
  };
  method: {
    eyebrow: string;
    heading: string;
    intro: string;
    philosophyTitle: string;
    philosophyBody: string;
    stepsTitle: string;
    steps: Array<{
      name: string;
      detail: string;
    }>;
    fevTitle: string;
    fevSummary: string;
    fevPillars: Array<{
      term: string;
      termAlt?: string;
      definition: string;
    }>;
  };
  projectsSection: {
    eyebrow: string;
    heading: string;
    intro: string;
    readCaseLabel: string;
    caseLabels: {
      backToHome: string;
      jumpHeading: string;
      sectionContext: string;
      sectionDecisions: string;
      sectionExecution: string;
      sectionOutcomes: string;
      sectionEvidence: string;
  glanceHeading: string;
  glanceRole: string;
  glancePeriod: string;
  glanceOutcome: string;
  glanceFocus: string;
      attributionHeading: string;
      curatingNote: string;
      externalLinkHint: string;
      inspectPhotoLabel: string;
      closeModalLabel: string;
      nextProjectLabel: string;
    };
    items: AnchorProject[];
  };
  projectsIndex: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  recognitionsSection: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Array<{
      result: string;
      event: string;
      detail?: string;
    }>;
  };
  complementary: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: ComplementaryFacet[];
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    copyButton: string;
    copiedAnnouncement: string;
    copyFallbackAnnouncement: string;
    linksLabel: string;
    privacyLinkLabel: string;
  };
  cv: {
    heading: string;
    subtitle: string;
    downloadPdfLabel: string;
    printPageLabel: string;
    lastUpdated: string;
    sections: {
      education: {
        heading: string;
        items: Array<{
          institution: string;
          program: string;
          period: string;
          detail: string;
        }>;
      };
      experience: {
        heading: string;
        items: Array<{
          organization: string;
          role: string;
          period: string;
          highlights: string[];
        }>;
      };
      honors: {
        heading: string;
        items: Array<{
          award: string;
          event: string;
          year: string;
        }>;
      };
      capabilities: {
        heading: string;
        groups: Array<{
          area: string;
          items: string;
        }>;
      };
      languages: {
        heading: string;
        items: Array<{
          language: string;
          proficiency: string;
        }>;
      };
    };
  };
  privacy: {
    heading: string;
    effectiveDate: string;
    paragraphs: Array<{
      title: string;
      body: string;
    }>;
  };
  footer: {
    rightsNote: string;
  };
}

