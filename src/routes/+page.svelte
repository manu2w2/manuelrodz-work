<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import '$lib/styles/tokens.css';
  import '$lib/styles/global.css';

  onMount(() => {
    const preferred = navigator.language?.toLowerCase().startsWith('en') ? '/en' : '/es';
    goto(preferred, { replaceState: true });
  });
</script>

<svelte:head>
  <title>Manuel Enrique Rodríguez Nicolás — manuelrodz.work</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main id="main-content" class="container root-choice">
  <div class="stack-md">
    <h1>Manuel Enrique Rodríguez Nicolás</h1>
    <p>Selecciona tu idioma de lectura / Select your preferred language:</p>
    <div class="actions">
      <a href="/es" class="btn-primary">Continuar en Español</a>
      <a href="/en" class="btn-secondary">Continue in English</a>
    </div>
  </div>
</main>

<style>
  .root-choice {
    padding-block: 5rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>

