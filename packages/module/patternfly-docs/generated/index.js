module.exports = {
  '/extensions/{{ tmplr.extension_name }}/design-guidelines': {
    id: "Patternfly extension seed",
    title: "Patternfly extension seed",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    source: "design-guidelines",
    Component: () => import(/* webpackChunkName: "extensions/{{ tmplr.extension_name }}/design-guidelines/index" */ './extensions/{{ tmplr.extension_name }}/design-guidelines')
  },
  '/extensions/{{ tmplr.extension_name }}/react': {
    id: "Patternfly extension seed",
    title: "Patternfly extension seed",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/{{ tmplr.extension_name }}/react/index" */ './extensions/{{ tmplr.extension_name }}/react')
  }
};