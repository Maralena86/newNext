export default function User ({params}){
    const {id} = params

    return (
        <h1 className="flex justify-center">This is the user number {id}</h1>
    )
}