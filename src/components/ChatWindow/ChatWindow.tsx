import faker from 'faker'
import {nanoid} from 'nanoid'
import {FC, useState} from 'react'
import styled from 'styled-components'
import {Message, MessageType} from '../../typing'
import {MessageList} from '../Message'
import {TextPlugin} from '../Message/plugins/Text'
import {Box, Button} from '../StyledComponents'

const ChatWindowContainer = styled(Box)`
  width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background: rgba(128, 128, 128, 0.1);
`
const ChatWindowHeader = styled.div`
  margin-bottom: 1rem;
  font-size: 20px;
`
const ChatWindowMain = styled.div`
  margin-bottom: 0.5rem;
`
const ChatWindowFooter = styled(Box)`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`
const ActionButton = styled(Button)``

export const ChatWindow: FC<{
  name: string
}> = props => {
  const [messages, setMessages] = useState<Message[]>(() => {
    return Array.from({ length: 10 }).map(() => ({
      id: nanoid(),
      author: faker.name.firstName(),
      type: MessageType.TEXT,
      data: faker.lorem.slug()
    }))
  })

  return (
    <ChatWindowContainer>
      <ChatWindowHeader>{`${props.name}'s Group`}</ChatWindowHeader>
      <ChatWindowMain>
        <MessageList messages={messages}>
          <TextPlugin match={MessageType.TEXT} />
        </MessageList>
      </ChatWindowMain>
      <ChatWindowFooter>
        <ActionButton>Add Member</ActionButton>
        <ActionButton>Say some thing</ActionButton>
        <ActionButton>Post a Sticker</ActionButton>
      </ChatWindowFooter>
    </ChatWindowContainer>
  )
}
