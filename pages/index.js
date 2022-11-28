import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  'bulma/css/bulma.css'


 const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> BLOCKCHAIN WAR</title>
        <meta name="description" content="Blockchain War ICO Web application" />
         <link rel="shortcut icon" href="/bcw.jpg" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap" rel="stylesheet" />

      </Head>
        <nav className={` navbar`} >
          <div className='navbar-start'>
                      <Image src='/bcw.jpg'  width={200} height={200} alt='img' className={styles.logo}  />
          </div>
        </nav>
      <main className={styles.main}>
        <section  id="heading" className={` ${styles.hd}`}>
          <div className={styles.meta}>
              <p className={styles.mp}><b className={styles.h11}>BLOCKCHAIN-WAR ($BCW) </b > <br/> The first token ever built on the Binance Ecosystem with a fair launch,  where all investors have equal ground. <br/></p>
              <p className={styles.mp}> We combined the Metaverse, NFTs, SocialFi and Gamefi in one place. <br/> We are bringing virtualization into reality.</p>
          </div>
          </section>   

          <section id='explanation' className={`container mt-4 mb-4`}>
                    <div className={` ${styles.h}  pt-4 pb-4 has-text-centered`}>
                        <b className={styles.h1} > Market Cap  <p className={styles.pt}> $5000  </p> </b>
                        <b className={styles.h1}> Total Supply <p className={styles.pt}> 500M</p></b>
                        <b  className={styles.h1}>  <button className='button is-primary is-large is-responsive'> BUY BCW </button>  </b>
                    </div>
           </section>

        <section id="whitePaper" className={`container mt-4 mb-4 has-text-centered ` }>
          <h1 className={` ${styles.h1} mt-4 mb-4` }> White Paper </h1>
          <div className={styles.white} >
                  <table className={styles.table} >
                    <tbody className={styles.tbody} >

                      <tr className={`${styles.blued} ${styles.tr}  has-text-left `}>
                        <th> Project Name </th>
                        <td><p>  BLOCKCHAIN WAR TOKEN </p></td>
                      </tr>
                      <tr className={` ${styles.tr}`}>
                        <th> Softcap</th>
                        <td><p> USD 5 thousand </p></td>
                      </tr>
                      <tr className={`${styles.blued} ${styles.tr}`}>
                        <th> Hardcap</th>
                        <td><p> USD 50 Million </p></td>
                      </tr>
                      <tr className={`${styles.tr}`}>
                        <th> Pre-ICO</th>
                        <td><p> Null</p></td>
                      </tr>
                      <tr className={`${styles.blued} ${styles.tr}`}>
                        <th> ICO Runtime </th>
                        <td><p> November, 2022 </p></td>
                      </tr>
                      <tr className={` ${styles.tr}`}>
                        <th> Token Name </th>
                        <td><p> BLOCKCHAIN WAR </p></td>
                      </tr>
                      <tr className={`${styles.blued} ${styles.tr}`}>
                        <th> Price per BCW  </th>
                        <td><p> USD 0 </p></td>
                      </tr>
                      <tr className={` ${styles.tr}`}>
                        <th> Total no. of tokens </th>
                        <td><p> 500, 000, 000</p></td>
                      </tr>
                      <tr className={`${styles.blued} ${styles.tr}`}>
                        <th> Total tokens for sale  </th>
                        <td><p> 60%</p></td>
                      </tr>



                    </tbody>
                  </table>
          </div>
          </section> 

        <section id="community" className={  `${styles.community} container mt-4 mb-4 has-text-centered` }>
           <div className=''>
                   <Link href='https://t.me/blockchain_war'>  
                   <button className='button is-large is-link is-responsive'> JOIN OUR TELEGRAM COMMUNITY</button>
                   </Link>
           </div>
          </section> 

        <section id="roadmap" className={`${styles.road} container mt-4 mb-4 has-text-centered is-responsive`}>
          <h1 className={styles.h1}> Road map </h1>
                        <div className={styles.cards}>
                   <div className={styles.card}>
                   <div className='card-content pt-4'>
                            <b> Phase 1 (2022-2023)</b> 
                             <p > 
                                  Creating and laying the foundation of our communities. 
                                    Fair launch on pancakeswap 100 holders First marketing campaings, buybacks,  burn and timelock.
                              </p>
                    </div>
                    </div>
                    
                <div className={styles.card}>
                <div className='card-content pt-4'>
                           <b> Phase 2 (2023-2024) </b> 
                             <p> 
                                  Apply for Coinmarketcap, Coingecko and dextools. 
                                  Engaging crypto influencers
                                  300 holders
                                  Developing the first utility
                              </p>
                  </div>
                  </div>      

          </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                 <div className='card-content pt-4'>
                                 <b> PHASE 3 (2024-2030) </b> 
                              <p > 
                                  Expanding our marketing campaigns
                                  Introduce our first utility to the community
                                  Bridging all our utilities together 
                                  50000 holders
                              </p>
                </div>
                </div>
           
             <div className={styles.card}>
               <div className='card-content pt-4'>
                          <b> PHASE 4 (2030- ♾️) </b>     
                               <p> 
                                    Fully integrating the metaverse into reality.
                               </p>
            </div>
            </div>
            </div>
          </section> 
          
        <section id="tokenmics" className={`${styles.token} container mt-4 mb-4 has-text-centered `}>
          <h1 className={styles.h1}> Tokenomics </h1>
           <div className={styles.tkn}>

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
            <span className='pr-4 pl-4 pt-2'>
            <Image src="/1.png" width={49} height={10} alt="lucidity"/><br/>
            </span>
          </a>
        </div>
        <div className={styles.socials}>
            <p><Link href=''> Discord Server </Link> </p>
            <p><Link href=''> Facebook</Link></p>
            <p><Link href=''> Telegram </Link></p>
            <p><Link href=''> Twitter  </Link></p>

        </div>
      </footer>
    </div>
  )
}
export default Home
