<script lang="ts">
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
</svelte:head>

<article class="container privacy-article stack-lg">
  <header class="stack-sm">
    <p class="meta-text">{privacy.effectiveDate}</p>
    <h1>{privacy.heading}</h1>
  </header>

  {#each privacy.paragraphs as block}
    <section class="stack-sm">
      <h2>{block.title}</h2>
      <p>{block.body}</p>
    </section>
  {/each}
</article>

<style>
  .privacy-article {
    padding-block: 2.5rem 4rem;
  }
</style>

