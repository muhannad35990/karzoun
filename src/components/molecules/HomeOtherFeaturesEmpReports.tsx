import Image from "next/image"

function HomeOtherFeaturesEmpReports() {
  return (
    <div className="flex items-center my-8 w-full mx-auto">
      <div className="w-1/2 flex flex-col px-8 text-right">
        <h1 className="text-3xl font-bold text-right" dir="rtl">
          لوحة تقارير شاملة
        </h1>
        <h3 className="text-lg text-primary">
          متابعة الموظفين النشطين وعدد المحادثات اليومية والرسائل الصادرة
          والواردة يومياً
        </h3>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          توفر كرزون شات لوحة تقارير تلقائية للإدارة تعرفك على ما يجري حاليًا
          داخل المنصة من تواجد واداء للموظفين او الأقسام او التصنيفات او قنوات
          التواصل،
        </p>

        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          يمكنك تقييم التصنيفات أو صناديق البريد الوارد الأكثر نشاطًا او
          الموظفين الأكثر نشاطاً، بالإضافة إلى تحليل مؤشرات الأداء الرئيسية
          المختلفة.
        </p>

        <ul className="grid grid-cols-2 mt-2">
          <li className="font-semibold text-lg">- تقارير المحادثات</li>
          <li className="font-semibold text-lg">- تقارير الموظفين</li>
          <li className="font-semibold text-lg">- تقارير الوسوم والتصنيفات</li>
          <li className="font-semibold text-lg">- تقارير الفرق والأقسام</li>
          <li className="font-semibold text-lg">- تقارير حسب قناة التواصل</li>
        </ul>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          alt="conversations-reports-in-chatwoot"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/conversations-reports-in-chatwoot.png"
        />
      </div>
    </div>
  )
}

export default HomeOtherFeaturesEmpReports
