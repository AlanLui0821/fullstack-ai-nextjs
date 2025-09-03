import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="w-full max-w-[600px] mx-auto space-y-4">
        <h1 className="text-6xl">My AI Project Journey</h1>
        <p className="text-2xl text-white/60">The project journey to learn AI and build a useful project</p>
        <div>
          <Link href="/dashboard">
          <button type="button" className="bg-blue-600 px-4 py-2  rounded-lg text-xl">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
