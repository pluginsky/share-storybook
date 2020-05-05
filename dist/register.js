import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { SharePanel } from './SharePanel';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './shared';
addons.register(ADDON_ID, function () {
    var render = function (_a) {
        var active = _a.active, key = _a.key;
        return (React.createElement(AddonPanel, { active: active, key: key },
            React.createElement(SharePanel, null)));
    };
    var title = 'Share Storybook';
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: title,
        render: render,
        paramKey: PARAM_KEY
    });
});
//# sourceMappingURL=register.js.map