import React, { useState, FC, ChangeEvent } from "react";

interface MessageProps {
  message: {
    id: string;
    text: string;
    language: string;
    summary?: string;
    translation?: string;
    error?: string;
  };
  onSummarize: (id: string, text: string) => void;
  onTranslate: (id: string, text: string, lang: string) => void;
}

const Message: FC<MessageProps> = ({ message, onSummarize, onTranslate }) => {
  const [selectedLang, setSelectedLang] = useState<string>("pt"); // Default language: Portuguese

  const canSummarize = message.language === "en" && message.text.length > 150;

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLang(e.target.value);
  };

  return (
    <div className="bg-white p-3 my-2 rounded shadow">
      {/* Display original text */}
      <p className="text-gray-800">{message.text}</p>

      {/* Show detected language */}
      {message.language && (
        <p className="text-sm text-blue-600 mt-1">
          Detected Language: {message.language.toUpperCase()}
        </p>
      )}

      {/* Summarize Button */}
      {canSummarize && !message.summary && (
        <button
          className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          onClick={() => onSummarize(message.id, message.text)}
        >
          Summarize
        </button>
      )}

      {/* Summary Section */}
      {message.summary && (
        <div className="mt-2 p-2 border rounded bg-gray-50">
          <p className="font-semibold">Summary:</p>
          <p>{message.summary}</p>
        </div>
      )}

      {/* Translation Section */}
      <div className="mt-2">
        <label htmlFor={`lang-select-${message.id}`} className="mr-2">
          Translate:
        </label>
        <select
          id={`lang-select-${message.id}`}
          value={selectedLang}
          onChange={handleLanguageChange}
          className="p-1 border rounded focus:outline-none focus:ring-2 bg-fuchsia-300 transition"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="pt">Portuguese</option>
        </select>
        <button
          className="ml-2 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          onClick={() => onTranslate(message.id, message.text, selectedLang)}
        >
          Translate
        </button>
      </div>

      {/* Translation Output */}
      {message.translation && (
        <div className="mt-2 p-2 border rounded bg-gray-50">
          <p className="font-semibold">Translation:</p>
          <p>{message.translation}</p>
        </div>
      )}

      {/* Error Message */}
      {message.error && (
        <p className="mt-2 text-red-500 font-bold">{message.error}</p>
      )}
    </div>
  );
};

export default Message;