import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="back mx-auto flex h-screen items-center justify-center bg-gradient-to-b from-[#000000] to-[#100103] font-semibold text-white">
      <div className="container mx-auto flex flex-col items-center px-4 py-8 md:flex-row">
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
            I am currently a begginer backend developer and this portfolio will
            be one of my first projects
          </p>
          <div className="absolute rounded-full border-2 border-rose-950 shadow-2xl shadow-rose-950">
            <Link href="https://github.com/JsURN" target="_blank">
              <Image
                src="/github-logo-36.png"
                alt="Github logo"
                width={42}
                height={42}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* 
    return (
    <main className="flex min-h-screen flex-col  bg-gradient-to-b from-[#ffffff] to-[#f7d0ae] text-black">
      <div className="container flex h-screen flex-col items-center justify-center px-4 py-16 text-left ">
        <h1 className="mb-4 p-5 font-sans text-4xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Hi 👋,&nbsp; I&apos;m John
        </h1>
        <p className="flex w-3/4 max-w-2xl items-center justify-center text-xl tracking-tight text-gray-600">
          I am currently a begginer backend developer and this portfolio will be
          one of my first projects
        </p>
        <img
          className="float-right max-w-xs"
          src="boy.png"
          alt="Boy near table"
        />
      </div>
    </main>
  );
}

  Essa parte descreve e está anexando um link em h3
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <h3 className="text-2xl font-bold">First Steps</h3>
          <div className="text-lg">
            Just the basics - Everything you need to know to set up your
            database and authentication.
          </div>

          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
  */
}
