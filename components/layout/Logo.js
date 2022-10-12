import Link from "next/link"
import Image from "next/image"

const Logo = ({ color }) => {
  return (
    <Link href='/'>
      <a>
        <Image
          src={`/images/Logo_${color}.svg`}
          alt='Me me and me'
          width={250}
          height={80}
          quality={100}
        />
      </a>
    </Link>
  )
}
export default Logo
