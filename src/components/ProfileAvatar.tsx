import Image from "next/image";
import Link from "next/link";

interface ProfileAvatarProps {
  name: string;
  avatarPath: string;
  href: string;
}

export default function ProfileAvatar({ name, avatarPath, href }: ProfileAvatarProps) {
  return (
    <Link href={href} className="group flex min-w-0 flex-col items-center gap-3">
      <span className="relative h-20 w-20 overflow-hidden rounded-[1.25rem] border-2 border-transparent bg-zinc-900 transition duration-200 group-hover:border-white sm:h-24 sm:w-24 md:h-28 md:w-28">
        <Image src={avatarPath} alt={name} fill className="object-cover" />
      </span>
      <span className="max-w-[6rem] truncate text-sm font-medium text-zinc-300 transition duration-200 group-hover:text-white sm:max-w-none">{name}</span>
    </Link>
  );
}