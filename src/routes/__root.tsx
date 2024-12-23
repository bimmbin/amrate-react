import { LeftNav } from '@/components/nav/left-nav';
import { TopNav } from '@/components/nav/top-nav';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import 'typeface-poppins';
import '../global.css';

export const Route = createRootRoute({
  component: () => (
    <>
      <TopNav />
      <div className=" flex bg-primary">
        <LeftNav />

        <Outlet />
      </div>
      {/* <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/sample" className="[&.active]:font-bold">
          sample
        </Link>
      </div> */}
      {/* <hr /> */}
      <TanStackRouterDevtools />
    </>
  ),
});
