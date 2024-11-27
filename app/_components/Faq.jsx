import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "How it Works?",
    answer:
      "First, you just have to Sign-in, and then hit the Dashboard Button and then create your Budgets and manage your Expenses. ",
  },
  {
    id: 2,
    question: "How to Create Budget?",
    answer:
      "On your Dashboard Sidebar hit the Budgets tab and then Create your First Budget.",
  },
  {
    id: 3,
    question: "How can I add an Expense?",
    answer:
      "After creating a Budget click on that Budget to add an Expense in that specific Budget.",
  },
  {
    id: 4,
    question: "Where do I find all of my Budgets and Expenses?",
    answer:
      "You can view your Budgets and Expenses on your Dashboard at once or in their respective tabs as well.",
  },
  {
    id: 5,
    question: "What if I do not have an account?",
    answer: "You can also sign-up if you do not have an account.",
  },
  {
    id: 6,
    question: "Can I sign-in using my social media account?",
    answer: "Yes, you can sign-in using your Facebook account.",
  },
];

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <section className="w-full px-[150px] overflow-x-clip  py-[120px] text-black  max-lg:px-5 max-lg:py-5">
      <div className="flex sm:mx-0 max-md:flex-col">
        <div className="w-full sm:p-2">
          {questions.map((quest) => (
            <div key={quest.id} className="mb-4 mt-5 last:mb-0">
              <motion.button
                variants={FadeUp(0.5)}
                initial="hidden"
                animate="visible"
                className="flex w-full items-center justify-between p-4 text-left text-[30px] tracking-tight text-black border-t-[1px]  border-primary shadow-md backdrop-blur-sm focus:outline-none transition duration-300"
                onClick={() =>
                  setActiveQuestion(
                    activeQuestion === quest.id ? null : quest.id,
                  )
                }
              >
                <span className=" text-[20px] flex justify-between items-center">
                  {quest.question}
                  <div className="absolute right-5 ">
                    <ChevronDown />
                  </div>
                </span>
              </motion.button>
              {activeQuestion === quest.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-5 translate-x-2 text-left text-md leading-[30px] tracking-tighter text-description-col"
                >
                  <p className="px-4 text-black">{quest.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

export const FadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: delay,
      },
    },
  };
};
