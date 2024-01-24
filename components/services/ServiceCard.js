import Image from "next/image";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="w-full min-h-[388px] card px-[20px] md:px-[25px] pt-[50px] flex justify-center items-start cardShadow max-w-[380px]">
      <div className="flex flex-col items-center justify-start">
        <Image src={icon} alt={`${title} icon`} />
        <h3 className="font-bold text-2xl text-center">{title}</h3>
        <p className="text-center text-lg pt-4">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
