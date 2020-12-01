import {FC} from 'react'
import styled from 'styled-components'
import {Message} from '../../typing'
import {Box} from '../StyledComponents'
import {MessagePlugins} from './index'

const MessageListContainer = styled(Box)`
  padding: 1em;
  height: 450px;
`

export const MessageList: FC<{
  messages: Message[]
}> = props => {
  const { messages } = props

  return (
    <MessageListContainer>
      {messages.map(message => {
        return (
          <div key={message.id}>{message.author}</div>
        )
        // const messageRender = MessagePlugins.getMessageRender(message.type)
        // if (!messageRender) return
        // return <div key={message.id}>{messageRender(message)}</div>
      })}
    </MessageListContainer>
  )
}
