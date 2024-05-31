import React from 'react'
import Events from '~/components/Events/Events'
import Gallery from '~/components/Gallery/Gallery'

function page() {
  return (
    <main className="w-full px-16 md:px-40">
        <Events/>
        <Gallery/>
    </main>
  )
}

export default page