import { useMemo, useState } from 'react';
import { Form } from '@storybook/components';


interface Props {
  readonly isOpen: boolean;
}

export const ConfigForm = ({isOpen}: Props) => {
  const [title, setTitle] = useState('Storybook Preview');
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(300);

  // TODO? remove useMemo
  const template = useMemo(
    () =>
      `<iframe
      src="${window.location.href}iframe.html"
      title="${title}"
      width="${width}"
      height="${height}"
      style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
    ></iframe>`,
    []
  ); // TODO update array

  // TODO display select
  // 1. copy embed code to current story
  // 2. copy embed code to root dir
  // 3. copy link to frame dir
  // 4. display waring on localhost (storybook is only available on local machine)

  // TODO display confirmation/message after copy

  return (
    <Modal isOpen={isOpen}>
      <Form.Input placeholder="Title" onChange={() => setTitle()} />
      <Form.Input placeholder="Width" onChange={() => setWidth()} />
      <Form.Input placeholder="Height" onChange={() => setHeight()} />

      <Checkbox label="Share with Storybook UI" />

      {/* Radio group - link to: current story, main story/root dir */}
      <Radio
        id="Mice"
        label="Preview current story"
        value="mice"
        onChange={onChange}
        checked
        appearance="secondary"
      />
      <Radio
        id="Mice"
        label="Preview main story"
        value="mice"
        onChange={onChange}
        checked
        appearance="secondary"
      />

      {/* Warning if localhost: Storybook is running in the development mode and is only available on your local machine. It's not possible to place the frame on the website. */}

      {/* Tabs - code/preview */}
      <TabsState
      // initial="preview"
      >
        <div id="preview" title="Preview">
          <div dangerouslySetInnerHTML={{ __html: template }} />
        </div>

        <div id="code" title="Code">
          {/* Description blablabla */}
          <CodeSnippets />
        </div>
      </TabsState>
    </Modal>
  )
}
