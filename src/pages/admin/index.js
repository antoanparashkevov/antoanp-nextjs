//this Client Component uses Static Site Generation (SSG), which means HTML is generated at build time.

export default function AdminPage({data}) {
    return (
        <h1>{data}</h1>
    )
}

//getStaticProps runs on build time
export async function getStaticProps() {
    const res = await fetch('https://itcommunity.cyclic.app/applicationData/applications/643004fdebea55b514b6638d')
    const data = await res.json();
    console.log('data >>> ', data)

    return {
        props: {
            data: data.message
        }
    }
}