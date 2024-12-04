import { FC, useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white shadow p-4 mb-4 rounded">
      <h3 onClick={toggleAnswer} className="text-lg font-bold cursor-pointer">
        {question}
      </h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default FaqItem;
