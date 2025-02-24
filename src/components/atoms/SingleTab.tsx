import { SingleTabProps } from "@/types"
import { FC, ReactElement } from "react"

const SingleTab: FC<SingleTabProps> = ({ title, isSelected }): ReactElement => {
  return (
    <div
      className={`bg-slate-300 text-primary hover:bg-primary hover:text-white ease-in-out px-3 py-2 hover:cursor-pointer ${
        isSelected && "bg-primary text-white"
      }`}
    >
      {title}
    </div>
  )
}

export default SingleTab
