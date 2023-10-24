import { ModeToggle } from "@/components/toggleTheme";
import SigninButton from "@/components/SigninButton";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 flex items-center justify-between w-full">
        <Link href={"/"}>
      <div className="flex items-center gap-4">
      <p>🎃</p>
      <p className="text-xl hidden md:block">Your brand</p>
      </div>
        </Link>

      <div className="flex items-center gap-4">
        <div>
          <SigninButton />
        </div>
        {/* gestion theme */}
        <ModeToggle />
      </div>
    </div>
  );
}
