'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className='flex w-full min-h-screen justify-center items-center flex-col gap-4 text-center max-w-screen-xl m-auto'>
      <h2 className="text-red-600">Something went wrong!</h2>
      
      <h2 className="text-red-600">{error.message}</h2>
      <p>Possibly caused due to bad internet connection</p>
      <button
        className="bg-green-500 rounded px-4 py-2 transition-transform scale-100 hover:scale-105 shadow-md cursor-pointer"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}