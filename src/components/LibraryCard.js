import React, {useState, useEffect, useRef} from 'react'
import '../App.css';
import './LibraryCard.css';
import {Link} from "react-router-dom";
import VideoCardsItem from "./VideoCardsItem";
import {Select} from "antd";

const LibraryCard = () => {
    const [clicked, setClicked] = useState('media');
    const [searchTerm, setSearchTerm] = useState('');


    const handleClick = (id) => {
        setSearchTerm('');// When clicking on a major category, clear the subcategory filter properties
        setClicked(id);
    };
    const myDataArray = [
        {
            src: "",
            title: "Sound Track - Pūtātara",
            text: "",
            content: "The urgent, carrying sound of the pūtātara (shell \n" +
                "trumpet) could be heard over a long distance, so it is \n" +
                "ideal for signalling or ceremonial purposes. Pūtātara \n" +
                "were usually made from native conch shells, but \n" +
                "sometimes from triton shells, a non native species \n" +
                "that occasionally washed up on northern beaches. This \n" +
                "19th century example is made from a conch shell with \n" +
                "a carved wooden mouthpiece, and a feather and muka \n" +
                "(flax fibre) thong. Listen to the pūtātara being played.",
            path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            buttontext: "View External Resource",
            type:"media"
        },
        {
            src: "",
            title: "He Wakaputanga 1835 andTe Tiriti o Waitangi 1840",
            text: "",
            content: "Explanation of He Wakaputanga 1835 and Te Tiriti oWaitangi 1840 by Henare Manukau (RangatiraProfessor)",
            path: "https://www.youtube.com/watch?v=jxy6cGMA0kM",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "No partnership in the Treaty?",
            text: "",
            content: "Hear a kōrero from the He Tohu exhibition about TeTiriti with Moana Jackson, Dr Donald Brash and ProfDame Anne Salmond.",
            path: "https://www.youtube.com/watch?v=mGjrhWKFljc",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Dame Whina Cooper",
            text: "Tino Rangatiratanga",
            content: "Hear a kōrero from the He Tohu exhibition about TeTiriti with Moana jackson, Dr Donald Brash and ProfDame Anne Salmond.",
            path: "https://www.youtube.com/watch?v=1jmbM5krIMg&t=9s",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Witi lhimaera on DameWhina Cooper",
            text: "",
            content: "Witi lhimaera reflects on what makes him most proudto be a New Zealander.",
            path: "https://www.youtube.com/watch?v=6Oh3dxWIQ18",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Whaea Rangatira Titiwhai Harawira",
            text: "Tino Rangatiratanga",
            content: "A range of videos that talks about He WakaputangaArticles.",
            path: "https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=he+whakaputanga+1835+articles+1+to+4&type=E210NZ413G0#action=view&id=174&vid=ab12cfe6acc7b3460cae9898876acd9d",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Tino Rangatiratanga",
            text: "Maori Sovereignty",
            content: "A range of videos that talks about He WhakaputangaArticles.",
            path: "https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=he+whakaputanga+1835+articles+1+to+4&type=E210NZ413G0#action=view&id=69&vid=11acb8c8f828886641ee60af40c-63632",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "A Brave Document",
            text: "Exhibition about Te Tiriti",
            content: "He Tohu exhibition about Te Tiriti with Dame loanMetge, Moana lackson, Stefanie Lash, Rt Hon DameSian Elias, Dr David Williams and Dr Claudia Orange,DNZM.",
            path: "https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=he+whakaputanga+1835+articles+1+to+4&type=E210NZ413G0#action=view&id=175&vid=84566a3fa0e31ad364038ff529d419b5",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Te-Reo Maori",
            text: "Maori Language by great Rangatira",
            content: "A range of videos that talks about He WhakaputangaArticles.",
            path: "https://nz.video.search.yahoo.com/search/video?-fr=mcafee&ei=UTF-8&p=he+whakaputanga+1835+arti%02cles+1+to+4&type=E210NZ413G0#action=view&id=118&vid=9b11992e5242a98bdc176def10bd6abb",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        //3
        {
            src: "",
            title: "Te Tiriti o Waitangi",
            text: "By Natalie Coates (lawyer)",
            content: "No Description Available",
            path: "https://www.youtube.com/watch?v=uKkria9Leo8",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Kīngitanga – Maori King arrival at Waitangi/ Ngapuhi Nui Tonu",
            text: "",
            content: "No Description Available",
            path: "https://www.youtube.com/watch?v=h1lp5kbkRhQ",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Coalition Government Arrival",
            text: "",
            content: "No Description Available",
            path: "https://www.youtube.com/watch?v=FfxesodGssU",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Coalition Government TODAY – Changes to the Principles to Te Tiriti o Waitangi 1840",
            text: "",
            content: "No Description Available",
            path: "https://www.youtube.com/watch?v=HmoZ8f-D8LY",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        //2
        {
            src: "",
            title: "Wai 262 Flora and Fauna / Intellectual Property Claim",
            text: "Historical",
            content: "No Description Available",
            path: "https://www.wai262.nz/Historical-videos",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Starting Discussions of the  Wai 262 claim",
            text: "Historical",
            content: "View a video depicting a discussion about the Wai 262 claim that is being addressed by Moana Jackson. ",
            path: "https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Hema+Nui+A+Tawhaki%2C+Wai+262+%2C+Audio+Video&type=E210NZ413G0#action=view&id=55&vid=e7c133fb8dbf38e49d8ae5fdd0045a55",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Whaea Rangatira",
            text: "By Saana Murray- Ngati Kuri (original claimant) and others",
            content: "No Description Available",
            path: "https://www.nzonscreen.com/title/wai-262",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Rangatira Moana Jackson",
            text: "Original Claimant, Ngati Kahungungu",
            content: "No Description Available",
            path: "https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Wai+262+Audio+Video&type=E210NZ413G0#action=view&id=16&vid=c68b5a626696a055a15794f88c4eb4f8",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Hori Parata - Ngati Wai",
            text: "Note: Original Claimant was Witi McMath",
            content: "No Description Available",
            path: "https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Wai+262+Audio+Video&type=E210NZ413G0#action=view&id=30&vid=c6673400083ca3c2edaa58f5680caa45",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "International Wai 262 Claim (Lawyer of The Claim)",
            text: "By Leo Watson",
            content: "No Description Avaiable",
            path: "https://www.youtube.com/watch?v=PjYCYNIQu8E",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Devil in The Detail",
            text: "By Leo Watson",
            content: "No Description Available",
            path: "https://www.youtube.com/watch?v=Ypy5WDHu9hU",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Maui Solomon",
            text: "One of the Legal Lawyers for  the Wai 262 Claim",
            content: "No Description Available",
            path: "https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Wai+262+Audio+Video&type=E210NZ413G0#action=view&id=14&vid=810cedf70870646d533c28946fba2d50",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "NZ Government Approach to  the Wai 262",
            text: "By Minister Nanaia Mahuta",
            content: "No Description Available",
            path: "https://nz.video.search.yahoo.com/search/video;_ylt=Awrx.9N3PuJlaYQeZ9IeZwx.;_ylu=c2VjA3NlYXJjaAR2dGlkAw--;_ylc=X1MDMjExNDc0MjA0NgRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6dixtOnNiLHJnbjp0b3AEZ3ByaWQDRGU5UmZvSGZULmVGRklXS3FlenQ0QQRuX3JzbHQDMARuX3N1Z2cDMARvcmlnaW4DbnoudmlkZW8uc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMjQEcXVlcnkDSm9obiUyMEhpcHBvbGl0ZSUyQyUyMFdhaSUyMDI2MiUyMAR0X3N0bXADMTcwOTMyNjAxNw--?p=John+Hippolite%2C+Wai+262+&ei=UTF-8&fr2=p%3As%2Cv%3Av%2Cm%3Asb%2Crgn%3Atop&fr=mcafee&type=E210NZ413G0#id=27&vid=07014d96d8c457a924b298fe9fefaacc&action=view",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        {
            src: "",
            title: "Wai 262",
            text: "By Oliver Sutherland",
            content: "No Description Available",
            path: "https://nz.video.search.yahoo.com/search/video;_ylt=AwrKACrXOeJlC9octCoeZwx.;_ylu=c2VjA3NlYXJjaAR2dGlkAw--;_ylc=X1MDMjExNDc0MjA0NgRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6dixtOnNiLHJnbjp0b3AEZ3ByaWQDQTlIYW4wMndTakdaRXBJMHZETlQwQQRuX3JzbHQDMARuX3N1Z2cDMARvcmlnaW4DbnoudmlkZW8uc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMzkEcXVlcnkDT2xpdmVyJTIwU3V0aGVybGFuZCUyQyUyMFdhaSUyMDI2MiUyQyUyMEF1ZGlvJTIwVmlkZW8EdF9zdG1wAzE3MDkzMjU0NTY-?p=Oliver+Sutherland%2C+Wai+262%2C+Audio+Video&ei=UTF-8&fr2=p%3As%2Cv%3Av%2Cm%3Asb%2Crgn%3Atop&fr=mcafee&type=E210N",
            buttontext: "View External Resource",
            type:"mediaAndVideos"
        },
        //taonga
        {
            src: "/images/1. Kumara.jpg",
            title: "Kumara",
            text: "Taonga Introduced for Protection",
            content: "A potato. One of the first taonga that is introduced for \n" +
                "the protection of the Wai 262 Fauna and Flora Claim.",
            // path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content2",
            buttontext: "View Relevant Web Page",
            type:"taonga"
        },
        {
            src: "/images/2 - Pohutakawa.jpg",
            title: "Pohutakawa",
            text: "Maori Xmas Tree",
            content: "One of the first taonga that is introduced for the \n" +
                "protection of the Wai 262 Fauna and Flora Claim",
            // path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content2",
            buttontext: "View Relevant Web Page",
            type:"taonga"
        },
        {
            src: "/images/3 - Koromiko.jpg",
            title: "Koromiko",
            text: "Maori Rongoa",
            content: "One of the first taonga that is introduced for the \n" +
                "protection of the Wai 262 Fauna and Flora Claim.",
            // path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content2",
            buttontext: "View Relevant Web Page",
            type:"taonga"
        },
        //info
        {
            src: "/images/Saana Waitta-Murray.jpg",
            title: "Saana Waitai-Murray",
            text: "Ngati Kuri\n" +
                "22 November 1925-3 September 2011",
            content: "Saana Murray was a poet, a master weaver, aconservationist, a politician and an elder of Ngati Kuri.One of the initial claimants of Wai 262, she was a firmbeliever that the Treaty of WVaitangi guaranteed thecustodianship of Maori things by Maori people.",
            // path: "https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content8-1",
            buttontext: "View Relevant Web Page",
            type:"info"
        },
        {
            src: "/images/Tamaki Witana.jpg",
            title: "Hema Nui A Tawhaki - Del Wihongi",
            text: "Te Rarawa\n" +
                "10 0ctober 1935-26 july 2008",
            content: "Hema Nui A Tawhaki Witana was born on 10 October1935, in Mangamuka, Auckland, North lsland, NewZealand as the daughter of Waata Witana Hamihanaand Riita Ripereta Toki Pangari.",
            // path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content8-2",
            buttontext: "View Relevant Web Page",
            type:"info"
        },
        {
            src: "/images/John Hippolite.jpg",
            title: "john Te One Hippolite",
            text: "Ngati Koata\n" +
                "25 August 1929-17 November 1993",
            content: "Moana jackson was a New Zealand lawyer specialisingin constitutional law, the Treaty of WVaitangi, andinternational indigenous issues.",
            // path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content8-3",
            buttontext: "View Relevant Web Page",
            type:"info"
        },
        {
            src: "/images/Tama Poata.jpg",
            title: "Tama Te Kapua (Tom) Poata",
            text: "Ngati Porou\n"+
            "3 April 1936-9 November 2005",
            content: "Tama Poata was a writer,actor, Humanitarian andactivist. A native of Tokomaru Bay, he worked as asecretary for the Maori Organisation on Human Rightsfrom 1965-1975, which was active in opposition toNew Zealand's involvement in Vietnam. During 1975.he became Te Matakite's vice-president.",
            path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content8-4",
            buttontext: "View Relevant Web Page",
            type:"info"
        },
        {
            src: "/images/Witi McMath.jpg",
            title: "Te Witi McMathNgati Wai",
            text: "Ngati Wai",
            content: "Awaiting Further Details.............",
            // path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content8-5",
            buttontext: "View Relevant Web Page",
            type:"info"
        },
        {
            src: "/images/Moana Jackson.jpg",
            title: "Moana Jackson",
            text: "Ngati Kahungungu\n" +
                "10 0ctober 1945-31 March 2022",
            content: "a New Zealand lawyer specialising in constitutionallaw, the Treaty of Waitangi and internationalindigenous issues, He was an advocate and activist forMaori rights, arguing that the New Zealand criminaljustice system was discriminatory and leading work onconstitutional reforms.",
            // path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content8-6",
            buttontext: "View Relevant Web Page",
            type:"info"
        },
        {
            src: "/images/null.png",
            title: "Kataraina Rimene",
            text: "Ngati Kahungungu and Ngati Porou",
            content: "Awaiting Further Details",
            // path: " https://nz.video.search.yahoo.com/search/video?fr=mcafee&ei=UTF-8&p=Putatara+sound+track&type=E210NZ413G0#id=6&vid=11373d70dd12a4ce3fb04a8b1398ecfe&action=view",
            path: "/wai262Flora/content8-7",
            buttontext: "View Relevant Web Page",
            type:"info"
        },
        //treaties
        {
            src: "",
            title: "New Zealand Treaties relating to the Wai 262 flora and fauna claim",
            text: "",
            content: "No Description Available",
            path: "https://www.treaties.mfat.govt.nz/home",
            buttontext: "View External Resource",
            type:"treaties"
        },
        {
            src: "",
            title: "Trans-Pacific Partnership Agreement",
            text: "",
            content: "No Description Available",
            path: "https://www.mfat.govt.nz/en/about-us/who-we-are/treaties/trans-pacific-partnership-agreement-tpp/",
            buttontext: "View External Resource",
            type:"treaties"
        },
        {
            src: "",
            title: "Comprehensive and Progressive Agreement  for Trans Pacific Partnership",
            text: "",
            content: "No Description Available",
            path: "https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/cptpp/cptpp-overview/",
            buttontext: "View External Resource",
            type:"treaties"
        },
        {
            src: "",
            title: "UK and NZ Trading Agreement / Te Tiriti o Waitangi 1840",
            text: "",
            content: "No Description Available",
            path: "https://nz.search.yahoo.com/search?fr=mcafee&type=E210NZ413G0&p=UK+and+NZ+Trading+Agreement",
            buttontext: "View External Resource",
            type:"treaties"
        },
        {
            src: "",
            title: "The High Seas Bio-Diversity Treaty Agreement",
            text: "",
            content: "No Description Available",
            path: "https://www.iucn.org/sites/default/files/2024-01/iucn-bbnj-treaty-policy-brief.pdf",
            buttontext: "View External Resource",
            type:"treaties"
        },
        {
            src: "",
            title: "The United Nations Treaty",
            text: "",
            content: "No Description Available",
            path: "https://treaties.un.org/pages/UNTSOnline.aspx?id=3&clang=_en",
            buttontext: "View External Resource",
            type:"treaties"
        },
        {
            src: "",
            title: "NZ Legislative Acts",
            text: "",
            content: "No Description Available",
            path: "https://www.legislation.govt.nz/",
            buttontext: "View External Resource",
            type:"treaties"
        },
        //miscallaneous
        {
            src: "",
            title: "Natural Built Environment Act:",
            text: "Resource Management Act",
            content: "No Description Available",
            path: " https://environment.govt.nz/acts-and-regulations/acts/natural-and-built-environment-act-2023/",
            buttontext: "View External Resource",
            type:"miscallaneous"
        },
        {
            src: "",
            title: "Significant Natural Areas",
            text: "Resource Management",
            content: "No Description Available",
            path: "https://wellington.govt.nz/your-council/plans-policies-and-bylaws/district-plan/proposed-district-plan/whats-in-the-proposed-district-plan/significant-natural-areas.",
            buttontext: "View External Resource",
            type:"miscallaneous"
        },
        {
            src: "",
            title: "Natural Policy Statement for Indigenous Bio-Diversity",
            text: "",
            content: "No Description Available",
            path: "https://environment.govt.nz/assets/publications/npsib-exposure-draft-summary.pdf",
            buttontext: "View External Resource",
            type:"miscallaneous"
        },
        {
            src: "",
            title: "Plant Variety Act 2022",
            text: "",
            content: "No Description Available",
            path: "https://www.legislation.govt.nz/act/public/2022/0061/latest/whole.html",
            buttontext: "View External Resource",
            type:"miscallaneous"
        },
        {
            src: "",
            title: "Crown Mineral Amendment Act 2023",
            text: "",
            content: "No Description Available",
            path: "https://nz.search.yahoo.com/search?fr=mcafee&type=E210NZ413G0&p=crown+minerals+act",
            buttontext: "View External Resource",
            type:"miscallaneous"
        },
        {
            src: "",
            title: "Maori Economy Emissions",
            text: "Māori Freehold Land",
            content: "No Description Available",
            path: "https://www.mbie.govt.nz/dmsdocument/17448-maori-economy-emissions-profile",
            buttontext: "View External Resource",
            type:"miscallaneous"
        },
        {
            src: "",
            title: "Maori Kaitiaki over Maori Land versus Stewardship",
            text: "By Department of Conservation",
            content: "No Description Available",
            path: "https://www.doc.govt.nz/about-us/our-role/managing-conservation/stewardship-land/",
            buttontext: "View External Resource",
            type:"miscallaneous"
        },
       /* {
            src: "/images/1st Column Thumbail Image.jpg",
            title: "Historical - 2020",
            text: "2019 Te Pae Tawhiti",
            content: "Learn about Te Pae Tawhiti and how it responded to the Wai262 claim.",
            path: "/tePaeTawhiti/content1"
        },
        */
        // 其他视频卡片数据对象...
    ];
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filterByLecture = (lecture) => {
        setSearchTerm(lecture);
    };

    let extendedArray = [];
    if(searchTerm!==''){
        // 过滤用户数据
        const filteredUsers = myDataArray.filter(user => {
            return user.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        const totalCards = filteredUsers.length;
        const remainingCards = totalCards % 3; // 计算剩余的卡片数量
        const emptyCards = remainingCards === 0 ? 0 : 3 - remainingCards; // 计算需要添加的空白卡片数量

        // 创建一个新的数组，包含原始数据数组和足够的空白卡片，使其总数达到三的倍数
        extendedArray = [...filteredUsers];
        for (let i = 0; i < emptyCards; i++) {
            extendedArray.push({ empty: true }); // 添加空白卡片
        }
        console.log(extendedArray);
    } else {
        const typeToCalculate = clicked; // 指定你过滤的类型
        const filteredDataArray = myDataArray.filter(item => item.type === typeToCalculate);
        const totalCards = filteredDataArray.length;
        const remainingCards = totalCards % 3; // 计算剩余的卡片数量
        const emptyCards = remainingCards === 0 ? 0 : 3 - remainingCards; // 计算需要添加的空白卡片数量
        // 创建一个新的数组，包含原始数据数组和足够的空白卡片，使其总数达到三的倍数

        extendedArray = [...filteredDataArray];
        for (let i = 0; i < emptyCards; i++) {
            extendedArray.push({ empty: true }); // 添加空白卡片
        }
        console.log(extendedArray);
    }
  return (
      <div className="">
          <div className="imgLib-container">
              <div className="textLib-container">
                  Wai 262 Library
              </div>
          </div>
          <div className="libDiv">
              <div className="divLeft">
                <label className="libLabel">Media(Informative Videos)</label>
              </div>
              <div className="divRight">
                  <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="search"  />
              </div>
          </div>
          <div className="divRightForMobile">
              <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="search"  />
          </div>
          <div className="libDiv1">
              <div className="libDiv1ForMobile">
                  <Link  className='buttonLib'  onClick={() => handleClick('media')}
                         style={{ backgroundColor: (clicked==='media' || clicked==='' ) && searchTerm==="" ? 'gray' : 'transparent' }}>
                      <label className="labelLibButoon" >Media(Audio)</label>
                  </Link>
                  <Link  className='buttonLib'  onClick={() => handleClick('mediaAndVideos')}
                         style={{ backgroundColor: clicked==='mediaAndVideos' && searchTerm==="" ? 'gray' : 'transparent' }}>
                      <label className="labelLibButoon">Media(Videos)</label>
                  </Link>
              </div>
              <div className="libDiv1ForMobile">
                  <Link  className='buttonLib'  onClick={() => handleClick('taonga')}
                         style={{ backgroundColor: clicked==='taonga' && searchTerm==="" ? 'gray' : 'transparent' }}>
                      <label className="labelLibButoon">Taonga Rangatira</label>
                  </Link>
                  <Link  className='buttonLib'  onClick={() => handleClick('info')}
                         style={{ backgroundColor: clicked==='info' && searchTerm==="" ? 'gray' : 'transparent' }}>
                      <label className="labelLibButoon">Wai 262 Claimants</label>
                  </Link>
              </div>
              <div className="libDiv1ForMobile">
                  <Link  className='buttonLib'  onClick={() => handleClick('miscallaneous')}
                         style={{ backgroundColor: clicked==='miscallaneous' && searchTerm==="" ? 'gray' : 'transparent' }}>
                      <label className="labelLibButoon">Wai 262 Contemporary Aspects</label>
                  </Link>
                  <Link  className='buttonLib'  onClick={() => handleClick('treaties')}
                         style={{ backgroundColor: clicked==='treaties' && searchTerm==="" ? 'gray' : 'transparent' }}>
                      <label className="labelLibButoon">International Treaties</label>
                  </Link>
              </div>
          </div>
          <div className="libDiv2">
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('A')} > A  </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('B')} > &nbsp;| B </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('C')} > &nbsp;| C </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('D')} > &nbsp;| D </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('E')} > &nbsp;| E </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('F')} > &nbsp;| F </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('G')} > &nbsp;| G </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('H')} > &nbsp;| H </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('I')} > &nbsp;| I </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('J')} > &nbsp;| J </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('K')} > &nbsp;| K </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('L')} > &nbsp;| L </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('M')} > &nbsp;| M </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('N')} > &nbsp;| N </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('O')} > &nbsp;| O </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('P')} > &nbsp;| P </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('Q')} > &nbsp;| Q </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('R')} > &nbsp;| R </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('S')} > &nbsp;| S </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('T')} > &nbsp;| T </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('U')} > &nbsp;| U </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('V')} > &nbsp;| V </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('W')} > &nbsp;| W </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('X')} > &nbsp;| X </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('Y')} > &nbsp;| Y </label>
              <label className="seacrchLectureLabel" onClick={() => filterByLecture('Z')} > &nbsp;| Z </label>
          </div>
          <div className="divForMobile2" style={{ marginLeft: '10%'}}>Filter by First Letter</div>
          <div className="divForMobile">
              <Select
                  defaultValue="None - Default"
                  showSearch
                  filterOption={(input, option) =>
                      option.label.toLowerCase().includes(input.toLowerCase())
                  }
                  allowClear
                  onChange = {filterByLecture}
                  style={{ width: '80%'}}
                  options={[
                      { value: 'A',label: 'A'},{ value: 'B',label: 'B'},{ value: 'C',label: 'C'},
                      { value: 'D',label: 'D'},{ value: 'E',label: 'E'},{ value: 'F',label: 'F'},
                      { value: 'G',label: 'G'},{ value: 'H',label: 'H'}, { value: 'I',label: 'I'},
                      { value: 'J',label: 'J'},{ value: 'K',label: 'K'}, { value: 'L',label: 'L'},
                      { value: 'M',label: 'M'},{ value: 'N',label: 'N'}, { value: 'O',label: 'O'},
                      { value: 'P',label: 'P'},{ value: 'Q',label: 'Q'}, { value: 'R',label: 'R'},
                      { value: 'S',label: 'S'},{ value: 'T',label: 'T'}, { value: 'U',label: 'U'},
                      { value: 'V',label: 'V'},{ value: 'W',label: 'W'}, { value: 'X',label: 'X'},
                      { value: 'Y',label: 'Y'},{ value: 'Z',label: 'Z'},
                  ]}
              />
          </div>


          <div className="lib_cards__container">
              <div className="cards__wrapperLib">
                  {extendedArray.map((item, index) => (
                      <div className="cards__itemLib" key={index} > {/*style={{ width: '33.33%' }}*/}
                          {item.empty ? ( // 如果是空白卡片，则渲染空白 div
                              <div className="custom_cards__item__linkLib invisible">no data now</div>
                          ) : (
                              <VideoCardsItem
                                  src={item.src}
                                  title={item.title}
                                  text={item.text}
                                  content={item.content}
                                  path={item.path}
                                  buttontext={item.buttontext}
                                  type={item.type}
                              />
                          )}
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}
export default LibraryCard