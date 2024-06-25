import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 bg-neutral-900 overflow-y-auto">
      <div className="bg-zinc-800 w-72 h-96 rounded-lg shadow-lg flex flex-col items-center justify-center sm:shadow-lg">
        <div className="flex flex-col items-center">
          <Image
            src="/images/avatar-jessica.jpeg"
            alt="a girl pic"
            width={60}
            height={50}
            className="rounded-full -mt-2"
          />
          <h3 className="text-white mt-4 text-center">Jessica Randall</h3>
          <p className="text-lime-500 text-xs text-center mt-1">London, United Kingdom</p>
          <p className="text-white text-xs mt-2 text-center font-light">Front-end developer and avid reader</p>

          <div className="flex flex-col items-center mt-4 w-full">
            <button className="w-full md:w-56 px-8 py-1 text-white bg-zinc-500 mb-3 rounded-md focus:outline-none">
              Github
            </button>
            <button className="w-full md:w-56 px-8 py-1 text-white bg-zinc-500 mb-3 rounded-md focus:outline-none">
              Frontend Mentor
            </button>
            <button className="w-full md:w-56 px-8 py-1 text-white bg-zinc-500 mb-3 rounded-md focus:outline-none">
              LinkedIn
            </button>
            <button className="w-full md:w-56 px-8 py-1 text-white bg-zinc-500 mb-3 rounded-md focus:outline-none">
              Twitter
            </button>
            <button className="w-full md:w-56 px-8 py-1 text-white bg-zinc-500 mb-3 rounded-md focus:outline-none">
              Instagram
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
