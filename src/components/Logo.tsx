export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          <circle cx="12" cy="12" r="9" strokeWidth={2} />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-extrabold text-slate-900 tracking-tight text-base leading-none">
          Breakdown
        </span>
        <span className="font-extrabold tracking-tight text-base leading-none">
          <span className="text-amber-500">Insurance</span>
          <span className="text-slate-400 font-medium text-xs">.co.nz</span>
        </span>
      </div>
    </div>
  );
}
