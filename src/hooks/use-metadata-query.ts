import { graphql, useStaticQuery } from "gatsby";

import type { MetadataQuery } from "../types";

const query = graphql`
  query PageMeta {
    site {
      siteMetadata {
        title
        email
        description
        keywords
        siteUrl
      }
    }
  }
`;

export function useMetadataQuery<T>(): T {
  const {
    site: { siteMetadata },
  } = useStaticQuery<MetadataQuery<T>>(query);

  return siteMetadata;
}
