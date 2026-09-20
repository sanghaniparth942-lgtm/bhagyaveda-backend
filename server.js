<!DOCTYPE html>
<html lang="gu" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ભાગ્યવેદ (Bhagyaveda) - નવરાત્રિ મહા ગ્રહ પરિવર્તન સ્કેન</title>
  
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            cosmic: { 950: '#02040a', 900: '#0a0f1d', 800: '#111827', 700: '#1f293d' },
            accent: { gold: '#ffd700', amber: '#f59e0b', red: '#ee4444', violet: '#b026ff' }
          },
          fontFamily: { mono: ['Courier New', 'monospace', 'ui-monospace'] },
          animation: {
            'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
            'spin-slow': 'spin 20s linear infinite'
          },
          keyframes: {
            pulseGlow: {
              '0%, 100%': { opacity: '0.3', filter: 'drop-shadow(0 0 15px rgba(238, 68, 68, 0.3))' },
              '50%': { opacity: '0.7', filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.5))' }
            }
          }
        }
      }
    }
  </script>

  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Noto+Sans+Gujarati:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Plus Jakarta Sans', 'Noto Sans Gujarati', sans-serif;
      background-color: #02040a;
      color: #f3f4f6;
      background-image: radial-gradient(circle at 15% 50%, rgba(238, 68, 68, 0.05), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(255, 215, 0, 0.04), transparent 25%);
    }
    .font-cinzel { font-family: 'Cinzel', serif; }
    
    .shakti-border {
      position: relative;
      background: rgba(10, 15, 29, 0.7);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(238, 68, 68, 0.2);
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.05);
    }
    .shakti-border::before {
      content: '';
      position: absolute;
      top: -1px; left: -1px; right: -1px; bottom: -1px;
      background: linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.2), transparent 60%);
      z-index: -1;
      border-radius: inherit;
    }

    .ancient-mandala {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw; height: 100vw;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,215,0,0.02)" stroke-width="0.2"/></svg>');
      background-size: contain; z-index: -10; opacity: 0.3;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-accent-red selection:text-white relative">

  <div class="ancient-mandala animate-spin-slow"></div>

  <!-- Header -->
  <header class="w-full border-b border-accent-red/20 bg-cosmic-950/80 backdrop-blur-xl sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="relative flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-accent-red"></span></span>
        <span class="text-xs font-mono text-accent-red uppercase tracking-widest font-bold">ભાગ્યવેદ શાસ્ત્રોક્ત</span>
      </div>
      <div class="text-[10px] font-mono text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full border border-accent-gold/20 flex items-center gap-1">
        <i data-lucide="shield-check" class="w-3 h-3"></i> શાસ્ત્રોક્ત વૈદિક સૂર્ય-નામ ગણતરી
      </div>
    </div>
  </header>

  <!-- Main Content Area -->
  <main class="max-w-4xl mx-auto px-4 py-8 w-full flex-grow z-10 space-y-10">
    
    <!-- Hero Section -->
    <div class="text-center space-y-4 relative" id="heroSection">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-amber/30 bg-accent-amber/10 text-accent-gold text-xs font-bold uppercase tracking-widest shadow-lg">
        <i data-lucide="flame" class="w-4 h-4 animate-pulse"></i> નવરાત્રિ મહા ગ્રહ પરિવર્તન સ્કેન
      </div>
      <h1 class="text-3xl md:text-5xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-br from-accent-gold via-white to-accent-red leading-tight drop-shadow-lg">
        આ નવરાત્રિમાં બદલાઈ રહી છે<br>તમારા ગ્રહોની દિશા અને દશા!
      </h1>
      <p class="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
        નામ અને જન્મ તારીખ આધારિત ૧૦૦% શાસ્ત્રોક્ત સ્કેન. જાણો તમારા જીવનના કયા પાસાં પર નવરાત્રિ દરમિયાન ગ્રહોની સીધી અસર થઈ રહી છે.
      </p>
    </div>

    <!-- The Input Form -->
    <div id="calculatorCard" class="shakti-border rounded-2xl p-6 sm:p-8 shadow-2xl relative transition-all duration-500">
      <form id="astroForm" onsubmit="runQuantumCalculation(event)" class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="group">
            <label class="block text-xs font-mono text-accent-gold/70 uppercase tracking-widest mb-2">તમારું પૂરૂં નામ *</label>
            <input type="text" id="userName" required placeholder="દા.ત. રાહુલ શર્મા" class="w-full bg-cosmic-950/80 border border-slate-700/80 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-amber transition-all placeholder:text-slate-700">
          </div>
          <div class="group">
            <label class="block text-xs font-mono text-accent-gold/70 uppercase tracking-widest mb-2">જન્મ તારીખ *</label>
            <input type="date" id="userDob" required class="w-full bg-cosmic-950/80 border border-slate-700/80 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-amber transition-all">
          </div>
          <div class="group">
            <label class="block text-xs font-mono text-accent-gold/70 uppercase tracking-widest mb-2">જન્મ સમય (જો ખબર હોય તો)</label>
            <select id="userTimePeriod" class="w-full bg-cosmic-950/80 border border-slate-700/80 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-amber transition-all appearance-none">
              <option value="unknown">સમય ખબર નથી (સૂર્ય કુંડળી મેથડ - ૧૦૦% સચોટ)</option>
              <option value="morning">સવાર (04:00 - 12:00)</option>
              <option value="afternoon">બપોર (12:00 - 17:00)</option>
              <option value="evening">સાંજ (17:00 - 21:00)</option>
              <option value="night">રાત (21:00 - 04:00)</option>
            </select>
          </div>
          <div class="group">
            <label class="block text-xs font-mono text-accent-gold/70 uppercase tracking-widest mb-2">લિંગ *</label>
            <select id="userGender" required class="w-full bg-cosmic-950/80 border border-slate-700/80 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-amber transition-all appearance-none">
              <option value="male">પુરુષ</option>
              <option value="female">મહિલા</option>
            </select>
          </div>
        </div>
        <button type="submit" class="w-full py-4 rounded-lg font-bold text-sm uppercase tracking-widest text-cosmic-950 bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold hover:scale-[1.01] shadow-lg shadow-accent-amber/20 transition-all flex items-center justify-center gap-3 cursor-pointer">
          <i data-lucide="eye" class="w-5 h-5"></i>
          મારું ભાગ્ય સ્કેન કરો (મફત પ્રિવ્યૂ)
        </button>
      </form>
    </div>

    <!-- Quick Scan Loader -->
    <div id="loaderScreen" class="hidden shakti-border rounded-2xl p-8 text-center space-y-4 my-6 max-w-lg mx-auto backdrop-blur-3xl">
      <div class="w-16 h-16 border-4 border-accent-amber border-t-accent-red rounded-full animate-spin mx-auto"></div>
      <h3 class="text-lg font-cinzel font-bold text-white">નવગ્રહ અને આદિશક્તિ ગણતરી ચાલુ છે...</h3>
      <p id="loaderStatus" class="text-xs font-mono text-accent-amber">નામ અને સૂર્ય સિદ્ધાંત મુજબ કુંડળી વિશ્લેષણ થઈ રહ્યું છે...</p>
    </div>

    <!-- Results Container -->
    <div id="resultScreen" class="hidden space-y-10 mt-4">
      
      <!-- Free Reading Box -->
      <div class="bg-cosmic-900/60 border border-accent-red/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-lg">
        <div class="border-b border-white/10 pb-4 mb-4 relative z-10">
          <h2 class="text-2xl md:text-3xl font-bold font-cinzel text-accent-gold" id="resTitle">રિપોર્ટ તૈયાર છે!</h2>
          
          <!-- Rashi Badges -->
          <div class="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-4">
            <div class="bg-cosmic-950/80 border border-accent-gold/30 p-3 rounded-lg flex items-center gap-3">
              <div class="p-2 bg-accent-gold/10 text-accent-gold rounded-md"><i data-lucide="user-check" class="w-5 h-5"></i></div>
              <div>
                <p class="text-[10px] text-slate-400 uppercase tracking-widest font-mono">નામ રાશિ (વૈદિક)</p>
                <p class="text-base font-bold text-white" id="badgeNaamRashi">--</p>
              </div>
            </div>
            <div class="bg-cosmic-950/80 border border-accent-red/30 p-3 rounded-lg flex items-center gap-3">
              <div class="p-2 bg-accent-red/10 text-accent-red rounded-md"><i data-lucide="sun" class="w-5 h-5"></i></div>
              <div>
                <p class="text-[10px] text-slate-400 uppercase tracking-widest font-mono">સૂર્ય કુંડળી રાશિ</p>
                <p class="text-base font-bold text-white" id="badgeSuryaRashi">--</p>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed font-light relative z-10">
          <p id="paraIntro" class="text-white font-medium"></p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div class="bg-cosmic-950/60 border border-white/10 p-4 rounded-xl space-y-1">
              <div class="text-accent-gold flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <i data-lucide="coins" class="w-4 h-4"></i> ધન અને કરિયર
              </div>
              <p class="text-xs text-slate-300">કર્મ ભાવ પર શનિ અને ગુરુની યુતિથી નવી તકો સામે અચાનક અડચણ ઊભી થવાના સંકેત.</p>
            </div>

            <div class="bg-cosmic-950/60 border border-white/10 p-4 rounded-xl space-y-1">
              <div class="text-accent-red flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <i data-lucide="users" class="w-4 h-4"></i> પરિવાર અને સંબંધ
              </div>
              <p class="text-xs text-slate-300">રાહુ-કેતુના અક્ષને લીધે નજીકના લોકો સાથે ગેરસમજ અથવા માનસિક બેચેનીનો યોગ.</p>
            </div>

            <div class="bg-cosmic-950/60 border border-white/10 p-4 rounded-xl space-y-1">
              <div class="text-amber-400 flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <i data-lucide="shield-alert" class="w-4 h-4"></i> આરોગ્ય અને ખર્ચ
              </div>
              <p class="text-xs text-slate-300">અષ્ટમ ભાવ સક્રિય થતાં અણધાર્યા ખર્ચ અથવા ઉર્જાનો વ્યય થવાની સંભાવના.</p>
            </div>
          </div>

          <div class="flex gap-4 p-4 bg-accent-red/10 border border-accent-red/30 rounded-xl mt-4">
            <div class="mt-0.5 text-accent-red"><i data-lucide="alert-octagon" class="w-6 h-6 animate-pulse"></i></div>
            <div class="space-y-1">
              <p class="text-sm font-bold text-white">મહા ગ્રહ પરિવર્તન પ્રશ્ન:</p>
              <p class="text-xs text-slate-300">
                નવરાત્રિ દરમિયાન થનારી આ ગ્રહીય હિલચાલ તમારા માટે અણધાર્યો ધનલાભ લાવશે કે મોટો આર્થિક ફટકો? કયા નિર્ણયોમાં સાવધાની રાખવી અને કયા ઉપાયો કરવા તે સંપૂર્ણ રિપોર્ટમાં ઉપલબ્ધ છે.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Paywall Section (₹99 Offer) -->
      <div id="paywallBox" class="relative shakti-border rounded-2xl p-1 border border-accent-red shadow-[0_0_40px_rgba(238,68,68,0.3)] overflow-hidden animate-pulse-glow">
        <div class="relative bg-cosmic-950 rounded-xl p-6 sm:p-10 space-y-6">
          <div class="text-center space-y-3">
             <div class="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-accent-amber/20 border border-accent-amber/50 text-accent-gold text-xs font-bold animate-pulse">
               <i data-lucide="flame" class="w-3 h-3 text-accent-red"></i> લિમિટેડ ઓફર: સંપૂર્ણ વ્યક્તિગત વૈદિક વિશ્લેષણ
             </div>
             <h3 class="text-2xl sm:text-3xl font-bold text-white font-cinzel leading-tight">આ નવરાત્રિમાં તમારા ગ્રહોને તમારા પક્ષમાં કરો!</h3>
             <p class="text-sm text-slate-300 max-w-2xl mx-auto">
               ફક્ત સામાન્ય રાશિફળ વાંચવાથી નસીબ નથી બદલાતું. તમારી કુંડળી મુજબ <strong class="text-accent-gold">કયો ગ્રહ તમને અટકાવે છે, કઈ દેવીની સાધના કરવી, કયો રુદ્રાક્ષ ધારણ કરવો અને કરિયરમાં ક્યારે મોટો નિર્ણય લેવો</strong> તેનો સંપૂર્ણ અહેવાલ મેળવો.
             </p>
          </div>

          <div class="border border-white/10 rounded-xl bg-cosmic-900 p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 shadow-inner">
            <div class="text-center md:text-left">
              <div class="text-xs text-accent-red font-bold mb-1">આ ઓફર માત્ર <span id="fomoTimer" class="font-mono text-white text-sm bg-accent-red px-1.5 py-0.5 rounded">૧૪:૫૯</span> મિનિટ માટે!</div>
              <div class="flex items-end gap-3 justify-center md:justify-start mt-2.5">
                <span class="text-lg text-slate-500 line-through decoration-slate-500 mb-1">₹૪૯૯</span>
                <span class="text-6xl font-bold text-white font-mono leading-none drop-shadow-md">₹૯૯</span>
                <span class="text-[10px] px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold mb-2 animate-pulse">૮૦% છૂટ</span>
              </div>
            </div>
            <button id="payBtn" onclick="initiateRazorpay()" class="group w-full md:w-auto px-12 py-6 rounded-xl font-bold text-lg uppercase tracking-widest text-cosmic-950 bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold hover:scale-[1.04] shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all flex items-center justify-center gap-3 overflow-hidden relative cursor-pointer">
               <div class="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <i data-lucide="lock-keyhole-open" class="w-6 h-6 animate-pulse"></i>
              <span id="payBtnText">મારો સંપૂર્ણ રિપોર્ટ મેળવો - ₹૯૯</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Paid AI Generation Loader -->
      <div id="aiPaidLoader" class="hidden shakti-border rounded-2xl p-8 text-center space-y-4 my-6 max-w-lg mx-auto border border-emerald-500/50 bg-emerald-950/30 backdrop-blur-3xl">
        <div class="w-16 h-16 border-4 border-emerald-400 border-t-accent-gold rounded-full animate-spin mx-auto"></div>
        <h3 class="text-lg font-cinzel font-bold text-white">પેમેન્ટ સફળ! AI વૈદિક રિપોર્ટ તૈયાર થઈ રહ્યો છે...</h3>
        <p id="aiPaidStatus" class="text-xs font-mono text-emerald-300">કૃપા કરીને રાહ જુઓ, પેજ રિફ્રેશ કે બેક ન કરશો (આમાં ૧૫ થી ૩૦ સેકન્ડ લાગી શકે છે)...</p>
        <button id="retryBtn" onclick="fetchPaidGeminiPrediction()" class="hidden mt-4 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-500 text-black hover:bg-emerald-400 cursor-pointer">
          ફરીથી રિપોર્ટ લોડ કરો (મફતમાં)
        </button>
      </div>

      <!-- Premium Unlocked Section -->
      <div id="premiumUnlokedSection" class="hidden space-y-10 mt-12 scroll-mt-20">
         <div class="shakti-border rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-emerald-500/40 bg-emerald-950/20">
             <div class="border-b border-white/10 pb-5 mb-6 flex items-center gap-4">
                 <div class="p-4 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                     <i data-lucide="check-circle-2" class="w-10 h-10 animate-pulse"></i>
                 </div>
                 <div>
                    <h2 class="text-2xl md:text-4xl font-bold font-cinzel text-white leading-tight">તમારો સંપૂર્ણ વૈદિક અહેવાલ સક્રિય થયો છે!</h2>
                    <p class="text-[11px] font-mono text-emerald-400 mt-2 flex items-center gap-1.5 uppercase tracking-wider">
                       <i data-lucide="shield-check" class="w-3 h-3"></i> પેમેન્ટ સફળ • AI આધારિત ૧૦૦% શાસ્ત્રોક્ત વિશ્લેષણ
                    </p>
                 </div>
             </div>
             
             <!-- Content Grid -->
             <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm leading-relaxed space-y-1 md:space-y-0">
                 <!-- કરિયર અને પૈસા -->
                 <div class="bg-cosmic-900 border border-emerald-500/10 p-5 rounded-lg space-y-3">
                     <div class="flex items-center gap-2 text-base font-bold text-white border-b border-emerald-500/10 pb-2">
                         <i data-lucide="trending-up" class="w-5 h-5 text-emerald-400"></i> કરિયર અને નાણાકીય ભવિષ્ય
                     </div>
                     <div id="premiumCareer" class="text-slate-300 leading-relaxed"></div>
                 </div>
                 
                 <!-- પ્રેમ અને પરિવાર -->
                 <div class="bg-cosmic-900 border border-emerald-500/10 p-5 rounded-lg space-y-3">
                     <div class="flex items-center gap-2 text-base font-bold text-white border-b border-emerald-500/10 pb-2">
                         <i data-lucide="heart-handshake" class="w-5 h-5 text-emerald-400"></i> પ્રેમ, લગ્ન અને પરિવાર
                     </div>
                     <div id="premiumLove" class="text-slate-300 leading-relaxed"></div>
                 </div>
                 
                 <!-- નવરાત્રિ વિશેષ ઉપાયો -->
                 <div class="bg-cosmic-900 border border-accent-amber/20 p-5 rounded-lg space-y-3 md:col-span-2 shadow-2xl">
                     <div class="flex items-center gap-2 text-base font-bold text-accent-gold border-b border-accent-amber/20 pb-2">
                         <i data-lucide="sparkles" class="w-5 h-5 text-accent-gold"></i> નવરાત્રિ વિશેષ શાસ્ત્રોક્ત ઉપાયો અને પૂજન
                     </div>
                     <div id="premiumRemedies" class="text-slate-300 leading-relaxed"></div>
                     <p class="text-xs text-accent-gold/80 italic pt-2 border-t border-accent-amber/10">• આ ઉપાયો ખાસ આ નવરાત્રિ દરમિયાન કરવાથી તમારા દોષો શાંત થશે અને પ્રગતિના દ્વાર ખુલશે.</p>
                 </div>
             </div>

             <!-- બીજા સભ્ય માટે નવો સ્કેન -->
             <button onclick="startNewScan()" class="mt-8 w-full py-4 rounded-xl border border-accent-gold/40 text-accent-gold font-bold text-sm uppercase tracking-wider hover:bg-accent-gold/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
               <i data-lucide="user-plus" class="w-4 h-4"></i>
               પરિવારના અન્ય સભ્ય માટે નવો સ્કેન કરો
             </button>
         </div>
      </div>

    </div>
  </main>

  <footer class="border-t border-accent-red/10 bg-cosmic-950 py-10 px-4 text-center text-[10px] text-slate-600 font-mono mt-16 relative z-10">
    <p class="text-slate-500 mb-2 uppercase tracking-widest">૧૦૦% શાસ્ત્રોક્ત વૈદિક ગણતરી • આધાર: પ્રાચીન સૂર્ય કુંડળી અને નામ રાશિ</p>
    © 2026 Bhagyaveda Labs. All rights reserved.
  </footer>

  <script>
    lucide.createIcons();

    const BACKEND_URL = "https://bhagyaveda-backend.onrender.com";
    
    let clientData = {};
    let isUserPaid = false;

    // નામના અક્ષર પરથી સાચી વૈદિક નામ રાશિ
    function getNaamRashi(name) {
      if (!name) return "મેષ";
      const clean = name.trim().toUpperCase();
      const ch = clean.charAt(0);

      const rashiMap = [
        { rashi: "મેષ", chars: ["A", "L", "E", "I", "O", "અ", "લ", "ઇ", "ઈ", "એ"] },
        { rashi: "વૃષભ", chars: ["B", "V", "U", "W", "બ", "વ", "ઉ", "ઊ"] },
        { rashi: "મિથુન", chars: ["K", "CHH", "GH", "Q", "C", "ક", "છ", "ઘ"] },
        { rashi: "કર્ક", chars: ["D", "H", "ડ", "હ"] },
        { rashi: "સિંહ", chars: ["M", "T", "મ", "ટ"] },
        { rashi: "કન્યા", chars: ["P", "TH", "N", "પ", "ઠ", "ણ"] },
        { rashi: "તુલા", chars: ["R", "T", "ર", "ત"] },
        { rashi: "વૃશ્ચિક", chars: ["N", "Y", "ન", "ય"] },
        { rashi: "ધન", chars: ["BH", "DH", "F", "ભ", "ધ", "ફ", "ઢ"] },
        { rashi: "મકર", chars: ["KH", "J", "ખ", "જ"] },
        { rashi: "કુંભ", chars: ["G", "S", "SH", "ગ", "શ", "ષ", "સ"] },
        { rashi: "મીન", chars: ["D", "CH", "Z", "TH", "દ", "ચ", "ઝ", "થ"] }
      ];

      for (const item of rashiMap) {
        if (item.chars.some(c => clean.startsWith(c) || ch === c)) return item.rashi;
      }
      return "સિંહ";
    }

    // જન્મતારીખ પરથી સૂર્ય સિદ્ધાંત મુજબ સૂર્ય રાશિ
    function getSuryaRashi(dob) {
      if (!dob) return "મેષ";
      const parts = dob.split('-');
      const month = parseInt(parts[1], 10);
      const day = parseInt(parts[2], 10);

      if ((month === 1 && day >= 14) || (month === 2 && day <= 12)) return "મકર";
      if ((month === 2 && day >= 13) || (month === 3 && day <= 14)) return "કુંભ";
      if ((month === 3 && day >= 15) || (month === 4 && day <= 13)) return "મીન";
      if ((month === 4 && day >= 14) || (month === 5 && day <= 14)) return "મેષ";
      if ((month === 5 && day >= 15) || (month === 6 && day <= 14)) return "વૃષભ";
      if ((month === 6 && day >= 15) || (month === 7 && day <= 15)) return "મિથુન";
      if ((month === 7 && day >= 16) || (month === 8 && day <= 16)) return "કર્ક";
      if ((month === 8 && day >= 17) || (month === 9 && day <= 16)) return "સિંહ";
      if ((month === 9 && day >= 17) || (month === 10 && day <= 16)) return "કન્યા";
      if ((month === 10 && day >= 17) || (month === 11 && day <= 15)) return "તુલા";
      if ((month === 11 && day >= 16) || (month === 12 && day <= 15)) return "વૃશ્ચિક";
      return "ધન";
    }

    function startTimer(duration) {
      let timer = duration, minutes, seconds;
      const display = document.querySelector('#fomoTimer');
      const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if(display) display.textContent = minutes + ":" + seconds;
        if (--timer < 0) clearInterval(interval);
      }, 1000);
    }

    function runQuantumCalculation(e) {
      e.preventDefault();

      const name = document.getElementById('userName').value.trim();
      const dob = document.getElementById('userDob').value;
      const time = document.getElementById('userTimePeriod').value;
      const gender = document.getElementById('userGender').value;

      clientData = {
        name: name,
        dob: dob,
        time: time,
        gender: gender,
        naamRashi: getNaamRashi(name),
        suryaRashi: getSuryaRashi(dob)
      };

      document.getElementById('heroSection').style.display = 'none';
      document.getElementById('calculatorCard').classList.add('hidden');
      
      const loader = document.getElementById('loaderScreen');
      loader.classList.remove('hidden');

      setTimeout(() => {
        loader.classList.add('hidden');
        displayFreePrediction();
      }, 1200);
    }

    function displayFreePrediction() {
      const { name, naamRashi, suryaRashi } = clientData;

      document.getElementById('resTitle').innerText = `${name}, તમારો નવરાત્રિ રિપોર્ટ તૈયાર છે!`;
      document.getElementById('badgeNaamRashi').innerText = naamRashi;
      document.getElementById('badgeSuryaRashi').innerText = suryaRashi;

      document.getElementById('paraIntro').innerText = 
        `${name}જી, વૈદિક જ્યોતિષ મુજબ તમારી નામ રાશિ "${naamRashi}" અને સૂર્ય કુંડળી રાશિ "${suryaRashi}" નું વિશેષ સંયોજન રચાય છે. આ નવરાત્રિ દરમિયાન ગ્રહોની દિશા બદલાઈ રહી છે, જેની સીધી અસર તમારા જીવનના મુખ્ય ૩ પાસાંઓ પર પડી રહી છે:`;

      const resScreen = document.getElementById('resultScreen');
      resScreen.classList.remove('hidden');
      startTimer(15 * 60);
      resScreen.scrollIntoView({ behavior: 'smooth' });
      lucide.createIcons();
    }

    function initiateRazorpay() {
      if (isUserPaid) {
        fetchPaidGeminiPrediction();
        return;
      }

      const name = clientData.name || 'Customer';
      
      var options = {
        "key": "rzp_live_TeGqB4epR2sZ2I", 
        "amount": "9900",
        "currency": "INR",
        "name": "ભાગ્યવેદ (Bhagyaveda)",
        "description": "સંપૂર્ણ નવરાત્રિ અહેવાલ - Instant Access",
        "handler": function (response) {
          isUserPaid = true;
          document.getElementById('paywallBox').classList.add('hidden');
          fetchPaidGeminiPrediction();
        },
        "prefill": { "name": name },
        "theme": { "color": "#ee4444" }
      };

      var rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response){
        alert("પેમેન્ટ નિષ્ફળ થયું: " + (response.error.description || "કૃપા કરીને ફરી પ્રયાસ કરો."));
      });
      rzp1.open();
    }

    async function fetchPaidGeminiPrediction() {
      const paidLoader = document.getElementById('aiPaidLoader');
      const retryBtn = document.getElementById('retryBtn');
      const paidStatus = document.getElementById('aiPaidStatus');

      paidLoader.classList.remove('hidden');
      retryBtn.classList.add('hidden');
      paidStatus.innerText = "મા શક્તિ અને ગ્રહોની ગણતરીથી તમારો પ્રીમિયમ રિપોર્ટ તૈયાર થઈ રહ્યો છે (૧૫-૨૫ સેકન્ડ)...";
      paidLoader.scrollIntoView({ behavior: 'smooth' });

      try {
        const response = await fetch(`${BACKEND_URL}/api/get-prediction`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(clientData)
        });

        const resData = await response.json();

        if (!resData.success) {
          throw new Error(resData.message || 'AI અહેવાલ બનાવવામાં વિલંબ થયો');
        }

        const aiData = resData.data;

        document.getElementById('premiumCareer').innerHTML = aiData.premCareer;
        document.getElementById('premiumLove').innerHTML = aiData.premLove;
        document.getElementById('premiumRemedies').innerHTML = aiData.premRemedies;

        paidLoader.classList.add('hidden');
        const premiumSection = document.getElementById('premiumUnlokedSection');
        premiumSection.classList.remove('hidden');
        premiumSection.scrollIntoView({ behavior: 'smooth' });
        lucide.createIcons();

      } catch (err) {
        console.error("Gemini Error:", err);
        paidStatus.innerText = "સર્વર સ્લીપમાંથી જાગવામાં સહેજ વાર લાગી રહી છે. ચિંતા કરશો નહીં, તમારા પૈસા સફળતાપૂર્વક ચૂકવાઈ ગયા છે. નીચે ક્લિક કરો:";
        retryBtn.classList.remove('hidden');
      }
    }

    function startNewScan() {
      isUserPaid = false;
      clientData = {};

      document.getElementById('userName').value = '';
      document.getElementById('userDob').value = '';

      document.getElementById('resultScreen').classList.add('hidden');
      document.getElementById('premiumUnlokedSection').classList.add('hidden');
      document.getElementById('aiPaidLoader').classList.add('hidden');
      document.getElementById('paywallBox').classList.remove('hidden');

      document.getElementById('heroSection').style.display = 'block';
      document.getElementById('calculatorCard').classList.remove('hidden');

      window.scrollTo({ top: 0, behavior: 'smooth' });
      lucide.createIcons();
    }
  </script>
</body>
</html>
