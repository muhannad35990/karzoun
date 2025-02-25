import Image from "next/image"

function HomeOtherFeaturesEmpAutomation() {
  return (
    <div className="flex items-center my-8 w-full mx-auto">
      <div className="w-1/2 flex flex-col px-8 text-right">
        <h1 className="text-3xl font-bold text-right" dir="rtl">
          اتمتة الإجرائات والمهام
        </h1>
        <h3 className="text-lg text-primary">
          اجل الأمور اكثر متعة واحترافية عن طريقة اتمتة بعض الأمور في ادارة
          المحادثات
        </h3>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          اعمل بشكل أكثر ذكاءً مع الأتمتة وفر الوقت عن طريق أتمتة المهام
          المتكررة الخاصة بك لتبسيط سير العمل الخاص بك.
        </p>

        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          يعد تنظيم محادثاتك ، وتعيين الفرق والموظفين، وتعيين التصنيفات مهامًا
          مهمة لتجنب الفوضى.
        </p>

        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          لكن الاضطرار إلى القيام بذلك في كل محادثة تتلقاها أمر مؤلم. عندما
          يزداد حجم محادثاتك ، يصبح الأمر أكثر صعوبة في إدارتها.
        </p>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          لذلك ، من الأفضل ترك بعض الأعمال الشاقة للروبوتات.
        </p>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          باستخدام اداة الأتمتة في كرزون شات ، يمكنك تحديد قواعد بسيطة في حسابك
          وترتيب سير العمل الخاص بك دون إنفاق دقيقة عليها.
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          alt="adding-automation-rules-in-chatwoot"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/adding-automation-rules-in-chatwoot.png"
        />
      </div>
    </div>
  )
}

export default HomeOtherFeaturesEmpAutomation
