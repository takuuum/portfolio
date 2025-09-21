'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status === 'ready') {
      sendMessage({ text: input });
      setInput('');
    }
  };

  const isLoading = status === 'streaming';

  return (
    <>
      {/* Chat Toggle Button */}
      <div className='fixed bottom-6 right-6 z-50'>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className='rounded-full w-14 h-14 shadow-lg bg-blue-600 hover:bg-blue-700 text-white'
        >
          {isOpen ? <X className='h-6 w-6' /> : <MessageCircle className='h-6 w-6' />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className='fixed bottom-24 right-6 w-96 h-96 bg-white dark:bg-gray-800 border rounded-lg shadow-xl z-40 flex flex-col'>
          {/* Header */}
          <div className='flex items-center gap-2 p-4 border-b bg-blue-600 text-white rounded-t-lg'>
            <Bot className='h-5 w-5' />
            <div>
              <h3 className='font-semibold'>Portfolio Assistant</h3>
              <p className='text-xs opacity-90'>Ask me anything about Takumi's portfolio</p>
            </div>
          </div>

          {/* Messages */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4'>
            {messages.length === 0 && (
              <div className='text-center text-gray-500 dark:text-gray-400 text-sm'>
                <Bot className='h-8 w-8 mx-auto mb-2 opacity-50' />
                <p>Hi! I'm here to help you learn about Takumi's professional background.</p>
                <p className='mt-2'>You can ask me about his skills, experience, projects, or anything else from his portfolio.</p>
              </div>
            )}
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}>
                  {message.role === 'user' ? <User className='h-3 w-3' /> : <Bot className='h-3 w-3' />}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {message.parts.map((part, index) =>
                    part.type === 'text' ? <span key={index}>{part.text}</span> : null
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className='flex gap-2'>
                <div className='flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                  <Bot className='h-3 w-3 text-gray-600 dark:text-gray-300' />
                </div>
                <div className='bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm'>
                  <div className='flex space-x-1'>
                    <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                    <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.1s' }}></div>
                    <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className='p-4 border-t'>
            <div className='flex gap-2'>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Ask about Takumi...'
                className='flex-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="sm" 
                disabled={isLoading || !input?.trim()}
                className='bg-blue-600 hover:bg-blue-700'
              >
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}