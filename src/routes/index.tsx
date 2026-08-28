import { createFileRoute } from "@tanstack/react-router";
import { BebokiApp } from "@/components/beboki/App";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <BebokiApp />;
}
