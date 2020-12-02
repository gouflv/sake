import {Children, cloneElement, FC, isValidElement, useMemo} from 'react'
import styled from 'styled-components'
import {MessageComponentProps, MessageData} from '../../typing'
import {Box} from '../StyledComponents'

const MessageListContainer = styled(Box)`
  padding: 1rem;
  height: 450px;
  overflow-y: auto;
`

export const MessageList: FC<{
  messages: MessageData[]
}> = props => {
  const { children, messages } = props

  const messageRenders = useMemo(() => {
    return Children.map(children, element => {
      if (!isValidElement(element)) {
        return
      }
      if (!element.props.match) {
        return
      }
      const { match } = element.props as MessageComponentProps
      return {
        match,
        element
      }
    })
  }, [props.children])

  function renderMessage(message: MessageData) {
    const renderer = messageRenders?.find(it => it.match === message.type)
    if (!renderer) {
      return null
    }
    return cloneElement(renderer.element, {message})
  }

  return (
    <MessageListContainer>
      {messages.map(message => {
        return (
          <div key={message.id}>{renderMessage(message)}</div>
        )
        // const messageRender = MessagePlugins.getMessageRender(message.type)
        // if (!messageRender) return
        // return <div key={message.id}>{messageRender(message)}</div>
      })}
    </MessageListContainer>
  )
}
