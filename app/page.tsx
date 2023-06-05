import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div className="flex h-screen">
        <div className="text-slate-300 text-center align-middle m-auto">
          <h1 className="mx-auto  content-center font-mono text-4xl hover:font-sans ">
            Welcome to a React Demo Project with NEXT.js.!!
          </h1>
          <br />
          <p className="hover:underline hover:underline-offset-6 text-2xl text-orange-500 hover:decoration-dashed hover:decoration-amber-500">
            Search into Wikipedia via an API service.
          </p>
        </div>
      </div>
    </main>
  );
}
