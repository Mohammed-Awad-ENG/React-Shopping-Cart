import { useState, useEffect } from "react";
import "./Home.css";
import usersTestimonials from "../data/usersTestimonials.json";

const testimonials = usersTestimonials;
const checkIconUrl = "../../imgs/check.gif";
const XIconUrl = "../../imgs/Xicon.gif";
const plans = [
    {
        name: "THE DIRT CHEAP ONE",
        price: "$9",
        oldPrice: "$99,999",
        btnClass: "btn btn-black btn-full",
        badge: null,
        featured: false,
        // if you want me
        features: [
            "One (1) homepage",
            "Has pixels in it",
            "Visible to humans (usually)",
            "Technically a website",
            "Not two homepages",
            "No refund if you hate it",
        ],
    },
    {
        name: "THE POPULAR ONE 🔥",
        price: "$49",
        oldPrice: "$4,999,999",
        btnClass: "btn btn-red btn-full",
        badge: "97% PICK THIS™",
        featured: true,
        features: [
            "One (1) homepage (PREMIUM)",
            "A font that isn't Comic Sans",
            "Mobile... ish",
            "We spell-check 60% of words",
            "1 free revision (must be identical)",
            "Certificate of Homeownership (PDF)",
        ],
    },
    {
        name: "THE BALLER PACKAGE",
        price: "$999",
        oldPrice: "$∞",
        btnClass: "btn btn-blue btn-full",
        badge: null,
        featured: false,
        features: [
            "One (1) homepage (LEGENDARY)",
            "Custom color (blue, or red)",
            "We name a star after it",
            "Hand-delivered via email",
            "We will Tweet about it once",
            "Lifetime supply of vibes",
        ],
    },
];


const BUY_MESSAGES = [
    "💸 Adding to cart... it's gone. Buy another.",
    "🎉 YESSS! You're about to have a homepage!",
    "🏠 A homepage! A HOMEPAGE! FOR YOU!",
    "🤑 Your wallet is crying. Your site is thriving.",
    "🚀 Loading your future... just keep PAYING.",
];

