import Container from "@/app/_components/container";
import {EXAMPLE_PATH} from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200 bg-zinc-900">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <div className="grow flex flex-row-reverse">
                        <a href="https://instagram.com/fadakinfo" target="_blank" rel="noopener noreferrer">
                            <img src="/favicon/instagram.svg" alt="instagram-logo"
                                 className="h-8 tracking-tighter leading-tight md:pr-8 filter invert text-zinc-500"/>
                        </a>
                        <a href="tg://resolve?domain=fadakinfo_channel" target="_blank" rel="noopener noreferrer">

                            <img src="/favicon/telegram.svg" alt="telegram-logo"
                                 className="h-8 tracking-tighter leading-tight md:pr-8 filter invert"/>
                        </a>
                        <a href="https://aparat.com/fadakinfo" target="_blank" rel="noopener noreferrer">
                            <img src="/favicon/aparat.svg" alt="aparat-logo"
                                 className="h-8 tracking-tighter leading-tight md:pr-8 filter invert"/>
                        </a>
                    </div>
                    <div className="grow flex flex-row justify-center">
                        <img src="/favicon/faeeian-logo.png" alt="faeeian-logo"
                             className="h-48 tracking-tighter leading-tight md:pr-8 "/>
                    </div>
                    <div className="mb-4 md:mb-0 grow">
                        <h4 className="text-lg font-semibold mb-2">نشانی</h4>
                        <address className="not-italic">
                            تهران - میدان سپاه<br/>
                            خیابان پادگان حضرت ولیعصر (عج)<br/>
                            حسینیه فاطمه الزهرا (س)<br/>
                        </address>
                    </div>

                </div>
            </Container>
        </footer>
    );
}

export default Footer;
