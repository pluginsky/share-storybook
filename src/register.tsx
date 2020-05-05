import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

import { SharePanel } from './SharePanel';

import { ADDON_ID, PANEL_ID, PARAM_KEY } from './shared';

addons.register(ADDON_ID, () => {
  const render = ({ active, key }: any) => (
    <AddonPanel active={active} key={key}>
      <SharePanel />
    </AddonPanel>
  );

  const title = 'Share Storybook';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
    paramKey: PARAM_KEY
  });
});
