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
          <p class="meta-text" aria-live="polite">{statusMessage}</p>
        {:else}
          <p class="meta-text">
            {locale === 'es'
              ? 'Canal de correo directo en configuración final en src/lib/config/site.ts.'
              : 'Direct email channel ready to be configured in src/lib/config/site.ts.'}
          </p>
        {/if}

        {#if SITE_CONFIG.githubProfileUrl}
          <p class="meta-text">
            {contact.linksLabel}:
            <a href={SITE_CONFIG.githubProfileUrl} target="_blank" rel="noopener noreferrer">
              GitHub
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

