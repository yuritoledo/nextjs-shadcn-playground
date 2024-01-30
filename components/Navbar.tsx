"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowLeft, ChevronLeft } from "lucide-react";

type Props = {};

export default function Navbar(props: Props) {
  return (
    <div className="flex w-full justify-between p-5">
      <Button variant="link" asChild>
        <Link href="/login" className="flex flex-row items-center text-lg">
          <ChevronLeft className="text-gray-400 h-4 w-4" />
          <span className="text-gray-400 ml-3">Back to</span>
          <span className="ml-3">Device Related Players</span>
        </Link>
      </Button>
      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="🌐 Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en-us">🇺🇸 English</SelectItem>
          <SelectItem value="cn">🇨🇳 Chinese</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
