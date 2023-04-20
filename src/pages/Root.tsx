import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto max-w-screen-xl">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
