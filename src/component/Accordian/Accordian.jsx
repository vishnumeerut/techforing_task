import { useState } from "react";

function Accordian({ faqData }) {
  const [isShow, setIsShow] = useState(false);
  const [accodId, setAccordId] = useState(null);

  function handleAccordian(id) {
    setIsShow(!isShow);
    setAccordId(id);
  }

  return (
    <div>
      {faqData.map((item) => (
        <div
          key={item.id}
          className="w-[75%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[70%] mx-auto border-2 border-gray-400 mb-4 p-2 sm:p-4 rounded-lg"
        >
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-lg sm:text-2xl font-semibold">{item.title}</h2>
            <p
              className="text-xl sm:text-3xl font-bold cursor-pointer text-orange-500"
              onClick={() => handleAccordian(item.id)}
            >
              +
            </p>
          </div>

          {accodId === item.id && isShow && (
            <p className="text-sm sm:text-base mt-2 text-justify leading-relaxed">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
