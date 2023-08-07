import axios from "axios";
import React, { useState } from "react";

function ChatGPT() {
    const [inputText, setInputText] = useState("");
    const [response, setResponse] = useState("");
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleChatRequest = async () => {
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/davinci-codex/completions",
          {
            prompt: inputText,
            max_tokens: 100,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
          }
        );
  
        setResponse(response.data.choices[0].text);
      } catch (error) {
        console.error("Error making API request:", error);
      }
    };
  
    return (
      <div>
        <textarea value={inputText} onChange={handleInputChange} />
        <button onClick={handleChatRequest}>Submit</button>
        <div>{response}</div>
      </div>
    );
  }
  
  export default ChatGPT;
  
