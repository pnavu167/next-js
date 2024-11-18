import Link from 'next/link';

export default function Page() {
    console.log('Page render');
    return (
        <div>
            this is page
            <Link href="/">goto index</Link>
        </div>
    );
}