export default function Home() {
    const [timeLeft, setTimeLeft] = useState({ h: 0, m: 11, s: 47 });
    const [toastMsg, setToastMsg] = useState("");
    const [buyCount, setBuyCount] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(({ h, m, s }) => {
                s--;
                if (s < 0) {
                    s = 59;
                    m--;
                }
                if (m < 0) {
                    m = 59;
                    h--;
                }
                if (h < 0) {
                    h = 23;
                    m = 59;
                    s = 59;
                }
                return { h, m, s };
            });
        }, 1000);
        return () => clearInterval(id);
    }, []);

    const pad = (n: number) => String(n).padStart(2, "0");

    const handleBuy = (M?: string | React.MouseEvent) => {
        const msg =
            typeof M === "string"
                ? M
                : BUY_MESSAGES[buyCount % BUY_MESSAGES.length];
        setBuyCount((c) => c + 1);
        setToastMsg(msg);
        setTimeout(() => setToastMsg(""), 3000);
    };
    const faqs = [
    {
        q: "What even IS a homepage?",
        a: "Great question. It's the page people land on. It says who you are. You probably don't have one. That's why you're here. Buy one.",
    },
    {
        q: "Do I actually need a homepage?",
        a: "Studies show 100% of people who bought a homepage now have a homepage. The same studies show 0% of people who didn't buy one have one. Think about it.",
    },
    {
        q: "What if I already have a homepage?",
        a: "Buy another one. You could have TWO homepages. That's called power.",
    },
    {
        q: "Is this a real business?",
        a: "Our lawyers have advised us not to answer this question. But yes.",
    },
    {
        q: "How long does delivery take?",
        a: "Instantly! Or up to 6-8 business decades. We are not sure yet.",
    },
    {
        q: "Can I get a refund?",
        a: (
            <span>
                The refund button is right here:{" "}
                <span style={{fontWeight: "bold" , cursor: "pointer"}} onClick={() => {
                                handleBuy("LOL");
                                setTimeout(() => {
                                    window.location.href = "https://google.com";
                                }, 1000);
                            }}>Refund</span>.
            </span>
        ),
    },
];
    return (
        <>
            {toastMsg && <div className="toast">{toastMsg}</div>}

            <div className="marquee-bar">
                <span>
                    🔥 LIMITED TIME OFFER &nbsp;•&nbsp; WE HAVE EXACTLY 847
                    HOMEPAGES LEFT &nbsp;•&nbsp; ACT NOW &nbsp;•&nbsp; YOUR
                    COMPETITORS ALREADY HAVE HOMEPAGES &nbsp;•&nbsp; DO YOU WANT
                    TO LOSE??? &nbsp;•&nbsp; BUY A HOMEPAGE TODAY &nbsp;•&nbsp;
                    🔥 &nbsp;•&nbsp; LIMITED TIME OFFER &nbsp;•&nbsp; WE HAVE
                    EXACTLY 847 HOMEPAGES LEFT &nbsp;•&nbsp;
                </span>
            </div>

            <section className="home-hero">
                <div className="home-hero-inner">
                    <div>
                        <span className="home-hero-badge">
                            As Seen On: The Internet
                        </span>
                        <h1>
                            ARE YOU TIRED
                            <br />
                            OF NOT HAVING
                            <br />A <em>HOMEPAGE?</em>
                        </h1>
                        <p className="home-hero-sub">
                            "The internet is vast. None of it is yours.{" "}
                            <strong>Until now.</strong> We sell homepages from a
                            homepage. The circle of life."
                        </p>

                        <button className="btn btn-black" onClick={handleBuy}>
                            🏠 YES! I WANT A HOMEPAGE!
                        </button>
                        <p
                            style={{
                                marginTop: 10,
                                fontSize: 11,
                                opacity: 0.55,
                            }}
                        >
                            * Award self-assigned &nbsp;|&nbsp; † Guarantee
                            conceptual
                        </p>
                    </div>
                    <div className="home-hero-icon-box">
                        <div className="home-hero-img">
                            <img
                                src="../imgs/homePageImg.png"
                                alt="home Page img"
                                width={200}
                            />
                        </div>
                        <p className="home-hero-aside-note">
                            Artist's impression of
                            <br />
                            your future homepage
                        </p>
                    </div>
                </div>
            </section>

            <div className="countdown-bar">
                <span className="countdown-label">
                    THIS DEAL EXPIRES IN (Don't Reload This Page):
                </span>
                <div className="countdown-digits">
                    {(["HOURS", "MINS", "SECS"] as const).map((lbl, i) => {
                        const val = [timeLeft.h, timeLeft.m, timeLeft.s][i];
                        return (
                            <div key={lbl} className="countdown-unit">
                                <span className="num">{pad(val)}</span>
                                <span className="lbl">{lbl}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <section className="problem-solution">
                <div className="section">
                    <div className="section-header">
                        <h2>THE BRUTAL TRUTH</h2>
                        <p>
                            Here is what your life looks like, with and without
                            a homepage. Science.
                        </p>
                    </div>
                    <div className="ps-grid">
                        <div className="ps-col">
                            <h3>😭 Without a Homepage</h3>
                            <ul className="ps-list">
                                {[
                                    "People Google you and find nothing",
                                    "Your mom doesn't know what you do",
                                    "Pigeons don't know about your business",
                                    "You have no homepage (obvious)",
                                    "This bullet point also applies to you",
                                ].map((item) => (
                                    <li key={item}>
                                        <span className="icon">
                                            <img
                                                src={XIconUrl}
                                                alt="checkIconUrl"
                                                width="35px"
                                            />
                                        </span>{" "}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="ps-col">
                            <h3>🤩 With a Homepage</h3>
                            <ul className="ps-list">
                                {[
                                    "People Google you and find SOMETHING",
                                    "Your mom says 'oh, that's a website!'",
                                    "Pigeons still don't care (sorry)",
                                    "You have a homepage (this one!)",
                                    "This bullet point is also positive",
                                ].map((item) => (
                                    <li key={item}>
                                        <span className="icon">
                                            <img
                                                src={checkIconUrl}
                                                alt="checkIconUrl"
                                                width="35px"
                                            />
                                        </span>{" "}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-section">
                <div className="section">
                    <div className="section-header">
                        <h2>Incredible Pricing That Makes Sense</h2>
                        <p>
                            All prices slashed from numbers we completely made
                            up five minutes ago.
                        </p>
                    </div>
                    <div className="pricing-grid">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`pricing-card${plan.featured ? " featured" : ""}`}
                            >
                                {plan.badge && (
                                    <div className="plan-badge">
                                        {plan.badge}
                                    </div>
                                )}
                                <div className="plan-name">{plan.name}</div>
                                <div className="plan-old-price">
                                    Was: {plan.oldPrice}
                                </div>
                                <div className="plan-price">{plan.price}</div>
                                <ul className="plan-features">
                                    {plan.features.map((f) => (
                                        <li key={f}>
                                            {f.charAt(0) == "N" ? (
                                                <img
                                                    src={XIconUrl}
                                                    alt="checkIconUrl"
                                                    width="30px"
                                                />
                                            ) : (
                                                <img
                                                    src={checkIconUrl}
                                                    alt="checkIconUrl"
                                                    width="30px"
                                                />
                                            )}

                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={plan.btnClass}
                                    onClick={handleBuy}
                                >
                                    SHUT UP AND TAKE MY MONEY
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="stats-bar">
                <div className="stats-grid">
                    {(
                        [
                            ["10,000+", "Homepages Sold"],
                            ["∞", "Satisfaction Rate"],
                            ["0", "Refunds Given*"],
                            ["1", "Internet Used"],
                        ] as const
                    ).map(([num, label]) => (
                        <div key={label} className="stat-item">
                            <span className="home-stat-num">{num}</span>
                            <span className="stat-label">{label}</span>
                        </div>
                    ))}
                </div>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 11,
                        opacity: 0.45,
                        padding: "12px 0 0",
                        fontFamily: "var(--font-body)",
                    }}
                >
                    * We just don't have a refund button yet
                </p>
            </div>

            <section className="testimonials-section">
                <div className="section">
                    <div className="section-header">
                        <h2>Real Words From Real Humans 👀</h2>
                        <p>
                            * Totally real. We have the screenshots. You can't
                            see them but they exist.
                        </p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t) => (
                            <div key={t.name} className="testimonial-card">
                                <span className="testimonial-avatar">
                                    {t.avatar}
                                </span>
                                <div className="testimonial-stars">
                                    {"★".repeat(t.stars)}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <p className="testimonial-name">— {t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="section">
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p style={{ color: "var(--black)" }}>
                            These were asked once, by us, to ourselves, So you
                            don't have to.
                        </p>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item">
                                <button
                                    className={`faq-q${openFaq === i ? " open" : ""}`}
                                    onClick={() =>
                                        setOpenFaq(openFaq === i ? null : i)
                                    }
                                >
                                    {faq.q}
                                    <em className="faq-chevron">▾</em>
                                </button>
                                {openFaq === i && (
                                    <div className="faq-a">{faq.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-cta-section ">
                <div className="cta-inner">
                    <h2>
                        BUY A HOMEPAGE.
                        <br />
                        BE SOMEONE.
                    </h2>
                    <p className="cta-sub">
                        "I had dreams. I had ambitions. I had a LinkedIn. But I
                        didn't have a homepage.{" "}
                        <strong>I have regrets."</strong>
                    </p>
                    <button
                        className="btn btn-yellow"
                        onClick={handleBuy}
                        style={{ fontSize: 22 }}
                    >
                        🎉 BUY MY HOMEPAGE NOW!!!
                    </button>
                    <p className="cta-fine">
                        By clicking this button you agree to our Terms of
                        Service, Privacy Policy, Cookie Policy, Vibes Policy,
                        and the understanding that we're all just out here
                        trying our best.
                    </p>
                </div>
            </section>

            <footer className="footer">
                <span className="footer-logo">HomePage™</span>
                <ul className="footer-links">
                    {[
                        <a
                            onClick={() =>
                                handleBuy("You Can Give Us mony But We Can't")
                            }
                        >
                            Terms
                        </a>,
                        <a onClick={() => handleBuy("NO")}>Privacy</a>,
                        <a
                            onClick={() => {
                                handleBuy("LOL");
                                setTimeout(() => {
                                    window.location.href = "https://google.com";
                                }, 1000);
                            }}
                        >
                            Refunds
                        </a>,
                        <a onClick={() => handleBuy("we're busy")}>Contact</a>,
                    ].map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}
                </ul>
                <p className="footer-copy">
                    © {new Date().getFullYear()} HomePage™ — Not liable for:
                    broken dreams, existing homepages, the concept of websites,
                    or the internet itself.
                </p>
            </footer>
        </>
    );
}
