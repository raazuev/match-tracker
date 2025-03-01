import { lazy } from "react";

const MatchPage = lazy(async () => {
  const module = await import("@/pages/matchPage/MatchPage");
  return { default: module.MatchPage };
});

const NotFound = lazy(async () => {
  const module = await import("@/shared/ui/notFound/NotFound");
  return { default: module.NotFound };
});

export const appRoutes = [
  { path: "/", element: <MatchPage /> },
  { path: "*", element: <NotFound /> },
];
