import Header from './Header'
import Footer from './Footer'
import Image from 'next/image'
import Head from 'next/head'


export default function Page({ children }){
  return (
    <div className="page">
      <Head>
        <title>うんちメーカー</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="titleAndHeader">
        <h1 className="title">
          <Image className="unchiImage" src="/unchi_character.png" alt="unchiImage" width={40} height={40} />
          うんちメーカー
          <Image className="unchiImage" src="/unchi_character.png" alt="unchiImage" width={40} height={40} />
        </h1>
        <Header />
      </div>
      {children}
      <Footer/>
    </div>
  )
}
