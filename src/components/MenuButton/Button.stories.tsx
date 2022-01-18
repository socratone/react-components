import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuButton from './MenuButton';

export default {
  title: 'Button/MenuButton',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

// const Template: ComponentStory<typeof MenuButton> = (args) => (
//   <MenuButton {...args} />
// );

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MenuButton open={open} onClick={() => setOpen((open) => !open)} />
    </div>
  );
};
