export type ArticleSummary = {
  id: string
  frontmatter: {
    slug: string
    title: string
    chapter: number
  }
  timeToRead: number
}
