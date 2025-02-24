import { JSX } from "react"
export interface SingleTabProps {
  title: string
  isSelected?: boolean
}
export type SingleTabType = {
  title: string
  content: JSX.Element
}
export interface TabsContainerProps {
  tabs: SingleTabType[]
}
