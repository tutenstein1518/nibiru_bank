import styles from "../../style";
import { discount, robot } from "../../assets";
export const Hero = () => (
  <section id="home" className={`flex mb:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"></div>
    </div>
  </section>
);
