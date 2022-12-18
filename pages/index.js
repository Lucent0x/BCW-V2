import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bulma/css/bulma.css'
import  {TbBrandMeta} from 'react-icons/tb'
import {GiMonkey} from 'react-icons/gi'
import {TbSocial } from 'react-icons/tb'
import {IoLogoGameControllerB} from 'react-icons/io'
import {HiOutlinePresentationChartLine} from 'react-icons/hi'
import {HiOutlineSpeakerphone} from 'react-icons/hi'
import {FaInfinity} from 'react-icons/fa'
import {AiFillCaretLeft} from 'react-icons/ai'

const Home = () => { 
  return (
    <div className={styles.container}>
      <Head>
        <title> BLOCKCHAIN WAR</title>
        <meta name="description" content="Blockchain War ICO Web application" />
        <link rel="shortcut icon" href="/bcw.jpg" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&family=Ubuntu:wght@500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Text:wght@900&amp;family=Monoton&amp;family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,400;1,500;1,600&amp;display=swap" rel="stylesheet"></link>
        <link href="https://fonts.cdnfonts.com/css/neoneon" rel="stylesheet" />
                
      </Head>
      <nav className={` navbar ${styles.nav}`} >
        <div className='navbar-start'>
          <Image src='/bcw.jpg' width={200} height={200} alt='img' className={styles.logo} />
        </div>
        <div className='navbar-end'>
            <ul className={styles.ul1}>
              <li><Link href='#about' >About </Link></li>
              <li><Link href='#whitePaper' >White Paper </Link></li>
              <li><Link href='#roadMap'  >Road Map </Link></li>
              <li><Link href='#tokenomics'  >Tokenomics </Link></li>
            </ul>
        </div>
      </nav>
      <main className={styles.main}>
        <section id="about" className={` ${styles.hd}`}>
          <div className={styles.meta}>
            <p className={styles.mp}><b className={styles.h11}>BLOCKCHAIN-WAR  <br />  ($BCW) </b > <br /> 
            The first token ever built on the Binance  Ecosystem with a fair launch,  where all investors have equal ground. </p>
            <p className={styles.buy}> 
              <b>  <button className='button is-large is-responsive'> Buy BCW </button>  </b>
            </p>
            </div>
        </section>
        <div className={styles.iconz}>
        <p> <span><GiMonkey /> NFTs  </span> <span className={styles.icon}> <TbBrandMeta />    Metaverse </span> <br/>
            <span> <TbSocial /> SocialFi</span> <span className={styles.icon}><IoLogoGameControllerB /> GameFi</span> </p>
          </div>

        <section id='explanation' className={` ${styles.explan}` }>
          <div className={styles.info2}>
             <h1 className={styles.h1}>We are bringing <br/> virtualization into  <br/> reality. </h1> 
          <p className={styles.explanP}>
            We combined the Metaverse, NFTs, SocialFi and GameFi in one place.
          </p> 
        </div>
        </section>

        <section id="roadMap" className={`${styles.road} container mt-4 mb-4 has-text-centered is-responsive`}>
          <h1 className={styles.h1}> ROAD MAP </h1>
          <div className={styles.cards } >
            <div className={styles.card}>
              <div className='card-content pt-4'>
                <p >
                <b> Phase 1 (2022-2023)</b> <br/>
                  Creating and laying the foundation of our communities.
                  Fair launch on pancakeswap 100 holders First marketing campaings, buybacks,  burn and timelock.
                </p>
              </div>
            </div>

            <div className={`${styles.card}`}>
              <div className={ ` ${styles.card2} card-content pt-4 `}>
                
                <p><b> Phase 2 (2023-2024) </b> <br/>
                  Apply for Coinmarketcap, Coingecko  and dextools.
                  Engaging crypto influencers
                  300 holders
                  Developing the first utility
                </p>
              </div>
            </div>
            
            <div className={styles.card}>
              <div className='card-content pt-4'>
                
                <p><b> PHASE 3 (2024-2030) </b> <br/>
                  Expanding our marketing campaigns
                  Introduce our first utility to the community
                  Bridging all our utilities together
                  50000 holders
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={ ` ${styles.card4} card-content pt-4 `}>
                
                <p><b> PHASE 4 ( 2030 - <FaInfinity  className='pt-1' /> ) </b> <br/>
                  Fully integrating the metaverse into reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tokenomics" className={`${styles.token} container mt-4 mb-4 has-text-left pl-5 `}>
          <h1 className={styles.h1}> Tokenomics </h1>
          <div className={styles.tkn}>
              <div >
                 <p className={styles.p1}>
                <span><HiOutlinePresentationChartLine className={styles.round1} /> </span>
                Project development  
                <span className={styles.arr1} > <AiFillCaretLeft /> 60%</span> 
                </p>
                </div>
              <div >
                <p className={styles.p2}>
                 <span><HiOutlineSpeakerphone className={styles.round2} /></span>
                  Marketing   
                  <span className={styles.arr2} > <AiFillCaretLeft />30%</span>
                  </p>
                   </div>
              <div>
                 <p className={styles.p3}>
                <span> <TbSocial   className={styles.round3}/></span>
                 Dev Team 
                  <span className={styles.arr3}  > <AiFillCaretLeft /> 10%</span>
                  </p>
                  </div>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <div className={styles.sponsors}>
          <a
            href="https://github.com/LucidityShedrack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={`${styles.logo}`}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={42} height={16} />
            </span>
          </a>
        </div>
        <div className={styles.socials}>
          <div className={styles.dev}>
           From  <n className='n'> LUCIDIT</n><m className='m'>Y</m> | &copy; 2022 
          </div>
          <div className={styles.links}>
              <p><Link href=''> Discord  </Link> </p>
              <p><Link href=''> Medium </Link></p>
              <p><Link href=''> Telegram </Link></p>
              <p><Link href=''> Twitter  </Link></p>
              <p><Link href='#about'> Back to the top </Link></p>
        </div>
        </div>
      </footer>
    </div>
  )
}
export default Home
