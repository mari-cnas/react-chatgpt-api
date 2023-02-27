import { memo, ReactElement } from 'react'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const BaseComponent: React.FC<IBaseComponentProps> = ({ children }) =>
  children as ReactElement

export default memo(BaseComponent)
