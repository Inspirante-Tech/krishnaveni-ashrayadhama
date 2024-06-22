import { getLocale } from 'next-intl/server';
import Events from '~/components/Events/Events'
import { fetchEvents } from '~/lib/queries'

export default async function page() {
  const locale = await getLocale();
  const events = await fetchEvents(locale);
  return (
    <main className='mt-24 min-h-screen mb-8 '>
        <Events events={events}/>
    </main>
  )
}