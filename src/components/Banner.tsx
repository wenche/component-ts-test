import React from 'react';
import { Banner, Icon, Button} from '@equinor/eds-core-react'
import {thumbs_down} from '@equinor/eds-icons'
const { BannerIcon, BannerMessage, BannerActions } = Banner

const BannerTest = () => {
  return (
    <Banner>
      <BannerIcon variant="warning">
        <Icon data={thumbs_down} name="thumbs_down" />
      </BannerIcon>
      <BannerMessage>
      Don't do this at home.
      </BannerMessage>
      <BannerActions>
        <Button>Unicorn contest</Button>
      </BannerActions>
    </Banner>
  );
};

export default BannerTest;