import AddressBookIcon from '../icons/address-book-icon';
import BolIcon from '../icons/bol-icon';
import DashboardIcon from '../icons/dashboard-icon';
import LoadboardIcon from '../icons/loadboard-icon';
import NmfcIcon from '../icons/nmfc-icon';
import RateIcon from '../icons/rate-icon';
import SavedQuotesIcon from '../icons/saved-quotes-icon';
import SupportIcon from '../icons/support-icon';
import TrackingIcon from '../icons/tracking-icon';
import { NavItem } from './nav-item';

export const LeftNav = () => {
  return (
    <nav className="h-screen border-r border-border bg-primary text-foreground">
      <div className="space-y-2 p-2">
        <ul>
          <NavItem name="Dashboard" url="/">
            <DashboardIcon className="text-accent" />
          </NavItem>
          <NavItem name="Load Board" url="/">
            <LoadboardIcon />
          </NavItem>
          <NavItem name="Rate a Shipment" url="/">
            <RateIcon className="text-accent scale-125" />
          </NavItem>
          <NavItem name="Tracking" url="/">
            <TrackingIcon />
          </NavItem>
          <NavItem name="Bills of Lading" url="/">
            <BolIcon />
          </NavItem>
          <NavItem name="NMFC Product List" url="/">
            <NmfcIcon />
          </NavItem>
          <NavItem name="Address Book" url="/">
            <AddressBookIcon />
          </NavItem>
          <NavItem name="Save Quotes" url="/">
            <SavedQuotesIcon />
          </NavItem>
          <NavItem name="Support" url="/">
            <SupportIcon />
          </NavItem>
        </ul>
      </div>
    </nav>
  );
};
