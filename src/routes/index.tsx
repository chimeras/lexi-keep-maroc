import { createFileRoute } from "@tanstack/react-router";
import { LexiKeepHome } from "@/components/lexikeep/Home";

export const Route = createFileRoute("/")({
  component: LexiKeepHome,
});
