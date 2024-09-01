export default function ResultBtn() {
    return (
        <div className="absolute flex justify-between rounded-[20px] text-[#5C5F5D] w-[93%] h-[65px] bg-[#FAFB64] top-[20px] left-[3.5%] font-bold px-[16px] py-[13px]">
            <div className="flex">
                <label className="text-[28px] mr-[8px]">Name</label>
                <div className="flex flex-col mt-[-4px]">
                    <label className="text-[16px]">25歳</label>
                    <label className="text-[16px]">友だち募集中</label>
                </div>
            </div>
            <button className="bg-white w-[82px] h-[31px] rounded-full text-[20px] mt-[4px] px-[3px] drop-shadow-md">お誘い</button>
        </div>
    );
}
