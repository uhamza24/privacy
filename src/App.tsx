import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  Shield, 
  Smartphone, 
  Users, 
  Star, 
  Lock,
  Apple, 
  Play, 
  ChevronDown,
  ShieldCheck,
  Mail,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Loader2,
  Zap,
  ScanFace,
  Sun,
  Eye,
  HelpCircle,
  Clock
} from "lucide-react";

const FadeInSection = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const StepItem = ({ number, title, time, description, isLast }: { number: number, title: string, time: string, description: string, isLast?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`p-4 md:p-5 ${!isLast ? "border-b border-white/5" : ""} group hover:bg-white/[0.02] transition-colors`}
  >
    <div className="flex items-start gap-3 md:gap-4">
      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-base md:text-lg shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3 className="text-sm md:text-base font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">{title}</h3>
          <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-wider">
            {time}
          </span>
        </div>
        <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <motion.div 
    className="glass-card p-3 md:p-4 rounded-xl flex items-center gap-4 text-left group hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-blue-500/10 transition-colors"></div>
    <div className={`p-2.5 rounded-xl bg-slate-950/50 group-hover:scale-110 transition-transform shrink-0 ${color}`}>
      <Icon size={20} />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-sm md:text-base font-extrabold text-white group-hover:text-blue-400 transition-colors tracking-tight mb-0.5 truncate">{title}</h3>
      <p className="text-slate-500 text-[10px] md:text-xs leading-tight line-clamp-2">{description}</p>
    </div>
  </motion.div>
);

const Testimonial = ({ name, text, initial }: { name: string, text: string, initial: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 p-5 rounded-2xl mb-4 w-full max-w-md hover:border-blue-500/30 transition-colors group"
  >
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-500/20">
          {initial}
        </div>
        <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">{name}</span>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
        ))}
      </div>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
      {text}
    </p>
  </motion.div>
);

const SupportedDevices = () => {
  const devices = [
    "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
    "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
    "iPhone 12", "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
    "iPhone 13", "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
    "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
    "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
    "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max",
    "iPhone 17", "iPhone 17 Plus", "iPhone 17 Pro", "iPhone 17 Pro Max"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full max-w-3xl mb-12 md:mb-16 px-4"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-8 bg-slate-800"></div>
        <h2 className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">Supported Devices</h2>
        <div className="h-px w-8 bg-slate-800"></div>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
        {devices.map((device, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.01 }}
            viewport={{ once: true }}
            className="bg-slate-900/20 border border-slate-800/30 py-1.5 px-2 rounded-lg text-center hover:bg-slate-800/30 hover:border-blue-500/20 transition-all cursor-default"
          >
            <span className="text-[9px] md:text-[10px] text-slate-500 font-medium whitespace-nowrap">{device}</span>
          </motion.div>
        ))}
      </div>
      
      <p className="text-center text-slate-600 text-[9px] mt-4 italic">
        * Also compatible with all modern Android devices running Android 10 or higher.
      </p>
    </motion.div>
  );
};

const StatCard = ({ icon: Icon, value, label, color }: { icon: any, value: string, label: string, color: string }) => (
  <motion.div 
    className="glass-card flex-1 p-3 md:p-4 rounded-2xl flex flex-col items-center justify-center group hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className={`mb-2 p-2 rounded-xl bg-slate-950/50 group-hover:rotate-[10deg] transition-transform duration-500 ${color.replace('text-', 'bg-').replace('400', '400/10').replace('500', '500/10')}`}>
      <Icon className={`${color}`} size={16} />
    </div>
    <div className="text-xl md:text-2xl font-black text-white tracking-tighter mb-0.5">{value}</div>
    <div className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-[0.15em] font-black">{label}</div>
  </motion.div>
);

