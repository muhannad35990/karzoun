import { JSX } from "react"
export interface SingleTabProps {
  title: string
  icon?: any
  orientation: "vertical" | "horizontal"
  isSelected?: boolean
}
export type SingleTabType = {
  title: string
  icon?: any
  content: JSX.Element
}
export interface TabsContainerProps {
  tabs: SingleTabType[]
  orientation: "vertical" | "horizontal"
}
