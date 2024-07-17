import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import Header from "@/app/_components/header";
import React from "react";
import {Live} from "@/app/_components/live";

export default async function LivePage({ params }: Params) {
    return (
        <main>
            <Header />
            <article  className="pt-24">
                <Live></Live>
            </article>
        </main>)
}