import Image from "next/image"

export default function MainPage() {
    return (
        <main className="bg-slate-200 h-screen">
            <div className="h-16 flex justify-between items-center px-4">
                <div className="flex items-center">
                    <Image className="mx-2" src='/icons/my.png' alt="" width={35} height={0}/>
                    <p className="ml-1 text-sm border-solid border-[1.5px] border-black h-[26px] flex items-center px-2 rounded-full font-bold">전체계좌</p>
                </div>
                <div>
                    <span className="text-xl font-medium mx-2.5">지갑</span>
                    <span className="text-xl font-medium mx-2.5">알림</span>
                </div>
            </div>
            <div className="bg-white w-11/12 m-auto p-6 rounded-3xl shadow-sm mb-10">
                <p className="text-xl font-bold mb-1">달달하나통장</p>
                <div className="flex mb-3">
                    <p className="text-sm text-gray-400 font-bold mr-2">123-456789-01234</p>
                    <a className="text-sm text-gray-400 font-bold underline underline-offset-4">복사</a>
                </div>
                <div className="flex items-center mb-5">
                    <p className="text-3xl font-black mr-1">83,758</p>
                    <p className="text-2xl font-bold mr-2">원</p>
                    <p className="bg-gray-200 px-1.5 py-0.5 rounded-2xl text-sm font-light">숨김</p>
                </div>
                <div className="flex">
                    <button className="text-xl bg-slate-200 rounded-xl px-8 py-2 mr-1.5">가져오기</button>
                    <button className="text-white text-xl bg-teal-600 rounded-xl px-[41px] py-2 mr-1.5">보내기</button>
                    <button className="bg-slate-200 h-11 rounded-xl w-11 pl-3">
                        <Image src='/icons/meatball.png' alt="" width={20} height={20}/>
                    </button>
                </div>
            </div>
            <div>
                <div className="w-11/12 h-20 flex bg-white rounded-3xl m-auto px-6 items-center mb-3 shadow-sm">
                    <Image src='/icons/passbook.png' alt="" width={40} height={40}/>
                    <p className="pl-4 text-xl">전체계좌</p>
                </div>
                <div className="w-11/12 h-20 flex bg-white rounded-3xl m-auto px-6 items-center mb-3 shadow-sm">
                    <Image src='/icons/giftbox.png' alt="" width={40} height={40}/>
                    <p className="pl-4 text-xl">혜택</p>
                </div>
                <div className="w-11/12 h-20 flex bg-white rounded-3xl m-auto px-6 items-center mb-3 shadow-sm">
                    <Image src='/icons/finance.png' alt="" width={40} height={40}/>
                    <p className="pl-4 text-xl">국민연금 계좌관리</p>
                </div>
                <div className="w-11/12 h-20 flex bg-white rounded-3xl m-auto px-6 items-center mb-3 shadow-sm">
                    <Image src='/icons/number_1.png' alt="" width={40} height={40}/>
                    <p className="pl-4 text-xl">모바일번호표</p>
                </div>
                <div className="w-11/12 h-20 flex bg-white rounded-3xl m-auto px-6 items-center mb-3 shadow-sm">
                    <Image src='/icons/money.png' alt="" width={40} height={40}/>
                    <p className="pl-4 text-xl">영업점ATM출금</p>
                </div>
                <div className="w-11/12 h-20 flex bg-white rounded-3xl m-auto px-6 items-center mb-3 shadow-sm">
                    <Image src='/icons/gear.png' alt="" width={40} height={40}/>
                    <p className="pl-4 text-xl">환경설정</p>
                </div>
                
            </div>
        </main>
    )
}