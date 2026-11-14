<script lang="ts">
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

  async function copyEmail() {
    if (!SITE_CONFIG.contactEmail) return;
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.contactEmail);
      statusMessage = contact.copiedAnnouncement;
    } catch {
      statusMessage = contact.copyFallbackAnnouncement;
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
            <div>
              <p class="meta-text">{contact.emailLabel}</p>
              <a href="mailto:{SITE_CONFIG.contactEmail}" class="email-link">
                {SITE_CONFIG.contactEmail}
              </a>
            </div>
            <button type="button" class="btn-secondary" onclick={copyEmail}>
              {contact.copyButton}
            </button>
          </div>
          <!-- Fix #7: always-present status region -->
          <div role="status" class="meta-text">
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
          <p class="meta-text">
            {contact.linksLabel}:
            <!-- Fix #6: announce new tab -->
            <a href={SITE_CONFIG.githubProfileUrl} target="_blank" rel="noopener noreferrer">
              GitHub
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

  .email-link {
    font-weight: 600;
    font-size: var(--text-body);
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
