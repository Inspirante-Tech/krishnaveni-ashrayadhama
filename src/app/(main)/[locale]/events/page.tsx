import Events from '~/components/Events/Events'
import { fetchEvents } from '~/lib/queries'


export default async function page() {
  const events = await fetchEvents();
  return (
    <main className='mt-20 min-h-screen mb-8 pt-12'>
        <Events events={events}/>
    </main>
  )
}