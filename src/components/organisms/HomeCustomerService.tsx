import Image from "next/image"

function HomeCustomerService() {
  return (
    <div className="flex items-center my-8 w-5/6 mx-auto">
      <div className="w-1/2 flex flex-col items-end px-8 text-end">
        <p className="text-lg text-gray-500">
          تجربة خدمة عملاء أسهل وأكثر احترافية
        </p>
        <h1 className=" text-3xl font-bold text-end">
          تجربة خدمة عملاء أسهل وأكثر احترافية قم بخدمة جميع عملائك من{" "}
          <span className="text-primary mx-1">مكان واحد</span>
          مهما اختلف مصدر الرسالة
        </h1>
        <h2 className="text-end text-lg font-semibold" dir="rtl">
          واتساب, فيس بوك, انستقرام, تيلقرام, الإيميلات والمزيد و ...
        </h2>
        <p className="text-end text-gray-500">
          كرزون شات تجمع لك و لموظفينك جميع محادثات ورسائل العملاء في لوحة تحكم
          واحدة مع نظام متكامل لإدارة عمليات فريق خدمة العملاء وادراة الموظفين
          مدمج بلوحة تقارير سوف تفيدك حتماً في نقل نشاطك التجاري للمستوى التالي
        </p>
      </div>
      <div className="w-1/2">
        <Image
          alt="customer service"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/customer-service.png"
        />
      </div>
    </div>
  )
}

export default HomeCustomerService
