import {FC, memo} from 'react'
import styled from 'styled-components'
import {MessageComponentProps} from '../../../typing'

const Notification = styled.div`
  margin: 0.25rem;
  text-align: center;
  color: #555;
`

export const NotificationPlugin: FC<MessageComponentProps> = memo(props => {
  const { message } = props

  if (!message || !message.data) {
    return null
  }

  return (
    <Notification>{message.data}</Notification>
  )
})
