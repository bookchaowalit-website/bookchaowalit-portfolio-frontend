export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract headings (h2, h3) from MDX content.
 * Matches patterns like: ## Heading or ### Heading
 */
export function extractHeadings(content: string): TocHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TocHeading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Generate a slug-like id (lowercase, replace spaces with hyphens, remove special chars)
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ id, text, level });
  }

  return headings;
}
