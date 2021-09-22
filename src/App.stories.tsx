import React from 'react';

import { Meta } from '@storybook/react';

import App from './App';

export default {
  component: App,
  title: 'Components/Button',
} as Meta;

export const Primary: React.VFC<{}> = () => <App />;
