import Image from "next/image"
import BlogImage from "@/public/illustration-article.svg"
import UserProfileImage from "@/public/image-avatar.webp"
import Link from "next/link"

export default function Home() {
  return <div className="min-h-screen bg-lightYellow flex justify-center items-center">
    <div className="w-[327px] xl:w-[384px] h-[522px] p-[24px] rounded-[20px] bg-white border border-darkGray shadow-darkGray shadow-custom flex flex-col gap-[24px]">
      <Image unoptimized src={BlogImage} alt="blog-card-image" style={{ width: 'fill', height: '200px', objectFit: 'cover' }} className="rounded-[10px]">

      </Image>

      <div className="flex flex-col gap-[12px]">
        <div className="w-[82px] h-[29px] bg-lightYellow preset-md-bold text-darkGray flex items-center justify-center rounded-[4px]">Learning</div>
        <div className="preset-md text-darkGray">Published 21 Dec 2023</div>
        <Link href={"#"} className="preset-lg-bold text-darkGray hover:text-lightYellow">HTML & CSS foundations</Link>
        <div className="preset-sm text-lightGray">These languages are the backbone of every website, defining structure, content, and presentation.</div>
      </div>

      <Link href={"#"} className="flex gap-[12px] items-center">
        <Image unoptimized src={UserProfileImage} alt="user-profile-image" width={32} height={32}></Image>
        <div className="preset-md-bold text-darkGray">Greg Hooper</div>
      </Link>
    </div>
  </div>
}
