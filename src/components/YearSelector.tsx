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
      <h3 className="text-xl font-semibold bg-gradient-to-r from-[#BF5AF2] to-[#C377FE] bg-clip-text text-transparent">
        Time Period
      </h3>
      <div className="flex flex-wrap gap-2">
        {availableYears.map((year, index) => (
          <motion.button
            key={year}
            onClick={() => onYearChange(year)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.05,
              duration: 0.2,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              px-6 py-2.5 rounded-2xl text-sm font-medium transition-all
              backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgb(0,0,0,0.04)]
              border border-gray-100 dark:border-gray-800
              ${
                selectedYear === year
                  ? "bg-gradient-to-r from-[#007AFF] to-[#32D74B] text-white"
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
