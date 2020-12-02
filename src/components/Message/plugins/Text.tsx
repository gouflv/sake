import {FC, memo} from 'react'
import {MessageComponentProps} from '../../../typing'
import {Bubble} from '../Bubble'
import {MessageBox} from '../MessageBox'

export const TextPlugin: FC<MessageComponentProps> = memo(props => {
    const { message } = props

    if (!message || !message.data) {
      return null
    }

    return (
      <MessageBox
        author={message.author}
        bubbleRender={() => <Bubble>{message.data}</Bubble>}
      />
    )
  }
)
