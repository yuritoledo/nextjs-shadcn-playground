import BadgeData from "@/components/BadgeData";
import LinkText from "@/components/LinkText";
import { Button } from "@/components/ui/button";

import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-start bg- ml-7">
      <div className="flex flex-row items-center gap-4">
        <p className="text-2xl mr-4">All Devices used by</p>
        <BadgeData
          label="Number"
          value={<LinkText text="123123-4" link="#" />}
        />
        <BadgeData label="Rank" value="# Registration Device" />
      </div>
      <Button isLoading>Default</Button>
      <Button variant="secondary" isLoading>
        Secondary loading
      </Button>
      <LinkText link="#" text="link text example" />
    </main>
  );
}
