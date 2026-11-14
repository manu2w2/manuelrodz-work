<script lang="ts">
  import '$lib/styles/tokens.css';
  import '$lib/styles/global.css';
</script>

<svelte:head>
  <title>404 — Página no encontrada / Page not found</title>
</svelte:head>

<main id="main-content" class="container error-page stack-md" tabindex="-1">
  <p class="meta-text">Error 404</p>
  <h1>
    <span>Página no encontrada</span> /
    <span lang="en">Page not found</span>
  </h1>
  <p>
    La ruta solicitada no existe o fue movida. Puedes regresar directamente al dossier principal o al currículum formal:
  </p>
  <p lang="en">
    The requested page does not exist or has been moved. You can return directly to the main dossier or the formal curriculum:
  </p>
  <div class="error-actions">
    <a href="/es" hreflang="es" class="btn-primary">Ir al inicio (Español)</a>
    <a href="/en" hreflang="en" lang="en" class="btn-secondary">Go to Home (English)</a>
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

