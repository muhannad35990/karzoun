import Image from "next/image"

function HomeOtherFeaturesEmpBehave() {
  return (
    <div className="flex items-center my-8 w-full mx-auto">
      <div className="w-1/2 flex justify-end">
        <Image
          alt="campaigns"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/campaigns.webp"
        />
      </div>
      <div className="w-1/2 flex flex-col px-8 text-right">
        <h1 className="text-3xl font-bold text-right" dir="rtl">
          استهداف حسب السلوك
        </h1>
        <h3 className="text-lg text-primary">
          محاولة جذب محادثات اكثر من العملاء عبر الموقع حسب سلوكيات العميل
        </h3>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          أنشئ حملات للمحادثة المباشرة لجذب انتباه العميل عن طريق رسالة منبثقة
          من ايقونة المحادثة في زاوية الصفحة بشكل مستمر أو لمرة واحدة.
        </p>

        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          أرسل رسائل مستهدفة إلى عملائك بناءً على عجج زياراتهم او الصفحات التي
          يترددون عليها وكيف يقضون الوقت في موقعك.
        </p>

        <ul className="grid grid-cols-2 mt-2">
          <li className="font-semibold text-lg">
            - رسائل جذب الإنتباه تلقائية
          </li>
          <li className="font-semibold text-lg">- اطلاق رسالة تنبيه عامة</li>
          <li className="font-semibold text-lg">- تحديد شروط استهداف ذكية</li>
        </ul>
      </div>
    </div>
  )
}

export default HomeOtherFeaturesEmpBehave
