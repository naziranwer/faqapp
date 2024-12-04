// src/components/FaqList.tsx
import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FaqItem from "./FaqItem";
import { fetchFaqs, Faq } from "../services/faqService";

const FaqList: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: faqs,
    isLoading,
    error,
  } = useQuery<Faq[], Error>(["faqs"], fetchFaqs);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredFaqs = faqs?.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error loading FAQs!</div>;

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search FAQs"
        value={searchQuery}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full rounded"
      />
      <div>
        {filteredFaqs?.map((faq) => (
          <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqList;
