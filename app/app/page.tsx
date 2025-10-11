import Image from "next/image";
import styles from "./page.module.css";
import Cuestion from "./home/components/cuestion";
import Footer from "./home/components/footer";
import Me from "./home/components/me";
import Treecub from "./home/components/treecub";
import Bio from "./home/components/bio";




export default function Home() {
  return (
    <div className={styles.page}>
{/* <Cuestion/>
<Footer/>
<Me/> */}

<Treecub/>
<Bio/>
<Footer/>

    </div>
  );
}
