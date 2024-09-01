export default function ResultBtn() {
    return (
        <div className="absolute flex justify-between rounded-[20pt] text-[#5C5F5D] w-[93%] h-[65pt] bg-[#FAFB64] top-[20pt] left-[3.5%] font-bold px-[16pt] py-[13pt]">
            <div className="flex">
                <label className="text-[28pt] mr-[8pt]">Name</label>
                <div className="flex flex-col mt-[-4pt]">
                    <label className="text-[16pt]">25歳</label>
                    <label className="text-[16pt]">友だち募集中</label>
                </div>
            </div>
            <button className="bg-white w-[82pt] h-[31pt] rounded-full text-[20pt] mt-[4pt] px-[3px] drop-shadow-md">お誘い</button>
        </div>
    );
}
