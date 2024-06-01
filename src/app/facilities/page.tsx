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
    <main>
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