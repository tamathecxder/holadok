import { quote } from "../assets";

const Card = () => {
  const headshot =
    "https://images.squarespace-cdn.com/content/v1/50204bd5e4b03f6f4d185490/1675116974621-JREYH3AD3EW7V3OIND7N/Actor-Headshots-Markham-Headshots-0013%2B1.jpg";

  return (
    <div className="xl:block hidden w-full sm:max-w-[300px] border border-slate-100 p-5 shadow-xl bg-white static max-sm:mb-10 lg:absolute top-40 right-[19rem] rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <div className="flex flex-row justify-start items-center gap-4">
          <div className="w-8 h-8 relative rounded-full overflow-hidden">
            <img src={headshot} className="object-cover w-full" alt="Picture" />
          </div>
          <h4 className="text-slate-800 font-bold text-base">Jane Doe</h4>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={quote} alt="Quote Icon" className="object-cover w-2" />
          <img src={quote} alt="Quote Icon" className="object-cover w-2" />
        </div>
      </div>
      <p className="sm:text-xs text-md font-sourceSans font-normal text-primary leading-normal">
        “The doctor appointment app has been great for me. Scheduling
        appointments and getting medication reminders is much easier, and I love
        the option for virtual consultations. I'd recommend this app to others.”
      </p>
    </div>
  );
};

export default Card;
