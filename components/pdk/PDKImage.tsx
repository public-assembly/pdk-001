import Image from 'next/image'

type ImagePropsNoSrc = Omit<React.ComponentPropsWithoutRef<typeof Image>, "src">

type ImageAttrs = {
  src: string;
  width: number;
  height: number;
}

export type PDKImageProps = {
  image: ImageAttrs;
} & ImagePropsNoSrc

export function PDKImage({ image, width, height, ...props }: PDKImageProps) {
  return (
    <Image
      src={image.src}
      width={width ?? image.width / 2}
      height={height ?? image.height / 2}
      {...props}
    />
  )
}

export default PDKImage;
