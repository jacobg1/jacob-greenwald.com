import * as React from "react";

import { render } from "@testing-library/react";
import * as Gatsby from "gatsby";

import { getMockPageProps, mockSkills } from "../../../__utils__/gatsby-props";
import type { PageContentWithImage } from "../../types";
import AboutPage from "../about";

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

const mockQuery = {
  markdownRemark: {
    frontmatter: { mySkills: mockSkills },
  },
};

const title = "Test title";
const testContent = "test html";

const data = {
  content: {
    html: `<p>${testContent}</p>`,
    frontmatter: { title },
  },
};

const mockPageProps = getMockPageProps<PageContentWithImage>(data);

describe("about", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders content and title properly", () => {
    const { getByText } = render(<AboutPage data={data} {...mockPageProps} />);

    expect(getByText(title)).toBeVisible();
    expect(getByText(testContent)).toBeVisible();
  });
});
