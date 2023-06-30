import Link from "next/link";

export default function HomePage () {
    
  return (
    <>
      <div>
        <ul>
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
            <Link href='/portfolo'>
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

