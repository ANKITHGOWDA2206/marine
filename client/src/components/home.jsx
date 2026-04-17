import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import Header from "../common-components/header";
import Footer from "../common-components/footer";

function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Header />

      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <video autoPlay loop muted playsInline>
            <source src="/videos/ocean.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="home-hero__overlay" aria-hidden="true" />

        <div className="sg-container home-hero__content">
          <h1>Give today</h1>
          <p>We couldn't do our marine conservation work without you.</p>
          <Link to="/donate">
            <button className="sg-btn sg-btn--primary">Donate</button>
          </Link>
        </div>
      </section>

      <section id="about-us" className="sg-section">
        <div className="sg-container">
          <div className="home-intro sg-card">
            <h2>
              SeaGuardian is working with you to protect the ocean from India's
              greatest challenges.
            </h2>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <div className="home-split">
            <div className="home-illustration">
              <img
                src="/png-jpg/parallax-imgs/img1.jpg"
                alt="Analyze marine pollution"
              />
            </div>
            <div className="home-split__content">
              <h2>
                Analyze Marine Pollution: Upload Your Image and Help Make a
                Difference
              </h2>

              <div className="feature-grid" aria-label="Key features">
                <div className="feature-card">
                  <div className="feature-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 18.5C14.6421 18.5 18 15.1421 18 11C18 6.85786 14.6421 3.5 10.5 3.5C6.35786 3.5 3 6.85786 3 11C3 15.1421 6.35786 18.5 10.5 18.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M20.5 20.5L16.7 16.7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="feature-title">Detect Pollution</div>
                  <div className="feature-desc">
                    Upload a photo of a polluted marine area and get a quick
                    analysis of potential pollutants.
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 11V13C3 14.1046 3.89543 15 5 15H6L10.5 18V6L6 9H5C3.89543 9 3 9.89543 3 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.5 9.5C16.3284 10.3284 16.3284 13.6716 15.5 14.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 7C19.6569 8.65685 19.6569 15.3431 18 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="feature-title">Raise Awareness</div>
                  <div className="feature-desc">
                    Your images contribute to a growing database helping
                    visualize the scale of ocean pollution.
                  </div>
                </div>
                <div className="feature-card">
                  <div className="feature-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 12.5L10.2 10.8C11.3 9.7 13.1 9.7 14.2 10.8L15.5 12.1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 14L8.2 16.2C9.3 17.3 11.1 17.3 12.2 16.2L12.4 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 10L20 12L17 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 12L6 10L9 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="feature-title">Drive Action</div>
                  <div className="feature-desc">
                    Empower communities and policymakers with visual evidence
                    that sparks real change.
                  </div>
                </div>
              </div>

              <h3 className="home-subhead">How You Can Help</h3>
              <ol className="home-steps">
                <li>
                  Capture a photo of a visibly polluted beach, river, or ocean
                  area.
                </li>
                <li>
                  <Link to="/analyze-img">
                    <button className="sg-btn sg-btn--ghost">
                      Upload & Analyze
                    </button>
                  </Link>
                </li>
                <li>
                  Your privacy is respected â€” anonymous submissions are
                  welcome.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <div className="home-split home-split--reverse">
            <div className="home-illustration">
              <img
                src="/png-jpg/parallax-imgs/img2.jpg"
                alt="Contribute to the blog"
              />
            </div>
            <div className="home-split__content">
              <h2>Share Your Insights: Contribute to Our Blog</h2>
              <ul className="home-list">
                <li>
                  <b>Amplify Your Voice:</b> Influence positive change.
                </li>
                <li>
                  <b>Educate and Inspire:</b> Share marine conservation
                  knowledge.
                </li>
                <li>
                  <b>Build a Community:</b> Connect with ocean sustainability
                  advocates.
                </li>
              </ul>

              <h3 className="home-subhead">How to contribute</h3>
              <ol className="home-steps">
                <li>
                  Submit your article via{" "}
                  <Link to="/our-program">
                    <button className="sg-btn sg-btn--ghost">Our Program</button>
                  </Link>
                </li>
                <li>Our editorial team will review your article.</li>
                <li>Approved content will be featured on our blog.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <div className="home-split">
            <div className="home-illustration">
              <img
                src="/png-jpg/parallax-imgs/img3.jpg"
                alt="Donate for cleaner oceans"
              />
            </div>
            <div className="home-split__content">
              <h2>Support the Cause: Donate for Cleaner Oceans</h2>
              <ul className="home-list">
                <li>
                  <b>Empower Change:</b> Donations help combat marine pollution.
                </li>
                <li>
                  <b>Community Impact:</b> Every contribution strengthens our
                  mission.
                </li>
                <li>
                  <b>Initiative Growth:</b> Supports outreach and environmental
                  efforts.
                </li>
              </ul>

              <h3 className="home-subhead">How to donate</h3>
              <ol className="home-steps">
                <li>
                  Visit our{" "}
                  <Link to="/donate">
                    <button className="sg-btn sg-btn--primary">
                      Donate Page
                    </button>
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <h2 className="home-section-title">It's Sad</h2>
          <div className="home-history sg-card">
            <div className="home-history__img">
              <img
                src="/png-jpg/historyimg.jpg"
                alt="Beluga Whale affected by pollution"
              />
            </div>
            <div className="home-history__text">
              <h3>~ Endangered</h3>
              <h2>Beluga Whales</h2>
              <p>
                These amazingly beautiful creatures are paying a huge toll for
                ocean pollution. In fact, they are considered the most â€œtoxicâ€
                marine animal in the world. Dead beluga whales are often found
                heavily saturated with herbicides, pesticides and other
                runoff-delivered chemicals. These whales are so pumped full of
                toxins that they must be treated as â€œtoxic waste.â€ As a result
                of these exposures, rates of cancer are higher in Beluga Whales
                than any other species on land or at sea.
                <br />
                <Link to="/distinctones" className="home-link">
                  Know More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="sg-container">
          <div className="home-outro sg-card">
            <h2>
              SeaGuardian is working to protect oceans from India's challenges.
            </h2>
            <Link to="/details" className="home-link">
              Know More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
