import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai"
import { GiArmoredBoomerang } from "react-icons/gi"

function Orders() {
    const arr = [1,2,3,4]
  return (
    <section className="tableClass" >
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>PaymentMethod</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map(i => (
                            <tr key={i} >
                        <td>sda3ref</td>
                        <td>Processing</td>
                        <td>2</td>
                        <td>₹2020</td>
                        <td>COD</td>
                        <td>Pranjil</td>
                        <td><Link to={`/order/${"czs"}`}>
                                <AiOutlineEye />
                            </Link>
                            <button>
                                <GiArmoredBoomerang />
                            </button>
                            </td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default Orders