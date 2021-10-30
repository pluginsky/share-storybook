import { useState } from 'react';
import { Icons, IconButton } from '@storybook/components';

import { TOOL_ID } from './constants';
import { ConfigForm } from './ConfigForm';

export const Tool = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IconButton
        key={TOOL_ID}
        title="Copy embed to place in the code"
        onClick={() => setShowModal(true)}
      >
        <Icons icon="share" />
      </IconButton>

      <ConfigForm isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
