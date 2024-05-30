import Image from 'next/image'

// const images = [
//     ""
// ]

//src https://codepen.io/cruip/pen/JjqbdRB
export default function Gallery() {
    return (
        <section className='my-4'>
            <h2 className="font-bold text-2xl mb-4">Gallery</h2>
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-01.jpg" width="232" height="290" alt="Image 01" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-02.jpg" width="232" height="290" alt="Image 02" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-03.jpg" width="232" height="174" alt="Image 03" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-04.jpg" width="232" height="155" alt="Image 04" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-05.jpg" width="232" height="349" alt="Image 05" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg" width="232" height="250" alt="Image 06" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-07.jpg" width="232" height="349" alt="Image 07" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-08.jpg" width="232" height="155" alt="Image 08" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-09.jpg" width="232" height="250" alt="Image 09" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-10.jpg" width="232" height="290" alt="Image 10" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-11.jpg" width="232" height="155" alt="Image 11" />
                <img className="w-full rounded-xl shadow" src="https://cruip-tutorials.vercel.app/masonry/masonry-12.jpg" width="232" height="309" alt="Image 12" />
            </div>
        </section>
    )
}
