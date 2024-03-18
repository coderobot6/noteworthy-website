import teamPhoto from "./assets/noteworthy-group.png";
import "./App.css";
import noteWorthyTitle from "./assets/noteworthy-title.svg";

function App() {
  return (
    <div id="scroll-container">
      <div
        id="landing-page"
        className="parallax"
        style={{
          backgroundImage: `url(${teamPhoto})`,
        }}
      >
        <img
          src={noteWorthyTitle}
          alt="Noteworthy A Cappella"
          style={{ marginBottom: "7%", marginLeft: "3%" }}
        />
      </div>

      <div id="about-us">
        <h1 id="about-us-title">NOTEWORTHY</h1>
        <h1 id="about-us-subtitle">In-vest-ed in A Cappella</h1>

        <h3 id="about-us-description1">
          We’re a lower-voices a cappella group known for our fun performances
          and fresh takes on popular songs! It always feels <mark>sunny</mark> when we
          perform, and not just because of our <mark>golden vests</mark>!
        </h3>

        <h3 id="about-us-description2">
          Since our founding in 2000, we’ve gone million-view-viral on YouTube
          multiple times, released an album entirely composed of original songs,
          and performed at the 2022 UC Berkeley commencement.
        </h3>
      </div>
    </div>
  );
}

export default App;
