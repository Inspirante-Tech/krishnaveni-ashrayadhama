import Carousel from "./Carousel";

function Hero() {
    return (
        <Carousel>
            <img className="min-w-[100vw]
            h-full object-cover snap-center"
                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <img className="min-w-[100vw] h-full object-cover snap-center"
                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
            <img className="min-w-[100vw] h-full object-cover snap-center"
                src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <img className="min-w-[100vw] h-full object-cover snap-center"
                src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />
            <img className="min-w-[100vw] h-full snap-center"
                src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            />

        </Carousel>
    )
}

export default Hero