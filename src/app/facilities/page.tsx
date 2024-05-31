import React from 'react'

const facilities = [
    {
        "id":1,
        "image":"",
        "title":"lorem ipsum",
        "description":"lorem ipsum dolorem jhvCj cducsdg svh"
    },
    {
        "id":1,
        "image":"",
        "title":"lorem ipsum",
        "description":"lorem ipsum dolorem jhvCj cducsdg svh"
    },
    {
        "id":1,
        "image":"",
        "title":"lorem ipsum",
        "description":"lorem ipsum dolorem jhvCj cducsdg svh"
    },
    {
        "id":1,
        "image":"",
        "title":"lorem ipsum",
        "description":"lorem ipsum dolorem jhvCj cducsdg svh"
    }
]

function page() {
  return (
    <main className="w-full px-16 md:px-40 mt-8">
        {
            facilities.map(facility=>(
                <div>
                    
                </div>
            ))
        }
    </main>
  )
}

export default page