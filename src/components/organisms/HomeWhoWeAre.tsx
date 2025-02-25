import Image from "next/image"
import WhoWeAreCard from "../molecules/WhoWeAreCard"
import { Check } from "lucide-react"

function HomeWhoWeAre() {
  return (
    <div className="flex flex-col items-center mb-8 w-5/6 mx-auto mt-16">
      <div className="flex items-center justify-between w-full">
        <Image
          alt="monochrome"
          width={100}
          height={100}
          src="/images/soc-monochrome-1.webp"
        />
        <div dir="rtl">
          <h1 className="text-4xl font-extrabold">من نحن؟</h1>
          <h2 className="text-lg font-bold">
            نحن لسنا فقط شركة تقدم خدمات ومنتجات تقنية, نحن مجتمع متكامل لرواد
            العمل والتطوير في الوطن العربي
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-4">
        <WhoWeAreCard
          title="جدراء بالثقة"
          content="موثوقون لدى الآلاف من التجار في الوطن العربي, ابحث عن تقييماتنا او اسئل عنا.. سوف نكون سعداء لو قمت بالبحث عن كرزون في الإنترنت"
          // Icon={Check}
        />
        <WhoWeAreCard
          title="فريق مبدع"
          content="جميع منتجات وخدمات شركتنا بدأت بفكرة رائعة حولناها لمشروع حقيقي, نحن نفكر في المستقبل 7 ساعات في اليوم ونعمل ساعة واحدة فقط"
          // Icon={Check}
        />
        <WhoWeAreCard
          title="متواضعون وبسطاء"
          content="نحن ايضاً تجار مثلك تماماً, انت تقوم ببيع منتجاتك ونحن نساعدك على ذلك… الأمر بسيط وواضح ” نحن نفهم تماماً احتياجاتك ونوفرها لك”"
          // Icon={Check}
        />
      </div>
    </div>
  )
}

export default HomeWhoWeAre
