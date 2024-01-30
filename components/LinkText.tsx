import { ExternalLink } from "lucide-react";
import Link from "next/link";

type Props = {
  link: string;
  text: string;
};

const LinkText = ({ link, text }: Props) => (
  <Link href={link} className="flex items-center">
    <ExternalLink className="h-4 w-4 text-blue-400 mr-1" />
    {text}
  </Link>
);

export default LinkText;
