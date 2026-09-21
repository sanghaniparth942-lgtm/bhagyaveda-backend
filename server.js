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
  res.json({ status: "active", message: "Bhagyaveda Supercomputing Server is live." });
});

app.post('/api/get-prediction', async (req, res) => {
  try {
    const { name, dob, time, gender, naamRashi, suryaRashi, bhagyank, selectedAreas } = req.body || {};
    const clientName = name ? name.trim() : "જાતક";
    
    // પસંદ કરેલા ક્ષેત્રોનું લિસ્ટ
    const areasList = (Array.isArray(selectedAreas) && selectedAreas.length > 0)
      ? selectedAreas.join(', ')
      : "નોકરી અને કરિયર, ધનલાભ અને વેપાર, પ્રેમ અને સંબંધો, પરિવાર અને શાંતિ, આરોગ્ય";

    // સુપર-ડીપ અને પૈસા વસૂલ પ્રોમ્પ્ટ
    const prompt = `
      તમે 'ભાગ્યવેદ શાસ્ત્રોક્ત અને ગાણિતિક એસ્ટ્રો રિસર્ચ લેબ્સ' ના મુખ્ય વિદ્વાન જ્યોતિષાચાર્ય છો.
      ગ્રાહકે ₹૯૯ ચૂકવીને નીચેની વિગતો સાથે વ્યક્તિગત કુંડળી વિશ્લેષણ માંગ્યું છે:

      વ્યક્તિગત માહિતી:
      - નામ: ${clientName}
      - જન્મ તારીખ: ${dob || 'અજ્ઞાત'}
      - જન્મ સમય: ${time || 'સૂર્ય કુંડળી પદ્ધતિ (૧૦૦% પ્રમાણિત)'}
      - લિંગ: ${gender || 'પુરુષ'}
      - નામ રાશિ: ${naamRashi}
      - સૂર્ય રાશિ: ${suryaRashi}
      - ભાગ્યાંક: ${bhagyank || '૧'}
      - ગ્રાહકે ખાસ પસંદ કરેલા ક્ષેત્રો: [ ${areasList} ]

      વિશેષ અને કડક સૂચનાઓ (મહત્વપૂર્ણ):
      ૧. રિપોર્ટ ટૂંકો કે સાદો ન હોવો જોઈએ! ગ્રાહકે પૈસા ચૂકવ્યા છે એટલે સંપૂર્ણ વિસ્તૃત, વ્યક્તિગત અને ઊંડાણપૂર્વકનું લખાણ હોવું જોઈએ.
      ૨. ગ્રાહકને સંબોધન કરતી વખતે તેમના નામનો ઉપયોગ કરો (દા.ત. "${clientName}જી").
      ૩. ગ્રાહકે જે-જે ક્ષેત્રો પસંદ કર્યા છે [ ${areasList} ], તે દરેક ક્ષેત્ર માટે અલગ વિગતવાર વિશ્લેષણ તૈયાર કરો. દરેક ક્ષેત્રમાં:
         - ગ્રહોની વર્તમાન ગોચર સ્થિતિ અને અસરો
         - આવનારા ૩ થી ૬ મહિનાની ચોક્કસ ટાઈમલાઈન (કયા મહિનામાં લાભ કે ફેરફાર થશે)
         - શું કરવું અને શું ન કરવું (Do's & Don'ts)
      ૪. લખાણમાં જરૂર મુજબ <b>, <ul>, <li>, <br> જેવા HTML ટેગ્સ વાપરો જેથી વાંચવામાં અત્યંત પ્રીમિયમ અને ભવ્ય લાગે.

      માહિતી ફરજિયાતપણે નીચે મુજબના શુદ્ધ JSON ફોર્મેટમાં જ આપવી (કોઈ માર્કડાઉન બ્લોક્સ નહીં):
      {
        "luckyColor": "${naamRashi} મુજબ અનુકૂળ શુભ રંગ",
        "luckyNumber": "${bhagyank} આધારિત ભાગ્યશાળી અંક",
        "luckyDevi": "આ નવરાત્રિમાં આરાધના કરવા યોગ્ય વિશેષ દેવી સ્વરૂપ",
        "luckyRudra": "ધારણ કરવા યોગ્ય રુદ્રાક્ષ કે રત્ન",
        "executiveSummary": "${clientName}જી માટે સમગ્ર કુંડળી અને નવરાત્રિ ગ્રહ ગોચરનો ૪-૫ લાઈનનો પાવરફુલ એક્ઝિક્યુટિવ સારાંશ...",
        "areaReports": [
          {
            "areaName": "ક્ષેત્રનું નામ (જેમ કે 'નોકરી અને કરિયર')",
            "status": "શુભ સંકેત / સાવધાની જરૂરી / મોટો વળાંક",
            "deepAnalysis": "${clientName}જી માટે આ ક્ષેત્રનું ૨-૩ ફકરાનું ઊંડાણપૂર્વકનું શાસ્ત્રોક્ત વિશ્લેષણ...",
            "timeline": "આગામી મહિનાઓમાં અપેક્ષિત સમયગાળો અને ફેરફાર...",
            "actionAdvice": "આ બાબતમાં શું સાવચેતી રાખવી અને શું પગલાં લેવા..."
          }
        ],
        "planetaryDosha": "કુંડળીમાં કયો ગ્રહ (શનિ, રાહુ, કેતુ કે મંગળ) ક્યાં અડચણ લાવે છે અને તેને શાંત કરવાની ચેતવણી (૫-૬ લાઈન)...",
        "specialRemedies": [
          {
            "title": "ઉપાયનું નામ (દા.ત. નવરાત્રિ વિશેષ મંત્ર સાધના)",
            "vidhi": "કેવી રીતે અને કયા સમયે વિધિ કરવી (વિગતવાર)...",
            "mantra": "ચોક્કસ મંત્ર સંસ્કૃત/ગુજરાતીમાં...",
            "benefit": "આ ઉપાયથી કયો ચોક્કસ દોષ દૂર થશે..."
          }
        ]
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
      aiData = buildFallbackData(clientName, naamRashi, suryaRashi, bhagyank, selectedAreas);
    }

    res.json({
      success: true,
      data: aiData
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    const { name, naamRashi, suryaRashi, bhagyank, selectedAreas } = req.body || {};
    const fallback = buildFallbackData(name, naamRashi, suryaRashi, bhagyank, selectedAreas);
    res.json({ success: true, data: fallback });
  }
});

// જો Gemini કોઈ કારણસર સ્લો થાય તો પણ ગ્રાહકને ડીપ રિપોર્ટ મળે તે માટે ફોલબેક
function buildFallbackData(name, naamRashi, suryaRashi, bhagyank, selectedAreas) {
  const client = name || "જાતક";
  const areas = (Array.isArray(selectedAreas) && selectedAreas.length > 0)
    ? selectedAreas
    : ["નોકરી અને કરિયર", "ધનલાભ અને વેપાર", "પ્રેમ અને સંબંધો"];

  const areaReports = areas.map(area => ({
    areaName: area,
    status: "મહત્વપૂર્ણ ગોચર સંક્રમણ",
    deepAnalysis: `<b>${client}જી</b>, તમારી ${suryaRashi || 'સૂર્ય'} કુંડળી અને ${naamRashi || 'વૈદિક'} રાશિના દસમા અને બીજા ભાવ પર ગ્રહોનું સંક્રમણ આ ક્ષેત્રમાં અટકેલા કામોને ગતિ આપશે. આવનારા દિવસોમાં તમારા પ્રયાસો રંગ લાવશે, પરંતુ કોઈના પ્રભાવમાં આવીને ઉતાવળા નિર્ણયો ન લેવા.`,
    timeline: "નવરાત્રિ પૂર્ણ થયા પછીના ૪૫ દિવસમાં સકારાત્મક પરિવર્તનના સંકેત છે.",
    actionAdvice: "દરરોજ સવારે ઈષ્ટદેવનું સ્મરણ કરવું અને મહત્વના કાગળો પર વાંચ્યા વગર સહી ન કરવી."
  }));

  return {
    luckyColor: "કેસરી અને સોનેરી પીળો",
    luckyNumber: `${bhagyank || '૭'}`,
    luckyDevi: "માં આદિશક્તિ ભગવતી દુર્ગા",
    luckyRudra: "૫ મુખી રુદ્રાક્ષ",
    executiveSummary: `${client}જી, તમારી કુંડળીમાં ગ્રહોનું ગોચર સૂચવે છે કે ભૂતકાળમાં થયેલી ભૂલો સુધારવાનો અને ભાગ્યોદય કરવાનો આ ઉત્તમ સમય છે. નવરાત્રિના ૯ દિવસો તમારા માટે ઊર્જા અને નવી તકો લઈને આવી રહ્યા છે.`,
    areaReports: areaReports,
    planetaryDosha: `રાહુ અને શનિની વર્તમાન સ્થિતિને કારણે મનમાં અવારનવાર નકારાત્મક વિચારો અથવા અનિર્ણાયકતા અનુભવાય છે. તેનાથી બચવા માટે ખોટી ચિંતાઓ છોડીને કર્મ પર ધ્યાન કેન્દ્રિત કરવું જરૂરી છે.`,
    specialRemedies: [
      {
        title: "નવરાત્રિ વિશેષ દીપ આરાધના",
        vidhi: "દરરોજ સંધ્યાકાળે ગાયના શુદ્ધ ઘીનો દીવો માતાજી સમક્ષ પ્રગટાવી તેમાં ૧ લવિંગની જોડી અર્પણ કરવી.",
        mantra: "ॐ દૂં દુર્ગાયૈ નમઃ (૧૦૮ વખત જપ)",
        benefit: "નકારાત્મક ઊર્જા, નજર દોષ અને માનસિક તણાવ દૂર થાય છે."
      },
      {
        title: "સૂર્ય-શનિ સંતુલન જળ અર્ઘ્ય",
        vidhi: "તાંબાના પાત્રમાં શુદ્ધ જળ, લાલ ચંદન અને પુષ્પ ઉમેરી સૂર્યોદય સમયે અર્પણ કરવું.",
        mantra: "ॐ ઘૃણિઃ સૂર્યાય નમઃ",
        benefit: "આત્મવિશ્વાસ વધે છે અને કાર્યક્ષેત્રે આવતી અડચણો દૂર થાય છે."
      }
    ]
  };
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Bhagyaveda server running on port ${PORT}`);
});
