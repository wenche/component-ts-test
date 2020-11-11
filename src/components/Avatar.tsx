import React from 'react';
import { Avatar } from '@equinor/eds-core-react'

const AvatarFun = () => {

  return (
    <>
    <Avatar src={'https://i.imgur.com/UM3mrju.jpg'} size={16} alt="avatar" />
    <Avatar src={'https://i.imgur.com/UM3mrju.jpg'} size={24} alt="avatar" />
    <Avatar src={'https://i.imgur.com/UM3mrju.jpg'} size={32} alt="avatar" />
    <Avatar src={'https://i.imgur.com/UM3mrju.jpg'} size={40} alt="avatar" />
    <Avatar src={'https://i.imgur.com/UM3mrju.jpg'} size={48} alt="avatar" />
    </>
  );
};

export default AvatarFun;