const visit = require("unist-util-visit");

module.exports = ({ markdownAST }) => {
  visit(markdownAST, "link", (node) => {
    if (node.url.startsWith("http")) {
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.target = "_blank";
      node.data.hProperties.rel = "noopener noreferrer";
    }
  });
  return markdownAST;
};