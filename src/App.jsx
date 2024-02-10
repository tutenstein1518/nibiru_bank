import React from "react";
import styles from "./style";
// ui
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Stats } from "./components/stats";
import { Business } from "./components/business";
import { Billing } from "./components/billing";
import { CardDeal } from "./components/card-deal";
import { Testimonals } from "./components/testimonials";
import { Clients } from "./components/clients";
import { CTA } from "./components/CTA";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden color">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonals />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
