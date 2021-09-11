import Link from "next/link";
import {useEffect} from 'react'
import { useRouter } from "next/dist/client/router";

const NotFound = () => {

    const route=useRouter();
   useEffect(()=>{

        setTimeout(()=>{
            route.push('/')
        },3000)
   },[])
    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>The Page Connot be Found</h2>
            <p>Please Go Back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
     );
}
 
export default NotFound;