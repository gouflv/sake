import {Children, cloneElement, FC, isValidElement, useEffect, useMemo, useRef} from 'react'
import styled from 'styled-components'
import {MessageComponentProps, MessageData} from '../../typing'
import {Box} from '../StyledComponents'

const MessageListContainer = styled(Box)`
  padding: 1rem;
  height: 500px;
  overflow-y: auto;
`

export const MessageList: FC<{
  data: MessageData[]
}> = props => {
  const { children, data } = props

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
  }, [children])

  function renderMessage(message: MessageData) {
    const renderer = messageRenders?.find(it => it.match === message.type)
    if (!renderer) {
      console.error(`Message render no found: ${message.type}`)
      return null
    }
    return cloneElement(renderer.element, {message})
  }

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [data])

  return (
    <MessageListContainer ref={ref}>
      {data.map(message => (
        <div key={message.id}>{renderMessage(message)}</div>
      ))}
    </MessageListContainer>
  )
}
