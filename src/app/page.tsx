import Image from 'next/image';
import styles from './page.module.css';
import ImageComponent from './components/imageComponent';

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Send money abroad from the UK in 3 easy steps</h1>
      <div className={styles.imageComp}>
        <ImageComponent src="/image1.jpg" />
        <ImageComponent src="/image2.jpg" />
        <ImageComponent src="/image3.jpg" />
      </div>
    </div>
  );
}
