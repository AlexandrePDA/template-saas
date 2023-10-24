import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Link href={"/Dashboard"}>
        <Button>Go to Dashboard</Button>
      </Link>
    </main>
  );
}
