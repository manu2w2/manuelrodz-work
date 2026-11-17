<script lang="ts">
  import PrivacyNoticeView from '$lib/components/PrivacyNoticeView.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let privacy = $derived(data.content.privacy);
</script>

<svelte:head>
  <title>{privacy.heading} — Manuel Rodríguez</title>
  <meta name="description" content={data.content.meta.privacyDescription} />
  <meta property="og:title" content="{privacy.heading} — Manuel Rodríguez" />
  <meta property="og:description" content={data.content.meta.privacyDescription} />
</svelte:head>

<PrivacyNoticeView {privacy} locale={data.locale} />
