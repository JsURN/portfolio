export default function ToolsPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-b from-[#000000] to-[#100103] font-semibold text-white">
      <div className=" mx-auto flex flex-col items-center px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Tools
        </h1>
        <hr></hr>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-4 md:gap-5">
          <div className="rounded-2xl border-2 border-red-800 bg-rose-700 bg-opacity-20 px-10 py-12">
            <h2 className="mb-2 text-2xl">Experience</h2>
            <p>Descrição da sua experiência.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
