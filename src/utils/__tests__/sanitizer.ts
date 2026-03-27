import { allowedContentAttributes, contentSanitizer } from "../sanitzer";

describe("sanitzer", () => {
  it("contentSanitizer properly sanitizes content with default settings", () => {
    const html = `<div class="test">test</div>`;
    const expected = "<div>test</div>";

    expect(contentSanitizer(html)).toBe(expected);
  });

  it("contentSanitizer properly sanitizes content", () => {
    const html = `<div class="test">test</div>`;

    expect(
      contentSanitizer(html, {
        allowedAttributes: allowedContentAttributes(),
      })
    ).toBe(html);
  });

  it("contentSanitizer removes script tags", () => {
    const html = `<div>test<script src="./malicious-code.js" /></div>`;
    const expected = "<div>test</div>";

    expect(contentSanitizer(html)).toBe(expected);
  });

  it("allowedContentAttributes returns the correct attributes", () => {
    const allowedAttributes = ["class", "data-language"];

    expect(allowedContentAttributes()).toStrictEqual({
      div: allowedAttributes,
      pre: allowedAttributes,
      code: allowedAttributes,
      span: allowedAttributes,
    });
  });
});
