import React from 'react'
import Image from '../../images/profile-photo.jpg'

import LazyLoad from 'react-lazy-load';

import * as S from './styled'

const Avatar = () => {

  return (
    <LazyLoad debounce={false} offsetVertical={500}>
      <S.AvatarWrapper src={Image} />
    </LazyLoad>
  )
}

export default Avatar
