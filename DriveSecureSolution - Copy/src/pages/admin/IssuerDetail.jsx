import Card from "../../components/base/Card";
import Bredcrumb from "../../components/layout/Bredcrumb";
import DropdownBox from "../../components/base/DropdownBox";
import BasicInfoCard from "../../components/base/BasicInfoCard";

const IssuerDetail = () => {

  const dealerDetails = {
    dealerName: "Subansiri Enterprises",
    dealerId: "1234",
    mobileNo: "9548289756",
    location: "North Lakhimpur, Assam",
    address: "Bantow bangali, NH-15, North Lakhimpur - 787031",
    manufacturer: "Bajaj",
    rto: "AS07"
  };


  return (
    <Card className="shadow-lg rounded-xl">
      {/* Breadcrumb Header */}
      <div className="text-xl font-semibold text-primary mt-2">
        <Bredcrumb heading="Issuer Detail" page="Issuer details" />
      </div>

      <div className="px-8 pb-10 flex flex-col gap-8">
        {/* ================= Issuer Information ================= */}
        <BasicInfoCard
          Heading="Basic Info"
          data={dealerDetails}
          Switch={
            <div className="flex flex-col-reverse gap-1 justify-between items-center ">
              <label class="inline-flex  items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-9 h-5 bg-neutral-300 peer-focus:outline-none border-0 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:bg-[#e36e53] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
              </label>
              <label htmlFor="">Status</label>
            </div>
          }

        />
        <hr className="text-muted" />

        {/* Button */}
        <div className="">
          <div className="bg-light p-5 rounded-2xl">
            <div className="w-full flex mb-8 ">
              <DropdownBox className="w-1/2 max-[600px]:w-full" label="Select Duration" />
            </div>
            <div className=" w-full flex flex-wrap justify-between gap-5">
              {/* CARD */}
              <div className="grow shrink basis-[230px] bg-primary p-5 rounded-xl flex flex-col items-center justify-center">
                <p className="text-lg text-light">No Of New Policy</p>
                <span className="text-3xl font-semibold text-light">11</span>
              </div>

              <div className="grow shrink basis-[230px] bg-primary p-5 rounded-xl flex flex-col items-center justify-center">
                <p className="text-lg text-light">Endorsement</p>
                <span className="text-3xl font-semibold text-light">5</span>
              </div>

              <div className="grow shrink basis-[230px] bg-primary p-5 rounded-xl flex flex-col items-center justify-center" >
                <p className="text-lg text-light">Cancellation</p>
                <span className="text-3xl font-semibold text-light">2</span>
              </div>

              <div className="grow shrink basis-[230px] bg-primary p-5 rounded-xl flex flex-col items-center justify-center">
                <p className="text-lg text-light">Pending</p>
                <span className="text-3xl font-semibold text-light">2</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default IssuerDetail;
