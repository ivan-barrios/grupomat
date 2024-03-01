import Image from "next/image";

const TestimonialCard = ({ name, testimonial, profilePicture }) => {
  return (
    <div className="w-full min-h-[550px] card px-[20px] md:px-[25px] pt-[50px] flex gap-4 flex-col justify-start items-center cardShadow max-w-[380px]">
      <div className="flex items-center gap-4">
        <div className="bg-white p-1 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image
            src={profilePicture}
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full object-cover w-[50px] h-[50px]"
          />
        </div>
        <h3 className="font-bold text-xl">{name}</h3>
      </div>
      <p className="text-center pb-4">&quot;{testimonial}&quot;</p>
    </div>
  );
};

export default TestimonialCard;
