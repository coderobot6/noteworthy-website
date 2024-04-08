import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MembersPage from "./pages/MembersPage";
import Navbar from "./components/Navbar";

import "./App.css";
import teamPhoto from "./assets/noteworthy-group.png";
import noteWorthyTitle from "./assets/noteworthy-title.svg";
import concertJpeg from "./assets/concert.jpeg";
import group1 from "./assets/group1.jpeg";
import group2 from "./assets/group2.jpeg";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import socialrect from "./assets/socialsrect.png";
import bluerect from "./assets/bluerect.png";
import fbicon from "./assets/fbicon.png";
import instaicon from "./assets/instaicon.png";
import tiktokicon from "./assets/tiktokicon.png";
import yticon from "./assets/yticon.png";

function App() {
  return (
    <div id="scroll-container">
      <nav className="navbar">
        <Navbar />
      </nav>

      <div
        id="landing-page"
        className="parallax"
        style={{ backgroundImage: `url(${teamPhoto})` }}
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
          We&apos;re a lower-voices a cappella group known for our fun
          performances and fresh takes on popular songs! It always feels{" "}
          <mark>sunny</mark> when we perform, and not just because of our{" "}
          <mark>golden vests</mark>!
        </h3>
        <h3 id="about-us-description2">
          Since our founding in 2000, we&apos;ve gone million-view-viral on
          YouTube multiple times, released an album entirely composed of
          original songs, and performed at the 2022 UC Berkeley commencement.
        </h3>
      </div>

      <div id="image-vids-collage">
        <img id="image2" src={image2} alt="Image 2" />
        <img id="image5" src={image5} alt="Image 5" />
        <img id="image6" src={image6} alt="Image 6" />
        <img id="socialrect" src={socialrect} alt="social rect" />
        <img id="flyersrect" src={socialrect} alt="flyer rect" />
        <img id="favsrect" src={bluerect} alt="blue rect" />
        <img id="concertrect" src={bluerect} alt="blue rect" />
        <img id="concertdesrect" src={socialrect} alt="social rect" />

        <div id="flyersrect">
          <p>Come to our events!</p>
        </div>
        <div id="favsrect">
          <p>Our Favs</p>
        </div>
        <div id="concertrect">
          <p>Concerts on Sproul: Fridays at 2</p>
        </div>
        <div id="concertdesrect">
          <p>On a lazy Friday afternoon, come join us for our weekly concert
            under Sather Gate!</p>        
        </div>

        <iframe
          id="kenvid"
          src="https://www.youtube.com/embed/kW57PpibCMA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          id="zfvid"
          src="https://www.youtube.com/embed/n0p8MxT8AxI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div id="hire-us">
        <h1 id="hire-us-title">Hire Us</h1>
        <img id="concert" src={concertJpeg} alt="Concert" />
        <img id="group1" src={group1} alt="Group 1" />
        {/* <img id="group2" src={group2} alt="Group 2" /> */}
        <h3 id="hire-us-description1">
          <strong>
            We&apos;re no stranger to{" "}
            <mark>weddings, private parties, tailgates, and conferences.</mark>
          </strong>
        </h3>
        <h3 id="hire-us-description2">
          We&apos;ve performed at venues including San Francisco City Hall,
          University House, the Faculty Club, and UC Berkeley&apos;s 2022
          Commencement.
        </h3>
        <h3 id="hire-us-description3">
          “Thank YOU guys for making the night so wonderful. Your
          professionalism, charisma, great personalities, and fantastic
          performance made it a true pleasure to work with you all. Everyone in
          the crowd loved you, and I hope to have the pleasure of working with
          you boys again!” <br />
          ~Tom Bercu, President of Tom Bercu Presents
        </h3>
      </div>

      <div id="ready-hire">
        <h1 id="ready-hire-title">Ready to Hire Us?</h1>
        <h3 id="ready-hire-description">
          Email our business manager (noteworthy@ucchoral.berkeley.edu)
        </h3>
        <h3 id="let-us-know">Let us know:</h3>
        <ul id="ready-hire-list">
          <li>Who you are</li>
          <li>Details of the event (where and when)</li>
          <li>
            Songs you’d like us to perform & how long the performance should be
          </li>
        </ul>
        <h3 id="ready-hire-description"> and fill out this form</h3>
        <h3 id="ready-hire-description">
          We will respond to you with a quote as soon as possible!
        </h3>
      </div>

      <div id="hire-us3">
        <h1 id="song-requests">
          <mark>Song Requests</mark>
        </h1>
        <h3 id="song-requests-text">
          Check out our current repertoire for a sample of the songs we perform.
          If the song you want isn&apos;t listed there, ask us about it — we
          might have it arranged already. With enough advance notice, we can
          perform anything from our archive, which is large and always growing.
        </h3>
        <h1 id="times">
          <mark>Times and locations</mark>
        </h1>
        <h3 id="times-text">
          We&apos;re available to perform throughout the academic year and can
          travel anywhere in the Bay Area. Traveling beyond the Bay Area may
          require extra planning and travel costs.
        </h3>
        <h1 id="charity">
          <mark>UC Berkeley Charity Events</mark>
        </h1>
        <h3 id="charity-text">
          If you are a subsidiary of UC Berkeley, and you&apos;re organizing a
          charity event on campus, we are happy to give you a reduced rate.
        </h3>
      </div>
    </div>
  );
}

export default App;
