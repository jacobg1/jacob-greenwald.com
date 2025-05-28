type BlogFrontmatter = {
  date: string;
  description: string;
  title: string;
  tags: string[];
  skillLevel: string;
};

export type BlogListNode = {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: BlogFrontmatter;
};

interface TagsData {
  fieldValue: string;
}

export interface BlogsListProps<Node = BlogListNode> {
  postsData: {
    nodes: Node[];
  };
  tagsData: {
    group: TagsData[];
  };
}

export interface BlogListContext {
  totalPages: number;
  currentPage: number;
}

type BlogResposeNode = {
  id: string;
  fields: {
    slug: string;
  };
};

export interface BlogPostsResponse {
  errors?: Error[];
  data?: BlogsListProps<BlogResposeNode>;
}

export type NextOrPreviousPost = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

export interface NextAndPreviousPostProps {
  previousPost: NextOrPreviousPost | null;
  nextPost: NextOrPreviousPost | null;
}

export interface SingleBlogProps {
  post: {
    html: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      description: string;
    };
  };
  next: NextOrPreviousPost | null;
  previous: NextOrPreviousPost | null;
}

export interface PostButtonProps {
  post: NextOrPreviousPost | null;
}

type SingleTagNode = {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: BlogFrontmatter;
};

type SingleTagEdge = {
  node: SingleTagNode;
};

export interface SingleTagPageProps {
  allMarkdownRemark: {
    edges: SingleTagEdge[];
    totalCount: number;
  };
}

export interface TagsPageProps {
  tagsData: {
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
}
