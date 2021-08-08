import React, { useMemo } from "react";
import { Icons, IconButton } from "@storybook/components";

import { TOOL_ID } from "./constants";

export const Tool = () => {
  const template = useMemo(() => 
    // TODO page display name
    // TODO auto generate id
    `<iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      // width="300"
      // height="200"
      src="${window.location.href}iframe.html"
    ></iframe>`
  , [])

  // TODO display select
  // 1. copy embed code to current story
  // 2. copy embed code to root dir
  // 3. copy link to frame dir
  // 4. display waring on localhost (storybook is only available on local machine)

  // TODO display embed code & preview in modal
  // TODO display confirmation/message after copy

  return (
    <IconButton
      key={TOOL_ID}
      title="Copy embed to place in the code"
      onClick={() => console.log(JSON.stringify(template))}
    >
      <Icons icon="share" />
    </IconButton>
  );
};
