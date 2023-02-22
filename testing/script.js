async function query(data) {
    try {
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
      return result;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  }
  
  const submitButton = document.getElementById("submit-button");
  const inputTextArea = document.getElementById("input-textarea");
  const outputTextArea = document.getElementById("output-textarea");
  
  submitButton.addEventListener("click", async () => {
    const inputText = inputTextArea.value;
    if (inputText.trim() !== "") {
      const result = await query({ inputs: inputText });
      if (result && result.generated_text) {
        outputTextArea.value = result.generated_text.join("\n");
      } else if (result && result.error) {
        outputTextArea.value = result.error;
      } else {
        outputTextArea.value = "Error: No response from API.";
      }
    } else {
      outputTextArea.value = "Error: Please enter some input text.";
    }
  });
  