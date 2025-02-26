import { HeaderLinkCardProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { FC, ReactElement } from "react"

const HeaderLinkCard: FC<HeaderLinkCardProps> = ({
  title,
  image,
  Icon,
  desc,
  link
}): ReactElement => {
  return (
    <div className=" hover:shadow-lg p-4 rounded cursor-pointer" dir="rtl">
      <Link href={link} className="flex items-start">
        <>
          {image && (
            <Image
              alt={title}
              src={image}
              width={30}
              height={30}
              className="contain me-2 mt-2"
            />
          )}
          {Icon && <Icon size={60} className="text-primary me-2 -mt-2 w-8" />}
          <div className="flex-1">
            <h2 className="font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        </>
      </Link>
      <Link href={link} className="text-primary underline ms-10">
        المزيد
      </Link>
    </div>
  )
}

export default HeaderLinkCard
