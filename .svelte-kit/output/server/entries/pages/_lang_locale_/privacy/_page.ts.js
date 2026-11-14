import { redirect } from "@sveltejs/kit";
const load = async ({ parent }) => {
  const { locale } = await parent();
  if (locale === "es") {
    throw redirect(308, "/es/privacidad");
  }
  return {};
};
export {
  load
};
