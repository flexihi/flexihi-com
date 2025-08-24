import Image from "next/image";
import callIcon from "@/public/call-icon.svg";
import whatsappIcon from "@/public/whatsapp-icon.svg";
import emailIcon from "@/public/email-icon.svg";

export default function Contact() {
  return (
    <div className="bg-[#0288d10a] rounded-xl px-16 py-11 flex flex-col items-center w-fit">
      <p className="text-text-primary leading-6">Haven’t got your answer?</p>
      <ul className="flex gap-16 mt-14">
        <a
          href="tel:+96896747611"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <li className="flex gap-2 items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-[#0288D1] bg-opacity-50 rounded-full p-5 group-hover:bg-opacity-70 transition-colors duration-200">
              <Image
                src={callIcon}
                alt="call icon"
                width={24}
                height={24}
                className="mx-1"
              />
            </div>
            <div className="flex flex-col gap-1 font-medium leading-6">
              <h5 className="text-text-primary">Call</h5>
              <p className="text-primary-light">+968 9674 7611</p>
            </div>
          </li>
        </a>
        <a
          href="https://wa.me/+96896747611"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <li className="flex gap-2 items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-[#0288D1] bg-opacity-50 rounded-full p-5 group-hover:bg-opacity-70 transition-colors duration-200">
              <Image
                src={whatsappIcon}
                alt="call icon"
                width={24}
                height={24}
                className="mx-1"
              />
            </div>
            <div className="flex flex-col gap-1 font-medium leading-6">
              <h5 className="text-text-primary">WhatsApp</h5>
              <p className="text-primary-light">+968 9674 7611</p>
            </div>
          </li>
        </a>
        <a
          href="mailto:sales@flexihi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <li className="flex gap-2 items-center">
            <div className="w-16 h-16 flex justify-center items-center bg-[#0288D1] bg-opacity-50 rounded-full p-5 group-hover:bg-opacity-70 transition-colors duration-200">
              <Image
                src={emailIcon}
                alt="call icon"
                width={24}
                height={24}
                className="mx-1"
              />
            </div>
            <div className="flex flex-col gap-1 font-medium leading-6">
              <h5 className="text-text-primary">Email</h5>
              <p className="text-primary-light">sales@flexihi.com</p>
            </div>
          </li>
        </a>
      </ul>
    </div>
  );
}
