import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Asegúrate de que los estilos estén correctamente definidos en este archivo

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-body']}>
        <div className={styles['header-container']}>
          <div className={styles['container-title']}>
            <h1 className={styles.title}>Like or Dislike</h1>
            <h2 className={styles.subtitle}>Rick and Morty, Pokemon, and Superheroes</h2>
          </div>
          <div className={styles['nav-buttons']}>
            <Link href="/" passHref>
                <button className={styles.button}>Inicio</button>
              </Link>
            <Link href="/most-liked" passHref>
                <button className={styles.button}>El con más likes</button>
              </Link>
              <Link href="/most-disliked" passHref>
                <button className={styles.button}>El con más dislikes</button>
              </Link>
              <Link href="/last-vote" passHref>
                <button className={styles.button}>El último votado</button>
              </Link>
              <Link href="/status" passHref>
                <button className={styles.button}>Búsqueda</button>
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}