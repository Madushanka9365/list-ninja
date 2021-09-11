export const getStaticProps=async()=>{

    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();

    return{
        props:{ninjas:data}
    }
}

const Users = ({ninjas}) => {
    return ( 
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {ninjas.map(user=>(
                            <td key={user.id}>{user.name}</td>
                        ))}
                        
                        
                    </tr>
                    
                    
                </tbody>
                
                
            </table>
        </div>
     );
}
 
export default Users;