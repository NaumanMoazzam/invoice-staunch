import { Button } from "antd";

export const Header = () => {
  return (
    <section className="bg-secondary-100 p-10 container w-full">
      <div className=" flex flex-row justify-between items-start">
        <div className="flex flex-col">
          <div className="font-bold text-[30px]">New Invoice</div>
          <div className="text-[#667085] text-[16px] font-normal">
            Create new invoice for your customers
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Button type="primary" htmlType="submit" className="text-[#344054] bg-white border-1 border-[#D0D5DD]">
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};
