import React from 'react';

//components
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import PlanningCardsHeader from "../components/PlanningCardsHeader";
import PlanningCards from "../components/PlanningCards";
import Footer from "../components/Footer";

function HomePage() {
    const daysArray = ["LUNDI", "MARDI", "MERCREDI", "JEUDI", "VENDREDI", "SAMEDI", "DIMANCHE"];
    return (
        <div className="main-grid">
            <TopBar />
            <Header />
            <PlanningCardsHeader
                month="JANVIER"
                currentDay="MARDI"
                daysArray={daysArray}
            />
            <PlanningCards daysArray={daysArray} />
            <Footer />
        </div>
    );
}

export default HomePage;
