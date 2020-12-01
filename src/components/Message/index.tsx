import {MessagePlugin, MessageType} from '../../typing'

export {MessageList} from './MessageList'

export const MessagePlugins = {
  plugins: [] as MessagePlugin[],
  register(plugin: MessagePlugin) {
    this.plugins.push(plugin)
  },
  getMessageRender(type: MessageType) {
    const render = this.plugins.find(plugin => plugin.type === type)
    if (!render) {
      console.error(`Messages render not found: ${type}`)
    }
    return render?.render
  }
}
