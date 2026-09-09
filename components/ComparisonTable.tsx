export function ComparisonTable({
  columns,
  rows,
}: {
  columns: [string, string];
  rows: { label: string; values: [string, string] }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[560px]">
        <thead>
          <tr className="border-b border-zinc-950/15">
            <th className="font-space-mono uppercase text-[11px] tracking-wider text-zinc-950/50 font-normal py-3 pr-4"></th>
            <th className="font-space-mono uppercase text-[11px] tracking-wider text-burnt-sienna font-normal py-3 px-4">
              {columns[0]}
            </th>
            <th className="font-space-mono uppercase text-[11px] tracking-wider text-burnt-sienna font-normal py-3 px-4">
              {columns[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 1 ? "bg-zinc-50" : ""}>
              <th
                scope="row"
                className="font-dm-sans font-medium text-sm text-zinc-950 text-left py-4 pr-4 align-top"
              >
                {row.label}
              </th>
              <td className="font-dm-sans text-sm text-zinc-950/80 py-4 px-4 align-top">
                {row.values[0]}
              </td>
              <td className="font-dm-sans text-sm text-zinc-950/80 py-4 px-4 align-top">
                {row.values[1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
