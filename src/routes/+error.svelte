<script lang="ts">
  import { page } from '$app/stores';
  import '$lib/styles/tokens.css';
  import '$lib/styles/global.css';

  $: isEnglish = $page.url.pathname.startsWith('/en');
</script>

<svelte:head>
  <title>{isEnglish ? '404 — Page not found' : '404 — Página no encontrada'}</title>
</svelte:head>

<main id="main-content" class="container error-page stack-md" tabindex="-1">
  <p class="meta-text">Error 404</p>
  {#if isEnglish}
    <h1>Page not found</h1>
    <p>The page you’re looking for doesn’t exist or may have moved. You can return to the portfolio or view the résumé:</p>
    <div class="error-actions">
      <a href="/en" hreflang="en" class="btn-primary">Go to the portfolio</a>
      <a href="/en/cv" hreflang="en" class="btn-secondary">View résumé</a>
    </div>
  {:else}
    <h1>Página no encontrada</h1>
    <p>La ruta solicitada no existe o fue movida. Puedes regresar directamente al dossier principal o al currículum formal:</p>
    <div class="error-actions">
      <a href="/es" hreflang="es" class="btn-primary">Ir al inicio (Español)</a>
      <a href="/es/cv" hreflang="es" class="btn-secondary">Ver currículum</a>
    </div>
  {/if}
</main>

<style>
  .error-page {
    padding-block: 5rem;
  }

  .error-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>

