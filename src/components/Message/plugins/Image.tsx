import {FC, useEffect, useState} from 'react'
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

    if (img.complete) {
      onLoad()
    }

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

const ImageRender: FC<{ url: string }> = ({ url }) => {
  const {loading, error} = useImageLoader(url)

  if (loading) {
    return <Status>Loading...</Status>
  }

  if (error) {
    return <Status>Failed</Status>
  }

  return (
    <Image src={url} />
  )
}

export const ImagePlugin: FC<MessageComponentProps> = props => {
  const { message } = props

  if (!message || !message.data) {
    return null
  }

  return (
    <MessageBox
      author={message.author}
      bubbleRender={() => <ImageRender url={message.data} />}
    />
  )
}
