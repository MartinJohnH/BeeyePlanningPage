import React from 'react';

//components
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import PlanningCardsHeader from "../components/PlanningCardsHeader";
import PlanningCards from "../components/PlanningCards";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <TopBar />
            <Header />
            <PlanningCardsHeader month="JANVIER"/>
            <PlanningCards />
            <Footer />
        </>
    );
}

export default HomePage;
