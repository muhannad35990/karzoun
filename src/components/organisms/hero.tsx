import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <div className="w-full h-[600px]  bg-opacity-70 bg-blue-100">
      <div className="relative w-4/5 grid place-items-center mx-auto h-full">
        <div className="flex flex-col items-center">
          <h3 className="text-lg mb-0">المنصة الأكثر شمولا في الوطن العربي</h3>
          <h1 className="text-primary font-extrabold text-[75px] mt-0">
            اطلق العنان لقوة
          </h1>
          <h1 className="text-[#FBBD01] text-[46px] font-bold mt-0 p-2">
            الرد الالي (شات بوت ){" "}
          </h1>
          <p className=" w-1/2 text-center my-6 text-slate-700" dir="rtl">
            بدءًا من رحلة العميل وحتى إدارة مهام الموظفين منصة متكاملة للتسويق,
            إعادة الإستهداف, المبيعات ,خدمة العملاء, الأتمتة, ادارة بيانات
            وقواعد العملاء وفرزها وتصنيفها والمزيد….
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-primary bg-white font-bold rounded-lg shadow-lg py-3 w-[15rem] grid place-items-center hover:animate-pulse"
            >
              تكلم مع المبيعات
            </Link>
            <Link
              href="/"
              className="text-white bg-primary font-bold rounded-lg shadow-lg py-3 w-[15rem]  grid place-items-center hover:animate-pulse"
            >
              اشترك الان
            </Link>
          </div>
        </div>
        <Image
          alt="meta"
          src="/images/meta.png"
          width={125}
          height={100}
          className="absolute bottom-9 left-9"
        />
      </div>
    </div>
  )
}

export default Hero
