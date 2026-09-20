import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/get-prediction', async (req, res) => {
  try {
    const { name, dob, time, gender, naamRashi, suryaRashi } = req.body;

    // Gemini માટે પ્રીમિયમ પ્રોમ્પ્ટ
    const prompt = `
      એક અનુભવી વૈદિક જ્યોતિષી તરીકે નીચેની વ્યક્તિ માટે નવરાત્રિના મહા ગ્રહ પરિવર્તનને આધારે પ્રીમિયમ રાશિફળ (Gujarati language માં) તૈયાર કરો.
      નામ: ${name}
      જન્મ તારીખ: ${dob}
      જન્મ સમય: ${time}
      લિંગ: ${gender}
      નામ રાશિ: ${naamRashi}
      સૂર્ય રાશિ: ${suryaRashi}

      કૃપા કરીને નીચેના 3 વિષયો પર સચોટ, સકારાત્મક અને શાસ્ત્રોક્ત આગાહી આપો. લખાણમાં થોડા HTML ટેગ્સ (જેમ કે <b>, <br>, <ul>, <li>) નો ઉપયોગ કરો જેથી તે વેબસાઈટ પર સુંદર અને આકર્ષક દેખાય.

      માહિતી ફરજિયાતપણે નીચે મુજબના JSON ફોર્મેટમાં જ આપવી (કોઈ માર્કડાઉન કે વધારાનું લખાણ નહીં):
      {
        "premCareer": "કરિયર અને નાણાકીય ભવિષ્ય વિશે 3-4 લાઈન...",
        "premLove": "પ્રેમ, લગ્ન અને પરિવાર વિશે 3-4 લાઈન...",
        "premRemedies": "નવરાત્રિ વિશેષ શાસ્ત્રોક્ત ઉપાયો (રુદ્રાક્ષ, મંત્ર કે પૂજા) વિશે..."
      }
    `;

    // Gemini API Call
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const resultText = response.text;
    const aiData = JSON.parse(resultText);

    // ફ્રન્ટએન્ડ પર ડેટા મોકલો
    res.json({
      success: true,
      data: aiData
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "AI અહેવાલ બનાવવામાં સર્વર પર ભૂલ આવી છે." 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Bhagyaveda Backend is running on port ${PORT}`);
});
