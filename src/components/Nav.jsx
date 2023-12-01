const Nav = () => {
  return (
    <header className="padding-x padding-top w-full">
      <nav className="flex justify-between items-center max-w-screen-2xl">
        <a href="#" className="text-primary font-source-sans font-bold text-lg">
          <img src="../assets/holadok-logo.png" alt="Logo" />
          <span>Holadok</span>
        </a>
        <ul className="flex justify-center items-center gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About Us</a>
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
