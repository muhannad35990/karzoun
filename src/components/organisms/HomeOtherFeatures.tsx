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
import HomeOtherFeaturesEmpBehave from "../molecules/HomeOtherFeaturesEmpbehave"
import HomeOtherFeaturesEmpReports from "../molecules/HomeOtherFeaturesEmpReports"
import HomeOtherFeaturesEmpConversations from "../molecules/HomeOtherFeaturesEmpConversations"
import HomeOtherFeaturesEmpAutomation from "../molecules/HomeOtherFeaturesEmpAutomation"
import HomeOtherFeaturesEmpDatabase from "../molecules/HomeOtherFeaturesEmpDatabase"

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
      content: <HomeOtherFeaturesEmpBehave />
    },
    {
      title: "لوحة تقارير شاملة",
      icon: <LayoutDashboard />,
      content: <HomeOtherFeaturesEmpReports />
    },
    {
      title: "تصفيات المحادثات",
      icon: <MessageSquareMore />,
      content: <HomeOtherFeaturesEmpConversations />
    },
    {
      title: "اتمتة الاجراءات والمهام",
      icon: <CalendarCheck />,
      content: <HomeOtherFeaturesEmpAutomation />
    },
    {
      title: "تضمين اكسل وبنك معلومات",
      icon: <Database />,
      content: <HomeOtherFeaturesEmpDatabase />
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
