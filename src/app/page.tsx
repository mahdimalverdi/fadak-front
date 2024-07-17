import Container from "@/app/_components/container";
import {Intro} from "@/app/_components/intro";
import {getAllPosts} from "@/lib/api";
import {NextMeeting} from "@/app/_components/next-meeting";
import {Meetings} from "@/app/_components/meetings";
import {Videos} from "@/app/_components/videos";
import React from "react";
import {Live} from "@/app/_components/live";

export default function Index() {
    const allPosts = getAllPosts();

    const heroPost = allPosts[0];

    const morePosts = allPosts.slice(1);

    return (<main>
        <Intro/>
        <Container>
            <div className="flex lg:flex-row flex-col justify-between lg:gap-10">
                <NextMeeting/>
                <Meetings posts={allPosts}></Meetings>
            </div>
        </Container>
        <Videos></Videos>
    </main>);
}
