import React from 'react'
import me from "../../assets/KP.jpg"

function Users() {
    const arr = [1,2,3,4]
  return (
    <section className="tableClass" >
        <main>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i => (
                            <tr key={i} >
                        <td>sda3ref</td>
                        <td>Pranjil</td>
                        <td>
                            <img src={me} alt="" />
                        </td>
                        <td>Admin</td>
                        <td>{"11-11-23"}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default Users