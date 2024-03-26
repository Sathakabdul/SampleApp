import React from 'react';
import Link from 'next/link';
type Props = {
  href: string;
  iconClass: string;
  label: string;
};
const LinkComponent = ({ href, iconClass, label }: Props) => {
  return (
    <Link href={href} className="Join">
      <i className={iconClass}></i>
      {label}
    </Link>
  );
};

export default LinkComponent;
