import React from 'react'
import {ChatWindow} from './components/ChatWindow'
import {name as fakeName} from 'faker'

function App() {
  return (
    <div className='App'>
      <ChatWindow name={fakeName.firstName()} />
    </div>
  )
}

export default App
