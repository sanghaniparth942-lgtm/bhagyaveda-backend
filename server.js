const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get('/', (req, res) => {
  res.send('ભાગ્યવેદ શાસ્ત્રોક્ત વૈદિક સર્વર સક્રિય છે.');
});

app.post('/api/get-prediction', async (req, res) => {
  try {
    const { name, dob, time, gender, naamRashi, suryaRashi } = req.body;

    if (!name || !dob) {
      return res.status(400).json({ success: false, message: 'જરૂરી વિગતો ખૂટે છે.' });
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: { responseMimeType: "application/json" }
    });

    // સ્માર્ટ, વાસ્તવિક, આશાસ્પદ અને પોલિસી-ફ્રેન્ડલી પ્રોમ્પ્ટ
    const prompt = `
તમે એક ઉચ્ચ આધ્યાત્મિક અને શાસ્ત્રોક્ત વૈદિક જ્યોતિષ માર્ગદર્શક છો.
યુઝરે ₹૯૯ ચૂકવીને નવરાત્રિ મહા ગ્રહ પરિવર્તનનો અહેવાલ મેળવ્યો છે.

યુઝરની પ્રોફાઇલ:
- નામ: ${name}
- જન્મ તારીખ: ${dob}
- જન્મ સમય: ${time || 'સમય ઉપલબ્ધ નથી (સૂર્ય કુંડળી આધારિત)'}
- લિંગ: ${gender === 'female' ? 'મહિલા' : 'પુરુષ'}
- વૈદિક નામ રાશિ: ${naamRashi || 'મેષ'}
- સૂર્ય કુંડળી રાશિ: ${suryaRashi || 'મેષ'}

તમારે નીચેના અત્યંત કડક માર્ગદર્શક સિદ્ધાંતોનું પાલન કરવાનું છે:

૧. વાસ્તવિકતા અને સત્ય (Zero Sugarcoating):
બધું સારું-સારું બોલીને માખણ નથી લગાવવાનું. જીવનમાં જે વાસ્તવિક સંઘર્ષ છે તે સ્પષ્ટપણે દર્શાવો. જેમ કે: આર્થિક ખેંચતાણ, મહેનતના પ્રમાણમાં પરિણામ ન મળવું, વધારે પડતું વિચારવું (Overthinking), નજીકના લોકો દ્વારા થયેલી ઉપેક્ષા, અને નિર્ણયોમાં થતી દ્વિધા. યુઝરને લાગવું જોઈએ કે આ એમનું સાચું આંતરિક ચિત્ર છે.

૨. ભવિષ્ય પ્રત્યે સાચી આશા (Constructive Hope):
સમસ્યાઓ કહીને યુઝરને નિરાશ નથી કરવાના. તેમને સમજાવો કે આ ગ્રહોની સ્થિતિ કાયમી નથી, પણ આ નવરાત્રિથી ગ્રહોનું વલણ બદલાઈ રહ્યું છે. ક્યારે સુધારો આવશે અને ક્યારે નવી તકો ખુલશે તેનું વ્યવહારુ માર્ગદર્શન આપો.

૩. પોલિસી સુરક્ષા (0% Policy Violation):
કોઈપણ જાતનો ભય નથી ફેલાવવાનો (No Fear-mongering). કાળો જાદુ, અકાળ મૃત્યુ, કે વિનાશ જેવી ડરામણી વાતો બિલકુલ ન કરવી. રાતોરાત અમીર બનવાના કે ચમત્કારના ખોટા વાયદા પણ ન કરવા.

૪. આત્મવિશ્વાસ અને ભગવદ્-આસ્થા (Spiritual Faith):
યુઝરનો પોતાની જાત પરનો વિશ્વાસ અને મા આદિશક્તિ પરની શ્રદ્ધા વધે તેવો દિવ્ય અને આદરણીય સૂર રાખો. તેમને કર્મયોગી બનવાની પ્રેરણા આપો.

જવાબ ફક્ત અને ફક્ત નીચેના માન્ય JSON ફોર્મેટમાં આપવો:
{
  "premCareer": "HTML ફોર્મેટમાં કરિયર, પૈસા અને વ્યવસાયનું વાસ્તવિક વિશ્લેષણ (ક્યાં સાચવવું અને ક્યારે પ્રગતિ થશે)...",
  "premLove": "HTML ફોર્મેટમાં સંબંધો, પરિવાર અને માનસિક શાંતિનું માર્ગદર્શન...",
  "premRemedies": "HTML ફોર્મેટમાં આ નવરાત્રિ દરમિયાન કરવા જેવા સાત્વિક શાસ્ત્રોક્ત ઉપાયો (મા દુર્ગાના કયા સ્વરૂપનું પૂજન, કયો મંત્ર જાપ, કઈ ભૂલોથી બચવું)..."
}

લખાણમાં <strong>, <p>, <ul>, <li> જેવા HTML ટેગ્સનો ઉપયોગ કરવો જેથી વાંચવામાં સુંદર અને પ્રભાવશાળી લાગે.
`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const parsedData = JSON.parse(responseText);

    return res.json({
      success: true,
      data: parsedData
    });

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return res.status(500).json({
      success: false,
      message: "AI ગણતરીમાં વિલંબ થયો છે. કૃપા કરીને થોડી વાર પછી પ્રયાસ કરો."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
