import Image from "next/image"
import Link from "next/link"

function HomeTeamManage() {
  return (
    <div className="flex items-center my-14 w-5/6 mx-auto">
      <div className="w-1/2">
        <Image
          alt="team manage"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/team-manage.png"
        />
      </div>
      <div className="w-1/2 flex flex-col items-end px-8 text-end">
        <h1 className="text-3xl font-bold">
          ادارة الفريق والمهام اسهل مع كرزون
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          قم بتوزيع مهام الفريق لمتابعة طلبات وشكاوي العملاء بشكل احترافي, تقسيم
          الموظفين على فرق مختلفة (مبيعات,خدمة عملاء, محاسبة, شكاوي) وتوزيع
          المحادثات والمهام حسب القسم او لموظف معين.
        </p>
        <Link
          href="https://karzoun.com/"
          dir="rtl"
          className="text-primary text-lg mt-4 font-semibold"
        >
          للتعرف على المزيد من مميزات ادارة الفريق تواصل مع الدعم
        </Link>
      </div>
    </div>
  )
}

export default HomeTeamManage
