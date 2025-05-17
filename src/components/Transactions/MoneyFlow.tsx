import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CurrencySelectible from "../Selectible/CurrencySelectible";
import { useEffect, useState } from "react";
const MoneyFlow = () => {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  useEffect(() => {
    setOptions([
      { label: "2024", value: "2024" },
      { label: "2023", value: "2023" },
      { label: "2022", value: "2022" },
    ]);
  }, []);
  const [selectedOptions, setSelectedOptions] = useState<string>("");

  const data = [
    { day: 1, moneyIn: 100000, moneyOut: 50000 },
    { day: 8, moneyIn: 500000, moneyOut: 400000 },
    { day: 15, moneyIn: 1200000, moneyOut: 900000 },
    { day: 22, moneyIn: 3000000, moneyOut: 2800000 },
    { day: 31, moneyIn: 1500000, moneyOut: 2500000 },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold">Money out/Money in</h2>
        <CurrencySelectible
          placeholder={"Date Range"}
          options={options}
          value={selectedOptions}
          onChange={(value) => setSelectedOptions(value)}
        />
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>
          <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-1" />
        <span className="text-[12px]">Money in</span>   ₦1,000,000
        </span>
        <span>
          <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-1" />
          <span className="text-[12px]">Money out</span>  ₦1,000,000
        </span>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#facc15" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="day" tickLine={false} />
          <YAxis
           orientation="right"
            tickFormatter={(value) =>
              value >= 1_000_000
                ? `₦${value / 1_000_000}m`
                : `₦${value / 1_000}`
            }
            tickLine={false}
            width={60}
          />
          <Tooltip
            formatter={(value: number) => `₦${value.toLocaleString()}`}
          />
          <Area
            type="monotone"
            dataKey="moneyIn"
            stroke="#facc15"
            fillOpacity={1}
            fill="url(#colorIn)"
          />
          <Area
            type="monotone"
            dataKey="moneyOut"
            stroke="#ef4444"
            fillOpacity={1}
            fill="url(#colorOut)"
          />
        </AreaChart>
      </ResponsiveContainer>

      
    </div>
  );
};

export default MoneyFlow;
