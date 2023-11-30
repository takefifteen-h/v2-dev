import React from "react";

const RenderVersion = () => {
  return (
    <div className="flex flex-col items-start gap-y-2 lg:gap-y-4">
      <p className="text-xs font-semibold uppercase text-white/50 lg:text-sm">
        Version
      </p>
      <p className="text-sm text-white">2022 &copy; Edition</p>
    </div>
  );
};

export default RenderVersion;
