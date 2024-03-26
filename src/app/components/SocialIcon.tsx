import React from 'react';
type Props = {
  href: string;
  iconclass: string;
};

const SocialIcon = ({ href, iconclass }: Props) => {
  return (
    <a href={href}>
      <i className={iconclass}></i>
    </a>
  );
};

export default SocialIcon;
