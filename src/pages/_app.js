import '@/styles/globals.css'
import NavBar from '../../components/NavBar'

export default function App({ Component, pageProps }) {
  return <div className='flex items-center justify-center mb-[1px] bg-fixed bg-center bg-cover custom-img'>
  <NavBar/>
  <Component {...pageProps} />
  </div>
}
