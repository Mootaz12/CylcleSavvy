import { navbarLinks } from "../constants";
const Navbar = () => {
  return (
    <nav
      id="home"
      className="flex flex-between bg-slate-950 text-white items-center justify-between px-20 py-6"
    >
      <a href="#home" className="font-bold text-2xl  hover:text-pink-600">
        CycleSeavy.
      </a>
      <ul className="flex flex-row gap-16 text-lg">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a className="hover:text-pink-600" href={`#${link.id}`}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
