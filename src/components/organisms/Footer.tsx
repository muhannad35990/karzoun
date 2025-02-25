import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

function Footer() {
  const footerLinks = [
    {
      title: "الخدمات",
      items: [
        { title: "كرزون إشعارات المتاجر", link: "/" },
        { title: "كرزون شات", link: "/" },
        { title: "كرزون نينجا", link: "/" },
        { title: "كرزون ماركيتينغ", link: "/" }
      ]
    },
    {
      title: "روابط هامة",
      items: [
        { title: "ادارة الفواتير", link: "/" },
        { title: "برنامج الشركاء", link: "/" },
        { title: "شروط الاستخدام", link: "/" },
        { title: "سياسة الخصوصية", link: "/" },
        { title: "اعمل معنا", link: "/" }
      ]
    },
    {
      title: "المساعدة والدعم",
      items: [
        { title: "من نحن", link: "/" },
        { title: "آخر الاخبار", link: "/" },
        { title: "تواصل معنا", link: "/" },
        { title: "وثائق الـ API", link: "/" },
        { title: "مركز المساعدة (قاعدة المعرفة)", link: "/" }
      ]
    }
  ]
  return (
    <div className="bg-[#4483ED] py-16 mt-24 text-white" dir="rtl">
      <div className="flex flex-col items-center mb-8 w-5/6 mx-auto mt-16">
        <div className="bg-primary flex items-center w-full px-2 py-8 -mt-48  shadow-lg rounded-t-2xl">
          <div className="w-5/6 mx-auto flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl text-white font-bold text-right mb-2">
                هل لديك ما تقوله لنا ؟
              </h1>
              <p
                className="text-lg text-gray-100 font-semibold text-right"
                dir="rtl"
              >
                ما رأيك بأن تحصل على مكالمة من مسؤول المبيعات ليقوم بالإجابة على
                اسفساراتك …؟!
              </p>
            </div>
            <Button className="bg-white text-primary text-lg px-8 py-6">
              اطلب مكالمة الان
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-16">
          <div>
            <Image
              alt=""
              src="/images/karzoun-logo1.png"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-lg mt-2 text-center">
              منصة ادارة خدمة عملاء احترافية
            </h3>
            <p className="text-gray-300 text-right">
              لوحة تحكم واحدة لجميع وسائل التواصل
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Link
                href="https://www.facebook.com/karzoun.tech/"
                target="_blank"
              >
                <Facebook size={40} />
              </Link>
              <Link href="https://twitter.com/Karzoun_Tech" target="_blank">
                <Twitter size={40} />
              </Link>
              <Link
                href="https://www.instagram.com/karzoun_marketing/"
                target="_blank"
              >
                <Instagram size={40} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCtVqhxVYaTe5HaOFpBhOpTg"
                target="_blank"
              >
                <Youtube size={40} />
              </Link>
            </div>
          </div>
          <div dir="rtl">
            <h3 className="text-xl font-bold mb-2">معلومات التواصل</h3>
            <p className="text-gray-300 text-right">
              كرزون ميديا ماركتينج اند ديجيتال سيرفسز ش.ذ.م.م
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="" />
              <p>Support@karzoun.chat</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Image
                alt="whatsapp"
                src="/images/whatapp.png"
                width={25}
                height={25}
                className="contain"
              />
              <p className="text-right" dir="ltr">
                +971-50-774-6687
              </p>
            </div>
          </div>
          {footerLinks?.map((item: any, index: number) => (
            <div key={index}>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <div className="flex flex-col gap-2">
                {item.items.map((singleItem: any, index1: number) => (
                  <Link
                    href={singleItem.link}
                    key={index1}
                    className="hover:underline hover:text-gray-300"
                  >
                    {singleItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
