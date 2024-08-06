import Image from "next/image"

export default function MainPage() {
    return (
        <main>
            <div className="h-16 flex justify-between items-center p-2 bg-slate-200">
                <Image className="h-12" src='/person_icon.png' alt="" width={48} height={48}/>
                <p className="text-md border-solid border-2 border-black h-8 flex items-center px-2 rounded-full font-bold">전체계좌</p>

            </div>
        </main>
    )
}