import "./WelcomePage.css";

function WelcomePage() {
  return (
    <div className="welcome">
      {/* <video src="/video/carvideo.mp4" autoPlay loop muted /> */}
      <img src="/images/carRoad.jpg" alt="" className="carRoad" />
      <div>
        <h2> Here you will find your dream car!</h2>
      </div>
      <footer className="ft">
        <p>&copy; 2023 Nick</p>
      </footer>
    </div>
  );
}

export default WelcomePage;
