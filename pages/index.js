import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (

    <>
            <head>
                  <title>This is Test | Home</title>
            </head>
            <div>
              
              
            
              <h1 className={styles.title}>The JS Show</h1>
              <p className={styles.text}>Ea laborum dolor commodo excepteur proident excepteur officia aliqua amet deserunt. Aute duis labore enim consequat laboris minim velit elit exercitation exercitation. Incididunt est amet consectetur elit laboris pariatur commodo. Id nisi sint cupidatat amet culpa magna culpa Lorem sit irure pariatur aliqua dolor. Nostrud pariatur sunt deserunt incididunt ut nostrud adipisicing anim incididunt labore laboris exercitation. Est fugiat incididunt veniam sint nostrud anim Lorem magna mollit. Id consequat excepteur sunt labore incididunt sit dolore.</p>
              <p className={styles.text}>Laboris incididunt elit Lorem veniam qui pariatur ex excepteur do id adipisicing dolor elit. Magna eu magna officia sint ex fugiat laboris mollit labore excepteur culpa qui. Eu tempor sunt irure ipsum consectetur reprehenderit. Adipisicing cupidatat consequat adipisicing ea exercitation consequat sit adipisicing esse dolore tempor voluptate. Nulla elit exercitation et id ex nostrud enim voluptate quis do in nulla. Occaecat adipisicing minim esse nostrud eu esse velit exercitation ullamco aliquip exercitation.</p>
              
              <Link href="/features/users">
                <a className={styles.btn}>Go to Test Page Here</a>
              </Link>
              
              

            </div>

    </>
  )
}
