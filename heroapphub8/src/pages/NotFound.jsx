import Error from '../assets/error-404.png'

export default function NotFound() {
  return (
    <div className="text-center justify-items-center py-16 bg-neutral-900">
      <img className='h-70 w-98 items-center ' src={Error} />
      <h1 className="text-4xl font-bold p-5">Oops!!! — page not found</h1>
      <a href='/' className="btn btn-soft btn-warning btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg p-4">Go Back! </a>
    </div>
  )
}
