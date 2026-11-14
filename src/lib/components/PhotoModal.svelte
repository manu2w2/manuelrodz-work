<script lang="ts">
  interface Props {
    src: string;
    alt: string;
    caption: string;
    closeLabel: string;
    onClose: () => void;
    triggerElement?: HTMLElement | null;
  }

  let { src, alt, caption, closeLabel, onClose, triggerElement = null }: Props = $props();
  let dialogEl = $state<HTMLDialogElement | null>(null);

  $effect(() => {
    if (dialogEl && !dialogEl.open) {
      dialogEl.showModal();
    }
  });

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === dialogEl) {
      closeDialog();
    }
  }

  function closeDialog() {
    if (dialogEl?.open) {
      dialogEl.close();
    }
    /* Fix #8: return focus to the button that opened the modal */
    triggerElement?.focus();
    onClose();
  }
</script>

<!-- Fix #8: aria-labelledby instead of aria-label -->
<dialog
  bind:this={dialogEl}
  class="photo-dialog"
  aria-labelledby="photo-modal-caption"
  onclose={closeDialog}
  onclick={handleBackdropClick}
>
  <div class="dialog-inner stack-md">
    <div class="dialog-header">
      <p id="photo-modal-caption" class="meta-text">{caption}</p>
      <button type="button" class="btn-secondary" onclick={closeDialog}>
        {closeLabel}
      </button>
    </div>
    <img {src} {alt} class="dialog-image" />
  </div>
</dialog>

<style>
  .photo-dialog {
    max-width: min(92vw, 64rem);
    padding: 0;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-control);
    background-color: var(--bg-canvas);
    color: var(--text-primary);
  }

  .photo-dialog::backdrop {
    background-color: rgba(30, 32, 30, 0.72);
  }

  .dialog-inner {
    padding: 1.25rem;
  }

  .dialog-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .dialog-image {
    display: block;
    max-width: 100%;
    max-height: 75dvh;
    width: auto;
    height: auto;
    margin-inline: auto;
  }
</style>
