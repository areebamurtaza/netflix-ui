import Image from "next/image";
import Link from "next/link";

interface ProfileAvatarProps {
  name: string;
  avatarPath: string;
  href: string;
}

export default function ProfileAvatar({ name, avatarPath, href }: ProfileAvatarProps) {
  return (
    <Link href={href} className="group flex flex-col items-center gap-2">
      {/* 
        Container for the avatar image.
        Uses a fixed size wrapper to ensure the aspect ratio is maintained.
        The border radius is set to mimic the classic Netflix rounded square.
      */}
      <div className="relative h-[84px] w-[84px] sm:h-[10vw] sm:w-[10vw] sm:max-h-[200px] sm:max-w-[200px] sm:min-h-[84px] sm:min-w-[84px] overflow-hidden rounded-md border-[3px] border-transparent transition-colors duration-200 group-hover:border-white">
        <Image 
          src={avatarPath} 
          alt={name} 
          fill 
          className="object-cover" 
          sizes="(max-width: 640px) 84px, 10vw"
          
        />
      </div>
      
      {/* 
        Profile name styling.
        Text color transitions from gray to white on hover.
      */}
      <span className="text-gray-500 transition-colors duration-200 group-hover:text-white text-xs sm:text-[1.3vw] sm:max-text-xl sm:min-text-xs mt-1 md:mt-2">
        {name}
      </span>
    </Link>
  );
}