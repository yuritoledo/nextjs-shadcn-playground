import BadgeData from "@/components/BadgeData";
import LinkText from "@/components/LinkText";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-start ml-7">
      <Button variant="link" asChild>
        <Link href="/login" className="flex flex-row">
          <ChevronLeft className="text-gray-400 h-4 w-4" />
          <span className="text-gray-400">Back to</span>
          <span className="ml-5">Device Related Players</span>
        </Link>
      </Button>
      <div className="flex flex-row items-center gap-4">
        <p className="text-3xl font-bold mr-4">All Devices used by</p>
        <BadgeData
          label="Number"
          value={<LinkText text="123123-4" link="#" />}
        />
        <BadgeData label="Rank" value="# Registration Device" />
        <LinkText link="#" text="Edit" />
      </div>
    </main>
  );
}
