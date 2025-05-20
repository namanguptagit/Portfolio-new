import { HiOutlineMail , HiOutlinePhone, HiOutlineUser, HiOutlineLocationMarker } from "react-icons/hi";


const Info = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-start gap-4 w-[200px]">
          <HiOutlineUser className="text-2xl text-accent mt-1" />
          <div>
            <p className="text-lg ">Date of Birth</p>
            <p>3 January 2000</p>
          </div>
        </div>
        <div className="flex items-start gap-4 w-[250px]">
          <HiOutlineMail className="text-2xl text-accent mt-1" />
          <div>
            <p className="text-lg ">Email Address</p>
            <p>naman312000@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-start gap-4 w-[200px]">
          <HiOutlinePhone className="text-2xl text-accent mt-1" />
          <div>
            <p className="text-lg ">Phone</p>
            <p>+91 75 00 44 79 56</p>
          </div>
        </div>
        <div className="flex items-start gap-4 w-[200px]">
          <HiOutlineLocationMarker className="text-2xl text-accent mt-1" />
          <div>
            <p className="text-lg ">Location</p>
            <p>Banglore, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info