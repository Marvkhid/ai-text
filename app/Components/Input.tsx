import React, { useState, FC, FormEvent, ChangeEvent } from "react";

interface InputProps {
  onSend: (text: string) => void;
}

const Input: FC<InputProps> = ({ onSend }) => {
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSend(inputText.trim());
      setInputText(""); // Clear after sending
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-200 flex items-center rounded-lg shadow-md"
    >
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Type or paste your text here..."
        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        rows={2}
        aria-label="Input text"
      />
      <button
        type="submit"
        disabled={!inputText.trim()}
        className="ml-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        aria-label="Send text"
      >
        <span>➤</span>
      </button>
    </form>
  );
};

export default Input;