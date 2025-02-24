import Image from "next/image"
import Link from "next/link"

function HomeAutomation() {
  return (
    <div className="bg-primary w-full py-4">
      <div className="flex items-center my-14 w-5/6 mx-auto">
        <div className="w-1/2">
          <Image
            alt="automation"
            width={600}
            height={500}
            className="contain rounded-lg"
            src="/images/automation.png"
          />
        </div>
        <div className="w-1/2 flex flex-col items-end px-8 text-end">
          <h3 className="text-lg text-gray-100 mt-4" dir="rtl">
            بناء عمليات أتمتة متقدمة
          </h3>
          <h1 className="text-3xl font-bold text-white">
            قم بأتمتة أي شيء يمكنك تخيله, لا حدود سوى مخيلتك
          </h1>
          <p className="text-lg text-gray-100 mt-4">
            الحصول على امكانيات عظيمة لم تعد حكراً على اصحاب الخبرة التقنية
            المتقدمة, مع كرزون شات يمكنك بناء خطتك وكأنك ترسم على ورق.
          </p>
          <p className="text-lg text-gray-100 mt-4">
            استخدم منشئ مسار الأتمتة عبر السحب والإفلات لإنشاء رد آلي ذكي او اي
            عملية اتمتة بسهولة ومرونة وسرعة، بدون الحاجة إلى خبرة برمجية.
          </p>
          <p className="text-lg text-gray-100 mt-4">
            يمكنك ايضاً استخدام العشرات من القوالب الجاهزة للأتمتة والرد الآلي
            لمختلف الإستخدامات, لقد قمنا بتصميم المنصة حتى تتمكن من البدء في
            تسليم المهام لموظفي خدمة العملاء لديك وإنشاء الرد الآلي والأتمتة في
            غضون دقائق معدودة فقط.
          </p>
          <Link
            href="https://karzoun.com/"
            dir="rtl"
            className="text-white underline text-lg font-semibold"
          >
            للتعرف على المزيد من استخدامات الرد الآلي تواصل مع الدعم
          </Link>
          <h3 className="text-lg text-white font-semibold mt-4">
            لايوجد لديك وقت!؟
          </h3>
          <p className="text-lg text-gray-100 ">
            لا تقلق يمكنك طلب المساعدة من فريق دعم كرزون او احد شركائنا لنقوم
            بالمهمة بدل عنك وفي وقت قياسي.
          </p>
          <Link
            href="https://karzoun.com/"
            dir="rtl"
            className="text-white underline text-lg mt-4 font-semibold"
          >
            تواصل مع الدعم للحصول على المساعدة
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeAutomation
