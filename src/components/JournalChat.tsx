
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'pet';
  timestamp: string;
}

const JournalChat = () => {
  const { user } = useUser();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: '1',
      text: `Hi there! I'm ${user.pet?.name}. How are you feeling today?`,
      sender: 'pet',
      timestamp: new Date().toISOString(),
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    const petResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: `Thank you for sharing! I'm here to listen and support you.`,
      sender: 'pet',
      timestamp: new Date().toISOString(),
    };

    setChatHistory(prev => [...prev, newUserMessage, petResponse]);
    setMessage('');

    // Save chat history to localStorage
    const chatData = JSON.stringify([...chatHistory, newUserMessage, petResponse]);
    localStorage.setItem('chatHistory', chatData);
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <Card className="h-full flex flex-col">
        <CardContent className="flex-1 flex flex-col p-4 gap-4">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JournalChat;