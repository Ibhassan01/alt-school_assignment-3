const PhotographyHeader = () => {

    return (
        <div className="my-5 flex justify-between">
            <p className="text-lg">
                <span className="font-bold">Photography/</span>
                <span className="text-[#656565]">Premium Photos</span>
            </p>
            <div className="md:flex justify-between items-center hidden md:block w-[10%]">
                <div className=" flex w-[100%]"><img src="./icons/Group.svg" alt="sort" />
                    <p className="text-sm text-[#656565]">
                        Sort By</p>
                    <select name="" id="">
                        <option value="">Price</option>
                        <option value="">Pets</option>
                        <option value="">People</option>
                    </select>
                </div>
            </div>
            <img src="./icons/filter.svg" alt="filter" className="md:hidden" />
        </div>
    );
};

export default PhotographyHeader;
