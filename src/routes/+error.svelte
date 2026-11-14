<script lang="ts">
  import '$lib/styles/tokens.css';
  import '$lib/styles/global.css';
</script>

<svelte:head>
  <title>404 — Página no encontrada / Page not found</title>
</svelte:head>

<main id="main-content" class="container error-page stack-md">
  <p class="meta-text">Error 404</p>
  <h1>Página no encontrada / Page not found</h1>
  <p>
    La ruta solicitada no existe o fue movida. Puedes regresar directamente al dossier principal o al currículum formal:
  </p>
  <div class="error-actions">
    <a href="/es" class="btn-primary">Ir al inicio (Español)</a>
    <a href="/en" class="btn-secondary">Go to Home (English)</a>
  </div>
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

