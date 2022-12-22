module.exports = {
  '/extensions/patternfly-extension-seed/design-guidelines': {
    id: "patternfly-extension-seed",
    title: "patternfly-extension-seed",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    source: "design-guidelines",
    Component: () => import(/* webpackChunkName: "extensions/patternfly-extension-seed/design-guidelines/index" */ './extensions/patternfly-extension-seed/design-guidelines')
  },
  '/extensions/patternfly-extension-seed/react': {
    id: "patternfly-extension-seed",
    title: "patternfly-extension-seed",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/patternfly-extension-seed/react/index" */ './extensions/patternfly-extension-seed/react')
  }
};