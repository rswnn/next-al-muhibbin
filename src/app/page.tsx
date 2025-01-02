import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/image-hd.jpeg"
          alt="Next.js logo"
          width={980}
          height={400}
          priority
        />
      </main>
    </div>
  );
}
