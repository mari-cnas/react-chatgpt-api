import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/Api'

interface IContextProps {
  error: string | null
}
interface ICharactersProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const CharactersProvider: React.FC<ICharactersProviderProps> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null)

  const fetchCharacters = useCallback(async (page: number, search?: string) => {
    const model = 'text-davinci-003'
    const prompt = 'tell me one random name'
    const maxTokens = 56
    const temperature = 0.5

    setError(null)
    const params = {
      model,
      prompt,
      maxTokens,
      temperature,
    }

    Api.post('https://api.openai.com/v1/completions', params)
      .then((result) => console.log(result.data.choices[0].text))
      .catch((err) => console.log(err))

    try {
      const { data } = await Api.get('/characters', {
        params,
      })
      console.log(data.choices[0].text)
    } catch {
      setError('Não foi possível carregar os personagens')
    } finally {
      setError('Não foi possível carregar os personagens')
    }
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchCharacters(1)
  }, [fetchCharacters])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          fetchCharacters,
          error,
        }),
        [fetchCharacters, error],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useCharacters = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
