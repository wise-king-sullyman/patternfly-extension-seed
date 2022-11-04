module.exports = {
  '/extensions/{{ tmplr.extension_name }}/design-guidelines': {
    id: "{{ tmplr.extension_title }}",
    title: "{{ tmplr.extension_title }}",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    source: "design-guidelines",
    Component: () => import(/* webpackChunkName: "extensions/{{ tmplr.extension_name }}/design-guidelines/index" */ './extensions/{{ tmplr.extension_name }}/design-guidelines')
  },
  '/extensions/{{ tmplr.extension_name }}/react': {
    id: "{{ tmplr.extension_title }}",
    title: "{{ tmplr.extension_title }}",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/{{ tmplr.extension_name }}/react/index" */ './extensions/{{ tmplr.extension_name }}/react')
  }
};