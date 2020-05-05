import React from 'react';
import { useParameter } from '@storybook/api';
import { PARAM_KEY } from './shared';
export var SharePanel = function () {
    var value = useParameter(PARAM_KEY, null);
    var item = value ? value.data : '';
    return React.createElement("div", null, item);
};
//# sourceMappingURL=SharePanel.js.map