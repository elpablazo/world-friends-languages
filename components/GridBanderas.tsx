"use client";
import { motion } from "framer-motion";
import BanderaThumbnail, { iBandera } from "./BanderaThumbnail";
import React, { memo } from "react";

type Props = {
  banderas: iBandera[];
};

const GridBanderas = ({ banderas }: Props) => {
  return (
    <div className="flex gap-4 items-center overflow-x-auto w-max">
      {Array(3)
        .fill(null)
        .map((_, i: number) => {
          return (
            <motion.div
              key={i}
              className="flex flex-row gap-4 items-center justify-start w-[100%]"
              animate={{ x: -100 * banderas.length }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...banderas, ...banderas].map((bandera, j) => (
                <div key={j} className="select-none">
                  <BanderaThumbnail {...bandera} />
                </div>
              ))}
              {i === 2 && <div className="w-0 h-0"></div>}
            </motion.div>
          );
        })}
    </div>
  );
};

GridBanderas.displayName = "GridBanderas";

export default memo(GridBanderas);
