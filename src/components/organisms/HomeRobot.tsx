import Image from "next/image"
import Link from "next/link"

function HomeRobot() {
  return (
    <div className="flex items-center my-14 w-5/6 mx-auto">
      <div className="w-1/2">
        <Image
          alt="robot"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/robot1.png"
        />
      </div>
      <div className="w-1/2 flex flex-col items-end px-8 text-end">
        <h1 className="text-3xl font-bold">
          بناء روبوت للرد الآلي على العملاء في دقائق! (شات بوت)
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          سواءً كنت تحتاج رد آلي متقدم وذكي او رد آلي بسيط للإجابة على استفسارات
          العملاء المتكررة, لن تحتاج لأكثر من 15 دقيقة حتى تتقن بناء روبوتات
          لمساعدة فريقك عن طريق لوحة بناء الروبوتات بالماوس فقط وكأنك في لعبة
          فيديو.
        </p>
        <p className="text-lg text-gray-500 mt-4">
          قم بأتمتة ردود جاهزة وسهلة بإستخدام الأزرار والقوائم التفاعلية للإجابة
          على استفسارات عملائك البسيطة او المعقدة مثل الإستفسار عن حالة طلب
          معين, متابعة الشحنات, او انشاء طلب جديد والكثير الكثير من الاستخدامات
          الأخرى.
        </p>
        <Link
          href="https://karzoun.com/"
          dir="rtl"
          className="text-primary text-lg font-semibold"
        >
          للتعرف على المزيد من استخدامات الرد الآلي تواصل مع الدعم
        </Link>
        <h3 className="text-lg text-gray-700 font-semibold mt-4">
          لايوجد لديك وقت!؟
        </h3>
        <p className="text-lg text-gray-500 ">
          لا تقلق يمكنك طلب المساعدة من فريق دعم كرزون او احد شركائنا لنقوم
          بالمهمة بدل عنك وفي وقت قياسي.
        </p>
        <Link
          href="https://karzoun.com/"
          dir="rtl"
          className="text-primary text-lg mt-4 font-semibold"
        >
          تواصل مع الدعم للحصول على المساعدة
        </Link>
      </div>
    </div>
  )
}

export default HomeRobot
