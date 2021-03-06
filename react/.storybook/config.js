import '../../dist/v-0.0.1/default.css';
import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

const req = require.context('../', true, /\.storybook\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

setAddon(JSXAddon);
configure(loadStories, module);
