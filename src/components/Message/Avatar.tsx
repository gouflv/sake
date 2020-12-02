import {FC, ReactElement} from 'react'
import styled from 'styled-components'

const AvatarImage = styled.div`
  width: 28px;
  height: 28px;
  background: palevioletred;
  border-radius: 100%;
  line-height: 28px;
  text-align: center;
  font-weight: 500;
  color: #fff;
`

export const Avatar: FC<{ name?: string; image?: ReactElement }> = props => (
  <AvatarImage>{props.name?.charAt(0)}</AvatarImage>
)
