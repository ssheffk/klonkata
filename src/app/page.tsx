'use client';
import { useEffect } from 'react';
import styles from './page.module.css';
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Sections from '@/components/Sections';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Sections />
    </main>
  );
}
