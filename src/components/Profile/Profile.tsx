import { cn } from "~/lib/utils";
import Reveal from "../Animations/reveal";
import ImageWithFallback from "../ui/ImageWithFallback";

interface Props extends React.HTMLProps<HTMLDivElement> {
  index: number;
  name: string;
  image: string;
  position: string;
  layout?: "horizontal" | "vertical"; // Add layout prop
}

function Profile({
  index,
  name,
  image,
  position,
  layout = "vertical",
  ...props
}: Props) {
  return (
    <Reveal delay={0.2 * index}>
      <div
        {...props}
        className={cn(
          "flex gap-3 items-center py-6 px-4 justify-center transition duration-200 ease-in-out hover:-translate-y-2 rounded-lg",
          layout === "horizontal" ? "flex-row" : "flex-col",
          props.className ?? ""
        )}
      >
        <ImageWithFallback
          width={120}
          height={120}
          alt={name}
          src={image}
          className="rounded-full object-cover aspect-square"
        />
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="body">{name}</p>
          <span className="caption text-wrap text-center w-40 md:text-left">
            {position}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export default Profile;
