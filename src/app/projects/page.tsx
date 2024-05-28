export default function ToolsPage() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-gradient-to-b from-[#000000] to-[#100103] font-semibold text-white">
      <div className=" mx-auto flex flex-col items-center px-4 py-16">
        <h1 className="py-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <div className="b rounded-2xl border-2 border-red-950 bg-rose-700 bg-opacity-20 px-10 py-12">
          <h2 className="mb-2 text-2xl">Projects</h2>
          <p>These are the projects that i have done.</p>
        </div>
      </div>
    </main>
  );
}
