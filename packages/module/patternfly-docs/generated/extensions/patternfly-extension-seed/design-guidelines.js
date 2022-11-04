import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import srcImport0 from '../../../content/extensions/patternfly-extension-seed/design-guidelines/./img/card-elements.png';
const pageData = {
  "id": "Patternfly extension seed",
  "section": "extensions",
  "source": "design-guidelines",
  "slug": "/extensions/patternfly-extension-seed/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/module/patternfly-docs/content/extensions/patternfly-extension-seed/design-guidelines/design-guidelines.md"
};
pageData.relativeImports = {
  
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Design guidelines intro`}
    </p>
    <AutoLinkHeader {...{"id":"header","size":"h2","className":"ws-title ws-h2"}}>
      {`Header`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"sub-header","size":"h3","className":"ws-title ws-h3"}}>
      {`Sub-header`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Referencing an image:`}
    </p>
    <img src={srcImport0} height={srcImport0.height * 370 / srcImport0.width} {...{"alt":"Elements of a card","width":"370","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`A`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`list`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`using`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`markdown`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ExtensionsPatternflyExtensionSeedDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
