import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

import kcSideBar from './docs/QIAM-API/sidebar';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {

  tutorialSidebar: [
    'intro',
    
      {
        type: "category",
        label: "QIAM APIs",
        link: {
          type: "generated-index",
          title: "QIAM APIs",
          description:
            "QIAM API Ref",
          slug: "/docs/QIAM-API",
        },
        items: kcSideBar,
      },
    ,
   
  ],
  // By default, Docusaurus generates a sidebar from the docs folder structure
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  



  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};


export default sidebars;
