import React from 'react'

import * as S from './styled'

const Profile = () => {

  return (
    <S.ProfileWrapper>
      <S.ProfileApresentation>
        <S.ProfileAuthor>
          Rodolfo Marriel
          <S.ProfilePosition>Desenvolvedor</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileApresentation>
      <S.ProfileDescription>Aprender para evoluir sempre</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
