import Link from "next/dist/client/link";

export const getStaticProps=async()=>{

    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();

    return{
        props:{ninjas:data}
    }

}



const Test = ({ninjas}) => {
    return ( 
        <div>
            <h1>All Test json Names</h1>
            {ninjas.map(ninja=>(
                <Link href={'/features/' + ninja.id } key={ninja.id}>
                        <a>
                            <h3>{ninja.name}</h3>
                        </a>
                </Link>
            ))}
            
        </div>
     );
}
 
export default Test;