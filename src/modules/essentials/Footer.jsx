export default function Footer() {
    return (
        <footer className=" footer ">
            <section className="container footer__text-section flex-column">
                <h2 className="footer__title">Contact Us</h2>
                <p className="footer__paragraph">
                    We’d be happy to collaborate! Leave a request for a
                    consultation, and we’ll get back to you as soon as possible.
                </p>
                <span className="footer__contacts">
                    <b>Email:</b>{" "}
                    <a
                        className="hyperlink"
                        href="mailto:trafficmagnit@gmail.com"
                    >
                        trafficmagnit@gmail.com
                    </a>
                </span>
            </section>
        </footer>
    );
}
