export function AboutSection() {
  return (
    <div className="relative h-[300px] w-full bg-gray-500 bg-[url('https://cdn.pixabay.com/photo/2021/12/16/08/19/stop-sign-6874065_1280.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50">
        <div className="container flex h-full flex-col font-[family-name:var(--font-lora)] items-center justify-center text-white">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-2 text-xl">Who we are</p>
        </div>
      </div>
    </div>
  );
}
