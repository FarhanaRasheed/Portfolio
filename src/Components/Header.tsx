

const Header = () => {
  return (
    <header className="header">
      <h1>Farhanaa's Portfolio</h1>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
      </nav>

      {/* Internal CSS */}
      <style>
        {`
          .header {
            // width: 100%;
            background-color: #1e3a8a; /* elegant blue */
            color: white;
            padding: 16px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .header h1 {
            margin: 0;
            font-size: 1.7rem;
            letter-spacing: 1px;
          }

          .nav a {
            color: white;
            text-decoration: none;
            margin-left: 24px;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .nav a:hover {
            color: #c7d2fe; /* soft hover */
          }
        `}
      </style>
    </header>
  );
};

export default Header;
