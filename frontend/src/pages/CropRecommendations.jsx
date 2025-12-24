import { Link } from 'react-router-dom'; // If you add any links later

function CropRecommendations() {
  return (
    <main className="crop-recommendations-page">
      <section className="crop-hero">
        <h1>Get Personalized Crop Recommendations</h1>
        <p>Our AI analyzes your location, climate, and planting season to suggest the most profitable crops for your farm</p>
      </section>

      <section className="steps">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Select Your Region</h3>
          <p>Choose your district or location</p>
          <small>e.g., Kandy, Colombo, Galle...</small>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Pick Planting Season</h3>
          <p>Select your preferred planting month</p>
          <small>e.g., January, April, July...</small>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Receive Smart Suggestions</h3>
          <p>Get AI-powered crop recommendations</p>
          <small>Best crops for your conditions</small>
        </div>
      </section>

      <section className="cta">
        <button className="big-btn">Start Getting Recommendations</button>
      </section>
    </main>
  );
}

export default CropRecommendations;