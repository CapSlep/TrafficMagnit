export default function Hero() {
    return (
        <main className="hero container">
            <div className="hero__wrapper flex-column">
                <section className="hero__text-section flex-column">
                    <h2 className="hero__title">About Us</h2>
                    <p className="hero__paragraph">
                        We are a team of professionals in affiliate marketing,
                        specializing in the CC Submit vertical. Since 2018, we
                        have successfully generated high-quality traffic through
                        various channels and tools. Our main traffic source is
                        Facebook, where we find and engage the target audience
                        for our partners.
                    </p>
                </section>
                <section className="hero__text-section flex-column">
                    <h2 className="hero__title">Our Achievements</h2>
                    <ul className="list list-unordered">
                        <li className="list__item-unordered">
                            5+ years of experience in affiliate marketing;
                        </li>
                        <li className="list__item-unordered">
                            Scalable campaigns with high conversion rates;
                        </li>
                        <li className="list__item-unordered">
                            Flexibility and adaptation to Facebook algorithm
                            changes;
                        </li>
                        <li className="list__item-unordered">
                            Collaboration with top affiliate networks.
                        </li>
                    </ul>
                </section>
                <section className="hero__text-section choose__section flex-column">
                    <h2 className="hero__title choose__title">
                        Why Choose Us?
                    </h2>
                    <ul className="choose__list flex-row">
                        <li className="choose__item ">
                            <h3 className="choose__item-title">
                                Effective strategies
                            </h3>{" "}
                            <span className="choose__item-text">
                                We develop and test new approaches to achieve
                                the best results.
                            </span>
                        </li>
                        <li className="choose__item ">
                            <h3 className="choose__item-title">
                                Clear analytics
                            </h3>{" "}
                            <span className="choose__item-text">
                                We closely monitor metrics, allowing us to
                                optimize campaigns in real-time.
                            </span>
                        </li>
                        <li className="choose__item ">
                            <h3 className="choose__item-title">
                                Experienced team
                            </h3>{" "}
                            <span className="choose__item-text">
                                Each member of our team is an expert with deep
                                knowledge in their field.
                            </span>
                        </li>
                        <li className="choose__item ">
                            <h3 className="choose__item-title">Reliability</h3>{" "}
                            <span className="choose__item-text">
                                We deliver on our promises and achieve goals on
                                time.
                            </span>
                        </li>
                    </ul>
                </section>
                <section className="hero__text-section flex-column">
                    <h2 className="hero__title">Services</h2>
                    <ul className="list list-unordered">
                        <li className="list__item-unordered">
                            Launching and managing advertising campaigns on
                            Facebook;
                        </li>
                        <li className="list__item-unordered">
                            Targeting based on in-depth audience analysis;
                        </li>
                        <li className="list__item-unordered">
                            Creating creatives and landing pages, optimized for
                            conversions;
                        </li>
                        <li className="list__item-unordered">
                            Analytics and optimization of ad campaigns;
                        </li>
                        <li className="list__item-unordered">
                            Consulting and support on affiliate marketing
                            matters.
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
