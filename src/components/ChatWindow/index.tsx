import {FC, useState} from 'react'
import styled from 'styled-components'
import {TextPlugin} from '../Message/plugins/Text'
import {Message, MessageType} from '../../typing'
import {MessageList, MessagePlugins} from '../Message'

MessagePlugins.register(TextPlugin)

const ChatWindowContainer = styled.div`
  width: 600px
`
const ChatWindowHeader = styled.div``



const ChatWindow: FC<{
  name: string
}> = props => {
  const [messages, setMessages] = useState<Message[]>([
    {id: 1, author: 'a', type: MessageType.TEXT, data: 'hi'},
    {id: 2, author: 'a', type: MessageType.TEXT, data: 'hi'},
    {id: 3, author: 'a', type: MessageType.TEXT, data: 'hi'},
    {id: 4, author: 'a', type: MessageType.TEXT, data: 'hi'},
    {id: 5, author: 'a', type: MessageType.TEXT, data: 'hi'},
    {id: 6, author: 'a', type: MessageType.TEXT, data: 'hi'},
  ])

  return (
    <ChatWindowContainer>
      <ChatWindowHeader>{props.name}</ChatWindowHeader>
      <MessageList messages={messages} />
    </ChatWindowContainer>
  )
}

export default styled(ChatWindow)`
  
`
