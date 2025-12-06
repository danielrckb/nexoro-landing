export default function Example() {
  return (
    <div className="bg-[#0095a8]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">

        {/* Headline */}
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Bereit, Ihr Auftragsmanagement 
          <br />
          zu revolutionieren?
        </h2>

        {/* CTA Button */}
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="#"
            className="
              rounded-lg 
              px-6 
              py-3 
              text-base 
              font-semibold 
              text-[#00abb8]
              shadow-lg 
              transition 
              duration-300 
              ease-out
              hover:scale-105
              hover:shadow-[#00abb8]
            "
            style={{ backgroundColor: '#ffffff' }}   // Modern SaaS Purple
          >
            Demo vereinbaren
          </a>
        </div>

      </div>
    </div>
  )
}
