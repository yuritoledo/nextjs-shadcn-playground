import { ExternalLink } from "lucide-react";
import Link from "next/link";

type Props = {
  label: string;
  value: string | JSX.Element;
};
export default function BadgeData({ label, value }: Props) {
  return (
    <div className="flex flex-row">
      <div className="rounded-l-full px-2.5 py-0.5 border border-gray-200">
        <span>{label}</span>
      </div>
      <div className="flex  items-center border rounded-r-full border-l-0 pl-3 pr-2.5 py-0.5 border-gray-200">
        <span>{value}</span>
      </div>
    </div>
  );
}
