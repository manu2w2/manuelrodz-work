<script lang="ts">
  import CaseStudyView from '$lib/components/CaseStudyView.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{data.project.title} — Manuel Rodríguez</title>
  <meta name="description" content={data.project.executiveSummary} />
</svelte:head>

<CaseStudyView
  locale={data.locale}
  project={data.project}
  nextProject={data.nextProject}
  labels={data.content.projectsSection.caseLabels}
/>

