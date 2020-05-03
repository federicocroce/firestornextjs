import Header from '../components/Header'
import { get } from '../_config/firestor'

export default function About({ data }) {
  return (
    <div>
      <Header />
      <p>This is the about page</p>
      <p>{Object.keys(data).map(key => data[key].data)}</p>
    </div>
  )
}

export async function getStaticProps() {

  const data = await get()
  console.log(data);

  return {
    props: {
      data: !data ? "DATA False" : data,
    },
  }
}