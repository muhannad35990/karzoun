import { HeaderLinkCardProps } from "@/types"
import {
  Bot,
  ChartAreaIcon,
  ChartPie,
  LayoutDashboard,
  MessageSquareText,
  Rss,
  ScrollText,
  Smartphone,
  Users
} from "lucide-react"
import HeaderLinkCard from "../atoms/HeaderLinkCard"

const links = [
  {
    title: "تقارير عن الموظفين",
    desc: "شاهد اداء وسرعة مستوى الموظفين عبر صفحة التقارير الخاصة في الموظفين",
    Icon: ScrollText,
    link: "/docs"
  },
  {
    title: "تقارير عن المحادثات",
    desc: "تتبع المقاييس الهامة ومؤشرات الأداء الرئيسية حول محادثاتك.",
    Icon: MessageSquareText,
    link: "/"
  },
  {
    title: "احصائات مباشرة",
    desc: "تابع تقارير مباشرة عن الموظفين المتاحين لديك ،عدد المحادثات المفتوحة ، والمزيد – على شاشة واحدة.",
    Icon: ChartPie,
    link: "/"
  },
  {
    title: "تقارير عن قنوات التواصل",
    desc: "تعرف على قناة التواصل التي تحصل على أكبر قدر من النشاط.",
    Icon: Rss,
    link: "/"
  },
  {
    title: "تقارير عن رضى العملاء",
    desc: "أرسل رابط لتقييم المحادثة إلى المحادثات المغلقة تلقائيًا. وشاهد تقرير رضاء العملاء الخاص بك وقتما تشاء.",
    Icon: Smartphone,
    link: "/"
  },
  {
    title: "المحادثة المباشرة في الموقع",
    desc: "يمكن تضمين ويدجت للمحادثة المباشرة داخل الموقع او المتجر لتوفير خدمة عملاء مباشرة لعملائك مع العديد من الأدوات المساعدة.",
    Icon: ChartAreaIcon,
    link: "/"
  }
]
function HeaderKarzounEmpReports() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {links?.map((link: HeaderLinkCardProps, index: number) => (
        <HeaderLinkCard {...link} key={index} />
      ))}
    </div>
  )
}

export default HeaderKarzounEmpReports
