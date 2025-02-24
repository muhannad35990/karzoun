import {
  CalendarCheck,
  Database,
  LayoutDashboard,
  MessageSquareMore,
  UserRound,
  UserRoundCog
} from "lucide-react"
import TabsContainer from "../molecules/TabsContainer"
import HomeOtherFeaturesEmpPerformance from "../molecules/HomeOtherFeaturesEmpPerformance"

function HomeOtherFeatures() {
  const featuresTabs = [
    {
      title: "تقييم أداء الموظفين",
      icon: <UserRound />,
      content: <HomeOtherFeaturesEmpPerformance />
    },
    {
      title: "استهداف حسب السلوك",
      icon: <UserRoundCog />,
      content: <div>tab1</div>
    },
    {
      title: "لوحة تقارير شاملة",
      icon: <LayoutDashboard />,
      content: <div>tab2</div>
    },
    {
      title: "تصفيات المحادثات",
      icon: <MessageSquareMore />,
      content: <div>tab3</div>
    },
    {
      title: "اتمتة الاجراءات والمهام",
      icon: <CalendarCheck />,
      content: <div>tab4</div>
    },
    {
      title: "تضمين اكسل وبنك معلومات",
      icon: <Database />,
      content: <div>tab5</div>
    }
  ]
  return (
    <div className="flex flex-col items-center mt-14 w-5/6 mx-auto">
      <h1 className="text-3xl font-bold mb-8" dir="rtl">
        مميزات رائعة أخرى
      </h1>
      <TabsContainer tabs={featuresTabs} orientation="horizontal" />
    </div>
  )
}

export default HomeOtherFeatures
