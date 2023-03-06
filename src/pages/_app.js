import '@/styles/globals.css'
import NavBar from '../../components/NavBar'

export default function App({ Component, pageProps }) {
  return <div className='flex items-center justify-center mb-[1px] bg-fixed bg-center bg-cover custom-img'>
    
    <div className="absolute top-0 left-0 right-0 bg-black/70 bottom-0 z-[2]"/>
  <NavBar/>
  <Component {...pageProps} />
  </div>
}
