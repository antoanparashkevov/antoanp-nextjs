import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage () {
    const router = useRouter();
    
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
            <li>
            <Link href='/contact'>Contact</Link>
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
            <button onClick={() => router.push('/services/1')}>Navigate to Service 1</button>
            <button onClick={() => router.push({ pathname: '/services/[serviceId]', query: { serviceId : '1' } } ) }>Navigate to Service 1 again</button>
        </ul>
      </div>
    </>
  )
}
