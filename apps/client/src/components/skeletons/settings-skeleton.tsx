export function SettingsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Section header */}
      <div className="h-7 w-32 rounded bg-stone-200" />
      {/* Form fields */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 w-24 rounded bg-stone-200" />
          <div className="h-11 w-full rounded-lg bg-stone-100" />
        </div>
      ))}
      {/* Button */}
      <div className="h-11 w-full rounded-lg bg-stone-200" />
    </div>
  );
}
