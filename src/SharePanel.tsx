import React from 'react';
import { useParameter } from '@storybook/api';

import { PARAM_KEY } from './shared';

export const SharePanel = () => {
  const value = useParameter(PARAM_KEY, null);

  const item = value ? value.data : '';

  return <div>{item}</div>;
};
