import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Project } from "./project-single";
import { ProjectTabs } from "./project-tabs";
import { ProjectsListContent } from "../../types";

export const ProjectsList = (): JSX.Element => {
  const {
    projects: {
      edges: projectList,
      pageInfo: { itemCount: numProjects },
    },
  } = useStaticQuery<ProjectsListContent>(projectsQuery);
  const [value, setValue] = React.useState(0);

  const tabLabels = projectList.map(
    ({
      node: {
        frontmatter: { order },
      },
    }) => order
  );

  const handleChange = (newValue: number): void => {
    setValue(newValue);
  };

  return (
    <>
      <ProjectTabs
        value={value}
        numProjects={numProjects}
        tabLabels={tabLabels}
        handleChange={handleChange}
      />
      {projectList.map(({ node: { id, html, frontmatter } }, i) => (
        <Project
          key={`project-${id}`}
          index={i}
          value={value}
          html={html}
          {...frontmatter}
        />
      ))}
    </>
  );
};

export const projectsQuery = graphql`
  query ProjectsList {
    projects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            repo
            app
            order
            iconName
          }
        }
      }
      pageInfo {
        itemCount
      }
    }
  }
`;
