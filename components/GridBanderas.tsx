"use client";
import { motion } from "framer-motion";
import BanderaThumbnail, { iBandera } from "./BanderaThumbnail";
import React, { memo } from "react";

type Props = {
  banderas: iBandera[];
};

const GridBanderas = ({ banderas }: Props) => {
  return (
    <div className="flex gap-4 items-center w-[400vh]">
      {Array(4)
        .fill(null)
        .map((item: any, i: number) => {
          return (
            <motion.div
              key={i}
              className="flex flex-row gap-4 overflow-x-clip items-center justify-start w-[100vh] -mr-[15vh]"
              animate={{ x: -100 * banderas.length }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {banderas.map((bandera, j) => (
                <div key={j} className="select-none">
                  <BanderaThumbnail {...bandera} />
                </div>
              ))}
            </motion.div>
          );
        })}
    </div>
  );
};

GridBanderas.displayName = "GridBanderas";

export default memo(GridBanderas);
