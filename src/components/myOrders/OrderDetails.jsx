import React from 'react'

const OrderDetails = () => {
  return (
    <section className="orderDetails" >
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"as adq qwd"}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Pranjil Kapoor"}
                </p>
                <p>
                    <b>Phone</b>
                    {895259295}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"23-04-2023"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"23-07-2023"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    #{"dacszxca"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"23-07-2023"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    ₹{4988}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    ₹{4988}
                </p>
                <p>
                    <b>Tax</b>
                    ₹{589}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹{6265}
                </p>
            </div>
            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Chesse Burger</h4>
                    <div>
                        <span>{12}</span> x <span>{489}</span>
                    </div>
                </div>
                <div>
                    <h4>Veg Chesse Burger</h4>
                    <div>
                        <span>{64}</span> x <span>{858}</span>
                    </div>
                </div>
                <div>
                    <h4>Burger with fries</h4>
                    <div>
                        <span>{84}</span> x <span>{561}</span>
                    </div>
                </div>
                <div>
                    <h4
                    style={{fontWeight:800}}
                    >Sub Total</h4>
                    <div
                    style={{fontWeight:800}}
                    >₹{6265}</div>
                </div>
            </article>
        </main>
    </section>
  )
}

export default OrderDetails