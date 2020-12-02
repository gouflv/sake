import {FC} from 'react'
import styled from 'styled-components'
import {MessageComponentProps} from '../../../typing'

const Notification = styled.div`
  text-align: center;
  color: #555;
`

export const NotificationPlugin: FC<MessageComponentProps> = props => {
  const { message } = props
  if (!message || !message.data) {
    return null
  }
  return (
    <Notification>{message.data}</Notification>
  )
}
