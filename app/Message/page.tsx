"use client"
import React, { MouseEvent } from 'react';
import HomeContent from "@/components/Content";
import CoinIcon from "@/components/Icon/Coin";
import HomeIcon from "@/components/Icon/Home";
import MailIcon from "@/components/Icon/Mail";
import Question from "@/components/Icon/Question";
import SearchIcon from "@/components/Icon/Search";
import UserIcon from "@/components/Icon/User";
import UsersIcon from "@/components/Icon/Users";
import WhitePin from "@/components/Icon/WhitePin";
import MainContent from "@/components/Main";
import MarkerBtn from "@/components/MarkerBtn";
import BottomNav from "@/components/Navbar/Bottom";
import ItemBtn from "@/components/Navbar/Bottom/ItemBtn";
import TopNav from "@/components/Navbar/Top";
import RefreshBtn from "@/components/RefreshBtn";
import ResultBtn from "@/components/ResultBtn";
import SearchContent from "@/components/Search";
import SearchBtn from "@/components/Search/SearchBtn";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import SmileIcon from '@/components/Icon/Smile';

export default function MyPage() {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/Map')
    }

    const handleMsgClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/Message')
    }

    const handleMyPageClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/MyPage')
    }

    const handleHomeClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/')
    }

    return (

        <MainContent>
            <TopNav title='RealSpot'><Question /></TopNav>
            <RefreshBtn title="メッセージへようこそ!"><SmileIcon /></RefreshBtn>
            <HomeContent>
                <img src="/user.png" className="relative rounded-[15pt] z-[0] w-[100%] h-[335px] 2xs:h-[360px] xs:h-[285px] sm:h-[419px] md:h-[460px]" alt="user.png" />
                <ResultBtn />
                <MarkerBtn title="現在地付近のメンバー" onClick={handleClick}><WhitePin /></MarkerBtn>
            </HomeContent>
            <SearchContent>
                <SearchBtn title1="年収で" title2="さがす"><CoinIcon /></SearchBtn>
                <SearchBtn title1="性別で" title2="さがす"><UsersIcon /></SearchBtn>
                <SearchBtn title1="年齢で" title2="さがす"><SearchIcon /></SearchBtn>
            </SearchContent>
            <BottomNav>
                <ItemBtn title="ホーム" onClick={handleHomeClick}><HomeIcon /></ItemBtn>
                <ItemBtn title="トーク" onClick={handleMsgClick}><MailIcon /></ItemBtn>
                <ItemBtn title="マイページ" onClick={handleMyPageClick}><UserIcon /></ItemBtn>
            </BottomNav>
        </MainContent>
    );
}