import React from 'react';

type Props = {
  href: string;
  arealabel: string;
  linklabel: string;
};
const LineComponent = ({ href, arealabel, linklabel }: Props) => {
  return (
    <li>
      <a href={href} aria-label={arealabel}>
        {linklabel}
      </a>
    </li>
  );
};

export default LineComponent;
