/** Turns a title into a URL slug: "Hello, World!" → "hello-world". */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Shortens text to at most `max` characters, ending with "…" when it was cut. */
export function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max)}…`;
}

/** Counts words separated by whitespace. */
export function wordCount(text: string): number {
  const trimmed = text.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}

/** Capitalizes the first letter of every word: "hello world" → "Hello World". */
export function titleCase(text: string): string {
  return text
    .split(" ")
    .map((word) => word[0]!.toUpperCase() + word.slice(1))
    .join(" ");
}
