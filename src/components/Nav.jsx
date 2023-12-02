import { holadokLogo } from "../assets";

const Nav = () => {
  return (
    <header className="padding-x padding-top w-full">
      <nav className="flex justify-between items-center max-w-screen-2xl">
        <div className="flex flex-column justify-center items-center gap-2">
          <img src={holadokLogo} width={30} height={30} alt="Logo" />
          <a
            href="#"
            className="text-primary font-source-sans font-bold text-lg"
          >
            Holadok
          </a>
        </div>
        <ul className="flex justify-center items-center gap-10">
          <li>
            <a
              href="#"
              className="font-sourceSans text-base font-normal transition-all hover:text-slate-400 nav-active"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sourceSans text-base font-normal transition-all hover:text-slate-400 text-slate-800"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sourceSans text-base font-normal transition-all hover:text-slate-400 text-slate-800"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sourceSans text-base font-normal transition-all hover:text-slate-400 text-slate-800"
            >
              About Us
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="btn-cta">Login</button>
          <button className="border border-primary btn-cta">Register</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
