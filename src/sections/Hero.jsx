import { docModel, target } from "../assets";
import { calendar, notification } from "../assets";
import Card from "../components/Card";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen max-container flex flex-col justify-start align-center gap-10"
    >
      <div className="pt-40 sm:pt-36 flex flex-col">
        <h1 className="font-dmSans text-5xl font-medium text-primary leading-tight mb-4 max-w-md">
          Get the healthcare you need, when you need it.
        </h1>
        <p className="font-dmSans leading-normal text-lg text-primary max-w-md mb-10">
          Manage all of your healthcare needs in one convenient place – from
          booking appointments to tracking your health history.
        </p>
        <div>
          <button type="button" className="btn-hero">
            Book An Appointment
          </button>
        </div>
      </div>
      <div className="absolute hidden lg:flex flex-col justify-center items-center top-24 right-0 -z-[1]">
        <img
          src={docModel}
          className="object-cover object-center w-[365px]"
          alt="Doctor Image"
        />
      </div>
      <div className="hidden lg:block absolute top-4 -right-4 w-[440px] z-[-2] h-[780px] bg-info -skew-x-[7deg]"></div>
      <div className="flex justify-between items-start lg:items-center sm:gap-5 gap-10 lg:flex-row flex-col p-10 bg-primary text-white mb-8 mt-20 sm:mt-40">
        <div className="flex flex-row justify-start gap-4">
          <div className="bg-cover bg-center w-10">
            <img
              src={calendar}
              className="object-cover object-center"
              alt="Calendar Icon"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-dmSans font-bold text-base mb-2">
              Online appointment scheduling
            </h4>
            <p className="font-dmSans font-normal leading-normal text-sm max-w-xs">
              Allows users to schedule appointments with their healthcare
              provider through the app.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <div className="bg-cover bg-center w-10">
            <img
              src={notification}
              className="object-cover"
              alt="Calendar Icon"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-dmSans font-bold text-base mb-2">
              Medication reminders
            </h4>
            <p className="font-dmSans font-normal leading-normal text-sm max-w-xs">
              Allows users to schedule appointments with their healthcare
              provider through the app.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <div className="bg-cover bg-center w-10">
            <img
              src={target}
              className="object-cover object-center"
              alt="Calendar Icon"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-dmSans font-bold text-base mb-2">
              Virtual consultations
            </h4>
            <p className="font-dmSans font-normal leading-normal text-sm max-w-xs">
              Allows users to schedule a virtual consultations and whatever.
              Sequi non mollitia deleniti incidunt
            </p>
          </div>
        </div>
      </div>

      <Card />
    </section>
  );
};

export default Hero;
