import { PortableText } from 'next-sanity'
import "./style.css"
import { cn } from '~/lib/utils'

interface Props extends React.HTMLProps<HTMLDivElement> {
    value: [any],
}

function RichText({ value, ...props }: Props) {
    return (
        <article
            className={cn("body md:text-left space-y-4 leading-relaxed", props.className)}>
            <PortableText value={value} />
        </article>
    )
}

export default RichText