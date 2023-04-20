import safePluginExection from "../safePluginExection";

const fixAlgoCounters = () => {
  const timeoutMs = 500;

  const fixCounters = () => {
    const spans = document.getElementsByClassName("ps-keyword");
    for (let i = 0; i < spans.length; i++) {
      const span = spans[i];
      let text = span.innerHTML;
      const regex = /(\d+)/g;
      text = text.replace(regex, '');
      span.innerHTML = text;
    }
  };

  return {
    name: 'fixAlgoCounters',
    injectHtmlTags() {
      return {
        postBodyTags: [{
          tagName: 'script',
          innerHTML: `
            (${safePluginExection.toString()})(${fixCounters.toString()}, ${timeoutMs})
          `
        }],
      };
    },
  };
};

export = fixAlgoCounters;
