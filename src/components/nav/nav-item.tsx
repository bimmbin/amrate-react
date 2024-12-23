import { Link } from '@tanstack/react-router';
import { type FC, type ReactElement } from 'react';

interface NavItemProps extends React.PropsWithChildren {
  name: string;
  url: string;
  children: ReactElement;
}

export const NavItem: FC<NavItemProps> = ({ name, url, children }) => {
  return (
    <li className="text-foreground-mild hover:text-foreground-active">
      <Link to={url} className="flex items-center space-x-3 rounded px-3 py-2 hover:bg-secondary">
        <div className="flex h-6 w-6 scale-90 items-center justify-center ">{children}</div>
        <span className="font-base">{name}</span>
      </Link>
    </li>
  );
};
