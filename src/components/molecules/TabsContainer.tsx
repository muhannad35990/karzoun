import { SingleTabType, TabsContainerProps } from "@/types"
import { FC, ReactElement, useState } from "react"
import SingleTab from "../atoms/SingleTab"

const TabsContainer: FC<TabsContainerProps> = ({ tabs }): ReactElement => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="flex" dir="rtl">
      <div className="w-56">
        {tabs.map((tab: SingleTabType, index: number) => (
          <div key={index} onMouseOver={() => setSelectedTab(index)}>
            <SingleTab {...tab} isSelected={selectedTab === index} />
          </div>
        ))}
      </div>
      <div className="w-[calc(100%-224px)]">{tabs[selectedTab].content}</div>
    </div>
  )
}

export default TabsContainer
