import markdownStyles from "./markdown-styles.module.css";
import React from "react";
import {PostImages} from "@/app/_components/post-images";
import {PostPersons} from "@/app/_components/post-persons";
import {PostVideos} from "@/app/_components/post-videos";
import {PostMusics} from "@/app/_components/post-musics";
import Container from "./container";

type Props = {
    content: string;
};

export function PostBody({content}: Props) {
    const praisers = [{
        name: 'حاج اکبر مولایی',
        imageUrl: 'https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2Fa_molaei.jpg?versionId=',
        title: 'پیش منبر',
    }, {
        name: 'حجت الاسلام حامد کاشانی',
        imageUrl: 'https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2Fh_kashani.jpg?versionId=',
        title: 'سخنران',

    }, {
        name: 'حاج سعید حدادیان',
        imageUrl: 'https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2Fs_hadadian.jpg?versionId=',
        title: 'مداح',
    }, {
        name: 'حاج محمدرضا طاهری',
        imageUrl: 'https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2Fmr_taheri.jpg?versionId=',
        title: 'مداح',
    }, {
        name: 'کربلایی محمدحسین حدادیان',
        imageUrl: 'https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2Fmh_hadadian.jpg?versionId=',
        title: 'مداح',
    }, {
        name: 'کربلایی حسین طاهری',
        imageUrl: 'https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2Fh_taheri.jpg?versionId=',
        title: 'مداح',
    }, {
        name: 'کربلایی علیرضا طاهری',
        imageUrl: 'https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2Fa_taheri.jpg?versionId=',
        title: 'مداح',
    }, // More people...
    ]
    const videos = [{videoUrl: "https://www.aparat.com/video/video/embed/videohash/sll5e0f/vt/frame?titleShow=true"}, {videoUrl: "https://www.aparat.com/video/video/embed/videohash/bta1mwr/vt/frame?titleShow=true"}, {videoUrl: "https://www.aparat.com/video/video/embed/videohash/hitu738/vt/frame?titleShow=true"}, {videoUrl: "https://www.aparat.com/video/video/embed/videohash/eou6s6t/vt/frame?titleShow=true"}, {videoUrl: "https://www.aparat.com/video/video/embed/videohash/akeppmh/vt/frame?titleShow=true"},];
    const playlist: { source: string; title: string }[] = [{
        title: 'پیش منبر / حاج اکبر مولایی', source: 'https://dl.fadak.me/1403/03/08/1403030801.mp3'
    }, {
        title: 'سخنرانی / حجت الاسلام حامد کاشانی', source: 'https://dl.fadak.me/1403/03/08/1403030802.mp3'
    }, {
        title: 'صحبت / حاج سعید حدادیان', source: 'https://dl.fadak.me/1403/03/08/1403030803.mp3'
    }, {
        title: 'پیش منبر / حاج اکبر مولایی', source: 'https://dl.fadak.me/1403/03/08/1403030801.mp3'
    }, {
        title: 'سخنرانی / حجت الاسلام حامد کاشانی', source: 'https://dl.fadak.me/1403/03/08/1403030802.mp3'
    }, {
        title: 'صحبت / حاج سعید حدادیان', source: 'https://dl.fadak.me/1403/03/08/1403030803.mp3'
    }, {
        title: 'پیش منبر / حاج اکبر مولایی', source: 'https://dl.fadak.me/1403/03/08/1403030801.mp3'
    }, {
        title: 'سخنرانی / حجت الاسلام حامد کاشانی', source: 'https://dl.fadak.me/1403/03/08/1403030802.mp3'
    }, {
        title: 'صحبت / حاج سعید حدادیان', source: 'https://dl.fadak.me/1403/03/08/1403030803.mp3'
    },]

    const images = [{
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05334-Copy-1030x687.jpg?versionId=",
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05359-Copy.jpg?versionId=",
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05381-Copy-1030x687.jpg?versionId=",
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05398-Copy-1030x687.jpg?versionId=",
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05452-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05460-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05485-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05492-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05524-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05549-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05562-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05662-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05684-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05713-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC05721-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC08767-Copy-1030x687.jpg?versionId="
    }, {
        source: "https://mahdi-test.s3.ir-thr-at1.arvanstorage.ir/mettings%2F1403%2Fweekly%2F03-25%2FDSC09278-Copy-1030x687.jpg?versionId="
    }];

    return (<div className="flex flex-col gap-y-10">
            <Container>
                <div
                    className={markdownStyles["markdown"]}
                    dangerouslySetInnerHTML={{__html: content}}
                />
            </Container>
            <PostPersons title="مداحان" people={praisers}></PostPersons>
            <PostImages images={images}></PostImages>
            <PostVideos videos={videos}></PostVideos>
            <PostMusics playlist={playlist}></PostMusics>
        </div>

    );
}
