import Image from "next/image"
import Link from "next/link"

function HomeAiRoobot() {
  return (
    <div className="flex items-center my-8 w-5/6 mx-auto">
      <div className="w-1/2 flex flex-col items-end px-8 text-end">
        <h1 className="text-3xl font-bold " dir="rtl">
          الرد الآلي المدعوم بالذكاء الإصطناعي
        </h1>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          استخدم قوة OpenAi في الذكاء الإصطناعي مع كرزون للتعرف على نوع استفسارت
          العملاء وتحويلهم للمسار الصحيح او الرد على استفساراتهم بشكل مباشر عن
          طريق تدريب الروبوت الخاص بك على معلومات شركتك.
        </p>
        <h3 className="text-lg text-gray-700 font-semibold mt-4">
          غير متأكد انه خيار مناسب !؟
        </h3>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          فعلاً قد لا يكون الذكاء الصناعي هو الحل الأمثل لكل استخدام, احصل على
          المساعدة من خلال التواصل مع احد ممثلي الخدمة او احد شركاء كرزون.
        </p>
        <Link
          href="https://karzoun.com/"
          dir="rtl"
          className="text-primary text-lg font-semibold mt-4"
        >
          طلب استشارة ...
        </Link>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          alt="ai-robot"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/ai-robot.gif"
        />
      </div>
    </div>
  )
}

export default HomeAiRoobot
