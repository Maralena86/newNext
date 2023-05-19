import { LikeButton} from "./[id]/LikeButton.jsx";
// import { Link } from "next/link";
const fetchUsers = () =>{
    return fetch('https://jsonplaceholder.typicode.com/users',{
        next: {
            revalidate: 60
        }
    })
    .then(res =>res.json())
}
export default async function ListOfUsers() {
    const users = await fetchUsers()
    return users.slice(0,5).map(user =>(
        <div className="w-64">
            {/* <Link href='users/[id]' as={`/users/${user.id}`}> */}
            <h2 className="text-slate-400 text-center">{user.name}</h2>
            <img src="https://static.vecteezy.com/system/resources/previews/000/566/866/original/vector-person-icon.jpg" alt="" className="w-54" />
            <p className="w-full text-center">{user.company.name}</p>
            <LikeButton id={user.id}/>
            {/* </Link> */}
        </div>
        ))
  }