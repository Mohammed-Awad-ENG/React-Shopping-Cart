import { useState, useEffect } from "react";
import "./About.css";

export default function AboutPage() {
    /*
    I feel now like the stupidest person on Earth 
    I had a plan to create a store and a shopping cart,
    but after I finished the store and the cart,
    I had no idea what I would do on the Home page or the about page.
    Then I decided to start with the about page and used an old style from a previous project.
    Then I spent two hours writing the stupidest about page your eyes could see
    I'm going to SLEEP...
    */
    const [factIndex, setFactIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [count, setCount] = useState(0);
    const [shake, setShake] = useState(false);

    const facts = [
        "This page is about this page.",
        "The about page exist because it is here.",
        "You are currently reading the about page about the about page.",
        "If this was not the about Page, it would be a different page.",
        "Scientists confirm: this page is, in fact, about.",
        "Breaking news: page continues to be about itself.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipping(true);
            setTimeout(() => {
                setFactIndex((i) => (i + 1) % facts.length);
                setIsFlipping(false);
            }, 200);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleBump = () => {
        setCount((c) => c + 1);
        setShake(true);
        setTimeout(() => setShake(false), 400);
    };

    return (
        <div className="root">
            <div className="grid-bg" />

            <section className="hero">
                <div className="hero-tag">ABOUT PAGE v2.0</div>
                <h1 className="hero-title">
                    THIS IS
                    <br />
                    <span className="hero-accent">ABOUT PAGE</span>
                </h1>
                <p className="hero-sub">
                    This page is about because this is the about page.
                    <br />
                    If you were looking for the about page, congratulations.
                    <br />
                    You have found the about page.
                </p>

                <div className="ticker">
                    <span className="ticker-label">FACT:</span>
                    <span
                        className={`ticker-text${isFlipping ? " flipping" : ""}`}
                    >
                        {facts[factIndex]}
                    </span>
                </div>
            </section>

            <section className="section">
                <div className="section-label">01 — EXPLANATION</div>
                <h2 className="section-title">What Is About Page?</h2>
                <div className="two-col">
                    <div className="big-statement">
                        "This page is about this page because this is the page
                        that is about."
                    </div>
                    <div className="paragraphs">
                        <p className="para">
                            The about page is a page. This page exists for the
                            purpose of being about. It is about. This has been
                            confirmed by multiple sorus including this page
                            itself.
                        </p>
                        <p className="para">
                            Many people have visited this page and asked "is
                            this the about page?" The answer is: yes. This is
                            the about page. This page is about. You are
                            currently on the about page reading about the about
                            page.
                        </p>
                        <p className="para">
                            Experts agree — and the experts are this page — that
                            this page is, was, and will continue to be about.
                            Thank you for coming to our TED page.
                        </p>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="section-label">02 — NUMBERS</div>
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-num">1</div>
                        <div className="stat-label">About page</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-num">100%</div>
                        <div className="stat-label">About-ness</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-num">∞</div>
                        <div className="stat-label">Times It Is About</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-num">0</div>
                        <div className="stat-label">
                            Other Pages That Are This About
                        </div>
                    </div>
                </div>
            </section>

            {/* I Feel like a father */}
            <section className="section">
                <div className="section-label">03 — HISTORY</div>
                <h2 className="section-title">The About page Timeline</h2>
                <div className="timeline">
                    <div className="timeline-row">
                        <div className="timeline-year">2019</div>
                        <div className="timeline-line" />
                        <div className="timeline-event">
                            page was not yet about.
                        </div>
                    </div>
                    <div className="timeline-row">
                        <div className="timeline-year alt">2020</div>
                        <div className="timeline-line" />
                        <div className="timeline-event">
                            page considered being about.
                        </div>
                    </div>
                    <div className="timeline-row">
                        <div className="timeline-year">2021</div>
                        <div className="timeline-line" />
                        <div className="timeline-event">
                            page became about. Historic moment.
                        </div>
                    </div>
                    <div className="timeline-row">
                        <div className="timeline-year alt">2022</div>
                        <div className="timeline-line" />
                        <div className="timeline-event">
                            page confirmed still about. Studies ongoing.
                        </div>
                    </div>
                    <div className="timeline-row">
                        <div className="timeline-year">2023</div>
                        <div className="timeline-line" />
                        <div className="timeline-event">
                            page nominated for Most About page Award.
                        </div>
                    </div>
                    <div className="timeline-row">
                        <div className="timeline-year alt">
                            {new Date().getFullYear()}
                        </div>
                        <div className="timeline-line" />
                        <div className="timeline-event">
                            You are here. The page remains about.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section-label">04 — PEOPLE</div>
                <h2 className="section-title">The People Behind About page</h2>
                <div className="team-grid">
                    <div className="team-card">
                        <div className="avatar avatar-yellow">BP</div>
                        <div className="team-name">page McPageface</div>
                        <div className="team-role">Chief About Officer</div>
                        <p className="team-bio">
                            Has been about since day one. Will continue to be
                            about.
                        </p>
                    </div>
                    <div className="team-card">
                        <div className="avatar avatar-red">SA</div>
                        <div className="team-name">Sir About Himself</div>
                        <div className="team-role">Head of Being About</div>
                        <p className="team-bio">
                            Responsible for ensuring this page stays about at
                            all times.
                        </p>
                    </div>
                    <div className="team-card">
                        <div className="avatar avatar-blue">PT</div>
                        <div className="team-name">Paige Thepage</div>
                        <div className="team-role">Senior page Engineer</div>
                        <p className="team-bio">
                            Built the page. Does not know what the page does.
                            Still built it.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="section-label">05 — INTERACTION</div>
                <h2 className="section-title">
                    Confirm That This Is About Page
                </h2>
                <p className="cta-sub">
                    Press the button to confirm. Each press makes this page more
                    about.
                </p>
                <button
                    className={`big-btn${shake ? " shake" : ""}`}
                    onClick={handleBump}
                >
                    YES THIS IS ABOUT PAGE ({count})
                </button>
                {count > 0 && (
                    <p className="confirmation">
                        {count < 5
                            ? `Confirmed ${count} time${count > 1 ? "s" : ""}. About-ness increasing.`
                            : count < 15
                              ? `THIS PAGE IS ${count * 10}% MORE ABOUT NOW. KEEP GOING.`
                              : `MAXIMUM ABOUT REACHED. THIS PAGE IS TRANSCENDENT.`}
                    </p>
                )}
            </section>

            <footer className="footer">
                <div className="footer-text">
                    © {new Date().getFullYear()} ABOUT PAGE CORPORASHON • ALL
                    ABOUTS RESERVED
                </div>
                <div className="footer-sub">
                    This page is about. For more information, please see this
                    page.
                </div>
            </footer>
        </div>
    );
}
