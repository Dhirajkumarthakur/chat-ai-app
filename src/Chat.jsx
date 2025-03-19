import axios from 'axios';
import React, { useState } from 'react';

const Chat = () => {
  const [question, setQuestion] = useState('');
  const [answer, SetAnswer] = useState("");

  async function generateAnswer() {
    SetAnswer("loading...")
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBDDleh3Izg7k3HABCj44nkRSAnrx7CYWs",
      method: "post",
      data: {
        contents: [{
          "parts": [{ "text": question }]
        }]
      },
    });

    SetAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }


  return (
    <>
      <h1>Chat AI</h1>
      <textarea value={question} cols='30' rows='10' placeholder='Enter the query' onChange={(e) => setQuestion(e.target.value)}></textarea>
    

    <br/>
    <br/>

      <button onClick={generateAnswer}>Send</button>

      <pre>{answer}</pre>
    </>

  );
};


export default Chat;