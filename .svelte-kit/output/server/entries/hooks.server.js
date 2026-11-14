const handle = async ({ event, resolve }) => {
  const lang = event.url.pathname.startsWith("/en") ? "en" : "es";
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", lang)
  });
};
export {
  handle
};
