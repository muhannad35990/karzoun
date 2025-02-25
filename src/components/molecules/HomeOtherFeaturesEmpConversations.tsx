import Image from "next/image"

function HomeOtherFeaturesEmpConversations() {
  return (
    <div className="flex items-center my-8 w-full mx-auto">
      <div className="w-1/2 flex justify-end">
        <Image
          alt="labelling-conversations-from-sidebar"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/labelling-conversations-from-sidebar.png"
        />
      </div>
      <div className="w-1/2 flex flex-col px-8 text-right">
        <h1 className="text-3xl font-bold text-right" dir="rtl">
          تصنيفات المحادثات
        </h1>
        <h3 className="text-lg text-primary">
          تصنيف المحادثات حسب وسوم من اجل سهولة الفلترة لاحقاً
        </h3>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          يمكن اضافة الوسوم بسهولة من داخل المحادثة او اتمتة عملية توزيع الوسوم
          حسب شروط في القسم الخاص في اتمتة الإجرائات من لوحة التحكم
        </p>

        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          كل ما عليك فعله هو انشاء الوسوم التي تفيدك في عملك مثل ( طلب_استرجاع,
          بإنتظار_المراجعة, بإنتظار_فاتورة, إجتماع_عمل)
        </p>

        <ul className="grid grid-cols-2 mt-2">
          <li className="font-semibold text-lg">- تخصيص وتعديل سهل </li>
          <li className="font-semibold text-lg">- تمييز الوسوم بالألوان</li>
          <li className="font-semibold text-lg">- تقارير خاصة بالوسوم</li>
          <li className="font-semibold text-lg">
            - امكانية اتمتة توزيع الوسوم
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeOtherFeaturesEmpConversations
