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

// Render Uptime Ping Endpoint
app.get('/api/ping', (req, res) => {
  res.json({ status: "active", message: "Bhagyaveda server is running smoothly." });
});

app.post('/api/get-prediction', async (req, res) => {
  try {
    const { name, dob, time, gender, naamRashi, suryaRashi } = req.body || {};

    const clientName = name ? name.trim() : "જાતક";

    // સંતુલિત, પ્રમાણિક અને વ્યક્તિગત પ્રોમ્પ્ટ
    const prompt = `
      તમે એક વિદ્વાન, અનુભવી અને પ્રામાણિક વૈદિક જ્યોતિષી છો. તમારું નામ 'ભાગ્યવેદ આચાર્ય' છે.
      નીચેની વ્યક્તિ માટે નવરાત્રિ મહા ગ્રહ ગોચર અને ગ્રહ પરિવર્તન આધારિત ૧૦૦% વ્યક્તિગત કુંડળી વિશ્લેષણ તૈયાર કરો.
      
      વ્યક્તિની વિગતો:
      - નામ: ${clientName}
      - જન્મ તારીખ: ${dob || 'અજ્ઞાત'}
      - જન્મ સમય: ${time || 'અજ્ઞાત (સૂર્ય કુંડળી આધારિત)'}
      - લિંગ: ${gender || 'પુરુષ'}
      - વૈદિક નામ રાશિ: ${naamRashi}
      - સૂર્ય રાશિ: ${suryaRashi}

      જ્યોતિષીય નિયમો અને ટોન:
      ૧. ગ્રાહકને સંબોધન કરતી વખતે તેમના નામનો ઉપયોગ કરો (દા.ત. "${clientName}જી").
      ૨. અતિશયોક્તિ કે અવાસ્તવિક ચમત્કારો ન જણાવવા. બધું સારું-સારું પણ નથી કહેવાનું કે નથી કોઈને નિરાશ કે ભયભીત કરવાના.
      ૩. જીવનના વાસ્તવિક પડકારો (જેમ કે અણધાર્યા ખર્ચ, માનસિક અધીરાઈ, નિર્ણયોમાં સાવચેતી) જણાવવા અને સાથે સકારાત્મક માર્ગદર્શન આપવું.
      ૪. લખાણમાં થોડા યોગ્ય HTML ટેગ્સ (<b>, <br>, <ul>, <li>) વાપરો જેથી વાંચવામાં અત્યંત પ્રીમિયમ લાગે.
      
      માહિતી ફરજિયાતપણે નીચે મુજબના શુદ્ધ JSON ફોર્મેટમાં જ આપવી (કોઈ વધારાનો ટેક્સ્ટ કે માર્કડાઉન નહીં):
      {
        "premCareer": "${clientName}જી માટે કરિયર, વેપાર અને ધન સંબંધિત સંતુલિત વિશ્લેષણ (૩-૪ લાઈન જેમાં તકો અને સાવચેતી બંને હોય)...",
        "premLove": "${clientName}જી માટે માનસિક શાંતિ, પરિવાર અને સંબંધોનું વાસ્તવિક વિશ્લેષણ (૩-૪ લાઈન)...",
        "premRemedies": "આ નવરાત્રિ દરમિયાન ${clientName}જી માટેના સરળ, સાત્વિક શાસ્ત્રોક્ત ઉપાયો (મંત્ર જપ, દીપ દાન કે વિશેષ આરાધના)..."
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
        premCareer: `<b>${clientName}જી માટે નાણાકીય સ્થિતિ:</b> ગોચર કુંડળી મુજબ તમારી મહેનતનું ફળ મળવાનો સમય નજીક છે, પરંતુ ઉતાવળે લીધેલા આર્થિક નિર્ણયો અથવા બિનજરૂરી જોખમથી બચવું હિતાવહ રહેશે. ધૈર્ય રાખવાથી લાભ થશે.`,
        premLove: `<b>પારિવારિક જીવન:</b> વાણી અને ક્રોધ પર સંયમ રાખવો જરૂરી બનશે. પરિવારના વડીલોના આશીર્વાદ અને પરસ્પર સંવાદથી જૂની ગેરસમજો દૂર થઈ શકશે.`,
        premRemedies: `<b>શાસ્ત્રોક્ત ઉપાય:</b> નવરાત્રિ દરમિયાન દરરોજ સાંજે કપૂરનો ધૂપ કરવો અને દેવી કવચ અથવા લલિતા સહસ્રનામનું શ્રવણ કરવું.`
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
        premCareer: `<b>${clientName}જી માટે કર્મ ભાવ:</b> ગ્રહોની વર્તમાન સ્થિતિ સૂચવે છે કે કર્મક્ષેત્રે સતત પ્રયત્નો કરવા પડશે. અણધાર્યા ખર્ચાઓ પર અંકુશ રાખવો જરૂરી છે. ધીરજ રાખશો તો યોગ્ય સમયે પ્રગતિના દ્વાર ખુલશે.`,
        premLove: `<b>માનસિક શાંતિ:</b> માનસિક ઉચાટ કે અસ્થિરતા અનુભવાય ત્યારે ધ્યાન અને ઇષ્ટદેવનું સ્મરણ લાભદાયી રહેશે. પારિવારિક નિર્ણયોમાં બધાનો મત લેવો.`,
        premRemedies: `<b>દૈનિક ઉપાય:</b> સૂર્યોદય સમયે તાંબાના લોટાથી સૂર્યનારાયણને જળ અર્પણ કરવું અને નવરાત્રિ દરમિયાન સાત્વિક આહાર જાળવવો.`
      }
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Bhagyaveda server live on port ${PORT}`);
});
