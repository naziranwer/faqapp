export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const fetchFaqs = async (): Promise<Faq[]> => {
  return [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page.",
    },
    {
      id: 2,
      question: "What is the refund policy?",
      answer:
        "Our refund policy allows refunds within 30 days of purchase. Please contact support for assistance.",
    },
    {
      id: 3,
      question: "How do I contact support?",
      answer:
        "You can contact support via the 'Contact Us' page on the website.",
    },
  ];
};
