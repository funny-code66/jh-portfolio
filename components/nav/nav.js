import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";
import Photo from "../photo/photo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <Photo />
          <div>
            <h1>
              <span>Jamal</span>
              <span>Hamilton</span>
            </h1>
            <h2>Full-Stack Engineer</h2>
            <small>
            with 7 years of experience.
            </small>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            About Me
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            Experience
          </Link>
          <Link
            className={slug === "page-three" ? "selected" : null}
            href="/page-three"
          >
            Skills
          </Link>
          <Link
            className={slug === "page-four" ? "selected" : null}
            href="/page-four"
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
