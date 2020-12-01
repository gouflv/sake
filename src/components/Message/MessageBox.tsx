import React, {FC} from 'react'
import styled from 'styled-components'

const MessageBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  .avatar {}
  .bubble {}
`

export const MessageBox: FC<{
  avatar: () => React.ReactNode,
  bubble: () => React.ReactNode
}> = props => (
  <MessageBoxContainer>
    <div className='avatar'>{props.avatar}</div>
    <div className='bubble'>{props.bubble}</div>
  </MessageBoxContainer>
)
