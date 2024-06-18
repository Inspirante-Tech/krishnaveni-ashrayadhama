import { cn } from "~/lib/utils"
import Reveal from "../Animations/reveal"
import ImageWithFallback from "../ui/ImageWithFallback"

interface Props extends React.HTMLProps<HTMLDivElement> {
    index: number,
    name: string,
    image: string,
    position: string
}

function Profile({ index, name, image, position, ...props }: Props) {
    return (
        <Reveal
            delay={0.2 * index}
        >
            <div
                {...props}
                className={cn("flex flex-col gap-3 items-center p-4 justify-center basis-auto md:basis-[45%] lg:basis-auto transition duration-200 ease-in-out hover:-translate-y-2 rounded-lg", props.className ?? "")}

            >
                <ImageWithFallback
                    width={120}
                    height={120}
                    alt={name}
                    src={image}
                    className="rounded-full object-cover aspect-square"
                />
                <div className="flex flex-col gap-2 items-center">
                    <p className="body">{name}</p>
                    <span className="caption text-wrap text-center w-40">{position}</span>
                </div>
            </div>
        </Reveal>
    )
}

export default Profile