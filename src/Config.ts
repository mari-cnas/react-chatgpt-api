const Config = {
  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.PACKAGE_VERSION,
  },
  i18n: {
    debbug: JSON.parse(
      (import.meta.env.VITE_I18N_DEBBUG ?? 'false').toLocaleLowerCase(),
      // Converts 'true' to true and 'false' to false
    ),
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    key: import.meta.env.VITE_API_KEY,
    model: import.meta.env.VITE_API_MODEL,
    prompt: import.meta.env.VITE_API_PROMPT,
    max_tokens: import.meta.env.VITE_API_MAX_TOKENS,
    temperature: import.meta.env.VITE_API_TEMPERATURE,
  },
}

export default Config
