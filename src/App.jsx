import { useData } from "./DataContext"; // Import the custom hook
import { useState } from "react";

import Header from "./modules/essentials/Header";
import Hero from "./modules/essentials/Hero";
import Footer from "./modules/essentials/Footer";

export default function App() {
    const data = useData();

    return (
        <div className="page__wrapper flex-column">
            <Header></Header>
            <Hero></Hero>
            <Footer></Footer>
        </div>
    );
}
