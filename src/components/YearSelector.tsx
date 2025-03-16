import { motion } from "framer-motion";

interface YearSelectorProps {
  availableYears: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export default function YearSelector({
  availableYears,
  selectedYear,
  onYearChange,
}: YearSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#007AFF] to-[#0A84FF] bg-clip-text text-transparent">
        Contribution Activity
      </h3>
      <div className="flex flex-wrap gap-2">
        {availableYears.map((year) => (
          <motion.button
            key={year}
            onClick={() => onYearChange(year)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all
              backdrop-blur-xl backdrop-saturate-150
              border border-gray-100 dark:border-gray-800
              ${
                selectedYear === year
                  ? "bg-[#007AFF] text-white"
                  : "bg-white/50 dark:bg-[#1C1C1E]/50 text-[#1C1C1E] dark:text-white hover:bg-white/80 dark:hover:bg-[#1C1C1E]/80"
              }
            `}
          >
            {year}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
