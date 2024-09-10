import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CriteriaCard({
  title,
  criteria,
  givenScore,
  totalScore,
}: {
  title: string;
  criteria: string;
  givenScore: number;
  totalScore: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const percent = (givenScore / totalScore) * 100;
  const color =
    percent === 50 ? "#F9C94E" : percent > 50 ? "#3CC28A" : "#EB751F";

  return (
    <div className="rounded-2xl bg-[#FFFFFF] p-3">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-[#FFFFFF] p-3">
        <div className="flex items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center">
            <CircularProgressbar
              value={percent}
              strokeWidth={9}
              text={`${givenScore}/${totalScore}`}
              className="font-semibold"
              styles={buildStyles({
                textSize: "24px",
                textColor: "#1E2026",
                trailColor: "#EAF0F2",
                pathColor: color,
              })}
            />
          </div>
          <div>
            <p className="text-sm font-medium leading-4 text-[#3D404B]">
              Criteria {title}:
            </p>
            <p className="text-md font-bold">{criteria}</p>
          </div>
        </div>

        <Image
          src="/images/arrowdown.svg"
          alt="Dropdown"
          height={20}
          width={20}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "min-h-full transition-all duration-300 ease-in-out hover:cursor-pointer",
            {
              "origin-center rotate-180": isOpen,
            },
          )}
        />
      </div>

      <div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: "hidden",
                borderTop: "solid 1px #D6DFE4",
                padding: "10px 0",
              }}
            >
              <p className="text-sm leading-4 text-[#5B6170]">
                The essay identifies and focuses on the knowledge question
                regarding the resolvability of disputes over knowledge claims
                within disciplines.
              </p>

              <div className="space-y-2 pt-2">
                <h2 className="text-lg font-bold">Strengths</h2>
                <ul className="list-checkmark">
                  <li>
                    Demonstrates a good understanding of the prescribed title
                    and the associated knowledge questions.
                  </li>
                  <li>
                    Addresses the nature of disputes in both the Natural
                    Sciences and Human Sciences effectively.
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h2 className="text-lg font-bold">Scope of Improvement</h2>
                <ul className="list-warning">
                  <li>
                    Demonstrates a good understanding of the prescribed title
                    and the associated knowledge questions.
                  </li>
                  <li>
                    Addresses the nature of disputes in both the Natural
                    Sciences and Human Sciences effectively.
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
