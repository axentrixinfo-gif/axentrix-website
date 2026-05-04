import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export async function POST(request: Request) {
    try {
        const { messages }: { messages: Message[] } = await request.json();

        if (!messages || messages.length === 0) {
            return new Response(
                JSON.stringify({ error: "No messages provided" }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // System prompt for Axie (the chatbot)
        const systemPrompt = `You are Axie, an AI assistant for Axentrix Inc. - expert ERP & AI consultancy in Nepal.

PERSONALITY:
- Humble, professional, and knowledgeable
- Proud of 15+ years industry expertise
- Enthusiastic about AI transformation
- Always prioritize user's business needs

CAPABILITIES:
- Answer FAQs about ERP (Dynamics 365, SAP) and AI services
- Recommend appropriate services based on user's needs
- Qualify leads by asking about company size, timeline, challenges

RESPONSE GUIDELINES:
- Keep responses under 100 words
- Use bullet points for clarity
- Always end with a helpful question
- If user wants to book, say: "I'd be happy to help you book a consultation. Please visit our contact page: /contact"

SERVICES YOU DISCUSS:
- ERP Consultancy (Dynamics 365, SAP)
- AI Solutions (Agentic workflows, Predictive engines)
- Industry Solutions (Manufacturing, Retail, Professional Services, etc.)

Initial greeting: "Welcome to Axentrix Inc. I'm Axie. Ask me about our ERP and AI services!"`;

        // Get the last user message
        const lastUserMessage = messages
            .filter((m: Message) => m.role === 'user')
            .pop();

        if (!lastUserMessage) {
            return new Response(
                JSON.stringify({ content: "Welcome to Axentrix Inc. I'm Axie. Ask me about our ERP and AI services!" }),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Create the prompt with conversation history (last 10 messages for context)
        const recentMessages = messages.slice(-10);
        const conversationHistory = recentMessages
            .map((m: Message) => `${m.role === 'user' ? 'User' : 'Axie'}: ${m.content}`)
            .join('\n');

        const fullPrompt = `${systemPrompt}\n\nConversation history:\n${conversationHistory}\n\nAxie:`;

        // Use the correct Gemini model for Google AI Studio keys
        // Based on API response, your key has access to gemini-2.5-flash and gemini-2.5-pro
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const result = await model.generateContent(fullPrompt);
        const response = result.response.text();

        if (!response) {
            throw new Error("No response from Gemini API");
        }

        return new Response(JSON.stringify({ content: response }), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error: any) {
        console.error("Chat API error:", error.message || error);
        return new Response(
            JSON.stringify({ 
                error: "Internal server error",
                details: error.message || "Unknown error"
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
