import faker from 'faker'
import {nanoid} from 'nanoid'
import {FC, useState} from 'react'
import styled from 'styled-components'
import {MessageData, MessageType} from '../../typing'
import {MessageList} from '../Message'
import {ImagePlugin} from '../Message/plugins/Image'
import {NotificationPlugin} from '../Message/plugins/Notification'
import {TextPlugin} from '../Message/plugins/Text'
import {Box, Button} from '../StyledComponents'

const ChatWindowContainer = styled(Box)`
  width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background: rgba(128, 128, 128, 0.1);
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
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

  @media screen and (max-width: 768px) {
    display: block;
    
    button {
      display: block;
      width: 100%;
      margin-bottom: 0.5rem;
    }
    button:last-child {
      margin-bottom: 0;
    }
  }
`
const ActionButton = styled(Button)``

function getImageMessage() {
  return {
    id: nanoid(),
    author: faker.name.firstName(),
    type: MessageType.IMAGE,
    data: `//placeimg.com/640/480/animals?t=${Date.now()}`
  }
}
function getTextMessage() {
  return {
    id: nanoid(),
    author: faker.name.firstName(),
    type: MessageType.TEXT,
    data: faker.lorem.sentence()
  }
}

export const ChatWindow: FC<{
  name: string
}> = props => {
  const [messages, setMessages] = useState<MessageData[]>(() => {
    return Array.from({ length: 10 }).map((_, i) => {
      if (!i) {
        return {
          id: nanoid(),
          author: 'NOTIFICATION',
          type: MessageType.NOTIFICATION,
          data: `${props.name} just created a group.`
        }
      }
      if (i === 9) {
        return getImageMessage()
      }
      return getTextMessage()
    })
  })

  function sendNotification() {
    setMessages(prevState => [
      ...prevState,
      {
        id: nanoid(),
        author: 'NOTIFICATION',
        type: MessageType.NOTIFICATION,
        data: `${faker.name.firstName()} has joined this group.`
      }
    ])
  }

  function sendText() {
    setMessages(prevState => [...prevState, getTextMessage()])
  }

  function sendImage() {
    setMessages(prevState => [...prevState, getImageMessage()])
  }

  return (
    <ChatWindowContainer>
      <ChatWindowHeader>{`${props.name}'s Group`}</ChatWindowHeader>
      <ChatWindowMain>
        <MessageList data={messages}>
          <TextPlugin match={MessageType.TEXT} />
          <ImagePlugin match={MessageType.IMAGE} />
          <NotificationPlugin match={MessageType.NOTIFICATION} />
        </MessageList>
      </ChatWindowMain>
      <ChatWindowFooter>
        <ActionButton onClick={sendNotification}>Add a new friend</ActionButton>
        <ActionButton onClick={sendText}>Say some thing</ActionButton>
        <ActionButton onClick={sendImage}>Post a Sticker</ActionButton>
      </ChatWindowFooter>
    </ChatWindowContainer>
  )
}
