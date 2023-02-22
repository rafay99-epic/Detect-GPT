// async function query(data) {
//     const response = await fetch(
//         "https://api-inference.huggingface.co/models/Hello-SimpleAI/chatgpt-detector-roberta",
//         {
//             headers: { Authorization: "Bearer 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" },
//             method: "POST",
//             body: JSON.stringify(data),
//         }
//     );
//     const result = await response.json();
//     return result;
// }

// function sendMessage() {
//     const input = document.querySelector(".textarea").value;
//     if (input) {
//         query({"inputs": input}).then((response) => {
//             console.log(response);
//             showOutput(response[0].generated_text);
//         });
//     }
// }

// function showOutput(output) {
//     const outputDiv = document.querySelector(".output");
//     outputDiv.innerHTML += `<p>${output}</p>`;
// }


const form = document.querySelector("form");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Hello-SimpleAI/chatgpt-detector-roberta",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = input.value;
  try {
    const response = await query({ inputs: message });
    output.value = response.generated_text;
  } catch (error) {
    console.error(error);
    output.value = "Sorry, something went wrong. Please try again later.";
  }
});
