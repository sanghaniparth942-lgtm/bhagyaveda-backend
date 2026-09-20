import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/get-prediction', async (req, res) => {
    try {
        const { name, dob, time, gender } = req.body;

        const prompt = `તમે એક પ્રખ્યાત અને શાસ્ત્રોક્ત વૈદિક જ્યોતિષી છો.
વ્યક્તિનું નામ ${name} છે. જન્મ તારીખ ${dob}, જન્મ સમય ${time || 'સમય ખબર નથી'} અને લિંગ ${gender} છે.
આ વ્યક્તિ માટે નવરાત્રિ મહા ગ્રહ પરિવર્તન અને પ્રાચીન સૂર્ય કુંડળીના આધારે ગુજરાતીમાં સંપૂર્ણ શાસ્ત્રોક્ત ભવિષ્યફળ આપો.
લખાણમાં ક્યાંય "Gemini", "AI" કે "મોડલ" જેવા ટેકનિકલ શબ્દોનો ઉલ્લેખ ન કરવો. શુદ્ધ શાસ્ત્રોક્ત, રહસ્યમય અને આદરપૂર્ણ ભાષા વાપરવી.

આખા રિપોર્ટનો જવાબ માત્ર અને માત્ર નીચે આપેલા JSON ફોર્મેટમાં જ આપો:
{
  "freeIntro": "વ્યક્તિના મૂળ સ્વભાવ, શક્તિ અને આંતરિક ગુણો વિશે ૨-૩ પ્રભાવશાળી વાક્યો.",
  "freeTransit": "નવરાત્રિ ગ્રહ ગોચર, શનિ-ગુરુ-રાહુની વર્તમાન અસર વિશે ૨-૩ વાક્યો.",
  "freeDanger": "આગામી ૬૦ દિવસો માટે નાણાકીય કે પારિવારિક સાવચેતી/ચેતવણી ૧-૨ વાક્યોમાં.",
  "premCareer": "કરિયર, નોકરી/ધંધો અને ધન લાભ વિશે વિગતવાર ૧૦-૧૨ લીટીમાં શાસ્ત્રોક્ત અહેવાલ.",
  "premLove": "પ્રેમ, વિવાહ અને પારિવારિક સંબંધો વિશે વિગતવાર ૧૦-૧૨ લીટીમાં અહેવાલ.",
  "premRemedies": "નવરાત્રિ વિશેષ ઉપાયો - કઈ દેવીની ઉપાસના, શુભ રત્ન, રુદ્રાક્ષ અને મંત્ર વિશે વિગતવાર અહેવાલ."
}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json'
            }
        });

        const aiData = JSON.parse(response.text);
        res.json({ success: true, data: aiData });

    } catch (error) {
        console.error("Prediction Error:", error);
        res.status(500).json({ success: false, message: "નક્ષત્ર ગણતરીમાં અવરોધ આવ્યો છે. કૃપા કરીને થોડી વાર પછી પ્રયાસ કરો." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Bhagyaveda Server running on port ${PORT}`);
});