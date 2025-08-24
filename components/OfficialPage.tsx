interface OfficialPageProps {
  title: string;
  desc: string;
  children: React.ReactNode;
}

export default function OfficialPage({
  title,
  desc,
  children,
}: OfficialPageProps) {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="relative w-full flex justify-center">
        <div className="relative max-w-content w-full">
          <div className="absolute right-[-50px] top-[-50px] w-[406px] h-[406px] bg-[#FF9800] rounded-full bg-opacity-60" />
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[url(/hero-bg-blur.svg)] fill-[#f2f7ffb3] backdrop-blur-[50px]" />
      <div className="relative">
        <div className="w-full">
          <div className="w-full flex justify-center">
            <div className="max-w-content w-full">
              <div className="relative w-2/3 flex flex-col gap-6 items-start p-28 mt-nav-bar">
                <h1 className="text-primary text-4xl font-bold leading-10">
                  {title}
                </h1>
                <p className="text-text-secondary text-lg">{desc}</p>
              </div>
            </div>
          </div>

          <div className="w-full bg-white flex justify-center">
            <div className="max-w-content w-full px-40 py-20 text-text-primary leading-6 text-justify">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
