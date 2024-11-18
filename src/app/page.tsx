import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="">
            index
            <Link href={'/posts'}>go to post</Link>
        </div>
    );
}
