import React, {FC} from 'react'
import styled from 'styled-components'

const MessageBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
  
  .avatar {
    flex: 0 0 auto;
    margin-right: 0.5rem;
  }
  .content {
    flex: auto;
  }
  .author {
    margin-bottom: 0.125rem;
    font-size: 14px;
    color: #777;
  }
  .bubble {
    flex: auto;
  }
`

export const MessageBox: FC<{
  author: string
  avatarRender: () => React.ReactNode,
  bubbleRender: () => React.ReactNode
}> = props => (
  <MessageBoxContainer>
    <div className='avatar'>{props.avatarRender()}</div>
    <div className='content'>
      <div className='author'>{props.author}</div>
      <div className='bubble'>{props.bubbleRender()}</div>
    </div>
  </MessageBoxContainer>
)
