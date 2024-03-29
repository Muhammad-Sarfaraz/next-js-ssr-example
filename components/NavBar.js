import Link from "next/link";
import ThemeSwitch from './ThemeSwitch';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        

        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>

      <ThemeSwitch />
      <style jsx>{`
        nav{
          display:flex;
          justify-content:space-between;
        }
        ul {
          list-style-type: none;
          padding: 0px;
        }

        li {
          display: inline;
        }

        li:not(:first-child) {
          margin-left: 0.75rem;
        }
      `}</style>
    </nav>
  );
}
export default NavBar;
