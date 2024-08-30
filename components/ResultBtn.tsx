export default function ResultBtn() {
    return (
        <div className="absolute flex justify-between rounded-xl text-[#5C5F5D] w-[90%] bg-[#FAFB64] text-5 top-[10px] left-[5%] font-bold px-[10px] py-[15px]">
            <div className="flex">
                <label className="text-[30px] pt-[2px] pr-[3px]">Name</label>
                <div className="flex flex-col">
                    <label className="text-[15px]">25歳</label>
                    <label className="text-[15px]">友だち募集中</label>
                </div>
            </div>
            <button className="bg-white rounded-full px-[3px] drop-shadow-md">お誘い</button>
        </div>
    );
}
