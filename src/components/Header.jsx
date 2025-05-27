function Header() {
  return (
    <nav className="#76ff03 light-green accent-3">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Show
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {/* <a
              href="https://ankom13.github.io/react-shop/"
              target="_blank"
              rel="noopener"
            >
              Repo
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
