export default function Footer(){
  return (
    <footer className="bg-base-100 border-t mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="font-bold">HeroHub</div>
          <div className="text-sm text-gray-500">Made with ❤️ — React, Tailwind, DaisyUI</div>
        </div>
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} HeroHub</div>
      </div>
    </footer>
  )
}
