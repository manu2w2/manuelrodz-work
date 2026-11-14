<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { SITE_CONFIG } from '$lib/config/site';
  import type { Locale, SiteContent } from '$lib/types/content';
  import { getPrivacyPath } from '$lib/utils/i18n';

  interface Props {
    locale: Locale;
    contact: SiteContent['contact'];
    footer: SiteContent['footer'];
  }

  let { locale, contact, footer }: Props = $props();
  let statusMessage = $state('');
  let isCopied = $state(false);

  async function copyEmail() {
    if (!SITE_CONFIG.contactEmail) return;
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.contactEmail);
      statusMessage = contact.copiedAnnouncement;
      isCopied = true;
      setTimeout(() => {
        isCopied = false;
      }, 3000);
    } catch {
      statusMessage = contact.copyFallbackAnnouncement;
      isCopied = false;
    }
  }
</script>

<footer id="contacto" class="site-footer">
  <div class="container">
    <div class="editorial-grid footer-main">
      <div>
        <h2>{contact.heading}</h2>
      </div>

      <div class="stack-md">
        <p>{contact.intro}</p>

        {#if SITE_CONFIG.contactEmail}
          <div class="contact-row">
            <div class="email-block">
              <p class="meta-text">{contact.emailLabel}</p>
              <a href="mailto:{SITE_CONFIG.contactEmail}" class="email-link">
                <Icon name="mail" size={18} />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
            </div>
            <button type="button" class="btn-secondary" onclick={copyEmail}>
              <Icon name={isCopied ? 'check' : 'copy'} size={16} />
              <span>{isCopied ? (locale === 'es' ? 'Copiado' : 'Copied') : contact.copyButton}</span>
            </button>
          </div>
          <!-- Fix #7: always-present status region -->
          <div role="status" class="meta-text copy-status" aria-live="polite">
            {statusMessage}
          </div>
        {:else}
          <!-- Fix #5: neutral fallback instead of dev note -->
          <p class="meta-text">
            {locale === 'es'
              ? 'Puedes contactarme descargando mi CV formal donde encontrarás mis datos actualizados.'
              : 'You can reach me by downloading my formal CV where you will find my updated contact details.'}
          </p>
        {/if}

        {#if SITE_CONFIG.githubProfileUrl}
          <p class="meta-text github-row">
            <span class="github-label">{contact.linksLabel}:</span>
            <!-- Fix #6: announce new tab -->
            <a href={SITE_CONFIG.githubProfileUrl} target="_blank" rel="noopener noreferrer" class="github-link">
              <Icon name="github" size={17} />
              <span>GitHub</span>
              <Icon name="external" size={13} />
              <span class="sr-only">
                ({locale === 'es' ? 'abre enlace externo en una nueva pestaña' : 'opens in new tab'})
              </span>
            </a>
          </p>
        {/if}
      </div>
    </div>

    <div class="footer-bottom meta-text">
      <span>{footer.rightsNote}</span>
      <a href={getPrivacyPath(locale)}>{contact.privacyLinkLabel}</a>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    border-top: 1px solid var(--border-subtle);
    background-color: var(--bg-surface);
    padding-block: clamp(2.5rem, 5vw, 3.5rem) 2rem;
  }

  .footer-main {
    padding-bottom: 2.5rem;
  }

  .contact-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
  }

  .email-block {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .email-link {
    font-weight: 600;
    font-size: var(--text-body);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .copy-status {
    min-height: 1.5rem;
    color: var(--accent-primary);
    font-weight: 500;
  }

  .github-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }

  .github-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-weight: 600;
  }

  .footer-bottom {
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-subtle);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem 1.5rem;
  }
</style>
