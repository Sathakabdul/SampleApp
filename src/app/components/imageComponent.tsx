import React from 'react';
import Image from 'next/image';
type Props = { src: string };
const ImageComponent = ({ src }: Props) => {
  return (
    <Image src={src} width={250} height={250} alt="Picture of the author" />
  );
};

export default ImageComponent;
