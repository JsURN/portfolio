import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="back mx-auto flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#100103] font-semibold text-white">
      <div className="container mx-auto flex flex-col items-center px-16 py-8 md:flex-row">
        <div className="flex h-96 w-96 items-center justify-center overflow-hidden rounded-full shadow-2xl shadow-rose-950">
          <Image
            className="shadow-2xl"
            src="/profile.jpeg"
            alt="Imagem Ilustrativa"
            width={450}
            height={450}
          />
        </div>
        <div className="m-6 w-1/2">
          <h1 className="b-12 mb-4 text-6xl text-white">
            Hi, I&apos;m <span className="text-rose-950">John</span> 👋
          </h1>
          <p className="w-3/4 max-w-2xl text-lg tracking-tight">
            I am currently a beginner backend developer and this portfolio will
            be one of my first projects.
          </p>
          <div className="flex space-x-2">
            <div className="rounded-full border-2 border-rose-950 shadow-2xl shadow-rose-950">
              <Link href="https://github.com/JsURN" target="_blank">
                <Image
                  src="/github-logo-36.png"
                  alt="Github logo"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
            <div className="rounded-full border-2 border-rose-950 shadow-2xl shadow-rose-950">
              <Link href="https://linkedin.com/in/your-profile" target="_blank">
                <Image
                  src="/linkedin-logo-36.png"
                  alt="LinkedIn logo"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto flex flex-col px-16 py-32">
        <h2 className="mb-8 text-4xl">A Little More About Me</h2>
        <div className="grid grid-cols-2 gap-8">
          <Link href="../tools">
            <div className="cursor-pointer rounded-2xl border-2 border-red-800 bg-rose-700 bg-opacity-20 px-10 py-12">
              <h2 className="mb-2 text-2xl">
                <span className="text-red-800">Tools</span>
              </h2>
              <p>These are the tools that i know.</p>
            </div>
          </Link>
          <Link href="../projects">
            <div className="rounded-2xl border-2 border-red-800 bg-rose-700 bg-opacity-20 px-10 py-12">
              <h2 className="mb-2 text-2xl">
                <span className="text-red-800">Projects</span>
              </h2>
              <p>These are the projects that i have done.</p>
            </div>
          </Link>
          <div className="rounded-2xl border-2 border-red-800 bg-rose-700 bg-opacity-20 px-10 py-12">
            <h2 className="mb-2 text-2xl">Experience</h2>
            <p>Descrição da sua experiência.</p>
          </div>
          <div className="rounded-2xl border-2 border-red-800 bg-rose-700 bg-opacity-20 px-10 py-12">
            <h2 className="mb-2 text-2xl">Experience</h2>
            <p>Descrição da sua experiência.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
