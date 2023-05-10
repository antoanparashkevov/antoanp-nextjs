import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
            <li>
            <Link 
              href={{
                pathname: '/services'  
            }}
            >
              Services</Link>
          </li>
          <li>
            <Link 
              href={{
                pathname: '/services/[serviceId]',
                query: {
                  serviceId: '1'
                }
            }}
            >
              Service 1</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
