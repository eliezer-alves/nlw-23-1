import { generateDatesFromYear } from "../utils/generate-dates-from-year";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYear();

const minimumSummaryDatesSize = 18 * 7;
const amountOfSaysToFill = minimumSummaryDatesSize - summaryDates.length;

export const SummaryTable = () => (
  <div className="w-full flex">
    <div className="grid grid-rows-7 grid-flow-row gap-3">
      {weekDays.map((day, idx) => (
        <div
          key={`${day}-${idx}`}
          className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
        >
          {day}
        </div>
      ))}
    </div>
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {summaryDates.map((date) => (
        <HabitDay key={date.toString()} />
      ))}

      {amountOfSaysToFill > 0 &&
        Array.from({ length: amountOfSaysToFill }).map((_, idx) => (
          <div
            key={idx}
            className="w-10 h-10 bg-zinc-900 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
          />
        ))}
    </div>
  </div>
);
