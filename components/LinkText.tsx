import { ExternalLink } from "lucide-react";
import Link from "next/link";

type Props = {
  link: string;
  text: string;
};

const LinkText = ({ link, text }: Props) => (
  <div className="flex items-center">
    <Link href={link}>
      <ExternalLink className="h-4 w-4 text-blue-400 mr-1" />
    </Link>
    {text}
  </div>
);

export default LinkText;
