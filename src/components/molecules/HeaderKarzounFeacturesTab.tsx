import { HeaderLinkCardProps } from "@/types"
import {
  Bot,
  ChartAreaIcon,
  LayoutDashboard,
  Smartphone,
  Users
} from "lucide-react"
import HeaderLinkCard from "../atoms/HeaderLinkCard"

const links = [
  {
    title: "الربط مع جميع انواع الواتساب",
    desc: "ببساطة قم بالإستفادة من الخدمة عن طريق ربط رقمك الواتساب المؤسسي او البزنس او العادي مع المنصة",
    image: "/images/whatapp-blue.png",
    link: "/docs"
  },
  {
    title: "واجهة تحكم واحدة لكل الحسابات",
    desc: "لوحة تحكم واحدة لكل صناديق الوارد (واتساب, فيسبوك, انستقرام, الإيميلات,والمزيد...)",
    Icon: LayoutDashboard,
    link: "/channels"
  },
  {
    title: "الأتمتة والرد الآلي",
    desc: "تجنب المهام المتكررة عن طريق أتمتة سير العمل وتوفير اوامر اتمتة تلقائية وردود سريعة للموظفين",
    Icon: Bot,
    link: "/automations"
  },
  {
    title: "تنسيق العمل وتوزيعه بين الموظفين",
    desc: "واجهة يستخدمها كل الموظفون, يتم توزيع المحادثات بين الاقسام والموظفون بشكل احترافي مع امكانية كتابة ملاحظات ورسائل خاصة لأعضاء الفريق.",
    Icon: Users,
    link: "/shared-inbox"
  },
  {
    title: "تطبيق للجوال اندرويد و IOS",
    desc: "مشاهدة الرسائل وادارتها والرد عليها من قبل موظفينك من خلال تطبيق الجوال بسهولة على هواتف الأندرويد وهواتف الأيفون.",
    Icon: Smartphone,
    link: "/mobile-apps"
  },
  {
    title: "المحادثة المباشرة في الموقع",
    desc: "يمكن تضمين ويدجت للمحادثة المباشرة داخل الموقع او المتجر لتوفير خدمة عملاء مباشرة لعملائك مع العديد من الأدوات المساعدة.",
    Icon: ChartAreaIcon,
    link: "/"
  }
]
function HeaderKarzounFeacturesTab() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {links?.map((link: HeaderLinkCardProps, index: number) => (
        <HeaderLinkCard {...link} key={index} />
      ))}
    </div>
  )
}

export default HeaderKarzounFeacturesTab
