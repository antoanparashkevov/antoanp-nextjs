//this Client Component uses Server-side Rendering (SSR), which means HTML is generated on each request

export default function AdminPage({data}) {
    return (
        <h1>{data}</h1>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://itcommunity.cyclic.app/applicationData/applications/643004fdebea55b514b6638d')
    const data = await res.json();
    console.log('data >>> ', data)

    return {
        props: {
            data: data.message
        }
    }
}