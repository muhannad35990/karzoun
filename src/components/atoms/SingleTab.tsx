import { cn } from "@/lib/utils"
import { SingleTabProps } from "@/types"
import { FC, ReactElement } from "react"

const SingleTab: FC<SingleTabProps> = ({
  title,
  icon,
  isSelected,
  orientation
}): ReactElement => {
  return (
    <div
      className={cn(
        `flex shadow-lg bg-gray-100 text-primary hover:bg-primary hover:text-white ease-in-out px-3 py-2 hover:cursor-pointer`,
        isSelected && "bg-primary text-white",
        orientation === "vertical"
          ? "flex-row"
          : "flex-col items-center p-6 text-center"
      )}
    >
      {icon}
      {title}
    </div>
  )
}

export default SingleTab
