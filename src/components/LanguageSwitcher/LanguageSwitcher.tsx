import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = useCallback(
    (lng: string) => i18n.changeLanguage(lng),
    [i18n],
  )

  return (
    <div>
      <button
        data-testid="language-switcher-en-button"
        type="button"
        onClick={() => handleChangeLanguage('en')}
      >
        en
      </button>
      <button
        data-testid="language-switcher-pt-br-button"
        type="button"
        onClick={() => handleChangeLanguage('pt-BR')}
      >
        pt-BR
      </button>
      <p>{i18n.language}</p>
    </div>
  )
}

export default memo(LanguageSwitcher)
