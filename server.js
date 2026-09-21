import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Render Uptime Ping (સર્વરને ૨૪ કલાક જાગતું રાખવા)
app.get('/api/ping', (req, res) => {
  res.json({ status: "active", message: "Bhagyaveda Quantum Astro Server is online." });
});

app.post('/api/get-prediction', async (req, res) => {
  try {
    const { name, dob, time, gender, naamRashi, suryaRashi, bhagyank } = req.body || {};
    const clientName = name ? name.trim() : "જાતક";

    // વૈદિક શાસ્ત્ર અને ક્વોન્ટમ કેલ્ક્યુલેશન આધારિત પ્રોમ્પ્ટ
    const prompt = `
      તમે 'ભાગ્યવેદ ક્વોન્ટમ એસ્ટ્રો લેબ્સ' ના મુખ્ય આચાર્ય અને એસ્ટ્રો-ડેટા સાયન્ટિસ્ટ છો.
      નીચેની વ્યક્તિ માટે પ્રાચીન સૂર્ય સિદ્ધાંત અને આધુનિક ગોચર ગણતરી આધારિત સંતુલિત અને અત્યંત વ્યક્તિગત કુંડળી વિશ્લેષણ (Gujarati Language માં) તૈયાર કરો.

      વ્યક્તિગત ડેટા:
      - નામ: ${clientName}
      - જન્મ તારીખ: ${dob || 'અજ્ઞાત'}
      - સમય: ${time || 'સૂર્ય કુંડળી પદ્ધતિ'}
      - લિંગ: ${gender || 'પુરુષ'}
      - નામ રાશિ: ${naamRashi}
      - સૂર્ય રાશિ: ${suryaRashi}
      - ભાગ્યાંક: ${bhagyank || '૧'}

      વિશ્લેષણના નિયમો:
      ૧. ગ્રાહકને સંબોધતી વખતે તેમના સાચા નામનો ઉપયોગ કરો (દા.ત. "${clientName}જી").
      ૨. ટોન: વૈદિક શાસ્ત્રની ગરિમા અને વૈજ્ઞાનિક વિશ્લેષણનું મિશ્રણ. કોઈ અતિશયોક્તિ કે અવાસ્તવિક ચમત્કારો ન જણાવવા. ભય પણ ન ફેલાવવો અને બધું સારું-સારું પણ ન કહેવું.
      ૩. જીવનના ૩ મહત્વપૂર્ણ પાસાં:
         - કરિયર અને નાણાકીય દિશા: તકો ક્યાં છે અને કયા આર્થિક નિર્ણયોમાં સાવચેતી રાખવી.
         - પ્રેમ, હૃદય જોડાણ અને સંબંધો: યુવાનો માટે સાચો પ્રેમ/કનેક્શન અને વડીલો માટે પારિવારિક સુમેળ તથા ગેરસમજ ટાળવાનું સચોટ વિશ્લેષણ.
         - શાસ્ત્રોક્ત સાત્વિક ઉપાયો: આ નવરાત્રિ દરમિયાન કરવા જેવા ચોક્કસ મંત્ર, દીપ દાન કે દેવી આરાધના.
      ૪. લખાણમાં સુંદર HTML ટેગ્સ (<b>, <br>, <ul>, <li>) વાપરો જેથી પ્રીમિયમ દેખાય.

      માહિતી ફરજિયાતપણે નીચે મુજબના શુદ્ધ JSON ફોર્મેટમાં આપવી (કોઈ માર્કડાઉન બ્લોક્સ નહીં):
      {
        "premCareer": "${clientName}જી માટે કરિયર અને ધન સંબંધિત વિશ્લેષણ (૩-૪ લાઈન)...",
        "premLove": "${clientName}જી માટે પ્રેમ, હૃદય કનેક્શન અને સંબંધોનું વાસ્તવિક વિશ્લેષણ (૩-૪ લાઈન)...",
        "premRemedies": "આ નવરાત્રિ દરમિયાન ${clientName}જી માટેના સરળ, સચોટ શાસ્ત્રોક્ત ઉપાયો..."
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    let rawText = response.text || "{}";
    rawText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();

    let aiData;
    try {
      aiData = JSON.parse(rawText);
    } catch (e) {
      console.error("JSON Parsing Fallback:", e);
      aiData = {
        premCareer: `<b>${clientName}જી માટે નાણાકીય દિશા:</b> ગ્રહોનું ગોચર સૂચવે છે કે તમારી મહેનત રંગ લાવશે, પરંતુ ઉતાવળા નિર્ણયો અને દેખાડા પાછળ થતા ખર્ચ પર નિયંત્રણ રાખવું જરૂરી છે. નવરાત્રિ પછી સ્થિતિ વધુ મજબૂત બનશે.`,
        premLove: `<b>હૃદય કનેક્શન અને સંબંધો:</b> તમે સંબંધોમાં ૧૦૦% પ્રમાણિક છો, પરંતુ અપેક્ષાઓ વધારે રાખવાથી મન દુઃખી થઈ શકે છે. વાણીમાં નમ્રતા રાખવાથી નજીકની વ્યક્તિ સાથે ચાલી રહેલી ગેરસમજ દૂર થશે.`,
        premRemedies: `<b>શાસ્ત્રોક્ત ઉપાય:</b> નવરાત્રિના પાવન દિવસોમાં દરરોજ સાંજે કપૂરનો ધૂપ કરવો અને 'ॐ દૂં દુર્ગાયૈ નમઃ' મંત્રની ૧ માળા કરવી.`
      };
    }

    res.json({
      success: true,
      data: aiData
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    const clientName = req.body?.name ? req.body.name.trim() : "જાતક";
    res.json({ 
      success: true, 
      data: {
        premCareer: `<b>${clientName}જી માટે કર્મ ભાવ:</b> કાર્યક્ષેત્રે સતત પરિશ્રમ કરવો પડશે. આવકના નવા સ્ત્રોત ખુલશે પરંતુ લેવડ-દેવડમાં કાગળિયા બાબતે સાવધ રહેવું.`,
        premLove: `<b>લાગણીઓ અને પરિવાર:</b> સંબંધોમાં ધીરજ સૌથી મોટો મંત્ર છે. આવેશમાં આવીને કોઈ નિર્ણય ન લેવો.`,
        premRemedies: `<b>સાત્વિક ઉપાય:</b> સૂર્યોદય સમયે સૂર્યનારાયણને જળ અર્પણ કરવું અને દેવી કવચનું શ્રવણ કરવું.`
      }
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Bhagyaveda server running on port ${PORT}`);
});
