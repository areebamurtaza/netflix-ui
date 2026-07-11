interface PlanCardProps {
  name: string;
  price: string;
  resolution: string;
  devices: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function PlanCard({ name, price, resolution, devices, selected, onClick }: PlanCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left rounded-2xl border p-6 transition duration-200 ${selected ? "border-[#E50914] bg-[#fff5f5] ring-2 ring-[#E50914]" : "border-zinc-200 bg-white hover:border-zinc-300"}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E50914]">{name}</p>
      <div className="mt-4 space-y-2">
        <h2 className="text-3xl font-black">{price}</h2>
        <p className="text-sm text-zinc-600">{resolution}</p>
        <p className="text-sm text-zinc-600">{devices}</p>
        <div className="flex gap-2 pt-2 text-lg text-zinc-500" aria-hidden="true">
          <span title="Phone">📱</span>
          <span title="Tablet">📲</span>
          <span title="Computer">💻</span>
          <span title="TV">📺</span>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-zinc-600">
        <li>Unlimited movies and TV shows</li>
        <li>Watch on your favorite devices</li>
        <li>Cancel anytime</li>
      </ul>
    </button>
  );
}