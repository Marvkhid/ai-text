import React, { FC } from "react";
import Message from "../message";

interface MessageType {
  id: string;
  text: string;
  language: string;
  summary?: string;
  translation?: string;
  error?: string;
}

interface TextProps {
  messages: MessageType[];
  onSummarize: (id: string, text: string) => void;
  onTranslate: (id: string, text: string, lang: string) => void;
}

const Text: FC<TextProps> = ({ messages, onSummarize, onTranslate }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <Message
          key={msg.id}
          message={msg}
          onSummarize={onSummarize}
          onTranslate={onTranslate}
        />
      ))}
    </div>
  );
};

export default Text;