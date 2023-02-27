import axios from 'axios'

import Config from 'Config'

const Api = axios.create({
  headers: { Authorization: `Bearer ${Config.api.key}` },
  baseURL: Config.api.baseUrl,
})

Api.interceptors.request.use((config) => {
  return {
    ...config,

    params: {
      ...config.params,
      apikey: Config.api.key,
      model: Config.api.model,
      prompt: Config.api.prompt,
      max_tokens: Config.api.max_tokens,
      temperature: Config.api.temperature,
    },
  }
})
export default Api
