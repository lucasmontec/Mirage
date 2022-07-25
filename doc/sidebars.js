/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: 'category',
      label: 'General',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {type: 'autogenerated', dirName: 'general'}
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {type: 'autogenerated', dirName: 'guides'}
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {type: 'autogenerated', dirName: 'examples'}
      ],
    },
    {
      type: 'category',
      label: 'Components',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {type: 'autogenerated', dirName: 'components'}
      ],
    }
  ],
  api: [{type: 'autogenerated', dirName: 'reference'}],
};

module.exports = sidebars;
