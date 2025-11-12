export default function Header() {
  return (
    <header className="w-full items-center bg-black">
      {/* make this a flex row so children can sit side-by-side */}
      <div className="p-5 flex items-center w-full">
        <div className="w-1/2">
          <p className="p-1 text-left text-white">Inteligentny Planner Wydatków</p>
        </div>

        <div className="w-1/2 flex justify-end items-center gap-3 ">
          <p className="text-xs">Team</p>
          <p className="text-xs">Technologie Cloud</p>
          <p className="text-xs">Github</p>
        </div>
      </div>
    </header>
  );
}