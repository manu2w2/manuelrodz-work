<script lang="ts">
  import ProjectsIndexView from '$lib/components/ProjectsIndexView.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<ProjectsIndexView
  locale={data.locale}
  projects={data.content.projectsSection.items}
  indexContent={data.content.projectsIndex}
  readCaseLabel={data.content.projectsSection.readCaseLabel}
/>
