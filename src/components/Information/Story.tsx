import Image from 'next/image';
import Reveal from '../Animations/reveal';
import ScrollLag from '../Animations/scrollLag';
import Heading from '../Heading/Heading';
import RichText from '../RichText/RichText';
import { SectionType } from '~/lib/types';

const Story: React.FC<{ data: SectionType }> = ({ data }) => {
    return (
        <section
            id='story'
            className={`relative text-justify bg-secondary-100 md:bg-transparent`}
        >
            <div className="h-8 bg-secondary-100 absolute bottom-full w-full md:hidden"></div>
            <div className='content-container flex items-start'>
                <Reveal>
                    <div className="xl:max-w-4xl md:shadow-xl rounded-2xl">
                        <div className="relative md:bg-gradient-to-tr md:from-secondary-200 md:to-secondary-100 rounded-2xl flex md:gap-4 gap-2 flex-col xl:p-16 lg:p-24 md:p-12">
                            <Heading seperatorColor='secondary'>
                                {data.title}
                            </Heading>

                            <RichText value={data.description} />
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={0.35}>
                    <ScrollLag speed={50}>
                        <Image src={data.image} alt='Story' height={500} width={500} className='w-[26rem] object-contain -translate-x-6 top-10 relative rounded-2xl hidden xl:block z-10 shadow-xl'></Image>
                    </ScrollLag>
                </Reveal>
            </div>
        </section>
    );
};

export default Story;
