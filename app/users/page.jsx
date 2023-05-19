import ListOfUsers from './ListOfUsers'
export default async function UsersPage() {
    return (
      <main className="flex min-h-screen flex-col items-center  p-24">
      <h2 >Users</h2>  
      <section className="flex flex-wrap gap-24">
        <ListOfUsers/>
      </section>
      </main>
    )
  }