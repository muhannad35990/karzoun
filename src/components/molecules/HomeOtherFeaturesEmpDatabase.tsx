import Image from "next/image"

function HomeOtherFeaturesEmpDatabase() {
  return (
    <div className="flex items-center my-8 w-full mx-auto">
      <div className="w-1/2 flex justify-end">
        <Image
          alt="Design-thinking-pana"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/Design-thinking-pana.png"
        />
      </div>
      <div className="w-1/2 flex flex-col px-8 text-right">
        <h1 className="text-3xl font-bold text-right" dir="rtl">
          تضمين ملف اكسل او بنك معلومات
        </h1>
        <h3 className="text-lg text-primary">
          تضمين ملف اكسل او قاعدة معرفة في صفحات المحادثة
        </h3>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          بصفتك مسؤول عن خدمة العملاء ، ستساعدك إدارة الوقت الجيدة دائمًا على
          التعامل مع مشكلات العملاء بسلاسة. في الوقت نفسه ، تحتاج أيضًا للوصول
          لبيانات خاصة لبعض العملاء.
        </p>

        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          إذا كنت تستخدم أكثر من تطبيق وأداة حيث تكون بيانات العملاء مبعثرة ،
          فقد تضطر إلى التبديل بين صفحات التبويب أكثر مما تريد. هذا يمكن أن يؤدي
          إلى انخفاض كفاءتك ويسبب بطئ في سرعة الرد على العميل.
        </p>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          لذلك يتاح لك اضافة اي رابط لـ اكسل شيت او صفحة ويب تحتوي على بيانات
          سوف تسهل على موظفي الخدمة الوصول لها عوضاً عن التقليب بين تبويبات
          المتصفح.
        </p>
      </div>
    </div>
  )
}

export default HomeOtherFeaturesEmpDatabase
