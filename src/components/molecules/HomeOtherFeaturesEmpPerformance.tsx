import Image from "next/image"

function HomeOtherFeaturesEmpPerformance() {
  return (
    <div className="flex items-center my-8 w-full mx-auto">
      <div className="w-1/2 flex flex-col px-8 text-right">
        <h1 className="text-3xl font-bold text-right" dir="rtl">
          تقييم اداء الموظفين
        </h1>
        <h3 className="text-lg text-primary">
          {" "}
          تقييم اداء الموظفين ورضا العملاء عن الخدمة
        </h3>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          بعد تفعيل نظام تقييم اداء الموظفين من لوحة التحكم سوف يتم ارسال طلب
          تقييم لكل محادثة يتم اغلاقها تلقائياً حيث يتاح للعميل كتابة ملاحظة او
          ترك تقييم عن الخدمة من 1 لـ 5.
        </p>

        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          يمكنك نظام التقييم من قياس جودة الخدمة المقدمة على مستوى الموظفين او
          فريق كامل او حتى على مستوى قناة الإتصال “المنصة التي تواصل من خلالها
          العميل”.
        </p>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          التقرير يظهر النتائج حسب اي تاريخ يتم تحديده ويمكن بسهولة زيارة
          المحادثات من صفحة التقرير بعد النظر في درجة التقييم لمشاهدة تفاصيل
          المحادثة.
        </p>
        <ul className="grid grid-cols-2">
          <li className="font-semibold text-lg">
            - يتم جمع التقييمات تلقائياً
          </li>
          <li className="font-semibold text-lg">
            - تقارير متقدمة لعرض النتائج
          </li>
          <li className="font-semibold text-lg">- امكانية فلترة حسب متغيرات</li>
          <li className="font-semibold text-lg">- إمكانية تحميل التقارير</li>
        </ul>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          alt="csat"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/csat.webp"
        />
      </div>
    </div>
  )
}

export default HomeOtherFeaturesEmpPerformance
