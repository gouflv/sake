import {Children, cloneElement, FC, isValidElement, useCallback, useEffect, useMemo, useRef} from 'react'
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
    return cloneElement(renderer.element, {
      message,
      onLayoutUpdate: onContentLayoutUpdate
    })
  }

  const ref = useRef<HTMLDivElement>(null)

  const onContentLayoutUpdate = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    onContentLayoutUpdate()
  }, [data, onContentLayoutUpdate])

  return (
    <MessageListContainer ref={ref}>
      {data.map(message => (
        <div key={message.id}>{renderMessage(message)}</div>
      ))}
    </MessageListContainer>
  )
}
