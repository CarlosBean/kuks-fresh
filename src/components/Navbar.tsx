import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Nosotros', path: '/about' },
    { id: 3, name: 'Videos', path: '/videos' },
  ];
  return (
    <header className="border-b border-slate-300">
      <div className="mx-auto flex min-h-max max-w-screen-xl flex-col items-center justify-between px-4 sm:h-24 sm:flex-row sm:items-end">
        <Link to="/" className="py-4 text-2xl font-semibold text-red-500">
          KUKS FRESH
        </Link>

        <nav className="flex gap-10">
          {routes.map(route => (
            <NavLink
              key={route.id}
              to={route.path}
              className={({ isActive }) =>
                'px-2 py-4 font-medium' +
                (isActive ? ' border-b-4 border-red-500' : '')
              }
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
