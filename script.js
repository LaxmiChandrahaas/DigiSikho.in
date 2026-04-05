// --------------------------------------------------------------
// DIGISIKHO.IN - Complete content for 24 languages
// English is fully translated. Other languages show placeholders.
// To add real translations, replace the strings inside each language block.
// --------------------------------------------------------------

// Base English content (fully translated)
const enContent = {
    email: { title: "How to Use Email Safely", tips: ["Never share your password.", "Don't open attachments from unknown senders.", "Look for 'https' and a padlock 🔒 before logging in.", "Use a strong password."], quiz: { question: "What if an email asks for your password?", options: ["Click link and enter", "Ignore – banks never ask via email", "Forward to a friend"], correct: 1 } },
    search: { title: "Smart Google Search", tips: ["Use specific keywords.", "Use quotes for exact phrase.", "Use minus sign to exclude words.", "Check the date of articles."], quiz: { question: "Find 'online safety' but exclude 'kids'", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "Spot Online Scams & Phishing", tips: ["Check sender's email carefully.", "Hover over links before clicking.", "Scammers create urgency.", "Never give personal info to pop-ups."], quiz: { question: "Text says you won a free iPhone. Safe action?", options: ["Click link", "Ignore and delete", "Reply STOP"], correct: 1 } },
    privacy: { title: "Social Media Privacy Basics", tips: ["Set profile to Friends only.", "Don't post address or phone.", "Review connected apps.", "Turn off location tagging."], quiz: { question: "Good privacy habit on Facebook?", options: ["Accept all requests", "Share password with friends", "Check privacy settings regularly"], correct: 2 } },
    password: { title: "Create Strong Passwords", tips: ["Use 12+ characters.", "Mix cases, numbers, symbols.", "Avoid common words or 'password123'.", "Use a passphrase like 'PurpleTigerShirt!'.", "Never reuse passwords."], quiz: { question: "Which is strongest password?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "Spot Fake News", tips: ["Check the source.", "Look for other reports.", "Examine URL for odd endings.", "Use fact-checking sites (Snopes, Alt News).", "Be careful with shocking headlines."], quiz: { question: "Viral claim: 'Moon turns pink tonight'. First step?", options: ["Share immediately", "Fact-check it", "Ignore all news"], correct: 1 } },
    payments: { title: "Safe UPI & Digital Payments", tips: ["Never share UPI PIN.", "Check payee name before sending.", "Don't click SMS links claiming 'KYC update'.", "Use official apps (Google Pay, PhonePe).", "Enable two-factor authentication."], quiz: { question: "Call says UPI will be blocked unless you share OTP. Do?", options: ["Share OTP", "Hang up – never share OTP", "Call back"], correct: 1 } }
};

// Helper: Create a placeholder version for a language
function makePlaceholderContent(langName) {
    const placeholderTips = [`[${langName}] Translation needed: Never share your password.`, `[${langName}] Don't open unknown attachments.`, `[${langName}] Look for https and padlock.`, `[${langName}] Use strong password.`];
    const placeholderQuiz = { question: `[${langName}] Quiz: What should you do?`, options: ["Option A", "Option B", "Option C"], correct: 1 };
    const placeholderTitle = (topic) => `[${langName}] ${topic}`;
    return {
        email: { title: placeholderTitle("Email Safety"), tips: placeholderTips, quiz: placeholderQuiz },
        search: { title: placeholderTitle("Smart Search"), tips: placeholderTips, quiz: placeholderQuiz },
        scam: { title: placeholderTitle("Spot Scams"), tips: placeholderTips, quiz: placeholderQuiz },
        privacy: { title: placeholderTitle("Privacy Basics"), tips: placeholderTips, quiz: placeholderQuiz },
        password: { title: placeholderTitle("Strong Passwords"), tips: placeholderTips, quiz: placeholderQuiz },
        fakenews: { title: placeholderTitle("Fake News"), tips: placeholderTips, quiz: placeholderQuiz },
        payments: { title: placeholderTitle("Safe UPI/Payments"), tips: placeholderTips, quiz: placeholderQuiz }
    };
}

// ----- FULL CONTENT: All 24 languages with complete translations -----

// DIGISIKHO.IN – Complete Digital Literacy Helper
// 24 Languages with Text-to-Speech (fallback to default voice if specific language voice missing)

// ==================== LANGUAGE CONTENT ====================

const content = {
  // ------------------- ENGLISH -------------------
  en: {
    email: { title: "📧 How to Use Email Safely", tips: ["Never share your password.", "Don't open attachments from unknown senders.", "Look for 'https' and a padlock 🔒 before logging in.", "Use a strong password."], quiz: { question: "What if an email asks for your password?", options: ["Click link and enter", "Ignore – banks never ask via email", "Forward to a friend"], correct: 1 } },
    search: { title: "🔍 Smart Google Search", tips: ["Use specific keywords.", "Use quotes for exact phrase.", "Use minus sign to exclude words.", "Check the date of articles."], quiz: { question: "Find 'online safety' but exclude 'kids'", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ Spot Online Scams & Phishing", tips: ["Check sender's email carefully.", "Hover over links before clicking.", "Scammers create urgency.", "Never give personal info to pop-ups."], quiz: { question: "Text says you won a free iPhone. Safe action?", options: ["Click link", "Ignore and delete", "Reply STOP"], correct: 1 } },
    privacy: { title: "🔒 Social Media Privacy Basics", tips: ["Set profile to Friends only.", "Don't post address or phone.", "Review connected apps.", "Turn off location tagging."], quiz: { question: "Good privacy habit on Facebook?", options: ["Accept all requests", "Share password with friends", "Check privacy settings regularly"], correct: 2 } },
    password: { title: "🔐 Create Strong Passwords", tips: ["Use 12+ characters.", "Mix cases, numbers, symbols.", "Avoid common words or 'password123'.", "Use a passphrase like 'PurpleTigerShirt!'.", "Never reuse passwords."], quiz: { question: "Which is strongest password?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 Spot Fake News", tips: ["Check the source.", "Look for other reports.", "Examine URL for odd endings.", "Use fact-checking sites (Snopes, Alt News).", "Be careful with shocking headlines."], quiz: { question: "Viral claim: 'Moon turns pink tonight'. First step?", options: ["Share immediately", "Fact-check it", "Ignore all news"], correct: 1 } },
    payments: { title: "💸 Safe UPI & Digital Payments", tips: ["Never share UPI PIN.", "Check payee name before sending.", "Don't click SMS links claiming 'KYC update'.", "Use official apps (Google Pay, PhonePe).", "Enable two-factor authentication."], quiz: { question: "Call says UPI will be blocked unless you share OTP. Do?", options: ["Share OTP", "Hang up – never share OTP", "Call back"], correct: 1 } }
  },

  // ------------------- ASSAMESE -------------------
  as: {
    email: { title: "📧 ইমেইল সুৰক্ষিতভাৱে ব্যৱহাৰ কৰক", tips: ["আপোনাৰ পাছৱাৰ্ড কাকো নকওঁক।", "অজ্ঞাত প্ৰেৰকৰ সংলগ্ন নাখুলিব।", "লগ ইন কৰাৰ আগতে 'https' আৰু এটা তলা 🔒 চাওক।", "এটা শক্তিশালী পাছৱাৰ্ড ব্যৱহাৰ কৰক।"], quiz: { question: "ইমেইলে আপোনাৰ পাছৱাৰ্ড বিচাৰিলে?", options: ["লিংকত ক্লিক কৰক", "অৱজ্ঞা কৰক – বেংকে ইমেইলত নোসোধে", "বন্ধুৰ আগলৈ পঠিয়াওক"], correct: 1 } },
    search: { title: "🔍 স্মাৰ্ট Google সন্ধান", tips: ["নিৰ্দিষ্ট কীৱৰ্ড ব্যৱহাৰ কৰক।", "সঠিক বাক্যৰ বাবে উদ্ধৃতি চিন ব্যৱহাৰ কৰক।", "শব্দ বাদ দিবলৈ মাইনাছ চিন ব্যৱহাৰ কৰক।", "প্ৰবন্ধৰ তাৰিখ চাওক।"], quiz: { question: "'online safety' বিচাৰক কিন্তু 'kids' বাদ দিয়ক", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ অনলাইন ঠগ আৰু ফিছিং চিনাক্ত কৰক", tips: ["প্ৰেৰকৰ ইমেইল ঠিকনা সাৱধানে চাওক।", "ক্লিক কৰাৰ আগতে লিংকত হভাৰ কৰক।", "ঠগবোৰে জৰুৰীকালিন সৃষ্টি কৰে।", "পপ-আপত ব্যক্তিগত তথ্য নিদিব।"], quiz: { question: "ফ্ৰী iPhone জিকিলে বুলি টেক্সট আহিলে?", options: ["লিংকত ক্লিক কৰক", "অৱজ্ঞা কৰক আৰু মচি পেলাওক", "STOP উত্তৰ দিয়ক"], correct: 1 } },
    privacy: { title: "🔒 ছোচিয়েল মিডিয়া গোপনীয়তাৰ মূল কথা", tips: ["প্ৰ’ফাইল 'কেৱল বন্ধু' ৰাখক।", "ঠিকনা বা ফোন নম্বৰ পোষ্ট নকৰিব।", "সংযুক্ত এপসমূহ পৰ্যালোচনা কৰক।", "স্থান টেগিং বন্ধ কৰক।"], quiz: { question: "Facebook ত ভাল গোপনীয়তা অভ্যাস?", options: ["সকলো অনুৰোধ গ্ৰহণ কৰক", "বন্ধুক পাছৱাৰ্ড দিয়ক", "নিয়মীয়াকৈ গোপনীয়তা ছেটিংচ চাওক"], correct: 2 } },
    password: { title: "🔐 শক্তিশালী পাছৱাৰ্ড তৈয়াৰ কৰক", tips: ["12+ আখৰ ব্যৱহাৰ কৰক।", "আখৰ, সংখ্যা, চিহ্ন মিহলাওক।", "'password123' দৰে সাধাৰণ শব্দ পৰিহাৰ কৰক।", "'PurpleTigerShirt!' দৰে বাক্যাংশ ব্যৱহাৰ কৰক।", "পাছৱাৰ্ড পুনৰ ব্যৱহাৰ নকৰিব।"], quiz: { question: "কোনটো আটাইতকৈ শক্তিশালী পাছৱাৰ্ড?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 ভুৱা বাতৰি চিনাক্ত কৰক", tips: ["উৎস চাওক।", "অন্য প্ৰতিবেদন চাওক।", "URL ৰ শেষ অস্বাভাৱিক হ'লে পৰীক্ষা কৰক।", "তথ্য-যাচাই সাইট (Snopes, Alt News) ব্যৱহাৰ কৰক।", "চমকপ্ৰদ হেডলাইনৰ পৰা সাৱধান।"], quiz: { question: "ভাইৰেল দাবী: 'আজিৰাতি চন্দ্ৰ গুলপীয়া হ'ব'। প্ৰথম পদক্ষেপ?", options: ["তৎক্ষণাত শ্বেয়াৰ কৰক", "তথ্য যাচাই কৰক", "সকলো বাতৰি অৱজ্ঞা কৰক"], correct: 1 } },
    payments: { title: "💸 সুৰক্ষিত UPI আৰু ডিজিটেল পেমেন্ট", tips: ["UPI PIN কাকো নকওঁক।", "প্ৰেৰণ কৰাৰ আগতে প্ৰাপকৰ নাম চাওক।", "'KYC আপডেট' বুলি দাবী কৰা SMS লিংকত নক্লিকিব।", "অফিচিয়েল এপ (Google Pay, PhonePe) ব্যৱহাৰ কৰক।", "দুটা-কাৰক প্ৰমাণীকৰণ সক্ৰিয় কৰক।"], quiz: { question: "কলত কয় UPI ব্লক হ'ব OTP নিদিলে? কি কৰিব?", options: ["OTP দিয়ক", "ফোন ৰাখক – কেতিয়াও OTP নিদিব", "উভতি কল কৰক"], correct: 1 } }
  },

  // ------------------- BENGALI -------------------
  bn: {
    email: { title: "📧 ইমেল নিরাপদে ব্যবহার করুন", tips: ["আপনার পাসওয়ার্ড কাউকে বলবেন না।", "অজানা প্রেরকের অ্যাটাচমেন্ট খুলবেন না।", "লগইন করার আগে 'https' এবং একটি তালা 🔒 দেখুন।", "একটি শক্তিশালী পাসওয়ার্ড ব্যবহার করুন।"], quiz: { question: "ইমেলে যদি আপনার পাসওয়ার্ড চাওয়া হয়?", options: ["লিংকে ক্লিক করুন", "উপেক্ষা করুন – ব্যাংক কখনো ইমেলে চায় না", "বন্ধুকে ফরওয়ার্ড করুন"], correct: 1 } },
    search: { title: "🔍 স্মার্ট Google অনুসন্ধান", tips: ["নির্দিষ্ট কীওয়ার্ড ব্যবহার করুন।", "সঠিক বাক্যের জন্য উদ্ধৃতি চিহ্ন ব্যবহার করুন।", "শব্দ বাদ দিতে মাইনাস চিহ্ন ব্যবহার করুন।", "নিবন্ধের তারিখ পরীক্ষা করুন।"], quiz: { question: "'online safety' খুঁজুন কিন্তু 'kids' বাদ দিন", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ অনলাইন প্রতারণা ও ফিশিং চিহ্নিত করুন", tips: ["প্রেরকের ইমেল ঠিকানা সাবধানে দেখুন।", "ক্লিক করার আগে লিংকের উপর মাউস ঘোরান।", "প্রতারকরা জরুরী অবস্থা তৈরি করে।", "পপ-আপে ব্যক্তিগত তথ্য দেবেন না।"], quiz: { question: "ফ্রি iPhone জেতার টেক্সট পেলে?", options: ["লিংকে ক্লিক করুন", "উপেক্ষা করুন ও ডিলিট করুন", "STOP উত্তর দিন"], correct: 1 } },
    privacy: { title: "🔒 সোশ্যাল মিডিয়া গোপনীয়তার মূলকথা", tips: ["প্রোফাইল 'শুধু বন্ধু' রাখুন।", "ঠিকানা বা ফোন নম্বর পোস্ট করবেন না।", "সংযুক্ত অ্যাপ পর্যালোচনা করুন।", "লোকেশন ট্যাগিং বন্ধ করুন।"], quiz: { question: "Facebook এ ভালো গোপনীয়তা অভ্যাস?", options: ["সব অনুরোধ গ্রহণ করুন", "বন্ধুদের পাসওয়ার্ড দিন", "নিয়মিত গোপনীয়তা সেটিংস পরীক্ষা করুন"], correct: 2 } },
    password: { title: "🔐 শক্তিশালী পাসওয়ার্ড তৈরি করুন", tips: ["12+ অক্ষর ব্যবহার করুন।", "বড়, ছোট হাতের অক্ষর, সংখ্যা, চিহ্ন মিশ্রিত করুন।", "'password123' এর মত সাধারণ শব্দ এড়িয়ে চলুন।", "'PurpleTigerShirt!' এর মত বাক্যাংশ ব্যবহার করুন।", "পাসওয়ার্ড পুনরায় ব্যবহার করবেন না।"], quiz: { question: "কোনটি সবচেয়ে শক্তিশালী পাসওয়ার্ড?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 ভুয়া খবর চিহ্নিত করুন", tips: ["উৎস পরীক্ষা করুন।", "অন্যান্য প্রতিবেদন দেখুন।", "URL এর শেষাংশ অস্বাভাবিক হলে পরীক্ষা করুন।", "তথ্য-যাচাই সাইট (Snopes, Alt News) ব্যবহার করুন।", "চমকপ্রদ শিরোনাম থেকে সতর্ক থাকুন।"], quiz: { question: "ভাইরাল দাবি: 'আজ রাতে চাঁদ গোলাপি হবে'। প্রথম পদক্ষেপ?", options: ["তৎক্ষণাৎ শেয়ার করুন", "তথ্য যাচাই করুন", "সব খবর উপেক্ষা করুন"], correct: 1 } },
    payments: { title: "💸 নিরাপদ UPI ও ডিজিটাল পেমেন্ট", tips: ["UPI PIN কাউকে বলবেন না।", "টাকা পাঠানোর আগে প্রাপকের নাম পরীক্ষা করুন।", "'KYC আপডেট' দাবি করা SMS লিংকে ক্লিক করবেন না।", "অফিসিয়াল অ্যাপ (Google Pay, PhonePe) ব্যবহার করুন।", "দুই-ফ্যাক্টর অথেনটিকেশন চালু করুন।"], quiz: { question: "কল বলে UPI ব্লক হবে যদি OTP না দেন। করবেন?", options: ["OTP দিন", "ফোন রাখুন – কখনো OTP দেবেন না", "ফিরে কল করুন"], correct: 1 } }
  },

  // ------------------- BODO -------------------
  brx: {
    email: { title: "📧 ईमेलखौ सुरक्षित राव बाहायनाय", tips: ["नांगौनि पासवर्डखौ मोनसेबो सोमोन्दो आव थानाय।", "मोननोथाम हरनायनि अटेचमेन्टखौ मुजानाय।", "लगइन खालामनायनि उनाव 'https' आरो अनजिमा 🔒 नाय।", "मोजां पासवर्ड बाहाय।"], quiz: { question: "ईमेलआ नांगौनि पासवर्ड मोनोनाय खालामो?", options: ["लिंकआव क्लिक खालाम", "खालि थानाय – बेंकसिना ईमेलआव नोथांग्रा", "गोदोनखौ फरवार्ड खालाम"], correct: 1 } },
    search: { title: "🔍 स्मार्ट Google सोलाइ", tips: ["गोदान थाखाय किवर्ड बाहाय।", "गोजौं बाङाव फारायनि थाखाय उद्धरण साइन बाहाय।", "सोलोंखौ बाहायनो माइनस साइन बाहाय।", "आर्टिकलनि तारिख नाय।"], quiz: { question: "'online safety' सोलाइ लाबा अब्ला 'kids'खौ बाहायनो नांगाया", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ अनलाइन स्क्याम आरो फिशिंगखौ सिनाय", tips: ["हरनायनि ईमेल एड्रेसखौ सावधानी राव नाय।", "क्लिक खालामनो मोनसे बाहायनायाव लिंकआव हभार खालाम।", "स्क्यामरफोरा जरूरी बनाय।", "पप-अपाव व्यक्तिगत सूचना आथि होनाय।"], quiz: { question: "फोन आव सानखान्थि आव फ्री iPhone जियोनाय खालामो। माब्ला खालामनो?", options: ["लिंकआव क्लिक खालाम", "खालि थानाय आरो डिलीट खालाम", "STOP हुथुरै दिन्थि"], correct: 1 } },
    privacy: { title: "🔒 सोशल मीडिया गोफोनायनि बेस", tips: ["प्रोफाइलखौ 'गोदान सोमोन्दो' राव थानाय।", "एड्रेस आरो फोन नम्बर पोस्ट नखालाम।", "कनेक्ट खालामनाय एपफोरखौ रिव्यु खालाम।", "लोकेशन ट्यागिंगखौ बन्द खालाम।"], quiz: { question: "Facebook आव मोजां गोफोनाय गोदान?", options: ["सोमोन्दोनि अनुरोधखौ स्वीकार खालाम", "गोदोननि थाखाय पासवर्ड आथि हो", "गोदान गोदानाव गोफोनाय सेटिंगफोरखौ नाय"], correct: 2 } },
    password: { title: "🔐 मोजां पासवर्ड बनाय", tips: ["12+ अक्षर बाहाय।", "आखर, अनजिमा, साइन मिखाब।", "'password123' सामान्य सोलोंखौ बाहायनो नांगाय।", "'PurpleTigerShirt!' सोलों सुबुं बाहाय।", "पासवर्डखौ जुदि बाहायनो नांगाय।"], quiz: { question: "मा सोलोंआ मोनसे मोजां पासवर्ड?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 फेक न्यूज सिनाय", tips: ["स्रोत नाय।", "गुबुन रिपोर्ट नाय।", "URL नि जोबनाय खालि थानाय नाय।", "तथ्य-जाँच साइट (Snopes, Alt News) बाहाय।", "असुंगे हेडलाइन फोरनिफ्राय सावधान राव थानाय।"], quiz: { question: "भाइरल दावी: 'आनजानाव साना सुगन्धि जागोन'। गोदान आखान्थि?", options: ["तुरुन्तै शेयर खालाम", "तथ्य जाँच खालाम", "सबाथाव बातरखौ खालि थानाय"], correct: 1 } },
    payments: { title: "💸 सुरक्षित UPI आरो डिजिटल भुक्तानि", tips: ["UPI PIN मोनसेबो सोमोन्दो आव थानाय।", "सानखान्थि थानायनि उनाव प्रापकनि नां नाय।", "'KYC अपडेट' नि सोलों लिंकआव क्लिक नखालाम।", "सरकारी एप (Google Pay, PhonePe) बाहाय।", "दुइ-कारक प्रमाणीकरण चालू खालाम।"], quiz: { question: "फोन आव बुंनाना UPI ब्लक जागोन जुदि OTP आथि होदि। माब्ला खालामनो?", options: ["OTP आथि हो", "फोन थानाय – OTP आथि होनो नांगाया", "फोन रिटर्न खालाम"], correct: 1 } }
  },

  // ------------------- DOGRI -------------------
  doi: {
    email: { title: "📧 सुरक्षित ईमेल इस्तेमाल करो", tips: ["अपना पासवर्ड किसे ना दस्सो।", "अनजाने भेजन वालियां दे अटैचमेंट ना खोलो।", "लॉगिन करने थमां 'https' ते एक ताला 🔒 दिक्खो।", "मजबूत पासवर्ड इस्तेमाल करो।"], quiz: { question: "ईमेल च पासवर्ड मंगया?", options: ["लिंक ते क्लिक करो", "अनदेखा करो – बैंक कदे ईमेल च नी मंगदे", "दोस्त नू फॉरवर्ड करो"], correct: 1 } },
    search: { title: "🔍 स्मार्ट Google खोज", tips: ["खास कीवर्ड इस्तेमाल करो।", "सही वाक्य लेई उद्धरण चिन्ह लाओ।", "शब्द बाहर करने लेई माइनस चिन्ह लाओ।", "लेख दी तारीख दिक्खो।"], quiz: { question: "'online safety' लभो पर 'kids' नी होवे", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ऑनलाइन ठगी ते फिशिंग पहचानो", tips: ["भेजन वाले दा ईमेल पता ध्यान नाल दिक्खो।", "क्लिक करने थमां लिंक ते हवर करो।", "ठग जल्दबाजी पैदा करदे न।", "पॉप-अप च व्यक्तिगत जानकारी ना देवो।"], quiz: { question: "टेक्स्ट आया फ्री iPhone जित्तेआ? सुरक्षित काम?", options: ["लिंक ते क्लिक करो", "अनदेखा करो ते डिलीट करो", "STOP जवाब देवो"], correct: 1 } },
    privacy: { title: "🔒 सोशल मीडिया प्राइवेसी दी मूल गल्लां", tips: ["प्रोफाइल 'सिर्फ दोस्त' रक्खो।", "पता या फोन नंबर पोस्ट ना करो।", "कनेक्टेड ऐप्स दी समीक्षा करो।", "लोकेशन टैगिंग बंद करो।"], quiz: { question: "Facebook ते चंगी प्राइवेसी आदत?", options: ["सारे अनुरोध स्वीकार करो", "दोस्तें नू पासवर्ड देवो", "नियमित प्राइवेसी सेटिंग्स दिक्खो"], correct: 2 } },
    password: { title: "🔐 मजबूत पासवर्ड बनाओ", tips: ["12+ अक्षर इस्तेमाल करो।", "वड्डे, छोटे अक्षर, अंक, चिह्न मिलाओ।", "'password123' जने सामान्य शब्दां थमां बचो।", "'PurpleTigerShirt!' जने वाक्यांश इस्तेमाल करो।", "पासवर्ड दोबारा इस्तेमाल ना करो।"], quiz: { question: "कौन सा सबतू मजबूत पासवर्ड ऐ?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 फेक न्यूज पहचानो", tips: ["स्रोत दी जांच करो।", "होर रिपोर्टां दिक्खो।", "URL दे अंत दी जांच करो।", "तथ्य-जांच वालियां साइटां (Snopes, Alt News) इस्तेमाल करो।", "हैरान करने वालियां हेडलाइनां थमां सावधान रहो।"], quiz: { question: "वायरल दावा: 'अज रात चन्ना गुलाबी हो जू'। पैहली तरकीब?", options: ["तुरंत शेयर करो", "तथ्य जांच करो", "सारी खबरां अनदेखा करो"], correct: 1 } },
    payments: { title: "💸 सुरक्षित UPI ते डिजिटल भुगतान", tips: ["UPI PIN किसे ना दस्सो।", "पैसे भेजने थमां प्राप्तकर्ता दा नां दिक्खो।", "'KYC अपडेट' दा दावा करने वाले SMS लिंक ते ना क्लिक करो।", "अधिकारिक ऐप (Google Pay, PhonePe) इस्तेमाल करो।", "दो-कारक प्रमाणीकरण चालू करो।"], quiz: { question: "कॉल आखदी ऐ UPI ब्लॉक हो जू जे OTP ना दित्ता। की करो?", options: ["OTP देवो", "फोन रक्खो – कदे OTP ना देवो", "वापस कॉल करो"], correct: 1 } }
  },

  // ------------------- GUJARATI -------------------
  gu: {
    email: { title: "📧 ઇમેઇલ સુરક્ષિત રીતે ઉપયોગ કરો", tips: ["તમારો પાસવર્ડ કોઈની સાથે શેર ન કરો.", "અજાણ્યા મોકલનારની અટેચમેન્ટ ન ખોલો.", "લોગિન કરતા પહેલા 'https' અને એક તાળું 🔒 જુઓ.", "મજબૂત પાસવર્ડ વાપરો."], quiz: { question: "ઇમેઇલ તમારો પાસવર્ડ માંગે તો?", options: ["લિંક પર ક્લિક કરો", "અવગણો – બેંક ક્યારેય ઇમેઇલથી નથી પૂછતી", "મિત્રને ફોરવર્ડ કરો"], correct: 1 } },
    search: { title: "🔍 સ્માર્ટ Google શોધ", tips: ["ચોક્કસ કીવર્ડ વાપરો.", "ચોક્કસ શબ્દસમૂહ માટે અવતરણ ચિહ્ન વાપરો.", "શબ્દો બાકાત રાખવા માઈનસ ચિહ્ન વાપરો.", "લેખની તારીખ તપાસો."], quiz: { question: "'online safety' શોધો પણ 'kids' બાકાત", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ઓનલાઇન કપટ અને ફિશિંગ શોધો", tips: ["મોકલનારનું ઇમેઇલ સરનામું કાળજીપૂર્વક તપાસો.", "ક્લિક કરતા પહેલા લિંક પર હોવર કરો.", "કપટીઓ તાકીદ ઉત્પન્ન કરે છે.", "પૉપ-અપમાં વ્યક્તિગત માહિતી ન આપો."], quiz: { question: "ટેક્સ્ટ આવ્યું તમે ફ્રી iPhone જીત્યા. સુરક્ષિત કાર્ય?", options: ["લિંક પર ક્લિક કરો", "અવગણો અને કાઢી નાખો", "STOP જવાબ આપો"], correct: 1 } },
    privacy: { title: "🔒 સોશિયલ મીડિયા ગોપનીયતા મૂળભૂત", tips: ["પ્રોફાઇલ 'માત્ર મિત્રો' રાખો.", "સરનામું કે ફોન નંબર પોસ્ટ ન કરો.", "કનેક્ટેડ ઍપ્સની સમીક્ષા કરો.", "લોકેશન ટૅગિંગ બંધ કરો."], quiz: { question: "Facebook પર સારી ગોપનીયતા આદત?", options: ["બધી વિનંતીઓ સ્વીકારો", "મિત્રોને પાસવર્ડ આપો", "નિયમિત ગોપનીયતા સેટિંગ્સ તપાસો"], correct: 2 } },
    password: { title: "🔐 મજબૂત પાસવર્ડ બનાવો", tips: ["12+ અક્ષરો વાપરો.", "મોટા, નાના અક્ષરો, અંકો, ચિહ્નો મિક્સ કરો.", "'password123' જેવા સામાન્ય શબ્દો ટાળો.", "'PurpleTigerShirt!' જેવો શબ્દસમૂહ વાપરો.", "પાસવર્ડ ફરી વાપરશો નહીં."], quiz: { question: "સૌથી મજબૂત પાસવર્ડ કયો છે?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 ફેક ન્યૂઝ શોધો", tips: ["સ્ત્રોત તપાસો.", "અન્ય રિપોર્ટો જુઓ.", "URL નો અંત તપાસો.", "તથ્ય-ચકાસણી સાઇટ્સ (Snopes, Alt News) વાપરો.", "ચોંકાવનારા હેડલાઇન્સથી સાવધ રહો."], quiz: { question: "વાયરલ દાવો: 'આજ રાત્રે ચંદ્ર ગુલાબી થશે'. પહેલું પગલું?", options: ["તરત શેર કરો", "તથ્ય ચકાસો", "બધા સમાચાર અવગણો"], correct: 1 } },
    payments: { title: "💸 સુરક્ષિત UPI અને ડિજિટલ ચુકવણી", tips: ["UPI PIN કોઈની સાથે શેર ન કરો.", "મોકલતા પહેલા પ્રાપ્તકર્તાનું નામ તપાસો.", "'KYC અપડેટ' દાવો કરતી SMS લિંક પર ક્લિક ન કરો.", "અધિકૃત ઍપ્સ (Google Pay, PhonePe) વાપરો.", "બે-પરિબળ પ્રમાણીકરણ ચાલુ કરો."], quiz: { question: "કૉલ કહે છે UPI બ્લોક થશે જો OTP નહીં આપો. શું કરશો?", options: ["OTP આપો", "ફોન મૂકો – ક્યારેય OTP ન આપો", "પાછા કૉલ કરો"], correct: 1 } }
  },

  // ------------------- HINDI -------------------
  hi: {
    email: { title: "📧 सुरक्षित ईमेल का उपयोग", tips: ["पासवर्ड कभी साझा न करें।", "अज्ञात भेजने वालों के अटैचमेंट न खोलें।", "लॉगिन से पहले 'https' और ताला 🔒 देखें।", "मजबूत पासवर्ड बनाएँ।"], quiz: { question: "बैंक से ईमेल में पासवर्ड माँगे?", options: ["लिंक पर क्लिक करें", "नज़रअंदाज करें – बैंक नहीं माँगता", "दोस्त को फॉर्वर्ड करें"], correct: 1 } },
    search: { title: "🔍 स्मार्ट Google खोज", tips: ["विशिष्ट कीवर्ड का उपयोग करें।", "सटीक वाक्यांश के लिए उद्धरण चिह्न लगाएँ।", "शब्द हटाने के लिए माइनस चिह्न (-) का उपयोग करें।", "लेख की तारीख जाँचें।"], quiz: { question: "'online safety' खोजें लेकिन 'kids' नहीं", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ऑनलाइन धोखाधड़ी पहचानें", tips: ["भेजने वाले का ईमेल पता ध्यान से देखें।", "लिंक पर माउस घुमाएँ।", "धोखेबाज जल्दबाजी दिखाते हैं।", "पॉप-अप में व्यक्तिगत जानकारी न दें।"], quiz: { question: "फ्री iPhone जीतने का टेक्स्ट आया?", options: ["लिंक पर क्लिक करें", "इग्नोर करें और डिलीट करें", "STOP जवाब दें"], correct: 1 } },
    privacy: { title: "🔒 सोशल मीडिया प्राइवेसी", tips: ["प्रोफ़ाइल 'केवल मित्र' रखें।", "पता या फ़ोन नंबर पोस्ट न करें।", "कनेक्टेड ऐप्स जाँचें।", "लोकेशन टैगिंग बंद करें।"], quiz: { question: "Facebook पर अच्छी आदत?", options: ["सभी अनुरोध स्वीकारें", "दोस्तों को पासवर्ड दें", "नियमित प्राइवेसी सेटिंग जाँचें"], correct: 2 } },
    password: { title: "🔐 मजबूत पासवर्ड बनाएँ", tips: ["12+ अक्षर का उपयोग करें।", "बड़े/छोटे अक्षर, अंक, चिह्न मिलाएँ।", "'password123' जैसे सामान्य शब्दों से बचें।", "वाक्यांश का उपयोग करें: 'PurpleTigerShirt!'", "पासवर्ड दोबारा न उपयोग करें।"], quiz: { question: "सबसे मजबूत पासवर्ड कौन सा है?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 फेक न्यूज पहचानें", tips: ["स्रोत की जाँच करें।", "अन्य रिपोर्ट देखें।", "URL के अंत की जाँच करें।", "तथ्य-जाँच साइट्स (Snopes, Alt News) उपयोग करें।", "सनसनीखेज हेडलाइन से सावधान रहें।"], quiz: { question: "वायरल दावा: 'चाँद गुलाबी होगा'। पहला कदम?", options: ["तुरंत शेयर करें", "तथ्य जाँच करें", "सभी खबरें अनदेखा करें"], correct: 1 } },
    payments: { title: "💸 सुरक्षित यूपीआई और डिजिटल भुगतान", tips: ["UPI PIN कभी साझा न करें।", "पैसे भेजने से पहले प्राप्तकर्ता का नाम जाँचें।", "'KYC अपडेट' वाले SMS लिंक पर न क्लिक करें।", "आधिकारिक ऐप्स (Google Pay, PhonePe) का उपयोग करें।", "दो-कारक प्रमाणीकरण चालू करें।"], quiz: { question: "कॉल कहे UPI ब्लॉक होगा, OTP माँगे?", options: ["OTP दें", "फोन रख दें – कभी OTP न दें", "वापस कॉल करें"], correct: 1 } }
  },

  // ------------------- KANNADA -------------------
  kn: {
    email: { title: "📧 ಇಮೇಲ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಬಳಸಿ", tips: ["ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ಅನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.", "ಅಪರಿಚಿತರ ಲಗತ್ತುಗಳನ್ನು ತೆರೆಯಬೇಡಿ.", "ಲಾಗಿನ್ ಮಾಡುವ ಮೊದಲು 'https' ಮತ್ತು ಪ್ಯಾಡ್ಲಾಕ್ 🔒 ಅನ್ನು ನೋಡಿ.", "ಬಲವಾದ ಪಾಸ್ವರ್ಡ್ ಬಳಸಿ."], quiz: { question: "ಇಮೇಲ್ ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ಕೇಳಿದರೆ?", options: ["ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ", "ನಿರ್ಲಕ್ಷಿಸಿ – ಬ್ಯಾಂಕ್ ಎಂದಿಗೂ ಇಮೇಲ್ ಮೂಲಕ ಕೇಳುವುದಿಲ್ಲ", "ಸ್ನೇಹಿತರಿಗೆ ಫಾರ್ವರ್ಡ್ ಮಾಡಿ"], correct: 1 } },
    search: { title: "🔍 ಸ್ಮಾರ್ಟ್ Google ಹುಡುಕಾಟ", tips: ["ನಿರ್ದಿಷ್ಟ ಕೀವರ್ಡ್ಗಳನ್ನು ಬಳಸಿ.", "ನಿಖರ ಪದಗುಚ್ಛಕ್ಕಾಗಿ ಉದ್ಧರಣ ಚಿಹ್ನೆ ಬಳಸಿ.", "ಪದಗಳನ್ನು ಹೊರಗಿಡಲು ಮೈನಸ್ ಚಿಹ್ನೆ ಬಳಸಿ.", "ಲೇಖನದ ದಿನಾಂಕ ಪರಿಶೀಲಿಸಿ."], quiz: { question: "'online safety' ಹುಡುಕಿ ಆದರೆ 'kids' ಹೊರಗಿಡಿ", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ಆನ್ಲೈನ್ ವಂಚನೆ ಮತ್ತು ಫಿಶಿಂಗ್ ಗುರುತಿಸಿ", tips: ["ಕಳುಹಿಸುವವರ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಿ.", "ಕ್ಲಿಕ್ ಮಾಡುವ ಮೊದಲು ಲಿಂಕ್ ಮೇಲೆ ಹೋವರ್ ಮಾಡಿ.", "ವಂಚಕರು ತುರ್ತು ಪರಿಸ್ಥಿತಿಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತಾರೆ.", "ಪಾಪ್-ಅಪ್ಗಳಲ್ಲಿ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ನೀಡಬೇಡಿ."], quiz: { question: "ಉಚಿತ ಐಫೋನ್ ಗೆದ್ದಿರಿ ಎಂದು ಟೆಕ್ಸ್ಟ್ ಬಂದರೆ? ಸುರಕ್ಷಿತ ಕ್ರಮ?", options: ["ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ", "ನಿರ್ಲಕ್ಷಿಸಿ ಮತ್ತು ಅಳಿಸಿ", "STOP ಉತ್ತರಿಸಿ"], correct: 1 } },
    privacy: { title: "🔒 ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಗೌಪ್ಯತೆ ಮೂಲಗಳು", tips: ["ಪ್ರೊಫೈಲ್ ಅನ್ನು 'ಸ್ನೇಹಿತರು ಮಾತ್ರ' ಇರಿಸಿ.", "ವಿಳಾಸ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ಪೋಸ್ಟ್ ಮಾಡಬೇಡಿ.", "ಸಂಪರ್ಕಿತ ಅಪ್ಲಿಕೇಶನ್ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.", "ಸ್ಥಳ ಟ್ಯಾಗಿಂಗ್ ಅನ್ನು ಆಫ್ ಮಾಡಿ."], quiz: { question: "Facebook ನಲ್ಲಿ ಉತ್ತಮ ಗೌಪ್ಯತೆ ಅಭ್ಯಾಸ?", options: ["ಎಲ್ಲಾ ವಿನಂತಿಗಳನ್ನು ಸ್ವೀಕರಿಸಿ", "ಸ್ನೇಹಿತರಿಗೆ ಪಾಸ್ವರ್ಡ್ ನೀಡಿ", "ನಿಯಮಿತವಾಗಿ ಗೌಪ್ಯತೆ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ"], correct: 2 } },
    password: { title: "🔐 ಬಲವಾದ ಪಾಸ್ವರ್ಡ್ ರಚಿಸಿ", tips: ["12+ ಅಕ್ಷರಗಳನ್ನು ಬಳಸಿ.", "ದೊಡ್ಡ, ಸಣ್ಣ ಅಕ್ಷರಗಳು, ಸಂಖ್ಯೆಗಳು, ಚಿಹ್ನೆಗಳನ್ನು ಮಿಶ್ರಣ ಮಾಡಿ.", "'password123' ನಂತಹ ಸಾಮಾನ್ಯ ಪದಗಳನ್ನು ತಪ್ಪಿಸಿ.", "'PurpleTigerShirt!' ನಂತಹ ಪದಗುಚ್ಛವನ್ನು ಬಳಸಿ.", "ಪಾಸ್ವರ್ಡ್ ಅನ್ನು ಮರುಬಳಕೆ ಮಾಡಬೇಡಿ."], quiz: { question: "ಯಾವುದು ಬಲವಾದ ಪಾಸ್ವರ್ಡ್?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 ನಕಲಿ ಸುದ್ದಿಗಳನ್ನು ಗುರುತಿಸಿ", tips: ["ಮೂಲವನ್ನು ಪರಿಶೀಲಿಸಿ.", "ಇತರ ವರದಿಗಳನ್ನು ನೋಡಿ.", "URL ನ ಅಂತ್ಯವನ್ನು ಪರೀಕ್ಷಿಸಿ.", "ಸತ್ಯ-ಪರಿಶೀಲನಾ ಸೈಟ್ಗಳನ್ನು (Snopes, Alt News) ಬಳಸಿ.", "ಆಘಾತಕಾರಿ ಹೆಡ್ಲೈನ್ಗಳ ಬಗ್ಗೆ ಎಚ್ಚರವಾಗಿರಿ."], quiz: { question: "ವೈರಲ್ ಹೇಳಿಕೆ: 'ಇಂದು ರಾತ್ರಿ ಚಂದ್ರ ಗುಲಾಬಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುತ್ತದೆ'. ಮೊದಲ ಹೆಜ್ಜೆ?", options: ["ತಕ್ಷಣ ಹಂಚಿಕೊಳ್ಳಿ", "ಸತ್ಯ ಪರಿಶೀಲಿಸಿ", "ಎಲ್ಲಾ ಸುದ್ದಿಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ"], correct: 1 } },
    payments: { title: "💸 ಸುರಕ್ಷಿತ UPI ಮತ್ತು ಡಿಜಿಟಲ್ ಪಾವತಿಗಳು", tips: ["UPI PIN ಅನ್ನು ಯಾರೊಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.", "ಕಳುಹಿಸುವ ಮೊದಲು ಸ್ವೀಕರಿಸುವವರ ಹೆಸರನ್ನು ಪರಿಶೀಲಿಸಿ.", "'KYC ನವೀಕರಣ' ಎಂದು ಹೇಳುವ SMS ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ.", "ಅಧಿಕೃತ ಅಪ್ಲಿಕೇಶನ್ಗಳನ್ನು (Google Pay, PhonePe) ಬಳಸಿ.", "ಎರಡು-ಅಂಶ ದೃಢೀಕರಣವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ."], quiz: { question: "ಕರೆ ಹೇಳುತ್ತದೆ OTP ಹಂಚಿಕೊಳ್ಳದಿದ್ದರೆ UPI ಬ್ಲಾಕ್ ಆಗುತ್ತದೆ. ಏನು ಮಾಡುವಿರಿ?", options: ["OTP ನೀಡಿ", "ಫೋನ್ ಇಡಿ – ಎಂದಿಗೂ OTP ನೀಡಬೇಡಿ", "ಮತ್ತೆ ಕರೆ ಮಾಡಿ"], correct: 1 } }
  },

  // ------------------- KASHMIRI -------------------
  ks: {
    email: { title: "📧 ای میل محفوظ طور پر استعمال کریں", tips: ["اپنا پاسورڈ کسے ساتھ شیئر نہ کریو۔", "نامعلوم بھیجن واجن دی اٹیچمنٹ نہ کھولو۔", "لاگ ان کرنہ تھوٕد 'https' تہ قفل 🔒 وُچھو۔", "مضبوط پاسورڈ استعمال کریو۔"], quiz: { question: "ای میل چھ پاسورڈ مانان؟", options: ["لنک کلک کریو", "نظرانداز کریو – بینک کُنہ ای میل کِتھ مانان", "دوستس فارورڈ کریو"], correct: 1 } },
    search: { title: "🔍 سمارٹ Google تلاش", tips: ["خاص کی ورڈ استعمال کریو۔", "عین جملہ خاطر اقتباس نشان استعمال کریو۔", "لفظ چھوڑنہ خاطر مائنس نشان استعمال کریو۔", "مضمون تریخ وُچھو۔"], quiz: { question: "'online safety' تلاش کرو لیکن 'kids' نہ", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ آن لائن دھوکہ دہی تہ فشنگ پہچانو", tips: ["بھیجن واجن دٕی ای میل پتہ دھیان سیت وُچھو۔", "کلک کرنہ تھوٕد لنک پٮ۪ٹھ ہوور کرو۔", "دھوکہ باز عجلت پیدا کران چھِ۔", "پاپ-اپ مَنٛز ذٲتی معلومات نہ دِو۔"], quiz: { question: "ٹیکسٹ آو یُتھ مفت آئی فون جیتنہ؟ محفوظ عمل?", options: ["لنک کلک کریو", "نظرانداز کریو تہ ڈیلیٹ کریو", "STOP جواب دیو"], correct: 1 } },
    privacy: { title: "🔒 سوشل میڈیا پرائیویسی بنیادی باتیں", tips: ["پروفائل 'صرف دوست' تھٲوِو۔", "پتہ یا فون نمبر پوسٹ نہ کرو۔", "منسلک ایپس کا جائزہ لو۔", "لوکیشن ٹیگنگ بند کرو۔"], quiz: { question: "Facebook پٮ۪ٹھ اچھی پرائیویسی عادت?", options: ["تمام درخواستیں قبول کرو", "دوستن ہنٛد پاسورڈ دو", "باقاعدگی سیت پرائیویسی سیٹنگز وُچھو"], correct: 2 } },
    password: { title: "🔐 مضبوط پاسورڈ بنایو", tips: ["12+ حرف استعمال کریو۔", "وڈے, ننے حرف, نمبر, علامات مِلاوِو۔", "'password123' جین علامت الفاظ ترک کرو۔", "'PurpleTigerShirt!' جین جملہ استعمال کریو۔", "پاسورڈ دوبارہ استعمال نہ کرو۔"], quiz: { question: "سوٕ چھُ سبہٕ مضبوط پاسورڈ?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 جعلی خبر پہچانو", tips: ["ماخذ چیک کرو۔", "دیگر رپورٹ وُچھو۔", "URL کُنہ اختتام چیک کرو۔", "حقائق-جانچ سائٹ (Snopes, Alt News) استعمال کریو۔", "چونکاون واجیٖن ہیڈلائن کنہ ہوشیار رہو۔"], quiz: { question: "وائرل دعویٰ: 'اَز رات چَنٛدر گلابہٕ بَنٛنہ'۔ پہلو قدم?", options: ["فوری شیئر کرو", "حقائق جانچ کرو", "تمام خبر نظرانداز کرو"], correct: 1 } },
    payments: { title: "💸 محفوظ UPI تہ ڈیجیٹل ادائیگی", tips: ["UPI PIN کسے ساتھ شیئر نہ کرو۔", "پیسہ بھیجنہ تھوٕد وصول کرن والین ناو چیک کرو۔", "'KYC اپڈیٹ' دعویٰ کرن والین SMS لنک کلک نہ کرو۔", "سرکاری ایپ (Google Pay, PhonePe) استعمال کرو۔", "دو-عنصر تصدیق چالو کرو۔"], quiz: { question: "کال چھِ کھاندرٕ UPI بلاک گٔیہ اگر OTP نہ دیو۔ کیا کرو?", options: ["OTP دو", "فون رکھو – کتھہ نہ OTP دو", "واپس کال کرو"], correct: 1 } }
  },

  // ------------------- KONKANI -------------------
  kok: {
    email: { title: "📧 ईमेल सुरक्षितपणान वापरात", tips: ["तुमचो पासवर्ड कांकूय सांगू नाकात.", "अनपरिचीत पाठवप्यांचे अटॅचमेंट उगडू नाकात.", "लॉगिन करचे आदी 'https' आनी एक कुलूप 🔒 पळेयात.", "भक्कम पासवर्ड वापरात."], quiz: { question: "ईमेलन तुमचो पासवर्ड विचारल्यार?", options: ["लिंकाचेर क्लिक करात", "दुर्लक्ष करात – बँक कदेंच ईमेललागीं विचारिना", "मित्राक फोरवर्ड करात"], correct: 1 } },
    search: { title: "🔍 स्मार्ट Google सोद", tips: ["खास कीवर्ड वापरात.", "बरोब्बर उक्ती खातीर उद्धरण चिन्ह वापरात.", "उतरांक बाद करपाक मायनस चिन्ह वापरात.", "लेखाची तारीख तपासात."], quiz: { question: "'online safety' सोदा पूण 'kids' बाद करात", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ऑनलाइन फसवणूक आनी फिशिंग स्पश्ट करात", tips: ["पाठवप्याचो ईमेल पत्तो काळजीपूर्वक पळेयात.", "क्लिक करचे आदी लिंकाचेर होवर करात.", "फसवे लोक त्वरा निर्माण करतात.", "पॉप-अपांत वैयक्तिक म्हायती दिवं नाकात."], quiz: { question: "फुकट iPhone जिखल्यात म्हणन टेक्स्ट आयल्यार? सुरक्षित कृती?", options: ["लिंकाचेर क्लिक करात", "दुर्लक्ष करात आनी डिलीट करात", "STOP जबाब दिवात"], correct: 1 } },
    privacy: { title: "🔒 सोशल मीडिया गोपनीयतेचो आधार", tips: ["प्रोफाइल 'फकत मित्र' दवरात.", "पत्तो वा फोन नंबर पोस्ट करू नाकात.", "जोडिल्ले एप्स तपासात.", "लोकेशन टॅगिंग बंद करात."], quiz: { question: "Facebookाचेर बरी गोपनीयता सवय?", options: ["सगळे विनंती स्वीकारात", "मित्रांक पासवर्ड दिवात", "नेमान गोपनीयता सेटिंग तपासात"], correct: 2 } },
    password: { title: "🔐 भक्कम पासवर्ड तयार करात", tips: ["12+ अक्षरां वापरात.", "मोटे, ल्हान अक्षरां, आंकडे, चिन्हां मेळयात.", "'password123' सारकिल्ले सामान्य उतरां टाळात.", "'PurpleTigerShirt!' अशी उक्ती वापरात.", "पासवर्ड परत वापरू नाकात."], quiz: { question: "कोणतो पासवर्ड सगळ्यांत भक्कम?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 फेक न्यूज स्पश्ट करात", tips: ["स्रोत तपासात.", "हेर रिपोर्ट पळेयात.", "URL चो शेवट तपासात.", "तथ्य-तपासणी साइट (Snopes, Alt News) वापरात.", "धक्कादायक हेडलायनां पासून सावचेत रावात."], quiz: { question: "वायरल दावो: 'आयज राती चंद्र गुलाबी जातलो'। पयलें पाऊल?", options: ["तात्काळ शेअर करात", "तथ्य तपासात", "सगळ्यो खबरो दुर्लक्ष करात"], correct: 1 } },
    payments: { title: "💸 सुरक्षित UPI आनी डिजिटल पेमेंट", tips: ["UPI PIN कांकूय सांगू नाकात.", "पैशे पाठवचे आदी प्राप्तकर्त्याचें नांव तपासात.", "'KYC अपडेट' म्हणपी SMS लिंकाचेर क्लिक करू नाकात.", "अधिकृत एप (Google Pay, PhonePe) वापरात.", "दोन-घटक प्रमाणीकरण चालू करात."], quiz: { question: "कॉल म्हणटा UPI ब्लॉक जातलो जर OTP ना दिल्यार. कितें करतले?", options: ["OTP दिवात", "फोन दवरात – कदेंच OTP दिवं नाकात", "परत कॉल करात"], correct: 1 } }
  },

  // ------------------- MAITHILI -------------------
  mai: {
    email: { title: "📧 सुरक्षित ईमेल प्रयोग करब", tips: ["अपन पासवर्ड केओ साथ साझा नहि करब।", "अनजान भेजब वालाक अटैचमेंट नहि खोलब।", "लॉगिन करबाक पहिने एकटा ताला 🔒 देखब।", "मजबूत पासवर्ड प्रयोग करब।"], quiz: { question: "ईमेल मे अहाँक पासवर्ड पुछल गेल?", options: ["लिंक पर क्लिक करब", "उपेक्षा करब – बैंक कहियो ईमेल स नहि पुछैत", "मित्रक फोरवर्ड करब"], correct: 1 } },
    search: { title: "🔍 स्मार्ट Google खोज", tips: ["विशिष्ट कीवर्ड प्रयोग करब।", "सटीक वाक्यांश लेल उद्धरण चिन्ह प्रयोग करब।", "शब्द बहिष्कृत करब लेल माइनस चिन्ह प्रयोग करब।", "लेखक तारीख जाँचब।"], quiz: { question: "'online safety' खोजब मुदा 'kids' नहि", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ऑनलाइन ठगी आर फिशिंग पहिचानब", tips: ["प्रेषकक ईमेल पता ध्यान स देखब।", "क्लिक करबाक पहिने लिंक पर होवर करब।", "ठग लोक त्वरा पैदा करैत छथि।", "पॉप-अप मे व्यक्तिगत जानकारी नहि देवब।"], quiz: { question: "टेक्स्ट आयल मुफ्त iPhone जीतल छी। सुरक्षित कार्य?", options: ["लिंक पर क्लिक करब", "उपेक्षा करब आर डिलीट करब", "STOP जवाब देवब"], correct: 1 } },
    privacy: { title: "🔒 सोशल मीडिया गोपनीयता मूल बातें", tips: ["प्रोफाइल 'केवल मित्र' राखब।", "पता वा फोन नंबर पोस्ट नहि करब।", "जुड़ल एप समीक्षा करब।", "लोकेशन टैगिंग बंद करब।"], quiz: { question: "Facebook पर नीक गोपनीयता आदत?", options: ["सब अनुरोध स्वीकार करब", "मित्रसभक पासवर्ड देवब", "नियमित गोपनीयता सेटिंग जाँचब"], correct: 2 } },
    password: { title: "🔐 मजबूत पासवर्ड बनाब", tips: ["12+ अक्षर प्रयोग करब।", "बड़ अक्षर, छोट अक्षर, अंक, चिन्ह मिलाब।", "'password123' जकाँ सामान्य शब्द सँ बचब।", "'PurpleTigerShirt!' जकाँ वाक्यांश प्रयोग करब।", "पासवर्ड पुन: प्रयोग नहि करब।"], quiz: { question: "की दुनू सबसँ मजबूत पासवर्ड?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 फेक न्यूज पहिचानब", tips: ["स्रोत जाँचब।", "अन्य रिपोर्ट देखब।", "URL के अंत जाँचब।", "तथ्य-जाँच साइट (Snopes, Alt News) प्रयोग करब।", "सनसनीखेज हेडलाइन सँ सावधान रहब।"], quiz: { question: "वायरल दावा: 'आइ रात चंद्रमा गुलाबी भेटत'। पहल कदम?", options: ["तुरंत शेयर करब", "तथ्य जाँच करब", "सब समाचार उपेक्षा करब"], correct: 1 } },
    payments: { title: "💸 सुरक्षित UPI आर डिजिटल भुगतान", tips: ["UPI PIN ककरो साथ साझा नहि करब।", "पैसा भेजबाक पहिने प्राप्तकर्ताक नाम जाँचब।", "'KYC अपडेट' कहब वाला SMS लिंक पर क्लिक नहि करब।", "आधिकारिक एप (Google Pay, PhonePe) प्रयोग करब।", "दो-कारक प्रमाणीकरण सक्षम करब।"], quiz: { question: "कॉल कहैत अछि UPI ब्लॉक भ जाएत जँ OTP नहि देब। की करब?", options: ["OTP देवब", "फोन राखब – कहियो OTP नहि देवब", "वापस कॉल करब"], correct: 1 } }
  },

  // ------------------- MALAYALAM -------------------
  ml: {
    email: { title: "📧 ഇമെയിൽ സുരക്ഷിതമായി ഉപയോഗിക്കുക", tips: ["നിങ്ങളുടെ പാസ്വേഡ് ആരുമായും പങ്കിടരുത്.", "അപരിചിതരുടെ അറ്റാച്ച്മെന്റുകൾ തുറക്കരുത്.", "ലോഗിൻ ചെയ്യുന്നതിന് മുമ്പ് 'https' ഉം ഒരു പാഡ്ലോക്ക് 🔒 ഉം നോക്കുക.", "ശക്തമായ പാസ്വേഡ് ഉപയോഗിക്കുക."], quiz: { question: "ഇമെയിൽ നിങ്ങളുടെ പാസ്വേഡ് ആവശ്യപ്പെട്ടാൽ?", options: ["ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുക", "അവഗണിക്കുക – ബാങ്ക് ഒരിക്കലും ഇമെയിൽ വഴി ചോദിക്കില്ല", "സുഹൃത്തിന് ഫോർവേഡ് ചെയ്യുക"], correct: 1 } },
    search: { title: "🔍 സ്മാർട്ട് Google തിരയൽ", tips: ["നിർദ്ദിഷ്ട കീവേഡുകൾ ഉപയോഗിക്കുക.", "കൃത്യമായ ശൈലിക്ക് ഉദ്ധരണി ചിഹ്നം ഉപയോഗിക്കുക.", "പദങ്ങൾ ഒഴിവാക്കാൻ മൈനസ് ചിഹ്നം ഉപയോഗിക്കുക.", "ലേഖനത്തിന്റെ തീയതി പരിശോധിക്കുക."], quiz: { question: "'online safety' കണ്ടെത്തുക എന്നാൽ 'kids' ഒഴിവാക്കുക", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ഓൺലൈൻ തട്ടിപ്പുകളും ഫിഷിംഗും കണ്ടെത്തുക", tips: ["അയച്ചയാളിന്റെ ഇമെയിൽ വിലാസം ശ്രദ്ധാപൂർവ്വം പരിശോധിക്കുക.", "ക്ലിക്ക് ചെയ്യുന്നതിന് മുമ്പ് ലിങ്കിൽ ഹോവർ ചെയ്യുക.", "തട്ടിപ്പുകാർ അടിയന്തിരാവസ്ഥ സൃഷ്ടിക്കുന്നു.", "പോപ്പ്-അപ്പുകളിൽ വ്യക്തിഗത വിവരങ്ങൾ നൽകരുത്."], quiz: { question: "സൗജന്യ ഐഫോൺ നേടിയെന്ന ടെക്സ്റ്റ് വന്നാൽ? സുരക്ഷിത പ്രവൃത്തി?", options: ["ലിങ്കിൽ ക്ലിക്ക് ചെയ്യുക", "അവഗണിച്ച് ഇല്ലാതാക്കുക", "STOP മറുപടി നൽകുക"], correct: 1 } },
    privacy: { title: "🔒 സോഷ്യൽ മീഡിയ സ്വകാര്യത അടിസ്ഥാനങ്ങൾ", tips: ["പ്രൊഫൈൽ 'സുഹൃത്തുകൾ മാത്രം' ആയി സജ്ജമാക്കുക.", "വിലാസമോ ഫോൺ നമ്പറോ പോസ്റ്റ് ചെയ്യരുത്.", "കണക്റ്റുചെയ്ത ആപ്പുകൾ അവലോകനം ചെയ്യുക.", "ലൊക്കേഷൻ ടാഗിംഗ് ഓഫാക്കുക."], quiz: { question: "Facebook-ൽ നല്ല സ്വകാര്യത ശീലം?", options: ["എല്ലാ അഭ്യർത്ഥനകളും സ്വീകരിക്കുക", "സുഹൃത്തുക്കൾക്ക് പാസ്വേഡ് നൽകുക", "പതിവായി സ്വകാര്യത ക്രമീകരണങ്ങൾ പരിശോധിക്കുക"], correct: 2 } },
    password: { title: "🔐 ശക്തമായ പാസ്വേഡ് സൃഷ്ടിക്കുക", tips: ["12+ അക്ഷരങ്ങൾ ഉപയോഗിക്കുക.", "വലിയ, ചെറിയ അക്ഷരങ്ങൾ, അക്കങ്ങൾ, ചിഹ്നങ്ങൾ എന്നിവ മിക്സ് ചെയ്യുക.", "'password123' പോലുള്ള സാധാരണ വാക്കുകൾ ഒഴിവാക്കുക.", "'PurpleTigerShirt!' പോലുള്ള ശൈലി ഉപയോഗിക്കുക.", "പാസ്വേഡ് വീണ്ടും ഉപയോഗിക്കരുത്."], quiz: { question: "ഏതാണ് ഏറ്റവും ശക്തമായ പാസ്വേഡ്?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 വ്യാജ വാർത്ത കണ്ടെത്തുക", tips: ["ഉറവിടം പരിശോധിക്കുക.", "മറ്റ് റിപ്പോർട്ടുകൾ നോക്കുക.", "URL-ന്റെ അവസാനം പരിശോധിക്കുക.", "വസ്തുത-പരിശോധനാ സൈറ്റുകൾ (Snopes, Alt News) ഉപയോഗിക്കുക.", "ഞെട്ടിക്കുന്ന തലക്കെട്ടുകളിൽ ജാഗ്രത പാലിക്കുക."], quiz: { question: "വൈറൽ അവകാശവാദം: 'ഇന്ന് രാത്രി ചന്ദ്രൻ പിങ്ക് ആയി മാറും'. ആദ്യപടി?", options: ["ഉടൻ പങ്കിടുക", "വസ്തുത പരിശോധിക്കുക", "എല്ലാ വാർത്തകളും അവഗണിക്കുക"], correct: 1 } },
    payments: { title: "💸 സുരക്ഷിത UPI, ഡിജിറ്റൽ പേയ്മെന്റുകൾ", tips: ["UPI PIN ആരുമായും പങ്കിടരുത്.", "അയയ്ക്കുന്നതിന് മുമ്പ് സ്വീകർത്താവിന്റെ പേര് പരിശോധിക്കുക.", "'KYC അപ്ഡേറ്റ്' അവകാശപ്പെടുന്ന SMS ലിങ്കിൽ ക്ലിക്ക് ചെയ്യരുത്.", "ഔദ്യോഗിക ആപ്പുകൾ (Google Pay, PhonePe) ഉപയോഗിക്കുക.", "രണ്ട്-ഘടക പ്രാമാണീകരണം പ്രവർത്തനക്ഷമമാക്കുക."], quiz: { question: "കോൾ പറയുന്നു OTP നൽകിയില്ലെങ്കിൽ UPI ബ്ലോക്ക് ചെയ്യും. എന്ത് ചെയ്യും?", options: ["OTP നൽകുക", "ഫോൺ വയ്ക്കുക – ഒരിക്കലും OTP നൽകരുത്", "തിരികെ വിളിക്കുക"], correct: 1 } }
  },

  // ------------------- MANIPURI -------------------
  mni: {
    email: { title: "📧 ꯏꯃꯦꯜ ꯁꯦꯐ ꯇꯧꯅ ꯁꯤꯖꯤꯟꯕ", tips: ["ꯅꯪꯒꯤ ꯄꯥꯁꯋꯥꯔꯗ ꯀꯥꯏꯗꯣꯛꯄ ꯉꯥꯛꯇꯅ ꯊꯝꯕꯤꯌꯨ।", "ꯉꯥꯟꯕ ꯊꯥꯟꯕꯤꯕꯒꯤ ꯑꯦꯇꯥꯆꯃꯦꯟꯇ ꯍꯥꯡꯗꯣꯛꯄ ꯇꯥꯕ ꯉꯥꯏꯗꯕꯤꯌꯨ।", "ꯂꯣꯒꯤꯟ ꯇꯧꯒꯗꯧꯉꯣꯢ ꯃꯃꯥꯡꯗ 'https' ꯑꯃꯁꯨꯡ ꯄꯥꯗꯂꯣꯛ 🔒 ꯎꯕꯤꯌꯨ।", "ꯈꯟꯕ ꯉꯝꯕ ꯄꯥꯁꯋꯥꯔꯗ ꯁꯤꯖꯤꯟꯕꯤꯌꯨ।"], quiz: { question: "ꯏꯃꯦꯜ ꯅꯪꯒꯤ ꯄꯥꯁꯋꯥꯔꯗ ꯇꯔꯥꯉꯤ ꯑꯣꯏꯗꯨꯅ?", options: ["ꯂꯤꯡꯛ ꯀ꯭ꯂꯤꯛ ꯇꯧ", "ꯈꯨꯗꯛ ꯊꯥꯗꯣꯛ – ꯕꯦꯡꯛ ꯏꯃꯦꯜꯗ ꯄꯥꯁꯋꯥꯔꯗ ꯇꯔꯥꯉꯤ", "ꯃꯔꯤ ꯂꯩꯔꯤꯕ ꯑꯃꯒ ꯐꯣꯔꯋꯥꯔꯗ ꯇꯧ"], correct: 1 } },
    search: { title: "🔍 ꯁ꯭ꯃꯥꯔꯇ ꯒꯨꯒꯜ ꯊꯧꯔꯥꯡ", tips: ["ꯃꯇꯨꯡ ꯏꯟꯅ ꯀꯤꯋꯥꯔꯗ ꯁꯤꯖꯤꯟꯕꯤꯌꯨ।", "ꯑꯁꯥꯎꯕ ꯋꯥꯍꯩ ꯑꯗꯨ ꯇꯤꯡꯅ ꯄꯤꯕ ꯑꯣꯏꯅ ꯀꯣꯇꯦꯁꯟ ꯁꯥꯏꯟ ꯁꯤꯖꯤꯟꯕꯤꯌꯨ।", "ꯋꯥꯍꯩ ꯊꯥꯗꯣꯛꯄ ꯑꯣꯏꯅ ꯃꯥꯏꯅꯁ ꯁꯥꯏꯟ ꯁꯤꯖꯤꯟꯕꯤꯌꯨ।", "ꯂꯤꯅꯥꯏ ꯑꯗꯨꯒꯤ ꯇꯔꯤꯛ ꯌꯦꯡꯕꯤꯌꯨ।"], quiz: { question: "'online safety' ꯊꯧꯔꯥꯡ ꯇꯧ ꯑꯗꯨꯕꯨ 'kids' ꯑꯗꯨ ꯊꯥꯗꯣꯛ", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ꯑꯣꯟꯂꯥꯏꯟ ꯁ꯭ꯀꯦꯝ ꯑꯃꯁꯨꯡ ꯐꯤꯁꯤꯡ ꯎꯕ ꯉꯝ", tips: ["ꯊꯥꯟꯕꯤꯕ ꯑꯗꯨꯒꯤ ꯏꯃꯦꯜ ꯑꯦꯗꯔꯦꯁ ꯆꯦꯠꯅ ꯌꯦꯡꯕꯤꯌꯨ।", "ꯀ꯭ꯂꯤꯛ ꯇꯧꯒꯗꯧꯉꯣꯢ ꯃꯃꯥꯡꯗ ꯂꯤꯡꯛ ꯗ ꯍꯣꯚꯔ ꯇꯧꯕꯤꯌꯨ।", "ꯁ꯭ꯀꯦꯝꯃꯥꯟꯁꯤꯡ ꯉꯥꯏꯗꯦ ꯑꯣꯏꯅ ꯑꯀꯣꯟꯕ ꯁꯦꯝꯃꯤ।", "ꯄꯣꯞ-ꯑꯦꯞꯁꯤꯡꯗ ꯊꯋꯥꯢ ꯑꯗꯣꯝꯒꯤ ꯃꯔꯤ ꯂꯩꯅꯕ ꯋꯥꯐꯝ ꯄꯤꯕ ꯇꯥꯕ ꯉꯥꯏꯗꯕꯤꯌꯨ।"], quiz: { question: "ꯇꯦꯛꯁꯇꯔꯥꯏ ꯑꯣꯏꯗꯨꯅ ꯐ꯭ꯔꯤ ꯑꯥꯏꯐꯣꯟ ꯐꯪꯂꯤ ꯍꯥꯏꯕ ꯇꯥꯔꯤ ꯑꯣꯏꯗꯨꯅ? ꯁꯦꯐ ꯑꯦꯛꯁꯟ?", options: ["ꯂꯤꯡꯛ ꯀ꯭ꯂꯤꯛ ꯇꯧ", "ꯈꯨꯗꯛ ꯊꯥꯗꯣꯛ ꯑꯃꯁꯨꯡ ꯂꯧꯊꯣꯛ", "STOP ꯍꯥꯏꯅ ꯍꯟꯊꯔꯤ"], correct: 1 } },
    privacy: { title: "🔒 ꯁꯣꯁꯤꯑꯦꯜ ꯃꯤꯗꯤꯌꯥ ꯄ꯭ꯔꯥꯏꯚꯁꯤ ꯄꯤꯕ ꯉꯝꯐꯝ", tips: ["ꯄ꯭ꯔꯣꯐꯥꯏꯜ 'ꯃꯔꯤ ꯂꯩꯔꯤꯕ ꯈꯛꯇ' ꯑꯣꯏꯅ ꯊꯝꯕꯤꯌꯨ।", "ꯑꯦꯗꯔꯦꯁ ꯅꯠꯇ꯭ꯔꯒ ꯐꯣꯟ ꯅꯝꯕꯔ ꯄꯣꯁ꯭ꯠ ꯇꯧꯕ ꯉꯥꯏꯗꯕꯤꯌꯨ।", "ꯀꯅꯦꯛꯇ ꯇꯧꯔꯤꯕ ꯑꯦꯞꯁꯤꯡ ꯃꯇꯨꯡ ꯏꯟꯅ ꯌꯦꯡꯕꯤꯌꯨ।", "ꯂꯣꯀꯦꯁꯟ ꯇꯦꯒꯤꯡ ꯑꯣꯐ ꯇꯧꯕꯤꯌꯨ।"], quiz: { question: "Facebook ꯗ ꯑꯣꯠꯂꯤ ꯄ꯭ꯔꯥꯏꯚꯁꯤ ꯑꯦꯕꯤꯌꯥꯁ?", options: ["ꯄꯥꯟꯕ ꯄꯣꯠꯊꯣꯛ ꯄꯨꯝꯅꯥꯊ ꯌꯥꯕ", "ꯃꯔꯤ ꯂꯩꯔꯤꯕ ꯃꯆꯤ ꯄꯥꯁꯋꯥꯔꯗ ꯄꯤꯕ", "ꯄ꯭ꯔꯥꯏꯚꯁꯤ ꯁꯦꯇꯤꯡ ꯑꯗꯨ ꯃꯇꯝ ꯇꯥ ꯑꯇꯦꯟꯕ ꯌꯦꯡꯕ"], correct: 2 } },
    password: { title: "🔐 ꯈꯟꯕ ꯉꯝꯕ ꯄꯥꯁꯋꯥꯔꯗ ꯁꯦꯝꯕ", tips: ["12+ ꯑꯛꯁꯔ ꯁꯤꯖꯤꯟꯕꯤꯌꯨ।", "ꯋꯥꯟꯗꯥ ꯑꯛꯁꯔ, ꯅꯥꯀꯣꯝ ꯑꯛꯁꯔ, ꯅꯝꯕꯔ, ꯁꯤꯝꯕꯣꯜ ꯈꯣꯠꯀꯤ ꯄꯥꯡꯊꯣꯛ ꯇꯧꯕꯤꯌꯨ।", "'password123' ꯈꯨꯗꯥ ꯂꯤꯔꯤꯕ ꯁꯤꯖꯤꯟꯅꯩ ꯍꯥꯏꯕ ꯋꯥꯍꯩ ꯈꯨꯗꯥ ꯇꯥꯕ ꯉꯥꯏꯗꯕꯤꯌꯨ।", "'PurpleTigerShirt!' ꯈꯨꯗꯥ ꯂꯤꯔꯤꯕ ꯋꯥꯍꯩ ꯁꯤꯖꯤꯟꯕꯤꯌꯨ।", "ꯄꯥꯁꯋꯥꯔꯗ ꯑꯃꯒ ꯑꯃ ꯁꯤꯖꯤꯟꯕ ꯉꯥꯏꯗꯕꯤꯌꯨ।"], quiz: { question: "ꯀꯔꯤ ꯑꯁꯤ ꯈꯟꯕ ꯉꯝꯕ ꯄꯥꯁꯋꯥꯔꯗ ꯑꯣꯏ?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 ꯐꯦꯛ ꯅꯤꯎꯖ ꯎꯕ ꯉꯝ", tips: ["ꯑꯀꯥꯡꯕ ꯌꯦꯡꯕꯤꯌꯨ။", "ꯑꯇꯣꯞꯄ ꯔꯤꯄꯣꯔꯇ ꯌꯦꯡꯕꯤꯌꯨ။", "URL ꯒꯤ ꯑꯔꯣꯢꯕ ꯌꯦꯡꯕꯤꯌꯨ။", "ꯄꯥꯛ ꯄꯥꯀꯄ ꯌꯦꯡꯕ ꯁꯥꯏꯠ (Snopes, Alt News) ꯁꯤꯖꯤꯟꯕꯤꯌꯨ။", "ꯍꯧꯔꯛꯄ ꯈꯧꯅ ꯍꯥꯔꯥꯅ ꯍꯤꯗꯥꯛ ꯁꯝꯗ ꯆꯤꯡꯖꯅ ꯑꯣꯏꯕ ꯋꯥꯐꯝꯁꯤꯡꯗ ꯆꯦꯠꯅ ꯊꯝꯕꯤꯌꯨ।"], quiz: { question: "ꯚꯥꯏꯔꯦꯜ ꯏꯥꯔꯤ: 'ꯄꯨꯡ ꯅꯤꯡꯁꯤꯡꯗ ꯊꯥ ꯒꯨꯂꯥꯕꯤ ꯑꯣꯏꯒꯅꯤ' ꯍꯥꯏꯕ ꯑꯁꯤꯒꯤ ꯃꯃꯥꯡ ꯊꯕꯛ?", options: ["ꯃꯥꯟꯅꯤꯡꯉꯥꯏ ꯑꯣꯏꯅ ꯁꯦꯌꯔ ꯇꯧ", "ꯄꯥꯛ ꯄꯥꯀꯄ ꯌꯦꯡꯕ ꯑꯁꯤ ꯇꯧ", "ꯄꯥꯛ ꯄꯥꯀꯄ ꯋꯥꯐꯝ ꯄꯨꯝꯅꯥꯊ ꯈꯨꯗꯛ ꯊꯥꯗꯣꯛ"], correct: 1 } },
    payments: { title: "💸 ꯁꯦꯐ UPI ꯑꯃꯁꯨꯡ ꯗꯤꯖꯤꯇꯜ ꯄꯦꯃꯦꯟꯇ", tips: ["UPI PIN ꯀꯥꯏꯗꯣꯛꯄ ꯉꯥꯛꯇꯅ ꯊꯝꯕꯤꯌꯨ။", "ꯄꯥꯌꯁ ꯊꯥꯕꯒꯗꯧꯉꯣꯢ ꯃꯃꯥꯡꯗ ꯐꯪꯕ ꯑꯗꯨꯒꯤ ꯃꯤꯡ ꯌꯦꯡꯕꯤꯌꯨ။", "'KYC ꯑꯄꯗꯦꯠ' ꯍꯥꯏꯕ ꯇꯥꯔꯤ ꯑꯣꯏꯗꯨꯅ ꯂꯤꯡꯛ ꯀ꯭ꯂꯤꯛ ꯇꯧꯕ ꯉꯥꯏꯗꯕꯤꯌꯨ။", "ꯑꯣꯐꯤꯁꯤꯌꯦꯜ ꯑꯦꯞ (Google Pay, PhonePe) ꯁꯤꯖꯤꯟꯕꯤꯌꯨ।", "ꯁꯥ ꯃꯥꯌ ꯲ ꯑꯦꯊꯦꯟꯇꯤꯀꯦꯁꯟ ꯑꯣꯟ ꯇꯧꯕꯤꯌꯨ।"], quiz: { question: "ꯀꯣꯜ ꯍꯥꯏ OTP ꯄꯤꯗ꯭ꯔꯤꯆꯠꯇ ꯑꯩꯈꯣꯏ UPI ꯕ꯭ꯂꯣꯛ ꯇꯧꯒꯅꯤ ꯍꯥꯏꯅ ꯇꯥꯔꯤ ꯑꯣꯏꯗꯨꯅ? ꯀꯔꯤ ꯇꯧꯒꯗ?", options: ["OTP ꯄꯤ", "ꯐꯣꯟ ꯊꯝꯕꯤꯌꯨ – OTP ꯀꯥꯏꯗꯣꯛꯄ ꯄꯤꯕ ꯇꯥꯕ ꯉꯥꯏꯗꯕꯤꯌꯨ", "ꯃꯄꯥꯟꯗ ꯀꯣꯜ ꯇꯧ"], correct: 1 } }
  },

  // ------------------- MARATHI -------------------
  mr: {
    email: { title: "📧 ईमेल सुरक्षितपणे वापरा", tips: ["तुमचा पासवर्ड कोणाशीही शेअर करू नका.", "अनोळखी पाठवणाऱ्यांचे अटॅचमेंट उघडू नका.", "लॉगिन करण्यापूर्वी 'https' आणि एक कुलूप 🔒 पहा.", "मजबूत पासवर्ड वापरा."], quiz: { question: "ईमेलने पासवर्ड विचारल्यास?", options: ["लिंकवर क्लिक करा", "दुर्लक्ष करा – बँक कधीही ईमेलने विचारत नाही", "मित्राला फोरवर्ड करा"], correct: 1 } },
    search: { title: "🔍 स्मार्ट Google शोध", tips: ["विशिष्ट कीवर्ड वापरा.", "अचूक वाक्यासाठी अवतरण चिन्हे वापरा.", "शब्द वगळण्यासाठी वजा चिन्ह वापरा.", "लेखाची तारीख तपासा."], quiz: { question: "'online safety' शोधा पण 'kids' वगळा", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ऑनलाइन फसवणूक आणि फिशिंग ओळखा", tips: ["पाठवणाऱ्याचा ईमेल पत्ता काळजीपूर्वक तपासा.", "क्लिक करण्यापूर्वी लिंकवर होवर करा.", "फसवणूक करणारे त्वरा निर्माण करतात.", "पॉप-अपमध्ये वैयक्तिक माहिती देऊ नका."], quiz: { question: "मोफत iPhone जिंकल्याचा टेक्स्ट आला. सुरक्षित कृती?", options: ["लिंकवर क्लिक करा", "दुर्लक्ष करा आणि डिलीट करा", "STOP उत्तर द्या"], correct: 1 } },
    privacy: { title: "🔒 सोशल मीडिया गोपनीयता मूलभूत", tips: ["प्रोफाइल 'फक्त मित्र' ठेवा.", "पत्ता किंवा फोन नंबर पोस्ट करू नका.", "जोडलेल्या अॅप्सचा आढावा घ्या.", "लोकेशन टॅगिंग बंद करा."], quiz: { question: "Facebook वर चांगली गोपनीयता सवय?", options: ["सर्व विनंत्या स्वीकारा", "मित्रांना पासवर्ड द्या", "नियमितपणे गोपनीयता सेटिंग्ज तपासा"], correct: 2 } },
    password: { title: "🔐 मजबूत पासवर्ड तयार करा", tips: ["12+ अक्षरे वापरा.", "मोठी, लहान अक्षरे, अंक, चिन्हे मिक्स करा.", "'password123' सारखे सामान्य शब्द टाळा.", "'PurpleTigerShirt!' सारखा वाक्यांश वापरा.", "पासवर्ड पुन्हा वापरू नका."], quiz: { question: "कोणता पासवर्ड सर्वात मजबूत?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 फेक न्यूज ओळखा", tips: ["स्त्रोत तपासा.", "इतर अहवाल पहा.", "URL चा शेवट तपासा.", "तथ्य-तपासणी साइट्स (Snopes, Alt News) वापरा.", "धक्कादायक हेडलाईन्सपासून सावध रहा."], quiz: { question: "व्हायरल दावा: 'आज रात्री चंद्र गुलाबी होईल'. पहिली पायरी?", options: ["लगेच शेअर करा", "तथ्य तपासा", "सर्व बातम्या दुर्लक्ष करा"], correct: 1 } },
    payments: { title: "💸 सुरक्षित UPI आणि डिजिटल पेमेंट", tips: ["UPI PIN कोणाशीही शेअर करू नका.", "पाठवण्यापूर्वी प्राप्तकर्त्याचे नाव तपासा.", "'KYC अपडेट'चा दावा करणाऱ्या SMS लिंकवर क्लिक करू नका.", "अधिकृत अॅप्स (Google Pay, PhonePe) वापरा.", "दोन-घटक प्रमाणीकरण सक्षम करा."], quiz: { question: "कॉल म्हणतो OTP शेअर न केल्यास UPI ब्लॉक होईल. काय कराल?", options: ["OTP द्या", "फोन ठेवा – कधीही OTP देऊ नका", "परत कॉल करा"], correct: 1 } }
  },

  // ------------------- NEPALI -------------------
  ne: {
    email: { title: "📧 इमेल सुरक्षित रूपमा प्रयोग गर्नुहोस्", tips: ["आफ्नो पासवर्ड कसैलाई नभन्नुहोस्।", "अपरिचित पठाउनेको अट्याचमेन्ट नखोल्नुहोस्।", "लगइन गर्नुअघि 'https' र एउटा ताला 🔒 हेर्नुहोस्।", "बलियो पासवर्ड प्रयोग गर्नुहोस्।"], quiz: { question: "इमेलले पासवर्ड माग्यो भने?", options: ["लिङ्कमा क्लिक गर्नुहोस्", "बेवास्ता गर्नुहोस् – बैंकले इमेलमा कहिल्यै माग्दैन", "साथीलाई फोरवर्ड गर्नुहोस्"], correct: 1 } },
    search: { title: "🔍 स्मार्ट Google खोज", tips: ["विशिष्ट किवर्ड प्रयोग गर्नुहोस्।", "सही वाक्यांशको लागि उद्धरण चिन्ह प्रयोग गर्नुहोस्।", "शब्द बहिष्कार गर्न माइनस चिन्ह प्रयोग गर्नुहोस्।", "लेखको मिति जाँच गर्नुहोस्।"], quiz: { question: "'online safety' खोज्नुहोस् तर 'kids' बाहेक", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ अनलाइन ठगी र फिसिङ पहिचान गर्नुहोस्", tips: ["पठाउनेको इमेल ठेगाना ध्यानपूर्वक हेर्नुहोस्।", "क्लिक गर्नुअघि लिङ्कमा होभर गर्नुहोस्।", "ठगहरूले अत्यावश्यकता सिर्जना गर्छन्।", "पप-अपमा व्यक्तिगत जानकारी नदिनुहोस्।"], quiz: { question: "फ्री iPhone जित्नुभयो भन्ने टेक्स्ट आयो। सुरक्षित कार्य?", options: ["लिङ्कमा क्लिक गर्नुहोस्", "बेवास्ता गरी मेटाउनुहोस्", "STOP जवाफ दिनुहोस्"], correct: 1 } },
    privacy: { title: "🔒 सामाजिक सञ्जाल गोपनीयता आधार", tips: ["प्रोफाइल 'साथीहरू मात्र' राख्नुहोस्।", "ठेगाना वा फोन नम्बर पोस्ट नगर्नुहोस्।", "जडित एपहरू समीक्षा गर्नुहोस्।", "स्थान ट्यागिङ बन्द गर्नुहोस्।"], quiz: { question: "Facebook मा राम्रो गोपनीयता बानी?", options: ["सबै अनुरोध स्वीकार गर्नुहोस्", "साथीहरूलाई पासवर्ड दिनुहोस्", "नियमित गोपनीयता सेटिङ जाँच गर्नुहोस्"], correct: 2 } },
    password: { title: "🔐 बलियो पासवर्ड बनाउनुहोस्", tips: ["12+ अक्षर प्रयोग गर्नुहोस्।", "ठूला, साना अक्षर, अंक, चिन्ह मिलाउनुहोस्।", "'password123' जस्ता साधारण शब्दहरू नप्रयोग गर्नुहोस्।", "'PurpleTigerShirt!' जस्तो वाक्यांश प्रयोग गर्नुहोस्।", "पासवर्ड पुन: प्रयोग नगर्नुहोस्।"], quiz: { question: "सबैभन्दा बलियो पासवर्ड कुन हो?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 नक्कली समाचार पहिचान गर्नुहोस्", tips: ["स्रोत जाँच गर्नुहोस्।", "अन्य रिपोर्ट हेर्नुहोस्।", "URL को अन्त्य जाँच गर्नुहोस्।", "तथ्य-जाँच साइटहरू (Snopes, Alt News) प्रयोग गर्नुहोस्।", "सनसनीपूर्ण हेडलाइनबाट सावधान रहनुहोस्।"], quiz: { question: "भाइरल दावी: 'आज राति चन्द्र गुलाबी हुनेछ'। पहिलो कदम?", options: ["तुरन्त साझा गर्नुहोस्", "तथ्य जाँच गर्नुहोस्", "सबै समाचार बेवास्ता गर्नुहोस्"], correct: 1 } },
    payments: { title: "💸 सुरक्षित UPI र डिजिटल भुक्तानी", tips: ["UPI PIN कसैलाई नभन्नुहोस्।", "पठाउनुअघि प्राप्तकर्ताको नाम जाँच गर्नुहोस्।", "'KYC अपडेट' भन्ने SMS लिङ्कमा क्लिक नगर्नुहोस्।", "आधिकारिक एपहरू (Google Pay, PhonePe) प्रयोग गर्नुहोस्।", "दुई-कारक प्रमाणीकरण सक्रिय गर्नुहोस्।"], quiz: { question: "कलले OTP नदिए UPI ब्लक हुन्छ भन्यो। के गर्नुहुन्छ?", options: ["OTP दिनुहोस्", "फोन राख्नुहोस् – कहिल्यै OTP नदिनुहोस्", "फिर्ता कल गर्नुहोस्"], correct: 1 } }
  },

  // ------------------- ODIA -------------------
  or: {
    email: { title: "📧 ଇମେଲକୁ ସୁରକ୍ଷିତ ଭାବରେ ବ୍ୟବହାର କରନ୍ତୁ", tips: ["ଆପଣଙ୍କ ପାସୱାର୍ଡ କାହା ସହିତ ବାଣ୍ଟନ୍ତୁ ନାହିଁ।", "ଅଜଣା ପଠାକାରୀଙ୍କ ଆଟାଚମେଣ୍ଟ ଖୋଲନ୍ତୁ ନାହିଁ।", "ଲଗଇନ କରିବା ପୂର୍ବରୁ 'https' ଏବଂ ଏକ ତାଲା 🔒 ଦେଖନ୍ତୁ।", "ଏକ ଶକ୍ତିଶାଳୀ ପାସୱାର୍ଡ ବ୍ୟବହାର କରନ୍ତୁ।"], quiz: { question: "ଇମେଲ ଆପଣଙ୍କ ପାସୱାର୍ଡ ମାଗିଲେ?", options: ["ଲିଙ୍କରେ କ୍ଲିକ କରନ୍ତୁ", "ଅଣଦେଖା କରନ୍ତୁ – ବ୍ୟାଙ୍କ କେବେ ଇମେଲରେ ମାଗେନାହିଁ", "ବନ୍ଧୁଙ୍କୁ ଫରୱାର୍ଡ କରନ୍ତୁ"], correct: 1 } },
    search: { title: "🔍 ସ୍ମାର୍ଟ Google ଖୋଜନ୍ତୁ", tips: ["ନିର୍ଦ୍ଦିଷ୍ଟ କୀୱାର୍ଡ ବ୍ୟବହାର କରନ୍ତୁ।", "ଠିକ୍ ବାକ୍ୟାଂଶ ପାଇଁ ଉଦ୍ଧୃତି ଚିହ୍ନ ବ୍ୟବହାର କରନ୍ତୁ।", "ଶବ୍ଦ ବାଦ ଦେବାକୁ ମାଇନସ୍ ଚିହ୍ନ ବ୍ୟବହାର କରନ୍ତୁ।", "ପ୍ରବନ୍ଧର ତାରିଖ ଯାଞ୍ଚ କରନ୍ତୁ।"], quiz: { question: "'online safety' ଖୋଜନ୍ତୁ କିନ୍ତୁ 'kids' ବାଦ ଦିଅନ୍ତୁ", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ଅନଲାଇନ୍ ଠକେଇ ଓ ଫିସିଂ ଚିହ୍ନନ୍ତୁ", tips: ["ପଠାକାରୀଙ୍କ ଇମେଲ ଠିକଣା ଯତ୍ନର ସହ ଯାଞ୍ଚ କରନ୍ତୁ।", "କ୍ଲିକ୍ କରିବା ପୂର୍ବରୁ ଲିଙ୍କ ଉପରେ ହୋଭର କରନ୍ତୁ।", "ଠକମାନେ ଜରୁରୀ ପରିସ୍ଥିତି ସୃଷ୍ଟି କରନ୍ତି।", "ପପ୍-ଅପ୍ରେ ବ୍ୟକ୍ତିଗତ ସୂଚନା ଦିଅନ୍ତୁ ନାହିଁ।"], quiz: { question: "ଫ୍ରି iPhone ଜିତିଲେ ବୋଲି ଟେକ୍ସଟ୍ ଆସିଲେ? ସୁରକ୍ଷିତ କାର୍ଯ୍ୟ?", options: ["ଲିଙ୍କରେ କ୍ଲିକ୍ କରନ୍ତୁ", "ଅଣଦେଖା କରି ଡିଲିଟ୍ କରନ୍ତୁ", "STOP ଉତ୍ତର ଦିଅନ୍ତୁ"], correct: 1 } },
    privacy: { title: "🔒 ସୋସିଆଲ ମିଡିଆ ଗୋପନୀୟତା ମୌଳିକ", tips: ["ପ୍ରୋଫାଇଲ୍ 'କେବଳ ବନ୍ଧୁ' ରଖନ୍ତୁ।", "ଠିକଣା କିମ୍ବା ଫୋନ୍ ନମ୍ବର ପୋଷ୍ଟ୍ କରନ୍ତୁ ନାହିଁ।", "ସଂଯୁକ୍ତ ଆପ୍ ସମୀକ୍ଷା କରନ୍ତୁ।", "ଲୋକେସନ୍ ଟ୍ୟାଗିଂ ବନ୍ଦ କରନ୍ତୁ।"], quiz: { question: "Facebook ରେ ଭଲ ଗୋପନୀୟତା ଅଭ୍ୟାସ?", options: ["ସବୁ ଅନୁରୋଧ ଗ୍ରହଣ କରନ୍ତୁ", "ବନ୍ଧୁମାନଙ୍କୁ ପାସୱାର୍ଡ ଦିଅନ୍ତୁ", "ନିୟମିତ ଗୋପନୀୟତା ସେଟିଙ୍ଗ୍ ଯାଞ୍ଚ କରନ୍ତୁ"], correct: 2 } },
    password: { title: "🔐 ଶକ୍ତିଶାଳୀ ପାସୱାର୍ଡ ତିଆରି କରନ୍ତୁ", tips: ["12+ ଅକ୍ଷର ବ୍ୟବହାର କରନ୍ତୁ।", "ବଡ଼, ସାନ ଅକ୍ଷର, ସଂଖ୍ୟା, ଚିହ୍ନ ମିଶାନ୍ତୁ।", "'password123' ଭଳି ସାଧାରଣ ଶବ୍ଦଠାରୁ ଦୂରେଇ ରୁହନ୍ତୁ।", "'PurpleTigerShirt!' ଭଳି ବାକ୍ୟାଂଶ ବ୍ୟବହାର କରନ୍ତୁ।", "ପାସୱାର୍ଡ ପୁନଃ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"], quiz: { question: "କେଉଁଟି ସବୁଠୁ ଶକ୍ତିଶାଳୀ ପାସୱାର୍ଡ?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 ଫେକ୍ ନ୍ୟୁଜ୍ ଚିହ୍ନନ୍ତୁ", tips: ["ଉତ୍ସ ଯାଞ୍ଚ କରନ୍ତୁ।", "ଅନ୍ୟ ରିପୋର୍ଟ ଦେଖନ୍ତୁ।", "URL ର ଶେଷ ଯାଞ୍ଚ କରନ୍ତୁ।", "ତଥ୍ୟ-ଯାଞ୍ଚ ସାଇଟ୍ (Snopes, Alt News) ବ୍ୟବହାର କରନ୍ତୁ।", "ଚକିତ କରୁଥିବା ହେଡଲାଇନ୍ ଠାରୁ ସାବଧାନ ରୁହନ୍ତୁ।"], quiz: { question: "ଭାଇରାଲ୍ ଦାବି: 'ଆଜି ରାତି ଚନ୍ଦ୍ର ଗୋଲାପୀ ହେବ'। ପ୍ରଥମ ପଦକ୍ଷେପ?", options: ["ତୁରନ୍ତ ସେୟାର୍ କରନ୍ତୁ", "ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ", "ସବୁ ଖବର ଅଣଦେଖା କରନ୍ତୁ"], correct: 1 } },
    payments: { title: "💸 ସୁରକ୍ଷିତ UPI ଏବଂ ଡିଜିଟାଲ୍ ପେମେଣ୍ଟ", tips: ["UPI PIN କାହା ସହିତ ବାଣ୍ଟନ୍ତୁ ନାହିଁ।", "ପଠାଇବା ପୂର୍ବରୁ ଗ୍ରହଣକାରୀଙ୍କ ନାମ ଯାଞ୍ଚ କରନ୍ତୁ।", "'KYC ଅପଡେଟ୍' ଦାବି କରୁଥିବା SMS ଲିଙ୍କରେ କ୍ଲିକ୍ କରନ୍ତୁ ନାହିଁ।", "ଅଧିକୃତ ଆପ୍ (Google Pay, PhonePe) ବ୍ୟବହାର କରନ୍ତୁ।", "ଦୁଇ-କାରକ ପ୍ରାମାଣୀକରଣ ସକ୍ଷମ କରନ୍ତୁ।"], quiz: { question: "କଲ୍ କହେ UPI ବ୍ଲକ୍ ହେବ ଯଦି OTP ନ ଦିଅନ୍ତି। କଣ କରିବେ?", options: ["OTP ଦିଅନ୍ତୁ", "ଫୋନ୍ ରଖନ୍ତୁ – କେବେ OTP ଦିଅନ୍ତୁ ନାହିଁ", "ପଛକୁ କଲ୍ କରନ୍ତୁ"], correct: 1 } }
  },

  // ------------------- PUNJABI -------------------
  pa: {
    email: { title: "📧 ਈਮੇਲ ਨੂੰ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਵਰਤੋ", tips: ["ਆਪਣਾ ਪਾਸਵਰਡ ਕਿਸੇ ਨਾਲ ਸਾਂਝਾ ਨਾ ਕਰੋ।", "ਅਣਜਾਣ ਭੇਜਣ ਵਾਲਿਆਂ ਦੇ ਅਟੈਚਮੈਂਟ ਨਾ ਖੋਲ੍ਹੋ।", "ਲੌਗਇਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ 'https' ਅਤੇ ਇੱਕ ਤਾਲਾ 🔒 ਵੇਖੋ।", "ਮਜ਼ਬੂਤ ਪਾਸਵਰਡ ਵਰਤੋ।"], quiz: { question: "ਈਮੇਲ ਵਿੱਚ ਪਾਸਵਰਡ ਮੰਗਿਆ?", options: ["ਲਿੰਕ ਤੇ ਕਲਿੱਕ ਕਰੋ", "ਅਣਡਿੱਠ ਕਰੋ – ਬੈਂਕ ਕਦੇ ਈਮੇਲ ਨਹੀਂ ਮੰਗਦਾ", "ਦੋਸਤ ਨੂੰ ਫਾਰਵਰਡ ਕਰੋ"], correct: 1 } },
    search: { title: "🔍 ਸਮਾਰਟ Google ਖੋਜ", tips: ["ਖਾਸ ਕੀਵਰਡ ਵਰਤੋ।", "ਸਹੀ ਵਾਕਾਂਸ਼ ਲਈ ਹਵਾਲਾ ਚਿੰਨ੍ਹ ਵਰਤੋ।", "ਸ਼ਬਦਾਂ ਨੂੰ ਬਾਹਰ ਕੱਢਣ ਲਈ ਮਾਈਨਸ ਚਿੰਨ੍ਹ ਵਰਤੋ।", "ਲੇਖ ਦੀ ਮਿਤੀ ਜਾਂਚ ਕਰੋ।"], quiz: { question: "'online safety' ਲੱਭੋ ਪਰ 'kids' ਨੂੰ ਬਾਹਰ ਕੱਢੋ", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ਔਨਲਾਈਨ ਧੋਖਾਧੜੀ ਅਤੇ ਫਿਸ਼ਿੰਗ ਪਛਾਣੋ", tips: ["ਭੇਜਣ ਵਾਲੇ ਦਾ ਈਮੇਲ ਪਤਾ ਧਿਆਨ ਨਾਲ ਵੇਖੋ।", "ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਲਿੰਕ ਤੇ ਹੋਵਰ ਕਰੋ।", "ਧੋਖੇਬਾਜ਼ ਜਲਦਬਾਜ਼ੀ ਪੈਦਾ ਕਰਦੇ ਹਨ।", "ਪੌਪ-ਅੱਪ ਵਿੱਚ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਨਾ ਦਿਓ।"], quiz: { question: "ਟੈਕਸਟ ਆਇਆ ਕਿ ਤੁਸੀਂ ਮੁਫਤ iPhone ਜਿੱਤ ਲਿਆ। ਸੁਰੱਖਿਅਤ ਕਾਰਵਾਈ?", options: ["ਲਿੰਕ ਤੇ ਕਲਿੱਕ ਕਰੋ", "ਅਣਡਿੱਠ ਕਰਕੇ ਮਿਟਾਓ", "STOP ਜਵਾਬ ਦਿਓ"], correct: 1 } },
    privacy: { title: "🔒 ਸੋਸ਼ਲ ਮੀਡੀਆ ਪਰਾਈਵੇਸੀ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ", tips: ["ਪ੍ਰੋਫਾਈਲ 'ਸਿਰਫ ਦੋਸਤ' ਰੱਖੋ।", "ਪਤਾ ਜਾਂ ਫੋਨ ਨੰਬਰ ਪੋਸਟ ਨਾ ਕਰੋ।", "ਕਨੈਕਟ ਕੀਤੇ ਐਪਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ।", "ਲੋਕੇਸ਼ਨ ਟੈਗਿੰਗ ਬੰਦ ਕਰੋ।"], quiz: { question: "Facebook 'ਤੇ ਚੰਗੀ ਪਰਾਈਵੇਸੀ ਆਦਤ?", options: ["ਸਾਰੀਆਂ ਬੇਨਤੀਆਂ ਸਵੀਕਾਰ ਕਰੋ", "ਦੋਸਤਾਂ ਨੂੰ ਪਾਸਵਰਡ ਦਿਓ", "ਨਿਯਮਿਤ ਤੌਰ 'ਤੇ ਪਰਾਈਵੇਸੀ ਸੈਟਿੰਗਾਂ ਜਾਂਚ ਕਰੋ"], correct: 2 } },
    password: { title: "🔐 ਮਜ਼ਬੂਤ ਪਾਸਵਰਡ ਬਣਾਓ", tips: ["12+ ਅੱਖਰ ਵਰਤੋ।", "ਵੱਡੇ, ਛੋਟੇ ਅੱਖਰ, ਅੰਕ, ਚਿੰਨ੍ਹ ਮਿਲਾਓ।", "'password123' ਵਰਗੇ ਆਮ ਸ਼ਬਦਾਂ ਤੋਂ ਬਚੋ।", "'PurpleTigerShirt!' ਵਰਗਾ ਵਾਕਾਂਸ਼ ਵਰਤੋ।", "ਪਾਸਵਰਡ ਮੁੜ ਵਰਤੋਂ ਨਾ ਕਰੋ।"], quiz: { question: "ਸਭ ਤੋਂ ਮਜ਼ਬੂਤ ਪਾਸਵਰਡ ਕਿਹੜਾ ਹੈ?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 ਫਰਜ਼ੀ ਖ਼ਬਰਾਂ ਪਛਾਣੋ", tips: ["ਸਰੋਤ ਦੀ ਜਾਂਚ ਕਰੋ।", "ਹੋਰ ਰਿਪੋਰਟਾਂ ਵੇਖੋ।", "URL ਦਾ ਅੰਤ ਜਾਂਚ ਕਰੋ।", "ਤੱਥ-ਜਾਂਚ ਸਾਈਟਾਂ (Snopes, Alt News) ਵਰਤੋ।", "ਹੈਰਾਨ ਕਰਨ ਵਾਲੀਆਂ ਹੈੱਡਲਾਈਨਾਂ ਤੋਂ ਸਾਵਧਾਨ ਰਹੋ।"], quiz: { question: "ਵਾਇਰਲ ਦਾਅਵਾ: 'ਅੱਜ ਰਾਤ ਚੰਦ ਗੁਲਾਬੀ ਹੋ ਜਾਵੇਗਾ'। ਪਹਿਲਾ ਕਦਮ?", options: ["ਤੁਰੰਤ ਸ਼ੇਅਰ ਕਰੋ", "ਤੱਥ ਜਾਂਚ ਕਰੋ", "ਸਾਰੀਆਂ ਖ਼ਬਰਾਂ ਅਣਡਿੱਠ ਕਰੋ"], correct: 1 } },
    payments: { title: "💸 ਸੁਰੱਖਿਅਤ UPI ਅਤੇ ਡਿਜੀਟਲ ਭੁਗਤਾਨ", tips: ["UPI PIN ਕਿਸੇ ਨਾਲ ਸਾਂਝਾ ਨਾ ਕਰੋ।", "ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਪ੍ਰਾਪਤਕਰਤਾ ਦਾ ਨਾਮ ਜਾਂਚ ਕਰੋ।", "'KYC ਅੱਪਡੇਟ' ਦਾ ਦਾਅਵਾ ਕਰਨ ਵਾਲੇ SMS ਲਿੰਕ 'ਤੇ ਕਲਿੱਕ ਨਾ ਕਰੋ।", "ਅਧਿਕਾਰਤ ਐਪਾਂ (Google Pay, PhonePe) ਵਰਤੋ।", "ਦੋ-ਕਾਰਕ ਪ੍ਰਮਾਣੀਕਰਨ ਚਾਲੂ ਕਰੋ।"], quiz: { question: "ਕਾਲ ਆਖਦੀ ਹੈ UPI ਬਲਾਕ ਹੋ ਜਾਵੇਗਾ ਜੇ OTP ਨਾ ਦਿੱਤਾ। ਕੀ ਕਰੋਗੇ?", options: ["OTP ਦਿਓ", "ਫੋਨ ਰੱਖੋ – ਕਦੇ OTP ਨਾ ਦਿਓ", "ਵਾਪਸ ਕਾਲ ਕਰੋ"], correct: 1 } }
  },

  // ------------------- SANSKRIT -------------------
  sa: {
    email: { title: "📧 ईमेल सुरक्षितरूपेण उपयुज्यताम्", tips: ["भवतः पासवर्डः कस्मै अपि न देयः।", "अज्ञातप्रेषकाणाम् अटैचमेण्टान् न खोलनीयम्।", "लॉगिन करणात् पूर्वम् 'https' तथा तालकं 🔒 दृश्यताम्।", "दृढः पासवर्डः उपयुज्यताम्।"], quiz: { question: "ईमेले पासवर्डं पृच्छति चेत्?", options: ["लिङ्के क्लिक क्रियताम्", "उपेक्ष्यताम् – बैङ्कः कदापि ईमेलेन न पृच्छति", "मित्राय फोरवर्ड क्रियताम्"], correct: 1 } },
    search: { title: "🔍 स्मार्ट Google अन्वेषणम्", tips: ["निर्दिष्टकीवर्डान् उपयुञ्जीत।", "सम्यग्वाक्याय उद्धरणचिह्नम् उपयुञ्जीत।", "शब्दान् बहिष्कर्तुम् माइनसचिह्नम् उपयुञ्जीत।", "लेखस्य तिथिं परीक्षेत।"], quiz: { question: "'online safety' अन्विष्यताम् किन्तु 'kids' बहिष्कुर्वन्तु", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ आनलाइनवञ्चना फिशिंग च प्रतीयताम्", tips: ["प्रेषकस्य ईमेलपत्तनं सावधानेन परीक्षेत।", "क्लिक करणात् पूर्वम् लिङ्के होवर क्रियताम्।", "वञ्चकाः त्वरां जनयन्ति।", "पॉप-अपे व्यक्तिगतसूचनां न दद्यात्।"], quiz: { question: "टेक्स्टः आगतः मुक्तiPhone प्राप्तम्। सुरक्षितक्रिया?", options: ["लिङ्के क्लिक क्रियताम्", "उपेक्ष्यताम् च विलोप्यताम्", "STOP उत्तरं दीयताम्"], correct: 1 } },
    privacy: { title: "🔒 सामाजिकमाध्यमगोपनीयतामूलानि", tips: ["प्रोफाइल 'केवलमित्राः' इति स्थाप्यताम्।", "पत्तनं वा दूरवाणिसंख्यां न पोस्टयेत्।", "सम्बद्धान् एपान् समीक्षेत।", "स्थानटैगिंग बन्दं कुर्यात्।"], quiz: { question: "Facebook इत्यस्मिन् श्रेष्ठगोपनीयताचारः?", options: ["सर्वान् अनुरोधान् स्वीकुर्यात्", "मित्रेभ्यः पासवर्डं दद्यात्", "नियमितरूपेण गोपनीयतासेटिङ्गानि परीक्षेत"], correct: 2 } },
    password: { title: "🔐 दृढपासवर्डः सृज्यताम्", tips: ["12+ अक्षराणि उपयुञ्जीत।", "वृद्धलघ्वक्षराणि, अङ्कानि, चिह्नानि मिश्रयेत।", "'password123' इव सामान्यशब्दान् वर्जयेत्।", "'PurpleTigerShirt!' इव वाक्यं उपयुञ्जीत।", "पासवर्डः पुनः न उपयोज्यः।"], quiz: { question: "कः पासवर्डः अतिदृढः?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 मिथ्यावार्ता प्रतीयताम्", tips: ["स्रोतं परीक्षेत।", "अन्यरिपोर्टान् पश्येत।", "URL अन्तं परीक्षेत।", "तथ्य-परीक्षणसाइटः (Snopes, Alt News) उपयुञ्जीत।", "आश्चर्यजनकशीर्षकेभ्यः सावधानः भवेत्।"], quiz: { question: "वायरलदावा: 'अद्य रात्रौ चन्द्रः गुलाबी भविष्यति'। प्रथमपदम्?", options: ["तत्क्षणं शेयर कुर्यात्", "तथ्यं परीक्षेत", "सर्वाः वार्ताः उपेक्षेत"], correct: 1 } },
    payments: { title: "💸 सुरक्षितUPI डिजिटलभुक्तानि च", tips: ["UPI PIN कस्मै अपि न देयः।", "प्रेषणात् पूर्वं प्राप्तुः नाम परीक्षेत।", "'KYC अद्यतनम्' इति दाविनः SMSलिङ्के क्लिक न कुर्यात्।", "आधिकारिकएपान् (Google Pay, PhonePe) उपयुञ्जीत।", "द्वि-कारकप्रमाणीकरणं सक्रियं कुर्यात्।"], quiz: { question: "दूरवाणी वदति UPI ब्लॉक भविष्यति यदि OTP न दीयते। किं करोषि?", options: ["OTP दद्यात्", "दूरवाणीं स्थापयेत् – कदापि OTP न दद्यात्", "प्रत्याह्वानं कुर्यात्"], correct: 1 } }
  },

  // ------------------- SANTALI -------------------
  sat: {
    email: { title: "📧 ᱤᱢᱮᱞ ᱥᱩᱨᱠᱷᱤᱛ ᱛᱮ ᱵᱮᱵᱷᱟᱨ ᱢᱮ", tips: ["ᱟᱯᱟᱱ ᱯᱟᱥᱣᱟᱨᱰ ᱪᱮᱫ ᱴᱷᱮᱱ ᱦᱚᱸ ᱵᱟᱭ ᱥᱮᱭᱟᱨ ᱢᱮ।", "ᱟᱣᱟᱱ ᱠᱷᱚᱵᱚᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱚᱴᱟᱪᱢᱮᱱᱴ ᱵᱟᱭ ᱡᱷᱤᱡ ᱢᱮ।", "ᱞᱳᱜᱤᱱ ᱞᱟᱦᱟ 'https' ᱟᱨ ᱢᱤᱫ ᱛᱟᱞᱟ 🔒 ᱧᱮᱞ ᱢᱮ।", "ᱫᱟᱲᱮᱭᱟᱱ ᱯᱟᱥᱣᱟᱨᱰ ᱵᱮᱵᱷᱟᱨ ᱢᱮ।"], quiz: { question: "ᱤᱢᱮᱞ ᱨᱮ ᱯᱟᱥᱣᱟᱨᱰ ᱮ ᱢᱟᱹᱜ ᱠᱟᱱ ᱠᱷᱟᱱ?", options: ["ᱞᱤᱝᱠ ᱨᱮ ᱠᱞᱤᱠ ᱢᱮ", "ᱮᱛᱚᱢ ᱫᱷᱟᱹᱨᱛᱤ ᱟ – ᱵᱮᱝᱠ ᱫᱚ ᱠᱮᱵᱮ ᱤᱢᱮᱞ ᱛᱮ ᱵᱟᱠᱷᱟᱹ ᱠᱷᱚᱡᱟ", "ᱜᱟᱛᱮ ᱢᱤᱫ ᱨᱮ ᱯᱷᱳᱨᱣᱟᱨᱰ ᱢᱮ"], correct: 1 } },
    search: { title: "🔍 ᱥᱢᱟᱨᱴ Google ᱥᱮᱸᱫᱽᱨᱟᱭ", tips: ["ᱱᱤᱨᱫᱤᱥᱴ ᱠᱤᱣᱟᱨᱰ ᱵᱮᱵᱷᱟᱨ ᱢᱮ।", "ᱴᱷᱤᱠ ᱟᱹᱲᱟᱹ ᱞᱟᱹᱜᱤᱫ ᱠᱳᱴᱮᱥᱟᱱ ᱪᱤᱱᱦᱟᱹ ᱵᱮᱵᱷᱟᱨ ᱢᱮ।", "ᱟᱹᱲᱟᱹ ᱵᱟᱦᱨᱮ ᱞᱟᱹᱜᱤᱫ ᱢᱟᱭᱱᱟᱥ ᱪᱤᱱᱦᱟᱹ ᱵᱮᱵᱷᱟᱨ ᱢᱮ।", "ᱞᱮᱠᱷᱟ ᱨᱮᱱᱟᱜ ᱢᱟᱹᱦᱤᱛ ᱧᱮᱞ ᱢᱮ।"], quiz: { question: "'online safety' ᱥᱮᱸᱫᱽᱨᱟ ᱢᱮ ᱢᱮᱱᱠᱷᱟᱱ 'kids' ᱵᱟᱦᱨᱮ ᱢᱮ", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ᱚᱱᱞᱟᱭᱤᱱ ᱫᱷᱳᱠᱟᱹᱨᱤ ᱟᱨ ᱯᱷᱤᱥᱤᱝ ᱪᱤᱱᱦᱟᱹᱭ ᱢᱮ", tips: ["ᱠᱷᱚᱵᱚᱨᱤᱭᱟᱹᱭᱟᱜ ᱤᱢᱮᱞ ᱴᱷᱤᱠᱟᱱᱟ ᱡᱟᱥᱛᱤ ᱠᱟᱛᱮ ᱧᱮᱞ ᱢᱮ।", "ᱠᱞᱤᱠ ᱞᱟᱦᱟ ᱞᱤᱝᱠ ᱪᱮᱛᱟᱱ ᱦᱳᱵᱷᱟᱨ ᱢᱮ।", "ᱫᱷᱳᱠᱟᱹᱨᱤᱭᱟᱹ ᱫᱟᱨᱟᱭ ᱛᱮ ᱛᱟᱭᱚᱢ ᱦᱩᱭᱩᱜ-ᱟ।", "ᱯᱚᱯ-ᱟᱯ ᱨᱮ ᱱᱤᱡᱟᱹᱨᱟᱜ ᱵᱟᱵᱚᱛ ᱵᱟᱭ ᱮᱢ ᱢᱮ।"], quiz: { question: "ᱴᱮᱠᱥᱴ ᱮᱱᱟ ᱡᱮ ᱢᱟᱬᱟᱝ iPhone ᱡᱤᱛᱠᱟᱹᱨ ᱦᱟᱠᱟᱫᱟ। ᱥᱩᱨᱠᱷᱤᱛ ᱠᱟᱹᱢᱤ?", options: ["ᱞᱤᱝᱠ ᱨᱮ ᱠᱞᱤᱠ ᱢᱮ", "ᱮᱛᱚᱢ ᱫᱷᱟᱹᱨᱛᱤ ᱟ ᱟᱨ ᱢᱮᱴᱟᱣ ᱢᱮ", "STOP ᱫᱩᱨᱟᱵᱽ ᱮᱢ ᱢᱮ"], correct: 1 } },
    privacy: { title: "🔒 ᱥᱟᱶᱛᱟᱨᱤ ᱢᱤᱰᱤᱭᱟ ᱯᱨᱟᱭᱵᱷᱮᱴ ᱵᱟᱵᱚᱛ", tips: ["ᱯᱨᱳᱯᱷᱟᱭᱤᱞ 'ᱠᱮᱵᱮ ᱜᱟᱛᱮ' ᱫᱚᱦᱚ ᱢᱮ।", "ᱴᱷᱤᱠᱟᱱᱟ ᱥᱮ ᱯᱷᱳᱱ ᱮᱞ ᱵᱟᱭ ᱯᱳᱥᱴ ᱢᱮ।", "ᱡᱚᱲᱟᱣ ᱮᱯ ᱠᱚ ᱟᱨᱦᱚᱸ ᱧᱮᱞ ᱢᱮ।", "ᱴᱷᱟᱶ ᱴᱮᱜᱤᱝ ᱵᱟᱱᱫᱽ ᱢᱮ।"], quiz: { question: "Facebook ᱨᱮ ᱱᱟᱯᱟᱭ ᱯᱨᱟᱭᱵᱷᱮᱴ ᱨᱤᱛ?", options: ["ᱡᱚᱛᱚ ᱠᱷᱚᱡᱽ ᱠᱚ ᱢᱟᱱᱟᱣ ᱢᱮ", "ᱜᱟᱛᱮ ᱠᱚ ᱯᱟᱥᱣᱟᱨᱰ ᱮᱢ ᱢᱮ", "ᱛᱟᱭᱚᱢ ᱛᱟᱭᱚᱢ ᱯᱨᱟᱭᱵᱷᱮᱴ ᱥᱮᱴᱤᱝ ᱧᱮᱞ ᱢᱮ"], correct: 2 } },
    password: { title: "🔐 ᱫᱟᱲᱮᱭᱟᱱ ᱯᱟᱥᱣᱟᱨᱰ ᱵᱮᱱᱟᱣ ᱢᱮ", tips: ["12+ ᱪᱤᱠᱤ ᱵᱮᱵᱷᱟᱨ ᱢᱮ।", "ᱢᱟᱨᱟᱝ, ᱦᱩᱰᱤᱧ ᱪᱤᱠᱤ, ᱞᱮᱠᱷᱟ, ᱪᱤᱱᱦᱟᱹ ᱥᱟᱶ ᱢᱮᱥᱟ ᱢᱮ।", "'password123' ᱞᱮᱠᱟ ᱥᱟᱫᱷᱟᱨᱚᱱ ᱟᱹᱲᱟᱹ ᱠᱷᱚᱱ ᱵᱟᱲᱩᱭ ᱢᱮ।", "'PurpleTigerShirt!' ᱞᱮᱠᱟ ᱟᱹᱲᱟᱹ ᱥᱟᱵᱟᱣ ᱵᱮᱵᱷᱟᱨ ᱢᱮ।", "ᱯᱟᱥᱣᱟᱨᱰ ᱫᱷᱤᱨᱤ ᱵᱮᱵᱷᱟᱨ ᱵᱟᱭ ᱢᱮ।"], quiz: { question: "ᱡᱚᱛᱚ ᱠᱷᱚᱱ ᱫᱟᱲᱮᱭᱟᱱ ᱯᱟᱥᱣᱟᱨᱰ ᱚᱠᱟᱱᱟ?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 ᱠᱷᱚᱛᱤᱭᱟᱱ ᱠᱷᱚᱵᱚᱨ ᱪᱤᱱᱦᱟᱹᱭ ᱢᱮ", tips: ["ᱡᱚᱱᱚᱲ ᱧᱮᱞ ᱢᱮ।", "ᱟᱨᱦᱚᱸ ᱨᱤᱯᱳᱨᱴ ᱧᱮᱞ ᱢᱮ।", "URL ᱨᱮᱱᱟᱜ ᱢᱩᱪᱟᱹᱫ ᱧᱮᱞ ᱢᱮ।", "ᱦᱟᱹᱠᱤᱜ ᱥᱚᱫᱚᱨ ᱥᱟᱭᱤᱴ (Snopes, Alt News) ᱵᱮᱵᱷᱟᱨ ᱢᱮ।", "ᱵᱷᱤᱛᱤ ᱠᱟᱛᱷᱟ ᱦᱮᱰᱞᱟᱭᱤᱱ ᱠᱷᱚᱱ ᱥᱟᱵᱚᱫᱟᱱ ᱛᱟᱦᱮᱸ ᱢᱮ।"], quiz: { question: "ᱵᱷᱟᱭᱨᱟᱞ ᱫᱟᱣᱟ: 'ᱛᱮᱦᱮᱧ ᱧᱤᱫᱟᱹ ᱪᱟᱸᱫᱚ ᱜᱩᱞᱟᱵᱤ ᱦᱩᱭᱩᱜ-ᱟ'। ᱯᱟᱹᱦᱤᱞ ᱠᱟᱹᱢᱤ?", options: ["ᱛᱩᱨᱩᱭ ᱥᱮᱭᱟᱨ ᱢᱮ", "ᱦᱟᱹᱠᱤᱜ ᱥᱚᱫᱚᱨ ᱢᱮ", "ᱡᱚᱛᱚ ᱠᱷᱚᱵᱚᱨ ᱮᱛᱚᱢ ᱫᱷᱟᱹᱨᱛᱤ ᱟ"], correct: 1 } },
    payments: { title: "💸 ᱥᱩᱨᱠᱷᱤᱛ UPI ᱟᱨ ᱰᱤᱡᱤᱴᱟᱞ ᱯᱮᱢᱮᱱᱴ", tips: ["UPI PIN ᱪᱮᱫ ᱴᱷᱮᱱ ᱦᱚᱸ ᱵᱟᱭ ᱥᱮᱭᱟᱨ ᱢᱮ।", "ᱠᱟᱹᱣᱰᱤ ᱠᱷᱚᱡᱽ ᱞᱟᱦᱟ ᱦᱟᱛᱟᱣᱤᱡ ᱧᱩᱛᱩᱢ ᱧᱮᱞ ᱢᱮ।", "'KYC ᱟᱯᱰᱮᱴ' ᱫᱟᱣᱟ ᱠᱟᱱ SMS ᱞᱤᱝᱠ ᱨᱮ ᱵᱟᱭ ᱠᱞᱤᱠ ᱢᱮ।", "ᱟᱹᱢᱟᱹᱞᱤ ᱮᱯ (Google Pay, PhonePe) ᱵᱮᱵᱷᱟᱨ ᱢᱮ।", "ᱵᱟᱨ-ᱠᱟᱨᱚᱠ ᱯᱨᱚᱢᱟᱬᱤᱠᱚᱨᱚᱱ ᱪᱟᱹᱞᱩ ᱢᱮ।"], quiz: { question: "ᱠᱚᱞ ᱮᱢᱟ OTP ᱵᱟᱭ ᱮᱢ ᱠᱷᱟᱱ UPI ᱵᱞᱚᱠ ᱦᱩᱭᱩᱜ-ᱟ। ᱪᱮᱫ ᱮᱢᱮᱢᱮ?", options: ["OTP ᱮᱢ ᱢᱮ", "ᱯᱷᱚᱱ ᱫᱚᱦᱚ ᱢᱮ – OTP ᱵᱟᱭ ᱮᱢ ᱢᱮ", "ᱨᱩᱣᱟᱹᱲ ᱠᱚᱞ ᱮᱢ ᱢᱮ"], correct: 1 } }
  },

  // ------------------- SINDHI -------------------
  sd: {
    email: { title: "📧 اي ميل محفوظ طريقي سان استعمال ڪريو", tips: ["پنهنجو پاسورڊ ڪنهن سان به شيئر نه ڪريو۔", "اڻڄاتل موڪليندڙن جون اٽيچمينٽ نه کوليو۔", "لاگ ان ٿيڻ کان اڳ 'https' ۽ هڪ تالو 🔒 ڏسو۔", "مضبوط پاسورڊ استعمال ڪريو۔"], quiz: { question: "اي ميل توهان جو پاسورڊ پڇي ته?", options: ["لنڪ تي ڪلڪ ڪريو", "نظر انداز ڪريو – بينڪ ڪڏهن به اي ميل ذريعي نه پڇندي آهي", "دوست کي فارورڊ ڪريو"], correct: 1 } },
    search: { title: "🔍 سمارٽ Google ڳولا", tips: ["مخصوص ڪي ورڊ استعمال ڪريو۔", "صحيح جملي لاءِ اقتباس نشان استعمال ڪريو۔", "لفظ خارج ڪرڻ لاءِ مائنس نشان استعمال ڪريو۔", "مضمون جي تاريخ چيڪ ڪريو۔"], quiz: { question: "'online safety' ڳوليو پر 'kids' خارج ڪريو", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ آن لائين اسڪيم ۽ فشنگ سڃاڻو", tips: ["موڪليندڙ جو اي ميل پتو احتياط سان چيڪ ڪريو۔", "ڪلڪ ڪرڻ کان اڳ لنڪ تي هوور ڪريو۔", "اسڪيمر عجلت پيدا ڪندا آهن۔", "پاپ-اپ ۾ ذاتي معلومات نه ڏيو۔"], quiz: { question: "ٽيڪسٽ اچي ٿو ته توهان مفت iPhone کٽي ورتو۔ محفوظ عمل?", options: ["لنڪ تي ڪلڪ ڪريو", "نظر انداز ڪريو ۽ ڊليٽ ڪريو", "STOP جواب ڏيو"], correct: 1 } },
    privacy: { title: "🔒 سوشل ميڊيا پرائيويسي بنياديات", tips: ["پروفائيل 'صرف دوست' رکو۔", "پتو يا فون نمبر پوسٽ نه ڪريو۔", "ڳنڍيل ائپس جو جائزو وٺو۔", "لوڪيشن ٽيگنگ بند ڪريو۔"], quiz: { question: "Facebook تي سٺي پرائيويسي عادت?", options: ["سڀ درخواستون قبول ڪريو", "دوستن کي پاسورڊ ڏيو", "باقاعدگي سان پرائيويسي سيٽنگون چيڪ ڪريو"], correct: 2 } },
    password: { title: "🔐 مضبوط پاسورڊ ٺاهيو", tips: ["12+ اکر استعمال ڪريو۔", "وڏا, ننڍا اکر, انگ, نشانيون ملايو۔", "'password123' جهڙا عام لفظ پاس نه ڪريو۔", "'PurpleTigerShirt!' جهڙو جملو استعمال ڪريو۔", "پاسورڊ ٻيهر استعمال نه ڪريو۔"], quiz: { question: "سڀ کان مضبوط پاسورڊ ڪهڙو آهي?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 جعلي خبر سڃاڻو", tips: ["ذريعو چيڪ ڪريو۔", "ٻيون رپورٽون ڏسو۔", "URL جو پڇاڙي چيڪ ڪريو۔", "حقيقت-جاچ سائيٽون (Snopes, Alt News) استعمال ڪريو۔", "چونڪائيندڙ هيڊلائين کان محتاط رهو۔"], quiz: { question: "وائرل دعويٰ: 'اڄ رات چنڊ گلابي ٿيندو'. پهريون قدم?", options: ["فوري شيئر ڪريو", "حقيقت جاچ ڪريو", "سڀ خبرون نظر انداز ڪريو"], correct: 1 } },
    payments: { title: "💸 محفوظ UPI ۽ ڊجيٽل ادائگي", tips: ["UPI PIN ڪنهن سان به شيئر نه ڪريو۔", "موڪلڻ کان اڳ وصول ڪندڙ جو نالو چيڪ ڪريو۔", "'KYC اپڊيٽ' جي دعويٰ ڪندڙ SMS لنڪ تي ڪلڪ نه ڪريو۔", "سرڪاري ائپس (Google Pay, PhonePe) استعمال ڪريو۔", "ٻه-عنصر تصديق فعال ڪريو۔"], quiz: { question: "ڪال چوي ٿي UPI بلاڪ ٿيندو جيڪڏهن OTP نه ڏيو. ڇا ڪندؤ?", options: ["OTP ڏيو", "فون رکو – ڪڏهن به OTP نه ڏيو", "واپس ڪال ڪريو"], correct: 1 } }
  },

  // ------------------- TAMIL -------------------
  ta: {
    email: { title: "📧 மின்னஞ்சலைப் பாதுகாப்பாகப் பயன்படுத்துவது எப்படி", tips: ["உங்கள் கடவுச்சொல்லை யாருடனும் பகிர்ந்து கொள்ள வேண்டாம்.", "அறியப்படாத அனுப்புநர்களின் இணைப்புகளைத் திறக்க வேண்டாம்.", "உள்நுழைவதற்கு முன் 'https' மற்றும் பூட்டு 🔒 ஐப் பாருங்கள்.", "வலுவான கடவுச்சொல்லைப் பயன்படுத்துங்கள்."], quiz: { question: "உங்கள் வங்கியிலிருந்து கடவுச்சொல் கேட்கும் மின்னஞ்சல் வந்தால் என்ன செய்வீர்கள்?", options: ["இணைப்பைக் கிளிக் செய்து கடவுச்சொல்லை உள்ளிடுங்கள்", "புறக்கணியுங்கள் – வங்கிகள் மின்னஞ்சல் வழியாக கடவுச்சொல்லைக் கேட்பதில்லை", "நண்பருக்கு அனுப்புங்கள்"], correct: 1 } },
    search: { title: "🔍 கூகுளில் திறம்பட தேடுவது எப்படி", tips: ["குறிப்பிட்ட சொற்களைப் பயன்படுத்துங்கள்.", "சரியான சொற்றொடரை மேற்கோள் குறிகளுக்குள் வைக்கவும்.", "சொற்களை விலக்க கழித்தல் குறியைப் பயன்படுத்தவும்.", "கட்டுரையின் தேதியைச் சரிபார்க்கவும்."], quiz: { question: "'online safety' பக்கங்களைத் தேடுகிறீர்கள், ஆனால் 'kids' வேண்டாம். எதைத் தட்டச்சு செய்வீர்கள்?", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ஆன்லைன் மோசடி மற்றும் ஃபிஷிங்கை எவ்வாறு அடையாளம் காண்பது", tips: ["அனுப்புநரின் மின்னஞ்சல் முகவரியை கவனமாகப் பார்க்கவும்.", "இணைப்புகளைக் கிளிக் செய்வதற்கு முன் அதன் மேல் சுட்டியை வைக்கவும்.", "மோசடியாளர்கள் அவசரத்தை உருவாக்குகிறார்கள்.", "பாப்-அப் அல்லது எதிர்பாராத அழைப்புகள் மூலம் தனிப்பட்ட தகவல்களை ஒருபோதும் கொடுக்க வேண்டாம்."], quiz: { question: "நீங்கள் ஒரு இலவச ஐபோனை வென்றதாக உரை வருகிறது. பாதுகாப்பான செயல் எது?", options: ["இணைப்பைக் கிளிக் செய்க", "புறக்கணித்து நீக்குக", "STOP என்று பதில் அனுப்புக"], correct: 1 } },
    privacy: { title: "🔒 சமூக ஊடக தனியுரிமை அடிப்படைகள்", tips: ["உங்கள் சுயவிவரத்தை 'நண்பர்கள் மட்டும்' அல்லது 'தனிப்பட்டது' என அமைக்கவும்.", "உங்கள் வீட்டு முகவரி, தொலைபேசி எண் அல்லது பயணத் திட்டங்களை இடுகையிட வேண்டாம்.", "உங்கள் கணக்கை எந்தெந்த ஆப்கள் அணுகுகின்றன என்பதை மதிப்பாய்வு செய்யவும்.", "இடுகைகளுக்கான இருப்பிடக் குறியீட்டை முடக்கவும்."], quiz: { question: "Facebook/Instagram இல் நல்ல தனியுரிமை பழக்கம் எது?", options: ["அனைத்து நண்பர் கோரிக்கைகளையும் ஏற்கவும்", "உங்கள் கடவுச்சொல்லை நெருங்கிய நண்பர்களுடன் பகிரவும்", "ஒவ்வொரு சில மாதங்களுக்கும் தனியுரிமை அமைப்புகளைச் சரிபார்க்கவும்"], correct: 2 } },
    password: { title: "🔐 வலுவான கடவுச்சொல்லை உருவாக்குவது எப்படி", tips: ["குறைந்தது 12 எழுத்துகளைப் பயன்படுத்துங்கள்.", "பெரிய எழுத்து, சிறிய எழுத்து, எண்கள் மற்றும் குறியீடுகளை (எ.கா @, #, $) கலக்கவும்.", "பொதுவான சொற்கள், உங்கள் பெயர் அல்லது 'password123' போன்றவற்றைத் தவிர்க்கவும்.", "ஒரு சொற்றொடரைப் பயன்படுத்தவும்: 'PurpleTigerShirt!' போன்ற 3–4 சீரற்ற சொற்கள்.", "வெவ்வேறு தளங்களில் ஒரே கடவுச்சொல்லை மீண்டும் பயன்படுத்த வேண்டாம்."], quiz: { question: "இவற்றுள் எது வலுவான கடவுச்சொல்?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 போலிச் செய்திகளை எவ்வாறு அடையாளம் காண்பது", tips: ["மூலத்தைச் சரிபார்க்கவும்.", "அதே செய்தியைப் புகாரளிக்கும் பிற செய்தி தளங்களைத் தேடுங்கள்.", "URL ஐ ஆய்வு செய்யவும் (எ.கா .co.com போன்ற வித்தியாசமான முடிவுகள்).", "Snopes அல்லது Alt News போன்ற உண்மை சரிபார்ப்பு தளங்களைப் பயன்படுத்தவும்.", "அதிர்ச்சியூட்டும் தலைப்புகளில் கவனமாக இருங்கள் – அவை பெரும்பாலும் மிகைப்படுத்துகின்றன."], quiz: { question: " 'இன்றிரவு சந்திரன் இளஞ்சிவப்பு நிறமாக மாறும்' என்ற வைரல் பதிவைக் காண்கிறீர்கள். முதலில் என்ன செய்ய வேண்டும்?", options: ["உடனே பகிரவும்", "உண்மை சரிபார்ப்பு தளத்தில் தேடவும்", "எல்லா செய்திகளையும் நிரந்தரமாகப் புறக்கணிக்கவும்"], correct: 1 } },
    payments: { title: "💸 பாதுகாப்பான யுபிஐ மற்றும் டிஜிட்டல் பணப்பரிவர்த்தனை", tips: ["உங்கள் யுபிஐ பின்னை யாருடனும் பகிர வேண்டாம் – வாடிக்கையாளர் உதவியுடன் கூட வேண்டாம்.", "பணம் அனுப்பும் முன் எப்போதும் பெறுநரின் பெயரைச் சரிபார்க்கவும்.", "'KYC புதுப்பிப்பு' அல்லது 'பணத்தைத் திரும்பப் பெறுதல்' என்று கூறும் எஸ்எம்எஸ் இணைப்புகளைக் கிளிக் செய்ய வேண்டாம்.", "Google Pay, PhonePe அல்லது Paytm போன்ற அதிகாரப்பூர்வ பயன்பாடுகளைப் பயன்படுத்தவும்.", "உங்கள் வங்கிக் கணக்கில் இரண்டு-காரணி அங்கீகாரத்தை இயக்கவும்."], quiz: { question: "உங்கள் யுபிஐ பிளாக் செய்யப்படும் என்று ஒரு அழைப்பு வந்து, ஒடிபியைப் பகிரும்படி கேட்கிறது. நீங்கள் என்ன செய்வீர்கள்?", options: ["உடனே ஒடிபியைப் பகிரவும்", "அழைப்பைத் துண்டிக்கவும் – ஒருபோதும் ஒடிபியைப் பகிர வேண்டாம்", "அந்த எண்ணுக்குத் திரும்ப அழைக்கவும்"], correct: 1 } }
  },

  // ------------------- TELUGU -------------------
  te: {
    email: { title: "📧 ఇమెయిల్ ను సురక్షితంగా ఉపయోగించండి", tips: ["మీ పాస్వర్డ్ ను ఎవరితోనూ పంచుకోకండి.", "తెలియని పంపినవారి అటాచ్మెంట్లను తెరవకండి.", "లాగిన్ అవ్వడానికి ముందు 'https' మరియు తాళం 🔒 చూడండి.", "బలమైన పాస్వర్డ్ ఉపయోగించండి."], quiz: { question: "ఇమెయిల్ మీ పాస్వర్డ్ అడిగితే?", options: ["లింక్ పై క్లిక్ చేయండి", "పట్టించుకోకండి – బ్యాంకు ఎప్పుడూ ఇమెయిల్ ద్వారా అడగదు", "స్నేహితుడికి ఫార్వర్డ్ చేయండి"], correct: 1 } },
    search: { title: "🔍 స్మార్ట్ Google శోధన", tips: ["నిర్దిష్ట కీవర్డ్లను ఉపయోగించండి.", "ఖచ్చితమైన పదబంధం కోసం కోట్స్ ఉపయోగించండి.", "పదాలను మినహాయించడానికి మైనస్ గుర్తు ఉపయోగించండి.", "వ్యాసం తేదీని తనిఖీ చేయండి."], quiz: { question: "'online safety' కనుగొనండి కానీ 'kids' మినహాయించండి", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ ఆన్లైన్ మోసాలు మరియు ఫిషింగ్ గుర్తించండి", tips: ["పంపినవారి ఇమెయిల్ చిరునామాను జాగ్రత్తగా తనిఖీ చేయండి.", "క్లిక్ చేయడానికి ముందు లింక్ పై హోవర్ చేయండి.", "మోసగాళ్లు అత్యవసర పరిస్థితిని సృష్టిస్తారు.", "పాప్-అప్లలో వ్యక్తిగత సమాచారం ఇవ్వకండి."], quiz: { question: "ఉచిత iPhone గెలుచుకున్నారనే టెక్స్ట్ వస్తే? సురక్షితమైన చర్య?", options: ["లింక్ పై క్లిక్ చేయండి", "పట్టించుకోకుండా తొలగించండి", "STOP సమాధానం ఇవ్వండి"], correct: 1 } },
    privacy: { title: "🔒 సోషల్ మీడియా గోప్యత ప్రాథమికాలు", tips: ["ప్రొఫైల్ 'స్నేహితులు మాత్రమే' గా సెట్ చేయండి.", "చిరునామా లేదా ఫోన్ నంబర్ పోస్ట్ చేయకండి.", "కనెక్ట్ చేయబడిన యాప్లను సమీక్షించండి.", "లొకేషన్ ట్యాగింగ్ ఆఫ్ చేయండి."], quiz: { question: "Facebook లో మంచి గోప్యత అలవాటు?", options: ["అన్ని అభ్యర్థనలను అంగీకరించండి", "స్నేహితులకు పాస్వర్డ్ ఇవ్వండి", "క్రమం తప్పకుండా గోప్యతా సెట్టింగ్లను తనిఖీ చేయండి"], correct: 2 } },
    password: { title: "🔐 బలమైన పాస్వర్డ్ సృష్టించండి", tips: ["12+ అక్షరాలు ఉపయోగించండి.", "పెద్ద, చిన్న అక్షరాలు, సంఖ్యలు, చిహ్నాలు కలపండి.", "'password123' వంటి సాధారణ పదాలను నివారించండి.", "'PurpleTigerShirt!' వంటి పదబంధాన్ని ఉపయోగించండి.", "పాస్వర్డ్ ను మళ్లీ ఉపయోగించవద్దు."], quiz: { question: "ఏది బలమైన పాస్వర్డ్?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 నకిలీ వార్తలను గుర్తించండి", tips: ["మూలాన్ని తనిఖీ చేయండి.", "ఇతర నివేదికలను చూడండి.", "URL ముగింపును పరిశీలించండి.", "వాస్తవ-తనిఖీ సైట్లను (Snopes, Alt News) ఉపయోగించండి.", "సంచలనాత్మక హెడ్లైన్ల పట్ల జాగ్రత్తగా ఉండండి."], quiz: { question: "వైరల్ దావా: 'ఈ రాత్రి చంద్రుడు గులాబీ రంగులోకి మారుతుంది'. మొదటి అడుగు?", options: ["వెంటనే షేర్ చేయండి", "వాస్తవాన్ని తనిఖీ చేయండి", "అన్ని వార్తలను పట్టించుకోకండి"], correct: 1 } },
    payments: { title: "💸 సురక్షితమైన UPI మరియు డిజిటల్ చెల్లింపులు", tips: ["UPI PIN ఎవరితోనూ పంచుకోకండి.", "పంపడానికి ముందు గ్రహీత పేరును తనిఖీ చేయండి.", "'KYC అప్డేట్' అని చెప్పే SMS లింక్ పై క్లిక్ చేయకండి.", "అధికారిక యాప్లను (Google Pay, PhonePe) ఉపయోగించండి.", "రెండు-కారకాల ప్రామాణీకరణను ప్రారంభించండి."], quiz: { question: "OTP షేర్ చేయకపోతే UPI బ్లాక్ అవుతుందని కాల్ చెప్పింది. ఏమి చేస్తారు?", options: ["OTP ఇవ్వండి", "ఫోన్ పెట్టండి – ఎప్పటికీ OTP ఇవ్వకండి", "తిరిగి కాల్ చేయండి"], correct: 1 } }
  },

  // ------------------- URDU -------------------
  ur: {
    email: { title: "📧 ای میل محفوظ طریقے سے استعمال کریں", tips: ["اپنا پاس ورڈ کسی کے ساتھ شیئر نہ کریں۔", "نامعلوم بھیجنے والوں کی اٹیچمنٹ نہ کھولیں۔", "لاگ ان کرنے سے پہلے 'https' اور ایک تالا 🔒 دیکھیں۔", "مضبوط پاس ورڈ استعمال کریں۔"], quiz: { question: "ای میل آپ کا پاس ورڈ مانگے تو?", options: ["لنک پر کلک کریں", "نظر انداز کریں – بینک کبھی ای میل سے نہیں مانگتا", "دوست کو فارورڈ کریں"], correct: 1 } },
    search: { title: "🔍 سمارٹ Google تلاش", tips: ["مخصوص کلیدی الفاظ استعمال کریں۔", "صحیح جملے کے لیے کوٹیشن مارکس استعمال کریں۔", "الفاظ خارج کرنے کے لیے مائنس سائن استعمال کریں۔", "مضمون کی تاریخ چیک کریں۔"], quiz: { question: "'online safety' تلاش کریں لیکن 'kids' خارج کریں", options: ["online safety kids", "online safety -kids", '"online safety" kids'], correct: 1 } },
    scam: { title: "⚠️ آن لائن اسکام اور فشنگ کی پہچان", tips: ["بھیجنے والے کا ای میل پتہ غور سے دیکھیں۔", "کلک کرنے سے پہلے لنک پر ہوور کریں۔", "اسکامرز عجلت پیدا کرتے ہیں۔", "پاپ اپ میں ذاتی معلومات نہ دیں۔"], quiz: { question: "ٹیکسٹ آیا کہ آپ نے مفت iPhone جیت لیا۔ محفوظ عمل?", options: ["لنک پر کلک کریں", "نظر انداز کر کے ڈیلیٹ کریں", "STOP جواب دیں"], correct: 1 } },
    privacy: { title: "🔒 سوشل میڈیا پرائیویسی کی بنیادی باتیں", tips: ["پروفائل 'صرف دوست' رکھیں۔", "پتہ یا فون نمبر پوسٹ نہ کریں۔", "منسلک ایپس کا جائزہ لیں۔", "لوکیشن ٹیگنگ بند کریں۔"], quiz: { question: "Facebook پر اچھی پرائیویسی عادت?", options: ["تمام درخواستیں قبول کریں", "دوستوں کو پاس ورڈ دیں", "باقاعدگی سے پرائیویسی سیٹنگز چیک کریں"], correct: 2 } },
    password: { title: "🔐 مضبوط پاس ورڈ بنائیں", tips: ["12+ حروف استعمال کریں۔", "بڑے، چھوٹے حروف، اعداد، علامات مکس کریں۔", "'password123' جیسے عام الفاظ سے بچیں۔", "'PurpleTigerShirt!' جیسا جملہ استعمال کریں۔", "پاس ورڈ دوبارہ استعمال نہ کریں۔"], quiz: { question: "سب سے مضبوط پاس ورڈ کون سا ہے?", options: ["password123", "MyBirthday1990", "C0rrect-Horse-Battery-Staple!", "admin"], correct: 2 } },
    fakenews: { title: "📰 جعلی خبروں کی پہچان", tips: ["ماخذ چیک کریں۔", "دیگر رپورٹیں دیکھیں۔", "URL کا اختتام چیک کریں۔", "حقائق جانچنے والی سائٹس (Snopes, Alt News) استعمال کریں۔", "چونکا دینے والی ہیڈلائنز سے محتاط رہیں۔"], quiz: { question: "وائرل دعویٰ: 'آج رات چاند گلابی ہو جائے گا'۔ پہلا قدم?", options: ["فوری شیئر کریں", "حقائق جانیں", "تمام خبروں کو نظر انداز کریں"], correct: 1 } },
    payments: { title: "💸 محفوظ UPI اور ڈیجیٹل ادائیگیاں", tips: ["UPI PIN کسی کے ساتھ شیئر نہ کریں۔", "بھیجنے سے پہلے وصول کنندہ کا نام چیک کریں۔", "'KYC اپڈیٹ' کا دعویٰ کرنے والے SMS لنک پر کلک نہ کریں۔", "سرکاری ایپس (Google Pay, PhonePe) استعمال کریں۔", "دو عنصری تصدیق کو فعال کریں۔"], quiz: { question: "کال کہتی ہے OTP نہ دینے پر UPI بلاک ہو جائے گا۔ کیا کریں گے?", options: ["OTP دیں", "فون رکھ دیں – کبھی OTP نہ دیں", "واپس کال کریں"], correct: 1 } }
  }
};

// ==================== TEXT-TO-SPEECH LANGUAGE MAPPING ====================
const ttsLangMap = {
  en: "en-IN", as: "as-IN", bn: "bn-IN", brx: "bn-IN", doi: "hi-IN",
  gu: "gu-IN", hi: "hi-IN", kn: "kn-IN", ks: "ks-Arab-IN", kok: "kok-IN",
  mai: "hi-IN", ml: "ml-IN", mni: "bn-IN", mr: "mr-IN", ne: "ne-IN",
  or: "or-IN", pa: "pa-IN", sa: "sa-IN", sat: "bn-IN", sd: "sd-IN",
  ta: "ta-IN", te: "te-IN", ur: "ur-IN"
};

// ==================== GLOBAL VARIABLES ====================
let currentLang = "en";
let currentTopic = null;
let viewedTopics = new Set();

// ==================== UI FUNCTIONS ====================
function showTopic(topicId) {
  currentTopic = topicId;
  const data = content[currentLang][topicId];
  if (!data) return;

  const main = document.getElementById("content");
  main.innerHTML = `
    <div class="card">
      <h2>${data.title}</h2>
      <ul>
        ${data.tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
      <div class="quiz-question">
        <p><strong>📝 Quick Quiz</strong><br>${data.quiz.question}</p>
        ${data.quiz.options.map((opt, idx) => `<button class="quiz-opt" data-opt="${idx}">${opt}</button>`).join('')}
        <p id="quiz-feedback-${topicId}" style="margin-top:8px; font-style:italic;"></p>
      </div>
    </div>
  `;

  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = parseInt(e.target.dataset.opt);
      const correct = content[currentLang][topicId].quiz.correct;
      const feedback = document.getElementById(`quiz-feedback-${topicId}`);
      if (selected === correct) {
        feedback.innerHTML = "✅ Correct!";
        feedback.style.color = "green";
      } else {
        feedback.innerHTML = "❌ Not quite. Read the tips again.";
        feedback.style.color = "red";
      }
    });
  });

  if (!viewedTopics.has(topicId)) {
    viewedTopics.add(topicId);
    updateProgress();
    document.querySelectorAll('.topic-btn').forEach(btn => {
      if (btn.dataset.topic === topicId) btn.classList.add('completed');
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  if (currentTopic && content[currentLang][currentTopic]) {
    showTopic(currentTopic);
  } else {
    const main = document.getElementById("content");
    main.innerHTML = `<div class="card"><h2>Welcome to DigiSikho! 👋</h2><p>Select a topic above to start learning.</p></div>`;
    currentTopic = null;
  }
}

function updateProgress() {
  const totalTopics = Object.keys(content.en).length;
  const progress = (viewedTopics.size / totalTopics) * 100;
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = `${progress}%`;
}

// ==================== READ ALOUD FUNCTION (WORKS FOR ALL LANGUAGES) ====================
function readAloud() {
  if (!currentTopic || !content[currentLang] || !content[currentLang][currentTopic]) {
    alert("Please select a topic first.");
    return;
  }

  const data = content[currentLang][currentTopic];
  let textToRead = `${data.title}. ${data.tips.join(". ")}`;
  
  let langCode = ttsLangMap[currentLang] || "en-IN";
  
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = langCode;
  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  utterance.onerror = (event) => {
    console.warn(`TTS error for language ${langCode}:`, event);
    if (langCode !== "en-IN") {
      console.log("Falling back to English voice");
      const fallback = new SpeechSynthesisUtterance(textToRead);
      fallback.lang = "en-IN";
      window.speechSynthesis.speak(fallback);
    }
  };

  window.speechSynthesis.speak(utterance);
}

// ==================== EVENT LISTENERS & INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  // Language selector (dropdown)
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  // Topic buttons
  document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const topic = e.currentTarget.dataset.topic;
      showTopic(topic);
    });
  });

  // Text-to-speech button
  const ttsBtn = document.getElementById("tts-btn");
  if (ttsBtn) ttsBtn.addEventListener("click", readAloud);

  // Dark mode toggle
  const darkToggle = document.getElementById("darkmode-toggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
    if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
  }

  // High contrast toggle
  const contrastBtn = document.getElementById("contrast-btn");
  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
    });
  }

  // Back to top button
  const backBtn = document.getElementById("back-to-top");
  if (backBtn) {
    window.addEventListener("scroll", () => {
      backBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  updateProgress();
  setLanguage("en");
});