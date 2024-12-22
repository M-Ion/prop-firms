import Image, { StaticImageData } from "next/image";

type AvatarProps = {
  alt: string;
  src: StaticImageData | string;
};

export default function Avatar({ alt, src }: AvatarProps) {
  return (
    <div className="inline-block rounded-full h-[20px] w-[20px] overflow-hidden">
      <Image alt={alt} src={src} className="h-full w-full" />
    </div>
  );
}
