import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { Button } from "@patternfly/react-core";
const pageData = {
  "id": "Patternfly extension seed",
  "section": "extensions",
  "source": "react",
  "slug": "/extensions/patternfly-extension-seed/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/module/patternfly-docs/content/extensions/patternfly-extension-seed/examples/basic.md",
  "examples": [
    "Example"
  ],
  "fullscreenExamples": [
    "Fullscreen example"
  ]
};
pageData.liveContext = {
  Button
};
pageData.relativeImports = {
  
};
pageData.examples = {
  'Example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from \"react\";\nimport { Button } from \"@patternfly/react-core\";\n\nconst BasicExample = () => <Button variant=\"primary\">My button</Button>;\n","title":"Example","lang":"js"}}>
      
    </Example>,
  'Fullscreen example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from \"react\";\nimport { Button } from \"@patternfly/react-core\";\n\nconst BasicExample = () => <Button variant=\"primary\">My button</Button>;\n","title":"Fullscreen example","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"basic-usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Basic usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Example"])}
    {React.createElement(pageData.examples["Fullscreen example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsPatternflyExtensionSeedReactDocs';
Component.pageData = pageData;

export default Component;
