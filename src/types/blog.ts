interface Author {
  name: string;
  dp: string;
}

interface Paragraph {
  header: string;
  body: string[];
}

export interface BlogType {
  tag: string;
  slug: string;
  title: string;
  main: string;
  header: string;
  author: Author;
  date: string;
  coverImage: string;
  paragraphs: Paragraph[];
}
