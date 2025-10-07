import Image from "next/image";
import styles from "./header.module.css";
import Link from 'next/link';


export default function Home() {
    return (
        <div className={styles.header}>
            <Link className={styles.button} href="/">Home</Link>
            <Link className={styles.button} href="/folder">Folder</Link>
            <Link className={styles.button} href="https:/google.com" target="_blanc">google</Link>
        </div>
    )
}
