import Hero from "@/components/organisms/hero"
import HomeDashboardSection from "@/components/organisms/home-dashboard-section"
import HomeAiRoobot from "@/components/organisms/HomeAiRoobot"
import HomeAutomation from "@/components/organisms/HomeAutomation"
import HomeCustomerService from "@/components/organisms/HomeCustomerService"
import HomeDataManage from "@/components/organisms/HomeDataManage"
import HomeDirectConversation from "@/components/organisms/HomeDirectConversation"
import HomeEmpCoordinate from "@/components/organisms/HomeEmpCoordinate"
import HomeKarzounChat from "@/components/organisms/HomeKarzounChat"
import HomeMobileApps from "@/components/organisms/HomeMobileApps"
import HomeOtherFeatures from "@/components/organisms/HomeOtherFeatures"
import { HomePartners } from "@/components/organisms/HomePartners"
import HomePricing from "@/components/organisms/HomePricing"
import HomeRobot from "@/components/organisms/HomeRobot"
import HomeTeamManage from "@/components/organisms/HomeTeamManage"
import HomeTicketSystem from "@/components/organisms/HomeTicketSystem"
import HomeWhoWeAre from "@/components/organisms/HomeWhoWeAre"

export default function Home() {
  return (
    <div className="bg-blue-100 pb-14">
      <Hero />
      <HomeDashboardSection />
      <HomePartners />
      <HomeCustomerService />
      <HomeTicketSystem />
      <HomeEmpCoordinate />
      <HomeTeamManage />
      <HomeKarzounChat />
      <HomeDataManage />
      <HomeRobot />
      <HomeAiRoobot />
      <HomeAutomation />
      <HomeOtherFeatures />
      <HomePricing />
      <HomeDirectConversation />
      <HomeMobileApps />
      <HomeWhoWeAre />
    </div>
  )
}
