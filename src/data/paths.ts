const rawBase = import.meta.env.BASE_URL ?? "/";
export const siteBase = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

export function withBase(path: string) {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBase}${normalizedPath}`;
}
