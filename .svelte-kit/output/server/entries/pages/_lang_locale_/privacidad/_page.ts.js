import { redirect } from "@sveltejs/kit";
const load = async ({ parent }) => {
  const { locale } = await parent();
  if (locale === "en") {
    throw redirect(308, "/en/privacy");
  }
  return {};
};
export {
  load
};
