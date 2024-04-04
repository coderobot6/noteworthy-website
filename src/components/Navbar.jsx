import bearicon from "../assets/bearnw.png";
import "./Navbar.css";

function Navbar() {
  const smoothScroll = (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <img id="bearicon" src={bearicon} />
        </li>
        <li>
          <a id="lp1" href="#landing-page" onClick={smoothScroll}>
            Home
          </a>
        </li>
        <li>
          <a id="lp" href="#about-us" onClick={smoothScroll}>
            About Us
          </a>
        </li>
        <li>
          <a id="lp" href="#hire-us" onClick={smoothScroll}>
            Hire Us
          </a>
        </li>
        <li>
          <a id="lp" href="">
            Our Team
          </a>
        </li>
        <li>
          <a id="lp" href="">
            Auditions
          </a>
        </li>
        <li>
          <a
            id="lp"
            href="https://noteworthy.studentorg.berkeley.edu/welcome-back-spring-2024/"
          >
            Spr2024
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
