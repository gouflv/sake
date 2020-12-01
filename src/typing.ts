import {FC} from 'react'

export enum MessageType {
  TEXT,
  IMAGE,
  NOTIFICATION
}

export interface Message {
  id: number
  author: string
  type: MessageType
  data: any
}

export interface MessagePlugin {
  type: MessageType
  render: FC<Message>
}
