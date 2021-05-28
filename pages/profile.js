import Link from 'next/link'
import Image from 'next/image';


export default function () {
    return <>
        <Image src="/images/profile.jpg" height={144} width={144} alt="Fraganya"/>
        <h3>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </h3>
    </>
}