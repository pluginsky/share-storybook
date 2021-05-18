import React from 'react';
import { Addon, addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

// import { SharePanel } from './SharePanel';

// import { ADDON_ID, PANEL_ID, PARAM_KEY } from './shared';
import { ADDON_ID, TOOL_ID } from './constants';
import { Tool } from './Tool';

addons.register(ADDON_ID, () => {
  // const render: Addon['render'] = ({ active, key }) => (
  //   <AddonPanel active={active} key={key}>
  //     <SharePanel />
  //   </AddonPanel>
  // );

  // const title = 'Share Storybook';

  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "My addon",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });

  // addons.add(PANEL_ID, {
  //   type: types.PANEL,
  //   title,
  //   render,
  //   paramKey: PARAM_KEY
  // });
});
