import Image from "next/image"
import Link from "next/link"

function HomeEmpCoordinate() {
  return (
    <div className="flex items-center my-8 w-5/6 mx-auto">
      <div className="w-1/2 flex flex-col items-end px-8 text-end">
        <h1 className="text-3xl font-bold">
          التنسيق بين الموظفين باستخدام الملاحظات الخاصة بالفريق
        </h1>
        <p className="text-lg text-gray-500 mt-4">
          تواصل مع زملائك في الفريق دون مغادرة كرزون شات. ببساطة ، استخدم
          الملاحظات الخاصة للإشارة إلى زملائك والدردشة معهم حول محادثات العملاء.
        </p>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          alt="collaboration"
          width={600}
          height={500}
          className="contain rounded-lg"
          src="/images/collaboration.png"
        />
      </div>
    </div>
  )
}

export default HomeEmpCoordinate
