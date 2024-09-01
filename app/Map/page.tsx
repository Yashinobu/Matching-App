"use client"
import HomeIcon from "@/components/Icon/Home";
import MailIcon from "@/components/Icon/Mail";
import Question from "@/components/Icon/Question";
import UserIcon from "@/components/Icon/User";
import MainContent from "@/components/Main";
import BottomNav from "@/components/Navbar/Bottom";
import ItemBtn from "@/components/Navbar/Bottom/ItemBtn";
import TopNav from "@/components/Navbar/Top";
import dynamic from "next/dynamic";
import { useMemo, MouseEvent } from "react";
import { useRouter } from 'next/navigation';

export default async function Page() {
    const router = useRouter();

    const Map = useMemo(() => dynamic(
        () => import('@/components/Map/LeafletMap'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

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
        <>
            <MainContent>
                <TopNav title='RealSpot'><Question /></TopNav>
                <div className="w-full h-[647px] bg-white"></div>

                <div className="w-[95%] h-[75%] absolute left-[2.5%] top-[85px] sm:w-[40%] sm:left-[30%]">
                    <Map posix={[4.79029, -75.69003]} />
                </div>
                <BottomNav>
                    <ItemBtn title="ホーム" onClick={handleHomeClick}><HomeIcon /></ItemBtn>
                    <ItemBtn title="トーク" onClick={handleMsgClick}><MailIcon /></ItemBtn>
                    <ItemBtn title="マイページ" onClick={handleMyPageClick}><UserIcon /></ItemBtn>
                </BottomNav>
            </MainContent>
        </>
    )
}