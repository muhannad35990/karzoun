import Image from "next/image"

function HomeDashboardSection() {
  return (
    <div className="flex items-center mt-8 w-5/6 mx-auto">
      <div className="w-2/3 grid place-items-center">
        <Image
          alt="dashboard"
          src="/images/dashboard-demo.png"
          width={500}
          height={500}
          className="contain [transform:perspective(800px)_rotateY(10deg)] w-full max-w-full"
        />
      </div>
      <div className="w-1/3 flex flex-col items-end">
        <h2 className="text-5xl font-bold">لوحة تحكم شاملة</h2>
        <ul dir="rtl">
          <li className="text-2xl">سهولة</li>
          <li className="text-2xl">مرونة</li>
          <li className="text-2xl">ديناميكية</li>
        </ul>
      </div>
    </div>
  )
}

export default HomeDashboardSection
