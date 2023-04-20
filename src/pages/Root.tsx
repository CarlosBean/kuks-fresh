import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto my-8 max-w-screen-xl px-3 xl:p-0">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
