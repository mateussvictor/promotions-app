import axios from 'axios'
import { useState } from 'react'

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false
}

function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo)

  async function call(localConfig) {
    setRequestInfo({
      ...initialRequestInfo,
      loading: true
    })

    let response = null

    try {
      response = await axios({
        baseURL: 'http://localhost:5000',
        ...config,
        ...localConfig
      })

      setRequestInfo({
        ...initialRequestInfo,
        data: response.data
      })

      if (config.onCompleted) config.onCompleted(response)
    } catch (error) {
      setRequestInfo({
        ...initialRequestInfo,
        error: error
      })
    }
  }

  return [call, requestInfo]
}

export { useApi }
