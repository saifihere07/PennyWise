// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure this is set correctly in .env.local
//   dangerouslyAllowBrowser: true,
// });

// const getFinancialAdvice = async (totalBudget, totalSpend) => {
//   try {
//     if (typeof totalBudget !== "number" || typeof totalSpend !== "number") {
//       throw new Error(
//         "Invalid input: totalBudget and totalSpend should be numbers."
//       );
//     }

//     const userPrompt = `
//       Based on the following financial data:
//       - Total Budget: ${totalBudget} USD
//       - Expenses: ${totalSpend} USD
//       Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
//     `;

//     const retryRequest = async (retries = 3) => {
//       try {
//         const chatCompletion = await openai.chat.completions.create({
//           model: "gpt-3.5-turbo",
//           messages: [{ role: "user", content: userPrompt }],
//         });
//         return chatCompletion.choices[0].message.content;
//       } catch (error) {
//         if (error.response?.status === 429 && retries > 0) {
//           console.log("Rate limit exceeded, retrying...");
//           await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
//           return retryRequest(retries - 1); // Retry the request
//         } else {
//           throw error;
//         }
//       }
//     };

//     const advice = await retryRequest();
//     return advice;
//   } catch (error) {
//     console.error("Error fetching financial advice:", error.message || error);
//     return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
//   }
// };

// export default getFinancialAdvice;
