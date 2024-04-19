"use client";

import Live from "@/components/Live";
import { useRedo, useUndo } from "@/liveblocks.config";
import { useRef } from "react";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const undo = useUndo();
  const redo = useRedo();
  return (
    <>
      <div>
        <Live canvasRef={canvasRef} undo={undo} redo={redo} />
      </div>
    </>
  );
}
