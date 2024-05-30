"use client"
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';


const faqs = [
    {
        "question": "something",
        "answer": "lorem ipskbcbvksd vf,sjfbv vskbvks"
    },
    {
        "question": "something",
        "answer": "lorem ipskbcbvksd vf,sjfbv vskbvks"
    },
    {
        "question": "something",
        "answer": "lorem ipskbcbvksd vf,sjfbv vskbvks"
    },
    {
        "question": "something",
        "answer": "lorem ipskbcbvksd vf,sjfbv vskbvks"
    }
]
export default function FAQs() {
    return (
        <section>
            <h3 className='text-center font-semibold text-4xl py-8'>FAQ</h3>
            <Accordion.Root
                className="w-full rounded-md max-w-[48rem] m-auto"
                type="single"
                collapsible
            >
                {faqs.map((faq, key) => (
                    <Accordion.AccordionItem value={key.toString()} className='border-b border-primary-900 w-full'>
                        <Accordion.AccordionTrigger className='w-full group flex h-[45px] flex-1 cursor-default items-center justify-between text-[15px] leading-none  outline-none'

                        ><span>{faq.question}</span>

                            <ChevronDownIcon
                                className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                                aria-hidden
                            />
                        </Accordion.AccordionTrigger>
                        <Accordion.AccordionContent className='data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'>{faq.answer}</Accordion.AccordionContent>
                    </Accordion.AccordionItem>
                ))}
            </Accordion.Root>
        </section>


    )
}
