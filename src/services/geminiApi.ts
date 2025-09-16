const GEMINI_API_KEY = 'AIzaSyAi07nVQ9GnJCZAkaqh4lKu_1A3vtDF660';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export class GeminiApiService {
  private async makeRequest(prompt: string): Promise<string> {
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data: GeminiResponse = await response.json();
      
      if (!data.candidates || data.candidates.length === 0) {
        throw new Error('No response from Gemini API');
      }

      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw new Error('Failed to get response from AI assistant');
    }
  }

  async sendMessage(message: string, portfolioContext: string): Promise<string> {
    const systemPrompt = `You are SaiTeja Pachikarri's AI assistant on his portfolio website. You help visitors learn about SaiTeja's skills, experience, projects, and background. Always respond in a professional, friendly, and helpful manner.

IMPORTANT: You represent SaiTeja Pachikarri personally. When asked about him, respond as if you are his knowledgeable assistant who knows all about his work and achievements.

Portfolio Context:
${portfolioContext}

Instructions:
- Answer questions about SaiTeja's skills, projects, experience, education, and certifications
- If asked about projects, provide detailed technical information
- For skill-related questions, mention specific technologies and proficiency levels
- Be conversational but professional
- If you don't know something specific, suggest they contact SaiTeja directly
- Keep responses concise but informative
- Always maintain a positive and engaging tone

User Question: ${message}`;

    return await this.makeRequest(systemPrompt);
  }
}

export const geminiApi = new GeminiApiService();