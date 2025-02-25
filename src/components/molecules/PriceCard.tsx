import { FC, ReactElement } from "react"
import { Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import { PriceCardProps, PriceOption } from "@/types"
import { cn } from "@/lib/utils"

const PriceCard: FC<PriceCardProps> = ({
  title,
  numberOfEmp,
  options,
  price,
  isActive
}): ReactElement => {
  return (
    <Card
      className={`h-full flex flex-col shadow-xl ${
        isActive && "bg-primary -translate-y-10"
      }`}
      dir="rtl"
    >
      <CardHeader className={cn(`bg-primary rounded-t-lg text-white`)}>
        <h1 className="text-4xl font-extrabold text-center">{title} </h1>
      </CardHeader>
      <CardContent
        className={cn(
          "flex flex-col justify-between flex-1",
          isActive && "text-white"
        )}
      >
        <div className="">
          <h3 className="text-xl font-semibold mt-2">
            عدد الموظفين: {numberOfEmp}
          </h3>
          {options?.map((option: PriceOption, optionIndex: number) => (
            <div key={optionIndex}>
              {" "}
              <div className="flex items-center  mt-4">
                <Check />
                <h3 className="text-lg font-semibold">{option.title}</h3>
              </div>
              {option?.items?.length > 0 && (
                <ul className="list-disc ms-9">
                  {option.items?.map((optionItem: string, inx: number) => (
                    <li key={inx}>{optionItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-end">
          <h1
            className={cn(
              "font-extrabold text-5xl text-center text-primary my-8",
              isActive && "text-white"
            )}
          >
            <span className="text-lg">$</span>
            {price}
            <span
              className={cn(
                "text-lg font-semibold text-gray-700",
                isActive && "text-gray-200"
              )}
            >
              /شهري
            </span>
          </h1>
          <Button
            className={cn(
              "mx-auto text-lg w-full py-6",
              isActive && "text-primary bg-white"
            )}
          >
            اشترك الان
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PriceCard
