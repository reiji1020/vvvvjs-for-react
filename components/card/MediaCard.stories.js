// file: components/card/MediaCard.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaCard from './MediaCard';

storiesOf('Cards', module)
  .add('with Thumbnail', () => (
    <MediaCard
        title="vvvv.js"
        subText="TestComponents"
        share={true}
    />
  ));