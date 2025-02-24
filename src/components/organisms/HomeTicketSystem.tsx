import Image from "next/image"
import Link from "next/link"

function HomeTicketSystem() {
  return (
    <div className="flex items-center my-8 w-5/6 mx-auto">
      <div className="w-1/2">
        <Image
          alt="ticket-system"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/ticket-system.gif"
        />
      </div>
      <div className="w-1/2 flex flex-col items-end px-8 text-end">
        <h1 className="text-3xl font-bold">نظام تصنيفات و تذاكر ذكي</h1>
        <p className="text-lg text-gray-500 mt-4">
          يمكن لأعضاء الفريق تصنيف المحادثات حسب حالاتها لمتابعتها وفلترتها
          لاحقاً, لكن الأجمل من ذلك ان الموظفين قادرين على اضافة بطاقة دعم خاصة
          ضمن المحادثة او بروفايل العميل للإنتباه لها من طرف القسم المختص او
          الزميل الذي سوف يقوم بمهمة متابعة المحادثة حتى اغلاقها
        </p>
        <Link
          href="https://karzoun.com/"
          dir="rtl"
          className="text-primary text-lg mt-4 font-semibold"
        >
          اقراء اكثر ...
        </Link>
      </div>
    </div>
  )
}

export default HomeTicketSystem
