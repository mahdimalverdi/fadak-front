import React from "react";
import Container from "@/app/_components/container";

export function Live() {
    return (

        <section id="live" className="py-12">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-8">پخش‌زنده</h2>
                <div
                    className="grid grid-cols-1 auto-cols-max gap-x-2 gap-y-2 justify-center w-full">


                    <div className="relative w-full h-0 pb-[56.25%]">
                        <iframe
                            src="https://www.aparat.com/embed/live/fadakinfo"
                            className="absolute top-0 left-0 w-full h-full border-none"
                            allowFullScreen={true}>
                        </iframe>
                    </div>

                </div>
            </Container>
        </section>

    )
}