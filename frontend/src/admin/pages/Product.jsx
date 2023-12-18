import React from 'react'

const Product=() =>{
    const arr = [1,2,3,4,5,6,7,10,8,9,]
    return (
      <>
      <div className="bg-gray-100 grid grid-cols-3 gap-4 min-h-screen">
        {
          arr.map((item, i) => {
            return(
              <div key={i} className="bg-white rounded shadow-md overflow-hidden w-80">
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">User Profile</h2>
                <p className="text-gray-600">Name: user name</p>
                <p className="text-gray-600">contact: mobile number</p>
                <p className="text-gray-600">Email: namedoe@example.com</p>
                <p className="text-gray-600">Department: Department name</p>
              </div>
              <div className="flex justify-around p-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded">Accept</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded">Reject</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Complete</button>
              </div>
            </div>
            )
          })
        }

    </div>
      </>
    )
  }
  
  export default Product;