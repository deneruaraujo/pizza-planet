import { Button } from "@/components/ui/button";
import { CartModal } from "./CartModal";
import { LoginModal } from "./LoginModal";
import Link from "next/link";
export function NavBar() {
  return (
    <div className="flex justify-between w-full">
      <Link href="/#">
        <Button variant="custom">
          Home
        </Button>
      </Link>
      <div className="flex gap-4">
        <LoginModal />
        <CartModal />
      </div>
    </div>
  )
}