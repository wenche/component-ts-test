import React from 'react';
import {Chip, Icon} from '@equinor/eds-core-react'
import {android, school} from '@equinor/eds-icons'

const ChipFun = () => {

  return (
    <>
    <Chip>No compund components! 
    ❤️</Chip>
    <Chip variant="error">
      <Icon data={school} />
      We love school
    </Chip>
    <Chip variant="active">
      <Icon data={android}  />
      {`Android > iOS`}
    </Chip>
    </>
  );
};

export default ChipFun;