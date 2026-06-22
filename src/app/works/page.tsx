import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/content";

export default function WorksPage() {
  redirect(`/${defaultLocale}/works`);
}
