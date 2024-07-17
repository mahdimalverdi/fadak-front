'use client';

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import React from "react";
import Container from "@/app/_components/container";

type Props = {
    images: { source: string }[];
};

export function PostImages({images}:Props) {
    return (
    <section className="py-12 bg-zinc-800">
        <Container>
            <h2 className="text-3xl font-bold text-center mb-8">تصاویر</h2>
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail]}
                    elementClassNames="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 select-none"
                >
                    {images.map((image, index) => (
                        <a key={index} href={image.source}>
                            <img src={image.source} className="transition-all opacity-75 hover:opacity-100 hover:scale-105"/>
                        </a>
                    ))}
                </LightGallery>
        </Container>
    </section>

    )
}