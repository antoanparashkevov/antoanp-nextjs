import Link from "next/link";

export default function HomePage () {
    
  return (
    <>
      <div>
        <ul role='list'>
          <li>
            <Link href='/about'>
                About
            </Link>
          </li>
            <li>
            <Link href='/skills'>
                Skills
            </Link>
           </li>
            <li>
            <Link href='/portfolio'>
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

