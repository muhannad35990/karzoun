import Image from "next/image"

function HomeDataManage() {
  return (
    <div className="flex items-center my-8 w-5/6 mx-auto">
      <div className="w-1/2 flex flex-col items-end px-8 text-end">
        <h3 className="text-lg text-gray-500 mt-4" dir="rtl">
          تنظيم وتصنيف وتحليل قوائم العملاء
        </h3>
        <h1 className="text-3xl font-bold " dir="rtl">
          ادارة بيانات وعلاقات العملاء!
        </h1>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          في رحلة عملك تتعرف على الكثير من العملاء الجدد كل يوم, قم بإدارة
          وتنظيم قاعدة بيانات عملائك بالشكل الذي كنت تحلم به واجمعهم في مكان
          واحد.
        </p>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          مع ادوات ادارة بيانات وعلاقات العملاء المتطورة في كرزون يمكنك رفع
          بيانات عملائك بشكل يدوي او يمكنك مزامنة بيانات العملاء من المنصات
          الأخرى إلى كرزون ثم يمكنك فرز وتصنيف العملاء بشكل يدوي او تلقائي حتى
          تقوم بإطلاق حملاتك الإعلانية لاحقاً بشكل ممنهج ومدروس
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          alt="data-manage"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/data-manage.png"
        />
      </div>
    </div>
  )
}

export default HomeDataManage
