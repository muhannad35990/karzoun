"use client"
import { SingleTabType, TabsContainerProps } from "@/types"
import { FC, ReactElement, useState } from "react"
import SingleTab from "../atoms/SingleTab"

const TabsContainer: FC<TabsContainerProps> = ({
  tabs,
  orientation
}): ReactElement => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div
      className={`flex ${
        orientation === "vertical"
          ? "flex-row w-full justify-between h-full"
          : "flex-col"
      }`}
      dir="rtl"
    >
      <div
        className={`flex  ${
          orientation === "vertical"
            ? "flex-col w-[200px] h-full"
            : "flex-row w-full justify-between"
        }`}
      >
        {tabs.map((tab: SingleTabType, index: number) => (
          <div key={index} onClick={() => setSelectedTab(index)}>
            <SingleTab
              {...tab}
              isSelected={selectedTab === index}
              orientation={orientation}
            />
          </div>
        ))}
      </div>
      <div
        className={`${
          orientation === "vertical"
            ? "flex-1 max-w-[calc(100%-270px)]"
            : "w-full"
        }" p-4"`}
      >
        {tabs[selectedTab].content}
      </div>
    </div>
  )
}

export default TabsContainer
