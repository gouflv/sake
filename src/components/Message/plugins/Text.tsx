import {FC} from 'react'
import {MessageComponentProps} from '../../../typing'
import {Bubble} from '../Bubble'
import {MessageBox} from '../MessageBox'

export const TextPlugin: FC<MessageComponentProps> = props => {
  const { message } = props
  if (!message) {
    return null
  }
  return (
    <MessageBox
      author={message.author}
      bubbleRender={() => <Bubble>{message.data}</Bubble>}
    />
  )
}
