import Link from "next/link";
import styles from "./intro.module.css"

export function Intro() {
    return (<section className={styles.intro}>
            <div className="h-full flex-col flex items-center w-full justify-center select-none content-center">
                <Link href="/" className="hover:underline">
                    <img src="/favicon/fadak-logo.png" alt="fadak-logo"
                         className="tracking-tighter leading-tight md:pr-8"/>
                </Link>
                <div>
                    پایگاه حفظ و نشر آثار کربلایی حسین طاهری
                </div>
                <div className="sticky flex flex-rows justify-center divide-x-reverse divide-x text-xl mt-5 content-center items-center">
                    <a href="#meetings" className="p-2 hover:text-red-900 text-center">مراسم‌ها</a>
                    <a href="#videos" className="p-2 hover:text-red-900 text-center">نماهنگ‌ها</a>
                    <a href="/live" className="p-2 hover:text-red-900 text-center">پخش زنده</a>
                </div>
            </div>
        </section>);
}
