import * as React from "react";

import { useMetadataQuery } from "../../hooks/use-metadata-query";
import { SiteMetadata } from "../../types";

export interface PageMetaProps {
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
}

export const PageMeta = ({
  metaDescription,
  metaTitle,
  slug,
}: PageMetaProps): JSX.Element => {
  const { title, description, keywords, siteUrl } =
    useMetadataQuery<SiteMetadata>();

  const seoTitle = metaTitle || title;
  const seoDescription = metaDescription || description;

  const metaLinks = [
    {
      rel: "canonical",
      href: slug ? `${siteUrl}${slug}` : siteUrl,
    },
  ];

  const metaTags = [
    {
      name: "description",
      content: seoDescription,
    },
    {
      name: "keywords",
      content: keywords.join(),
    },
    {
      name: "meta",
      content: "initial-scale=1, width=device-width",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "og:title",
      content: seoTitle,
    },
    {
      name: "og:description",
      content: seoDescription,
    },
    {
      name: "twitter:title",
      content: seoTitle,
    },
    {
      name: "twitter:description",
      content: seoDescription,
    },
  ];

  return (
    <>
      <title>{seoTitle}</title>
      {metaLinks.map(({ rel, href }) => (
        <link key={rel} id={rel} rel={rel} href={href} />
      ))}
      {metaTags.map(({ name, content }) => (
        <meta key={name} id={name} name={name} content={content} />
      ))}
    </>
  );
};
