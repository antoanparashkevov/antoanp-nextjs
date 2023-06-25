import Link from "next/link";

import fs from 'fs/promises';
import path from 'path';

export default function HomePage ({products}) {
    
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
          {products.map(p => (<li key={p.id}>{p.title}</li>))}
      </div>
    </>
  )
}

export async function getStaticProps() {
    const pathName = path.join(process.cwd(), 'src', 'data','dummy-backend.json');
    const response = await fs.readFile(pathName);
    
    const data = JSON.parse(response)
    console.log('data >>> ', data)
    
    return {
        props: {
            products: data.products
        }
    }
}
