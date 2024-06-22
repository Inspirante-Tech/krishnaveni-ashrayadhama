import { getLocale } from 'next-intl/server';
import Career from '~/components/Career/Career'
import { fetchCareerPage } from "~/lib/queries";

export default async function page() {
  const locale = await getLocale();
  const data = await fetchCareerPage(locale);
  return (
    <main className='mt-5 min-h-screen mb-8 '>
        <Career data={data}/>
    </main>
  )
}
