export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  NOTIFICATION = 'NOTIFICATION'
}

export interface MessageData {
  id: string
  author: string
  type: MessageType
  data: any
}

export interface MessageComponentProps {
  match: MessageType
  message?: MessageData
  onLayoutUpdate?: () => void
}
