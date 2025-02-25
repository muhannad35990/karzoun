import Image from "next/image"
import Link from "next/link"

function HomeMobileApps() {
  return (
    <div className="flex items-center my-8 w-5/6 mx-auto">
      <div className="w-1/2 flex justify-end">
        <Image
          alt="ai-robot"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/phone2.png"
        />
      </div>
      <div className="w-1/2 flex flex-col items-end px-8 text-end">
        <h1 className="text-4xl font-bold text-right" dir="rtl">
          تطبيق على هواتف الأندرويد & ابل
        </h1>
        <h3 className="text-2xl text-gray-700 mt-4 font-semibold" dir="rtl">
          تفاعل مع عملائك اينما كنت
        </h3>
        <p className="text-lg text-gray-500 mt-4 text-right" dir="rtl">
          لا تقلق يمكنك متابعة ادارة رسائل عملائك اينما كنت. لا يهم لاننا نقدم
          لك ايضا تطبيق خاص على هواتف الاندرويد و ابل لكي تخدم عملائك بسلاسة
          وسرعة
        </p>
        <div className="flex items-center gap-4 mt-4">
          {" "}
          <Link
            href="https://play.google.com/store/apps/details?id=com.karzoun.karzounchat&hl=ar&gl=US/"
            dir="rtl"
            className="text-primary text-lg font-semibold mt-4"
            target="_blank"
          >
            <Image
              alt="play  store"
              src="/images/download_playstore.png"
              width={300}
              height={100}
              className="contain w-[300px] h-[75px]"
            />
          </Link>
          <Link
            href="https://apps.apple.com/tr/app/karzoun-chat/id1635427364"
            dir="rtl"
            className="text-primary text-lg font-semibold mt-4"
            target="_blank"
          >
            <Image
              alt="app store"
              src="/images/download_appstore.png"
              width={300}
              height={100}
              className="contain w-[300px] h-[75px]"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeMobileApps
