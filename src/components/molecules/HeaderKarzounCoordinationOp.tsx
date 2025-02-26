import { HeaderLinkCardProps } from "@/types"
import {
  Clock,
  Contact,
  Filter,
  NotepadText,
  UserRoundCog,
  Users
} from "lucide-react"
import HeaderLinkCard from "../atoms/HeaderLinkCard"

const links = [
  {
    title: "كتابة ملاحظات في بروفايل العملاء",
    desc: "لا تغفل عن جهات الاتصال الخاصة بك ، ببساطة عن طريق إضافة ملاحظات إليها.",
    Icon: Contact,
    link: "/"
  },
  {
    title: "الفرق",
    desc: "توزيع الموظفين على أقسام مختلفة",
    Icon: Users,
    link: "/الفريق"
  },
  {
    title: "التصنيفات",
    desc: "تصنيف العملاء والمحادثات",
    Icon: UserRoundCog,
    link: "/docs"
  },
  {
    title: "ساعات العمل",
    desc: "عيِّن ساعات العمل لقنوات التواصل، واعرض رسالة غير متوفر مخصصة للعملاء.",
    Icon: Clock,
    link: "/ساعات-العمل"
  },
  {
    title: "فلترة متقدمة ووصول سريع لمحادثات العملاء",
    desc: "لوحة تحكم واحدة لكل صناديق الوارد الخاص بك (واتساب, فيسبوك, انستقرام, الموقع, الإيميلات, تيلقرام)",
    Icon: Filter,
    link: "/docs"
  },
  {
    title: "ملاحظات خاصة",
    desc: "ناقش بشكل خاص استفسارات العملاء مع زملائك في الفريق ، قبل الرد على المحادثات.",
    Icon: NotepadText,
    link: "/"
  }
]
function HeaderKarzounCoordinationOp() {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {links?.map((link: HeaderLinkCardProps, index: number) => (
        <HeaderLinkCard {...link} key={index} />
      ))}
    </div>
  )
}

export default HeaderKarzounCoordinationOp
