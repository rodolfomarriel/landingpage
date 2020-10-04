import React from 'react';
import Image from '../../images/profile-photo.jpg';
import ImageResize from '../../images/profile-photo-resize.jpg';

// import ProgressiveImage from 'react-progressive-graceful-image';
import ProgressiveImage from 'react-progressive-image-loading';

import * as S from './styled';

const Avatar = () => {
  return (
    <ProgressiveImage
      preview={ImageResize}
      src={Image}
      transitionTime={300}
      transitionFunction='ease'
      render={(src, style) => <S.AvatarWrapper src={src}
      style={Object.assign(style, { filter: `grayscale(1)` })} />}
    />
  );
};

export default Avatar;
