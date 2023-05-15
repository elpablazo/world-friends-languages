export default function MenuContainer({
  items,
  selected,
  children = null,
}: any) {
  return (
    <div className="relative grid lg:grid-cols-12">
      <div className="lg:col-span-3 flex-col gap-6 p-2 bg-dark/5 lg:h-screen w-screen lg:w-auto fixed bottom-0 left-0 lg:relative z-[1]">
        <motion.ul className="text-xs lg:text-xl flex lg:flex-col lg:gap-6 font-bold lg:pt-12 max-w-screen items-stretch">
          <Menu items={items} selected={selected} />
        </motion.ul>
      </div>
      <div
        className={`relative lg:col-span-9 pb-48 py-12 space-y-4 overflow-auto text-center items-center flex flex-col h-screen `}
      >
        {children}
      </div>
    </div>
  );
}