const ProcessingStep = ({ text, status, delay }: { text: string, status: "pending" | "loading" | "completed" | "error", delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-start gap-3 mb-4"
  >
    <div className="mt-0.5">
      {status === "completed" && <CheckCircle2 size={18} className="text-green-500" />}
      {status === "loading" && <Loader2 size={18} className="text-blue-500 animate-spin" />}
      {status === "error" && <AlertCircle size={18} className="text-red-500" />}
      {status === "pending" && <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-800" />}
    </div>
    <span className={`text-sm leading-tight ${status === "error" ? "text-red-400" : "text-slate-300"}`}>
      {text}
    </span>
  </motion.div>
);

export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<"apple" | "google" | null>(null);
  const [email, setEmail] = useState("");
  const [isActivating, setIsActivating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [tick, setTick] = useState(0);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);

  const handleActivate = () => {
    if (!email) return;
    setIsActivating(true);
    setCurrentStep(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(t => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isActivating && currentStep < 5) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isActivating, currentStep]);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 glow-bg overflow-x-hidden relative">
      {/* Parallax Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[10%] w-[80%] h-[60%] rounded-full bg-blue-500/10 blur-[120px]"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/5 blur-[100px]"
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[100px]"
        />
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-16 md:pb-24 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-medium mb-6 md:mb-8"
        >
          <Shield size={12} className="md:w-3.5 md:h-3.5" />
          Advanced Privacy Technology
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 md:mb-6 max-w-2xl leading-[1.1]"
        >
          Activate the <span className="text-white text-gradient">Privacy</span> Feature on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">your Smartphone</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-lg mb-8 md:mb-10 leading-relaxed px-2"
        >
          Protect your screen from prying eyes. The Privacy feature limits side visibility, keeping content visible only to you.
        </motion.p>

        {/* Phone Illustration with Animated Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="relative mb-8 md:mb-12 scale-90 md:scale-100"
        >
          <div className="w-40 h-80 md:w-48 md:h-96 bg-slate-800 rounded-[2.5rem] md:rounded-[3rem] border-[5px] md:border-[6px] border-slate-700 relative overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 md:w-20 md:h-6 bg-slate-700 rounded-b-2xl z-20"></div>
            
            {/* Screen Content */}
            <div className="absolute inset-0 p-2 pt-6">
              <div className="w-full h-full bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden relative">
                {/* Mock UI Content */}
                <div className="p-3 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/50"></div>
                    <div className="h-2 w-16 bg-slate-700 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-slate-800 rounded"></div>
                    <div className="h-3 w-3/4 bg-slate-800 rounded"></div>
                  </div>
                  <div className="h-24 w-full bg-slate-800/50 rounded-lg"></div>
                  <div className="flex justify-between">
                    <div className="h-2 w-8 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8 bg-slate-700 rounded"></div>
                    <div className="h-2 w-8 bg-slate-700 rounded"></div>
                  </div>
                </div>

                {/* Privacy Filter Overlay */}
                <motion.div 
                  animate={{ 
                    opacity: (Math.floor(Date.now() / 3000) % 2 === 0) ? 0.95 : 0 
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-slate-950 pointer-events-none flex flex-col items-center justify-center"
                >
                  <div className="w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
                  <Shield className="absolute text-blue-500/20" size={40} />
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-center gap-2">
            <motion.div 
              animate={{ 
                backgroundColor: (Math.floor(Date.now() / 3000) % 2 === 0) ? "#22c55e" : "#64748b"
              }}
              className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse"
            ></motion.div>
            <motion.span 
              animate={{ 
                color: (Math.floor(Date.now() / 3000) % 2 === 0) ? "#94a3b8" : "#64748b"
              }}
              className="text-[10px] md:text-xs font-medium"
            >
              {(Math.floor(Date.now() / 3000) % 2 === 0) ? "Privacy Active" : "Privacy Inactive"}
            </motion.span>
          </div>
        </motion.div>

        {/* Platform Selection */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 md:gap-4 mb-6 md:mb-8"
        >
          <h2 className="text-lg md:text-xl font-semibold text-slate-200">Choose your platform</h2>
          <ChevronDown className="text-blue-500 animate-bounce" size={18} />
          
          <div className="flex flex-row justify-center gap-2 md:gap-4 mt-2 md:mt-4 w-full max-sm:px-2">
            <button 
              onClick={() => {
                setSelectedPlatform("apple");
                setIsActivating(false);
              }}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 border rounded-xl md:rounded-2xl transition-all group relative overflow-hidden ${selectedPlatform === "apple" ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/40" : "bg-slate-900/50 border-slate-800 hover:bg-slate-800 hover:border-slate-700"}`}
            >
              {selectedPlatform === "apple" && (
                <motion.div 
                  layoutId="active-bg"
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 -z-10"
                />
              )}
              <Apple size={18} className={`md:w-6 md:h-6 ${selectedPlatform === "apple" ? "text-white" : "group-hover:text-blue-400 transition-colors"}`} />
              <div className="text-left">
                <div className={`text-[8px] md:text-[10px] uppercase font-bold leading-none ${selectedPlatform === "apple" ? "text-blue-100" : "text-slate-500"}`}>Download on</div>
                <div className="text-sm md:text-lg font-bold leading-tight">Apple</div>
              </div>
            </button>
            <button 
              onClick={() => {
                setSelectedPlatform("google");
                setIsActivating(false);
              }}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 border rounded-xl md:rounded-2xl transition-all group relative overflow-hidden ${selectedPlatform === "google" ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/40" : "bg-slate-900/50 border-slate-800 hover:bg-slate-800 hover:border-slate-700"}`}
            >
              {selectedPlatform === "google" && (
                <motion.div 
                  layoutId="active-bg"
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 -z-10"
                />
              )}
              <Play size={18} className={`md:w-6 md:h-6 ${selectedPlatform === "google" ? "text-white" : "group-hover:text-blue-400 transition-colors"}`} />
              <div className="text-left">
                <div className={`text-[8px] md:text-[10px] uppercase font-bold leading-none ${selectedPlatform === "google" ? "text-blue-100" : "text-slate-500"}`}>Get it on</div>
                <div className="text-sm md:text-lg font-bold leading-tight">Google Play</div>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Interaction Area */}
        <div className={`w-full max-w-md ${selectedPlatform ? "min-h-[180px] md:min-h-[200px]" : ""} mb-12 md:mb-16 relative`}>
          <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full -z-10"></div>
          <AnimatePresence mode="wait">
            {isActivating ? (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="glass-card p-6 md:p-8 rounded-3xl text-left shadow-2xl border-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Smartphone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-sm md:text-base">Processing Account</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Secure Connection Established</div>
                  </div>
                </div>

                <ProcessingStep 
                  text={`Searching for ${selectedPlatform === "apple" ? "Apple" : "Google"} user with email ${email} on the network...`}
                  status={currentStep > 0 ? "completed" : "loading"}
                  delay={0.1}
                />
                {currentStep >= 1 && (
                  <ProcessingStep 
                    text="Integrating Privacy feature into account settings..."
                    status={currentStep > 1 ? "completed" : "loading"}
                    delay={0.1}
                  />
                )}
                {currentStep >= 2 && (
                  <ProcessingStep 
                    text="Privacy feature is being configured..."
                    status={currentStep > 2 ? "completed" : "loading"}
                    delay={0.1}
                  />
                )}
                {currentStep >= 3 && (
                  <ProcessingStep 
                    text="Privacy feature is almost complete..."
                    status={currentStep > 3 ? "completed" : "loading"}
                    delay={0.1}
                  />
                )}
                {currentStep >= 4 && (
                  <ProcessingStep 
                    text="An unexpected error occurred."
                    status="error"
                    delay={0.1}
                  />
                )}

                {currentStep >= 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 md:mt-8"
                  >
                    <div className="bg-red-500/10 border border-red-500/20 p-4 md:p-5 rounded-xl mb-4 md:mb-6">
                      <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                        Please verify that you are not a robot. Complete the offer on the following page to unlock the Privacy feature for your phone.
                      </p>
                    </div>
                    <a 
                      href="https://google.com"
                      className="w-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-[0.97] relative overflow-hidden group"
                    >
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        <ShieldCheck size={20} className="md:w-6 md:h-6" />
                        Verify Now
                      </span>
                      <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-1.5 transition-transform relative z-10" />
                    </a>
                  </motion.div>
                )}
              </motion.div>
            ) : selectedPlatform && (
              <motion.div
                key={selectedPlatform}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                className="glass-card p-6 md:p-8 rounded-3xl text-left shadow-2xl border-blue-500/10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors"></div>
                <p className="text-slate-200 text-sm md:text-base mb-6 md:mb-8 leading-relaxed font-medium">
                  Enter your <span className="text-blue-400 font-bold">{selectedPlatform === "apple" ? "Apple" : "Google"} ID</span> to synchronize the Privacy feature with your device settings.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={selectedPlatform === "apple" ? "email@icloud.com" : "email@gmail.com"}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-sm md:text-base focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all placeholder:text-slate-600 text-white"
                    />
                  </div>
                  <AnimatePresence>
                    {email.length > 0 && (
                      <motion.button 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onClick={handleActivate}
                        className="w-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3.5 md:py-4 rounded-2xl text-sm md:text-base font-black transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] whitespace-nowrap active:scale-[0.98] flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                      >
                        <motion.div 
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                        />
                        <span className="relative z-10 flex items-center gap-2">
                          Activate Feature
                          <Shield size={18} className="group-hover/btn:rotate-12 transition-transform" />
                        </span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* How it works Section */}
        <FadeInSection>
          <div className="w-full max-w-2xl mb-12 md:mb-16 px-4">
            <div className="flex flex-col items-start mb-8 text-left">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-blue-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2"
              >
                How it works
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight"
              >
                Done in <br />
                <span className="text-blue-500">under 2 minutes.</span>
              </motion.h2>
            </div>
            
            <div className="glass-card rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <StepItem 
                number={1}
                title="Check your device"
                time="3 sec"
                description="Run the free compatibility check. Instant result — no account needed."
              />
              <StepItem 
                number={2}
                title="Activate your upgrade"
                time="2 min"
                description="Complete the secure activation step to confirm your privacy profile."
              />
              <StepItem 
                number={3}
                title="Get Privacy Active"
                time="Instant"
                description="Finish the required steps and the Privacy feature is released to your device."
                isLast
              />
            </div>
          </div>
        </FadeInSection>

        {/* Features Section */}
        <FadeInSection>
          <div className="w-full max-w-7xl mb-12 md:mb-16 px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-slate-800"></div>
              <h2 className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Core Features</h2>
              <div className="h-px w-8 bg-slate-800"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
              <FeatureCard 
                icon={Smartphone} 
                title="Phone Ready" 
                description="Built for mobile traffic with a cleaner, faster privacy screen activation flow."
                color="text-cyan-400 bg-cyan-400/10"
              />
              <FeatureCard 
                icon={Shield} 
                title="Instant Privacy" 
                description="Reduce side visibility quickly and keep your screen more discreet in public spaces."
                color="text-blue-400 bg-blue-400/10"
              />
              <FeatureCard 
                icon={Zap} 
                title="Lightweight Flow" 
                description="Short mobile-first access flow designed to reduce hesitation and keep momentum high."
                color="text-green-400 bg-green-400/10"
              />
              <FeatureCard 
                icon={ScanFace} 
                title="Device Friendly" 
                description="Optimized for both iPhone and Android users with one simple access path per platform."
                color="text-blue-500 bg-blue-500/10"
              />
              <FeatureCard 
                icon={Sun} 
                title="Clear Display" 
                description="Premium dark visuals keep the privacy effect believable while preserving readability."
                color="text-cyan-500 bg-cyan-500/10"
              />
              <FeatureCard 
                icon={Eye} 
                title="Side-View Focus" 
                description="Show the product promise immediately: easier viewing straight on, darker from the side."
                color="text-purple-400 bg-purple-400/10"
              />
            </div>
          </div>
        </FadeInSection>

        {/* Stats Grid */}
        <FadeInSection>
          <div className="flex flex-row gap-2 md:gap-4 mb-12 md:mb-16 w-full max-w-2xl px-4">
            <StatCard icon={Users} value="2.4M+" label="Active Users" color="text-blue-400" />
            <StatCard icon={Star} value="4.9★" label="Rating" color="text-yellow-500" />
            <StatCard icon={ShieldCheck} value="100%" label="Secure" color="text-green-500" />
          </div>
        </FadeInSection>

        {/* Supported Devices Section */}
        <FadeInSection>
          <SupportedDevices />
        </FadeInSection>

        {/* Testimonials */}
        <FadeInSection>
          <div className="flex flex-col items-center w-full mb-16 md:mb-20 px-2">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-slate-800"></div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-200">User Reviews</h2>
              <div className="h-px w-12 bg-slate-800"></div>
            </div>
            <Testimonial 
              name="Antoine M." 
              initial="A"
              text="Works perfectly! No more worrying on the subway." 
            />
            <Testimonial 
              name="Marie P." 
              initial="M"
              text="Activated it in 2 minutes. Super easy!" 
            />
            <Testimonial 
              name="Christophe D." 
              initial="C"
              text="Recommended for everyone working with sensitive data." 
            />
          </div>
        </FadeInSection>

        {/* Footer */}
        <footer className="mt-auto pt-6 md:pt-8 border-t border-slate-900 w-full flex justify-center">
          <div className="flex items-center gap-2 text-slate-500 text-[10px] md:text-sm">
            <Lock size={12} className="md:w-3.5 md:h-3.5" />
            Your data is protected and encrypted end-to-end
          </div>
        </footer>

      </main>
    </div>
  );
}
