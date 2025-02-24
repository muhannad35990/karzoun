"use client"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import ListItem from "../atoms/ListItem"
import Image from "next/image"
import { cn } from "@/lib/utils"
import TabsContainer from "../molecules/TabsContainer"

const features: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
]

const services: { title: string; href: string; description: string }[] = [
  {
    title: "منصة ادارة العملاء الاحرافي",
    href: "/",
    description: "توصيف"
  },
  {
    title: "روبوتات الرد الالي",
    href: "/",
    description: "توصيف"
  },
  {
    title: "عمليات الاتمتة والربط الخاص",
    href: "/",
    description: "توصيف"
  },
  {
    title: "فتح حسابات الواتساب الرسمية",
    href: "/",
    description: "توصيف"
  },
  {
    title: "توثيق النشاط التجاري في ميتا",
    href: "/",
    description: "توصيف"
  },
  {
    title: "موظفي خدمة العملاء كرزون نينجا",
    href: "/",
    description: "توصيف"
  }
]

const library: { title: string; href: string; description: string }[] = [
  {
    title: "البدء مع كرزون شات ",
    href: "/",
    description: "توصيف"
  },
  {
    title: "ربط واعداد قنوات التواصل",
    href: "/",
    description: "توصيف"
  },
  {
    title: "الإضافات والمميزات",
    href: "/",
    description: "توصيف"
  },
  {
    title: "معلومات إضافية",
    href: "/",
    description: "توصيف"
  },
  {
    title: "التحديثات الجديدة",
    href: "/",
    description: "توصيف"
  },
  {
    title: "ماهو حساب واتساب الاعمال الرسمي",
    href: "/",
    description: "توصيف"
  },
  {
    title: "الفرق بين حساب واتساب رسمي ورقم واتساب عادي",
    href: "/",
    description: "توصيف"
  },
  {
    title: "انشاء قالب رسالة واتساب رسمي ميتا",
    href: "/",
    description: "توصيف"
  },
  {
    title: "طريقة فتح حساب واتساب اعمال رسمي API  بالرقم الموحد",
    href: "/",
    description: "توصيف"
  }
]
const featuresTabs = [
  { title: "مميزات شات كرزون الرئيسية", content: <div>tab0</div> },
  { title: "إدارة العمليات والتنسيق", content: <div>tab1</div> }
]
export function Header() {
  return (
    <div className="w-full py-2 px-4 bg-blue-100">
      <div className="flex items-center justify-between w-4/5 mx-auto">
        <div className="w-full flex items-center justify-between">
          <button className="py-2 px-3 rounded-lg text-white font-semibold bg-primary  hover:animate-pulse grid place-items-center">
            تسجيل الدخول
          </button>
          <NavigationMenu dir="rtl">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold bg-blue-100 bg-opacity-70"
                    )}
                  >
                    الرئيسية
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem dir="rtl">
                <NavigationMenuTrigger className="font-semibold bg-blue-100 bg-opacity-70">
                  مميزات المنصة
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex items-start w-[400px]  md:w-[800px] lg:w-[900px]">
                    <TabsContainer tabs={featuresTabs} />
                  </div>
                  {/* <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {features.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul> */}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold bg-blue-100 bg-opacity-70">
                  مكتبة الشروحات
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex items-start w-[400px] gap-3 p-4 md:w-[800px] lg:w-[900px]">
                    <li className="w-56 col-span-2">
                      <NavigationMenuLink asChild>
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <Image
                            alt="karzoun logo"
                            src="/images/karzoun-logo1.png"
                            width={200}
                            height={300}
                          />
                          <div className="mb-2 mt-4 font-medium">
                            لم تحصل على أي مقالة بخصوص طلبك؟ أبشر
                          </div>
                          <Link
                            href="/"
                            className="rounded-xl px-3 py-2 text-white font-semibold bg-primary grid place-items-center"
                          >
                            تواصل مع الدعم
                          </Link>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <div className="md:col-span-10">
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {library.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                        <div>
                          <div className="mb-2 mt-4 font-semibold">
                            القائمة غير كافية؟ قم بزيارة مركز المساعدة للمزيد
                          </div>
                          <Link
                            href="/"
                            className="rounded-xl px-3 py-2 text-white font-semibold bg-primary grid place-items-center"
                          >
                            زيارة مركز المساعدة
                          </Link>
                        </div>
                      </ul>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold bg-blue-100 bg-opacity-70">
                  خدماتنا
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {services.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold bg-blue-100 bg-opacity-70"
                    )}
                  >
                    برنامج الشركاء
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Image
          alt="karzoun logo"
          src="/images/karzoun-logo1.png"
          width={50}
          height={50}
          className="ml-8"
        />
      </div>
    </div>
  )
}
