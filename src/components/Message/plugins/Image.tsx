import {FC, memo, useEffect, useState} from 'react'
import styled from 'styled-components'
import {MessageComponentProps} from '../../../typing'
import {Image} from '../../StyledComponents'
import {MessageBox} from '../MessageBox'

function useImageLoader(url: string) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) {
      return
    }

    const img = document.createElement('img')

    function onLoad() {
      setLoading(false)
    }

    function onError() {
      setError(true)
    }

    img.addEventListener('load', onLoad)
    img.addEventListener('error', onError)
    img.src = url

    return () => {
      img.removeEventListener('load', onLoad)
      img.removeEventListener('error', onError)
    }
  }, [url])

  return {loading, error}
}

const Status = styled.div`
  font-size: 14px;
  color: #777;
`

const FakeSizeImage = styled(Image)`
  height: 225px;
  background: #f1f1f1;
`

const ImageLoader: FC<{ url: string; onLoaded?: () => void }> = ({ url, onLoaded }) => {
  const {loading, error} = useImageLoader(url)

  useEffect(() => {
    if (typeof onLoaded === 'function' && !loading) {
      onLoaded()
    }
  }, [loading, onLoaded])

  if (error) {
    return <Status>Failed</Status>
  }

  return (
    <FakeSizeImage src={url} />
  )
}

export const ImagePlugin: FC<MessageComponentProps> = memo(props => {
  const { message } = props

  if (!message || !message.data) {
    return null
  }

  return (
    <MessageBox
      author={message.author}
      bubbleRender={() => <ImageLoader url={message.data} onLoaded={props.onLayoutUpdate} />}
    />
  )
})
