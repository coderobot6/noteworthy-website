import teamPhoto from "./assets/noteworthy-group.png";
import "./App.css";
import noteWorthyTitle from "./assets/noteworthy-title.svg";


function App() {
    return (
        <div id="scroll-container">
            <div id="landing-page" className="parallax" style={{backgroundImage: `url(${teamPhoto})`}}>
                <img src={noteWorthyTitle} alt="Noteworthy A Cappella" style={{marginBottom: "7%", marginLeft: "3%"}} />
            </div>

            <div id="about-us">
                <h1 id="about-us-title">NOTEWORTHY</h1>
                <h1 id="about-us-subtitle">In-vest-ed in A Cappella</h1>
                <h3 id="about-us-description1">
                    We're a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels <mark>sunny</mark> when we perform, and not just because of our <mark>golden vests</mark>!
                </h3>
                <h3 id="about-us-description2">
                    Since our founding in 2000, we've gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
                </h3>
            </div>

            <div id="hire-us">
                <h1 id="hire-us-title">Hire Us</h1>
                <h3 id="hire-us-description1">
                    <strong>We're no stranger to <mark>weddings, private parties, tailgates, and conferences.</mark></strong>
                </h3>
                <h3 id="hire-us-description2">
                    We've performed at venues including San Francisco City Hall, University House, the Faculty Club, and UC Berkeley's 2022 Commencement.
                </h3>
                <h3 id="hire-us-description3">
                    “Thank YOU guys for making the night so wonderful. Your professionalism, charisma, great personalities, and fantastic performance made it a true pleasure to work with you all. Everyone in the crowd loved you, and I hope to have the pleasure of working with you boys again!” <br />
                    ~Tom Bercu, President of <u>Tom Bercu Presents</u>
                </h3>
                
                <img src="concert.jpeg" id="hire-us-img1" alt="Concert" />
                <img src="group1.jpeg" id="hire-us-img2" alt="Group 1" />
                <img src="group2.jpeg" id="hire-us-img3" alt="Group 2" />
            </div>

            

            <div id="hire-us3">
              <h1 id="song-requests"><mark>Song Requests</mark></h1>
              <h3 id="song-requests-text">Check out our current repertoire for a sample of the songs we perform. If the song you want isn’t listed there, ask us about it — we might have it arranged already. With enough advance notice, we can perform anything from our archive, which is large and always growing.</h3>
              <h1 id="times"><mark>Times and locations</mark></h1>
              <h3 id="times-text">We’re available to perform throughout the academic year and can travel anywhere in the Bay Area. Traveling beyond the Bay Area may require extra planning and travel costs.</h3>
              <h1 id="charity"><mark>UC Berkeley Charity Events</mark></h1>
              <h3 id="charity-text">If you are a subsidiary of UC Berkeley, and you’re organizing a charity event on campus, we are happy to give you a reduced rate.</h3>
            
            </div>
        </div>
    );
}

export default App;
