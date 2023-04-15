import React from 'react';
import { identicon } from 'minidenticons';
import Image from 'next/image';

interface MinidentIconProps {
  username: string;
  saturation: number;
  lightness: number;
}

export const IdenticonImg: React.FC<MinidentIconProps> = ({
  username,
  saturation,
  lightness,
}) => {
  const svgURI = React.useMemo(
    () =>
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(identicon(username, saturation, lightness)),
    [username, saturation, lightness]
  );
  return (
    <Image
      src={svgURI}
      className="border border-gray-300 rounded-full bg-white"
      alt={username}
      height={40}
      width={40}
    />
  );
};
