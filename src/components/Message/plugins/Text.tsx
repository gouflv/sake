import {FC} from 'react'
import {Message, MessagePlugin, MessageType} from '../../../typing'
import {Avatar} from '../Avatar'
import {Bubble} from '../Bubble'
import {MessageBox} from '../MessageBox'

const Text: FC<Message> = props => (
  <MessageBox
    avatar={() => <Avatar>{props.author}</Avatar>}
    bubble={() => <Bubble>{props.data}</Bubble>}
  />
)

export const TextPlugin: MessagePlugin = {
  type: MessageType.TEXT,
  render: Text
}
