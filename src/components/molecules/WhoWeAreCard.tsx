import { Card, CardContent, CardHeader } from "../ui/card"
import { FC, ReactElement } from "react"
import { WhoWeAreCardProps } from "@/types"

const WhoWeAreCard: FC<WhoWeAreCardProps> = ({
  title,
  Icon,
  content
}): ReactElement => {
  return (
    <Card dir="rtl" className="shadow-2xl">
      <CardHeader className="rounded-t-lg bg-primary py-4">
        <div className="flex items-center">
          {Icon && <Icon color="white" />}
          <h3 className="text-xl font-bold text-white ms-2">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p>{content}</p>
      </CardContent>
    </Card>
  )
}

export default WhoWeAreCard
