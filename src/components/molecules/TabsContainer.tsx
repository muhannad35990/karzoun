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
        orientation === "vertical" ? "flex-row w-full" : "flex-col"
      }`}
      dir="rtl"
    >
      <div
        className={`flex ${
          orientation === "vertical"
            ? "flex-col w-56"
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
          orientation === "vertical" ? "-[calc(100%-224px)]" : "w-full"
        }"w p-4"`}
      >
        {tabs[selectedTab].content}
      </div>
    </div>
  )
}

export default TabsContainer
