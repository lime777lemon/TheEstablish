(function () {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.webProgramming": "Web programming",
      "nav.about": "About",
      "nav.clientServices": "Client services",
      "nav.contact": "Contact",
      "nav.company": "Company",
      "hero.eyebrow": "Screens, sets, and the details that keep you moving",
      "hero.title": "Establish Your Future For All Developers",
      "hero.production": "The Establish LLC (Godo Gaisya)",
      "hero.cta": "Contact us",
      "hero.secondaryCta": "View services",
      "home.quickEyebrow": "Explore",
      "home.quickAria": "Quick links",
      "home.quick1.k": "Web",
      "home.quick1.t": "Design & programming",
      "home.quick1.d": "Marketing sites, corporate pages, UI builds.",
      "home.quick2.k": "Support",
      "home.quick2.t": "Corporate & individual clients",
      "home.quick2.d": "Scheduling, correspondence, local coordination.",
      "home.quick3.k": "Studio",
      "home.quick3.t": "About The Establish",
      "home.quick3.d": "How we work and how the pieces connect.",
      "home.servicesEyebrow": "Services",
      "home.servicesTitle": "Where we can plug in",
      "home.servicesLead":
        "Three ways we usually show up — each can stand alone or run alongside the others.",
      "welcome.body":
        "Based in Japan, we work in English and Japanese — useful when your production, site launch, and admin tasks share the same week.",
      "welcome.aboutCta": "About the studio",
      "faq.heading": "FAQ",
      "heroFollow.kicker": "Studio focus",
      "heroFollow.heading": "Precision across web, lens, and logistics",
      "heroFollow.tagline":
        "Whether you need a site that performs, a shoot that runs smoothly, or hands-on support for business in Japan — we keep every piece aligned as one story.",
      "heroFollow.chip1": "Web craft",
      "heroFollow.chip2": "On-camera presence",
      "heroFollow.chip3": "Business support",
      "card.web.title": "Web design & web programming",
      "card.web.desc":
        "From layout and visuals to front-end code — we handle web design and web programming as one flow.",
      "card.tour.title": "Client services",
      "card.tour.desc":
        "Services for corporations and individuals, including overseas businesses, related to our other lines of business — phone and email support, vehicle arrangements, and more.",
      "card.model.title": "Modeling (Beauty & Fashion)",
      "card.model.desc":
        "We provide modeling and related coordination for beauty, skincare, and fashion projects.",
      "common.details": "Details",
      "welcome.headline": "Serious about the work behind the work.",
      "welcome.tagline":
        "Web and code, creative shoots, and the unglamorous logistics — handled as one seamless studio practice.",
      "faq.q1": "What is The Establish LLC?",
      "faq.a1":
        "<p>The Establish LLC is a Japanese Godo Gaisya (limited liability company) offering web and digital services, support for corporations and individuals (including overseas clients) related to our business purposes, and modeling for beauty and fashion.</p>",
      "faq.q2": "What is the contract type for client services?",
      "faq.a2":
        "<p>These service engagements are arranged per project or retainer. Please contact us by phone or email with your dates, scope, and goals so we can propose the right arrangement.</p>",
      "faq.q3": "What is the contract arrangement for web design and programming work?",
      "faq.a3":
        "<p>Design and programming are usually scoped as fixed deliverables (e.g. a defined site or feature set) or ongoing support. Share your timeline, stack preferences if any, and requirements so we can propose a clear quote.</p>",
      "contact.heading": "Contact",
      "contact.lead":
        "For collaborations, bookings, or questions about services, please reach out.",
      "contact.formName": "Name",
      "contact.formEmail": "Email",
      "contact.formMessage": "Message",
      "contact.formSubmit": "Send",
      "contact.formSending": "Sending…",
      "contact.formError":
        "We could not send your message. Please try again or email info@theestablish.jp directly.",
      "contact.formNotConfigured":
        "The contact form is not connected yet. Please email info@theestablish.jp.",
      "contact.formSent":
        "Thank you — your message was sent. We will reply by email as soon as we can.",
      "contact.backHome": "Back to home",
      "footer.linkedinLabel": "LinkedIn",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
      "footer.brand": "The Establish合同会社",
      "footer.company": "Company",
      "footer.tokushoho": "Legal notice (commerce)",
      "wp.eyebrow": "Solid structure, expressive interfaces",
      "wp.heroTitle": "WEB PROGRAMMING<br />/ WEB DESIGN",
      "wp.lead":
        "From structure and layout to interactive interfaces — we build fast, accessible websites that match your brand.",
      "wp.servicesHeading": "What we offer",
      "wp.s1.title": "Landing & marketing sites",
      "wp.s1.desc":
        "Clear storytelling, responsive layout, and performance-focused delivery.",
      "wp.s2.title": "Corporate & portfolio sites",
      "wp.s2.desc":
        "Multi-page structures, consistent components, and easy-to-update patterns.",
      "wp.s3.title": "UI implementation",
      "wp.s3.desc":
        "Turning Figma or design specs into semantic HTML, CSS, and JavaScript.",
      "wp.s4.title": "Maintenance & updates",
      "wp.s4.desc":
        "Content tweaks, bug fixes, and small feature additions after launch.",
      "wp.stackHeading": "Stack & tools",
      "wp.stackIntro": "Typical tooling depends on your project; examples include:",
      "wp.processHeading": "How we work",
      "wp.p1.title": "Discovery",
      "wp.p1.desc":
        "Goals, audience, content, and constraints — aligned before design or code.",
      "wp.p2.title": "Design & structure",
      "wp.p2.desc":
        "Wireframes or design handoff, information architecture, and component planning.",
      "wp.p3.title": "Build",
      "wp.p3.desc": "Accessible markup, responsive CSS, and tested interactions.",
      "wp.p4.title": "Launch & handoff",
      "wp.p4.desc":
        "Deployment support, basic documentation, and optional ongoing care.",
      "wp.cta": "Start a project",
      "wp.backHome": "Back to home",
      "cs.eyebrow": "Corporations & individuals in Japan",
      "cs.heroTitle": "CLIENT<br />SERVICES",
      "cs.lead":
        "Practical support connected to our other work — for overseas operators, domestic companies, and individuals who need a reliable point of contact on the ground.",
      "cs.servicesHeading": "What we can help with",
      "cs.s1.title": "Correspondence & scheduling",
      "cs.s1.desc":
        "Phone and email handling, appointment alignment, and day-to-day coordination with third parties when included in scope.",
      "cs.s2.title": "On-the-ground coordination",
      "cs.s2.desc":
        "Local arrangements alongside shoots, events, or business visits — timelines, handoffs, and follow-through.",
      "cs.s3.title": "Transport & logistics support",
      "cs.s3.desc":
        "Vehicle arrangements and similar logistics where they fit the engagement — always confirmed in writing.",
      "cs.s4.title": "Project or retainer",
      "cs.s4.desc":
        "One-off assignments or ongoing light support. We propose structure, fees, and timing after understanding your dates and goals.",
      "cs.audienceHeading": "Who we usually work with",
      "cs.audienceIntro": "Examples — not an exhaustive list:",
      "cs.tag1": "Overseas businesses",
      "cs.tag2": "Domestic companies",
      "cs.tag3": "Individuals & sole operators",
      "cs.tag4": "Production & creative teams",
      "cs.processHeading": "How we start",
      "cs.pr1.title": "Inquiry",
      "cs.pr1.desc":
        "Share dates, locations, languages needed, and what a successful outcome looks like — even at a high level.",
      "cs.pr2.title": "Scope & quote",
      "cs.pr2.desc":
        "We confirm inclusions, fees, and timing. The written quote or contract governs the engagement, not this page alone.",
      "cs.pr3.title": "Execution",
      "cs.pr3.desc": "We perform the agreed tasks and flag material changes or dependencies as they arise.",
      "cs.pr4.title": "Close or continue",
      "cs.pr4.desc": "Wrap-up for one-off work, or renew / extend when you need ongoing coverage.",
      "cs.cta": "Request support",
      "cs.backHome": "Back to home",
      "ab.eyebrow": "Studio practice in Japan",
      "ab.heroTitle": "ABOUT<br />THE ESTABLISH",
      "ab.lead":
        "Web craft, on-camera work, and practical client support — held in one conversation so your schedule does not split across disconnected vendors.",
      "ab.storyHeading": "How we work",
      "ab.story":
        "<p>The Establish is a Japanese Godo Gaisya (LLC) operating as a compact studio. We care as much about clear scope, permissions, and follow-through as we do about craft — whether that craft is code, lighting on set, or a string of confirmations on a busy day.</p><p>The same clients often touch web production, creative shoots, and operational support within the same month. Rather than handing you off between unrelated parties, we keep those threads where they can stay coherent.</p><p>Registration details, the representative name, and formal disclosures are listed on our <a href=\"company.html\">Company</a> page.</p>",
      "ab.linesHeading": "What we hold together",
      "ab.l1.title": "Web & digital",
      "ab.l1.desc":
        "Design and front-end implementation with disciplined structure — sites and interfaces that remain understandable after launch.",
      "ab.l2.title": "Beauty & fashion modeling",
      "ab.l2.desc":
        "On-camera presence and related coordination for skincare, beauty, and fashion productions.",
      "ab.l3.title": "Client services",
      "ab.l3.desc":
        "Correspondence, scheduling, and logistics-style support for corporations and individuals — especially when it aligns with our other lines of work.",
      "ab.x1": "Web programming",
      "ab.x2": "Client services",
      "ab.x3": "Modeling",
      "ab.ctaHeading": "Work with us",
      "ab.ctaLead":
        "Tell us what you are building, shooting, or coordinating — we will suggest the right entry point, scope, and written terms.",
      "ab.cta": "Contact us",
      "ab.backHome": "Back to home",
      "terms.h1": "Terms of Service",
      "terms.updatedPrefix": "Last updated:",
      "terms.updatedDate": "March 26, 2026",
      "terms.s1.h": "1. Agreement to these terms",
      "terms.s1.p":
        "<p>These Terms of Service (“Terms”) govern access to and use of the website at <a href=\"https://theestablish.jp/\">theestablish.jp</a> (the “Site”) operated by The Establish合同会社 (“we,” “us,” “our”), a company organized under the laws of Japan. The Site provides information about our business and ways to contact us.</p><p>By using the Site, you agree to these Terms and to our <a href=\"privacy.html\">Privacy Policy</a>, which describes how we process personal data. If you do not agree, please discontinue use.</p>",
      "terms.s2.h": "2. Services and separate agreements",
      "terms.s2.p":
        "<p>Descriptions of services on the Site (including web design and development, coordination and client support, and related creative work) are for general information. They do not constitute an offer or binding commitment until confirmed in writing.</p><p>If you engage us for paid work, the scope, fees, deliverables, intellectual property, confidentiality, limitation of liability, and termination for that engagement are governed by the separate proposal, statement of work, quotation, or contract you enter into with us, which prevails over these Terms to the extent of any conflict.</p>",
      "terms.s3.h": "3. Acceptable use",
      "terms.s3.p":
        "<p>You agree to use the Site only for lawful purposes and in a manner that does not infringe third-party rights or interfere with others’ use. You must not attempt unauthorized access to our systems or data, overload or disrupt the Site, scrape or harvest content in a way that harms performance or our rights, or introduce malware or harmful code.</p><p>You are responsible for the accuracy of information you submit through contact forms or email.</p>",
      "terms.s4.h": "4. Intellectual property",
      "terms.s4.p":
        "<p>Unless otherwise indicated, text, images, logos, design, and other content on the Site are owned by us or our licensors and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, publicly display, or create derivative works without our prior written consent, except for private, non-commercial browsing or as permitted by mandatory law.</p>",
      "terms.s5.h": "5. Disclaimers and limitation of liability",
      "terms.s5.p":
        "<p>The Site and its content are provided on an “as is” and “as available” basis. To the extent permitted by applicable law, we disclaim all warranties, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p><p>To the extent permitted by applicable law, we are not liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from your use of or inability to use the Site.</p><p>For claims relating solely to free use of the Site (and not to paid services governed by a separate contract), our total aggregate liability shall not exceed 10,000 Japanese yen, unless mandatory law (including consumer protection rules in Japan or your jurisdiction) requires otherwise. Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law.</p>",
      "terms.s6.h": "6. Changes to these Terms",
      "terms.s6.p":
        "<p>We may modify these Terms. When we do, we will update the “Last updated” date above. If changes are material, we will use reasonable means to bring them to your attention where practicable (for example, a notice on the Site). Your continued use of the Site after the effective date of revised Terms constitutes acceptance, except where applicable law requires your separate consent.</p>",
      "terms.s7.h": "7. Contact",
      "terms.s7.p":
        "<p>Questions about these Terms: <a href=\"contact.html\">Contact</a> or <a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a>. For personal data practices, see our <a href=\"privacy.html\">Privacy Policy</a>.</p>",
      "terms.s8.h": "8. Governing law and jurisdiction",
      "terms.s8.p":
        "<p>These Terms are governed by the laws of Japan, without regard to conflict-of-law principles that would require application of another jurisdiction’s laws.</p><p>Subject to mandatory provisions of law, any dispute arising out of or relating to the Site or these Terms shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.</p>",
      "terms.s9.h": "9. Deliverables and intellectual property (client engagements)",
      "terms.s9.p":
        "<p>Ownership, license scope, portfolio use, and other treatment of intellectual property rights in deliverables from paid engagements (including websites, designs, software, copy, and other creative output) are governed exclusively by the quotation, statement of work, or contract agreed in writing between you and us—not by these Terms alone.</p><p>Unless a separate written agreement expressly provides otherwise, no copyright or other rights in future deliverables are assigned or licensed merely because you requested an estimate, sent an inquiry, or used this Site.</p>",
      "terms.s10.h": "10. Exclusion of anti-social forces",
      "terms.s10.p":
        "<p>You represent and warrant that you do not fall under organized crime groups (“Boryokudan”), Boryokudan members, Boryokudan-related companies, corporate extortionists (“Sokaiya”), groups engaging in criminal activities under the pretext of social campaigns, crime groups specialized in intellectual property or financial crimes, or any other person equivalent thereto (collectively, “Anti-Social Forces”), and that you are not substantially involved with Anti-Social Forces in any manner that would be recognized as cooperating with or supporting their activities.</p><p>You shall not, directly or through a third party, use violence, threats, fraud, intimidation, obstruction of our business, demands beyond legal responsibility, or any other conduct comparable thereto in connection with the Site or our services.</p><p>We do not engage in transactions with Anti-Social Forces. If we reasonably determine that you fall under Anti-Social Forces or have violated the preceding paragraph, we may, without prior notice, refuse or suspend your use of the Site, terminate any relevant relationship, or take other measures we deem appropriate, to the extent permitted by applicable law.</p>",
      "privacy.h1": "Privacy Policy",
      "privacy.updatedPrefix": "Last updated:",
      "privacy.updatedDate": "March 25, 2026",
      "privacy.s1.h": "1. Introduction",
      "privacy.s1.p":
        "<p>This Privacy Policy describes how The Establish合同会社 (“we,” “us,” “our”) processes personal data in connection with this website (<a href=\"https://theestablish.jp/\">theestablish.jp</a>) and when you contact us. We are based in Japan and handle personal information primarily in accordance with the Act on the Protection of Personal Information of Japan (APPI). If you are located in the European Economic Area, the United Kingdom, or Switzerland, the General Data Protection Regulation (GDPR) or equivalent local law may also grant you additional rights; we summarize those below where relevant. By using this site, you acknowledge this Policy.</p>",
      "privacy.s2.h": "2. Information we collect",
      "privacy.s2.p":
        "<p><strong>Information you provide:</strong> When you contact us (for example through the contact form or by email), we may receive your name, email address, and the content of your message.</p><p><strong>Automatically collected data:</strong> We may collect technical information such as IP address, browser type, device information, and pages viewed through server logs, cookies, or similar technologies.</p>",
      "privacy.s3.h": "3. Purposes and legal bases",
      "privacy.s3.p":
        "<p>We use personal information to respond to inquiries; provide, maintain, and improve our services; communicate with you; maintain security; and comply with legal obligations. Under the APPI, we use personal information within the scope necessary for the purposes we disclose. Where the GDPR applies, we rely as appropriate on performance of a contract, legitimate interests (such as operating and securing the website), consent where required, or legal obligation.</p>",
      "privacy.s4.h": "4. Cookies and similar technologies",
      "privacy.s4.p":
        "<p>We use cookies and similar technologies where needed for the site to operate (for example security or basic performance) and, where applicable, to remember preferences or understand aggregate usage. You can control cookies through your browser settings. Where local law requires consent for non-essential cookies or similar technologies, we will obtain consent before using them.</p>",
      "privacy.s5.h": "5. Processors, sharing, and international transfers",
      "privacy.s5.p":
        "<p>We do not sell personal information. We may share data with processors that assist our operations (such as hosting, email delivery, or storing contact form submissions in a Supabase database — infrastructure may be located outside Japan) under confidentiality and appropriate data-processing arrangements, when required by law, or to protect our rights and the safety of users. If personal data is transferred outside Japan, we implement measures required under the APPI. Where the GDPR applies, we use appropriate safeguards for international transfers, such as standard contractual clauses or other lawful mechanisms.</p>",
      "privacy.s6.h": "6. Retention and security",
      "privacy.s6.p":
        "<p>We retain personal information only for as long as necessary for the purposes described in this Policy or as required by law. We apply reasonable technical and organizational measures to protect personal data. No transmission over the Internet is completely secure.</p>",
      "privacy.s7.h": "7. Your rights and contact",
      "privacy.s7.p":
        "<p><strong>Japan:</strong> Under the APPI, you may request notification of purpose of use, disclosure, correction, addition or deletion, suspension of use, suspension of provision to third parties, or disclosure of records of provision to third parties, subject to statutory exceptions. Contact <a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a> or use the <a href=\"contact.html\">Contact</a> page.</p><p><strong>EEA, UK, Switzerland:</strong> Where the GDPR or equivalent law applies, you may have rights of access, rectification, erasure, restriction of processing, data portability, and objection to certain processing, and you may withdraw consent where processing is based on consent. You may lodge a complaint with your local supervisory authority.</p><p>We will respond to requests in line with applicable law. For all privacy inquiries: <a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a>.</p>",
      "co.h1": "Company information",
      "co.dt.tradeNameJa": "Trade name",
      "co.dd.tradeNameJa": "The Establish合同会社",
      "co.dt.rep": "Representative member",
      "co.dd.rep": "Managing member (業務執行社員): Yukiko Ikeda",
      "co.dt.address": "Principal office address",
      "co.dd.address":
        "〒150-0043 8B Futaba Building, 1-16-6 Dogenzaka, Shibuya-ku, Tokyo, Japan",
      "co.dt.contact": "Contact",
      "co.dd.contact":
        "<p>Email: <a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a></p>",
      "co.dt.biz": "Business activities",
      "co.dd.purposes":
        "<ol><li>Internet and digital information services; planning, development, operation, and maintenance of websites and software; advertising and marketing consulting and analysis; digital verification and recording; and SaaS and other information services.</li><li>Modeling, performances, and expressive activities; appearances in advertising, photography, video, and digital content; and related management, casting, production, creative and design work.</li><li>Services related to the foregoing for corporations and individuals, including overseas businesses.</li><li>All businesses incidental or related to the foregoing.</li></ol>",
      "toku.h1": "Specified commercial transactions (Japan)",
      "toku.dt.seller": "Seller (business operator)",
      "toku.dd.seller": "The Establish LLC (The Establish合同会社)",
      "toku.dt.manager": "Person responsible for operations",
      "toku.dd.manager": "Yukiko Ikeda, managing member (業務執行社員)",
      "toku.dt.address": "Address",
      "toku.dd.address":
        "〒150-0043 8B Futaba Building, 1-16-6 Dogenzaka, Shibuya-ku, Tokyo, Japan",
      "toku.dt.phone": "Phone",
      "toku.dd.phone":
        "Please contact us by email first. Add a published phone number here if you use one.",
      "toku.dt.email": "Email",
      "toku.dd.email":
        "<a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a>",
      "toku.dt.url": "Website URL",
      "toku.dd.url": "https://theestablish.jp/",
      "toku.dt.price": "Fees (including tax)",
      "toku.dd.price":
        "Quoted per project or agreement. We provide estimates before contract conclusion.",
      "toku.dt.extra": "Charges other than service fees",
      "toku.dd.extra":
        "If applicable: consumption tax, bank fees, third-party licenses, travel — as stated in each quotation.",
      "toku.dt.payment": "Payment method and timing",
      "toku.dd.payment":
        "Bank transfer or other method agreed in writing. Deposit and balance timing are set in each contract.",
      "toku.dt.timing": "Service provision timing",
      "toku.dd.timing":
        "Defined in each proposal or contract (milestones, delivery, go-live date).",
      "toku.dt.cancel": "Cancellation and termination",
      "toku.dd.cancel":
        "<p>Cancellation, withdrawal, and termination of a specific engagement follow the written quotation or contract between you and us, and applicable law (including the Consumer Contract Act of Japan and the Act on Specified Commercial Transactions where they apply to you as a consumer). Where a statutory cooling-off or similar right applies, we will comply with the required procedures and timelines.</p><p>For bespoke services (such as custom web work or creative production), once we have begun performance in reliance on your order, cancellation may require settlement of fees for work already performed and reasonable costs incurred, as stated in your agreement. Digital deliverables and custom services cannot be returned like retail goods; deposit rules, balance timing, refund eligibility, and deadlines are set out in each proposal or contract.</p>",
    },
    ja: {
      "nav.home": "ホーム",
      "nav.webProgramming": "Webプログラミング",
      "nav.about": "概要",
      "nav.clientServices": "法人・個人向け",
      "nav.contact": "お問い合わせ",
      "nav.company": "会社情報",
      "hero.eyebrow": "画面もセットも、事業を進める細部まで",
      "hero.title": "すべてのクリエイターに、未来を築く土台を",
      "hero.production": "The Establish",
      "hero.cta": "お問い合わせ",
      "hero.secondaryCta": "サービスを見る",
      "home.quickEyebrow": "こちらから",
      "home.quickAria": "主なページへのリンク",
      "home.quick1.k": "Web",
      "home.quick1.t": "デザイン・実装",
      "home.quick1.d": "プロモーションサイト、コーポレート、UI実装など。",
      "home.quick2.k": "サポート",
      "home.quick2.t": "法人・個人向け",
      "home.quick2.d": "調整、連絡、現地での段取り。",
      "home.quick3.k": "スタジオ",
      "home.quick3.t": "The Establish について",
      "home.quick3.d": "取り組み方と三本柱のつながり。",
      "home.servicesEyebrow": "サービス",
      "home.servicesTitle": "できること",
      "home.servicesLead":
        "主な接点は次の三つです。単独でも、組み合わせでも対応します。",
      "welcome.body":
        "拠点は日本。英語・日本語でやり取りできます。撮影、サイト公開、事務手続きが同じ週に重なるときほど、一本の窓口があると楽になります。",
      "welcome.aboutCta": "スタジオについて",
      "faq.heading": "よくある質問",
      "heroFollow.kicker": "スタジオの軸",
      "heroFollow.heading": "Webも撮影も、現場の手続きも、一本の線で",
      "heroFollow.tagline":
        "成果の出るサイト、撮影をスムーズに進める進行、日本での法人・個人向けサポートまで。断片ではなく、ひとつの文脈として整えます。",
      "heroFollow.chip1": "Web設計・実装",
      "heroFollow.chip2": "モデル・撮影",
      "heroFollow.chip3": "法人・個人サポート",
      "card.web.title": "Webデザイン・Webプログラミング",
      "card.web.desc":
        "レイアウトやビジュアルの設計から、フロントエンドの実装まで。WebデザインとWebプログラミングを一体でお手伝いします。",
      "card.tour.title": "法人・個人向けサービス",
      "card.tour.desc":
        "海外事業者を含む法人又は個人に対し、当社の他事業に関連するサービスを提供。電話・メール対応、車の手配など。",
      "card.model.title": "モデル（ビューティ・ファッション）",
      "card.model.desc":
        "ビューティー・スキンケア・ファッション等の撮影・プロモーションに対応します。",
      "common.details": "詳細",
      "welcome.headline": "つくる。届ける。伴走する。",
      "welcome.tagline":
        "Web・プログラミング、撮影・表現、法人・個人向けサポート。バラバラの発注ではなく、一本の線で。",
      "faq.q1": "The Establish とは？",
      "faq.a1":
        "<p>The Establish は、日本の会社法に基づくGodo Gaisya（有限責任会社）です。Web・デジタル領域の設計・制作、海外事業者を含む法人・個人向けの関連サービス、ビューティ・ファッション分野のモデル等の事業を行っています。</p>",
      "faq.q2": "法人・個人向けサービスの契約形態は？",
      "faq.a2":
        "<p>案件単位や月額など、内容に応じてご提案します。電話またはメールにて、日程・範囲・目的をお知らせください。</p>",
      "faq.q3": "Webデザイナー・プログラミング業務の契約形態は？",
      "faq.a3":
        "<p>デザイン・実装を含むWeb案件は、納品型の制作や継続サポートなど、スコープに応じてご提案します。スケジュール、ご希望の技術や画面イメージ、要件をお送りください。</p>",
      "contact.heading": "お問い合わせ",
      "contact.lead":
        "ご依頼・ご予約・サービスに関するご質問は、こちらからどうぞ。",
      "contact.formName": "お名前",
      "contact.formEmail": "メールアドレス",
      "contact.formMessage": "お問い合わせ内容",
      "contact.formSubmit": "送信",
      "contact.formSending": "送信中…",
      "contact.formError":
        "送信に失敗しました。再度お試しいただくか、info@theestablish.jp までメールでご連絡ください。",
      "contact.formNotConfigured":
        "フォームの接続が未設定です。info@theestablish.jp までメールでお問い合わせください。",
      "contact.formSent": "送信ありがとうございました。追ってメールでご連絡します。",
      "contact.backHome": "ホームに戻る",
      "footer.linkedinLabel": "LinkedIn",
      "footer.privacy": "プライバシーポリシー",
      "footer.terms": "利用規約",
      "footer.brand": "The Establish合同会社",
      "footer.company": "会社情報",
      "footer.tokushoho": "特定商取引法に基づく表記",
      "wp.eyebrow": "堅い情報設計と、伝わるインターフェース",
      "wp.heroTitle": "WEBプログラミング<br />/ WEBデザイン",
      "wp.lead":
        "情報設計からレイアウト、インタラクションまで。ブランドに合わせた、速くてアクセシブルなサイトを当社がお手伝いします。",
      "wp.servicesHeading": "対応できること",
      "wp.s1.title": "ランディング・プロモーションサイト",
      "wp.s1.desc":
        "メッセージの整理、レスポンシブ対応、表示速度を意識した実装。",
      "wp.s2.title": "コーポレート・ポートフォリオサイト",
      "wp.s2.desc":
        "複数ページ構成、コンポーネントの統一、更新しやすい作り。",
      "wp.s3.title": "UI実装",
      "wp.s3.desc":
        "Figmaなどのデザインを、セマンティックなHTML・CSS・JavaScriptへ。",
      "wp.s4.title": "保守・更新",
      "wp.s4.desc":
        "公開後の文言差し替え、不具合修正、小さな機能追加。",
      "wp.stackHeading": "スタック・ツール",
      "wp.stackIntro": "案件に応じて最適化します。例：",
      "wp.processHeading": "進め方",
      "wp.p1.title": "ヒアリング",
      "wp.p1.desc":
        "目的・ターゲット・コンテンツ・制約を、デザインや実装の前にすり合わせます。",
      "wp.p2.title": "デザイン・構成",
      "wp.p2.desc":
        "ワイヤーやデザイン受け渡し、情報設計、コンポーネント設計。",
      "wp.p3.title": "実装",
      "wp.p3.desc":
        "アクセシブルなマークアップ、レスポンシブCSS、動作確認。",
      "wp.p4.title": "公開・引き渡し",
      "wp.p4.desc":
        "公開サポート、簡単なドキュメント、継続サポートもご相談ください。",
      "wp.cta": "案件の相談をする",
      "wp.backHome": "ホームに戻る",
      "cs.eyebrow": "法人・個人のお客様へ",
      "cs.heroTitle": "法人・個人向け<br />サービス",
      "cs.lead":
        "当社の他事業とつながる実務サポートです。海外からの事業者、国内法人、個人のお客様など、日本国内での連絡窓口や現場調整が必要な場合にご相談ください。",
      "cs.servicesHeading": "対応例",
      "cs.s1.title": "連絡・スケジュール調整",
      "cs.s1.desc":
        "電話・メール対応、予定のすり合わせ、スコープに含む範囲での第三者との日常的な調整など。",
      "cs.s2.title": "現地での進行サポート",
      "cs.s2.desc":
        "撮影・イベント・出張等に伴う現地での手配や段取り、引き継ぎ、実務上のフォロー。",
      "cs.s3.title": "移動・ロジスティクス",
      "cs.s3.desc":
        "車両手配など、案件に即して対応可能な範囲のサポート。内容は必ず書面で確認します。",
      "cs.s4.title": "スポットまたは継続",
      "cs.s4.desc":
        "単発のご依頼から、軽量な継続サポートまで。日程・ボリューム・目的を伺ったうえで、形態・お見積りをご提案します。",
      "cs.audienceHeading": "想定するお客様",
      "cs.audienceIntro": "例示であり、限定的なものではありません：",
      "cs.tag1": "海外事業者",
      "cs.tag2": "国内法人",
      "cs.tag3": "個人・個人事業主",
      "cs.tag4": "制作・クリエイティブ関係",
      "cs.processHeading": "進め方",
      "cs.pr1.title": "お問い合わせ",
      "cs.pr1.desc":
        "日程、場所、使用言語、達成したい状態（概略でも可）をお知らせください。",
      "cs.pr2.title": "範囲・お見積り",
      "cs.pr2.desc":
        "含む／含まない、報酬、スケジュールを確認します。実際の取引条件は本ページではなく、書面の見積・契約に従います。",
      "cs.pr3.title": "実行",
      "cs.pr3.desc": "合意した内容に沿って対応し、重要な変更や前提の変化があれば共有します。",
      "cs.pr4.title": "完了または継続",
      "cs.pr4.desc": "単発は納め、継続が必要な場合は更新・延長をご相談ください。",
      "cs.cta": "サポートを相談する",
      "cs.backHome": "ホームに戻る",
      "ab.eyebrow": "日本を拠点とするスタジオ",
      "ab.heroTitle": "The Establish<br />について",
      "ab.lead":
        "Webの設計・実装、撮影・表現、法人・個人向けの実務サポート。複数の窓口に分断されないよう、ひとつの文脈でそろえます。",
      "ab.storyHeading": "取り組み方",
      "ab.story":
        "<p>The Establishは、日本の会社法に基づく合同会社（Godo Gaisya）として、小さなスタジオの形で事業を行っています。コードや光の質だけでなく、範囲の明確さ、許諾、事後のフォローまで、仕事の成立に必要なところまで含めて整えることに重きを置いています。</p><p>同じお客様が、同じ月のうちにWeb制作、クリエイティブ撮影、現場や連絡業務のサポートをまたがることは少なくありません。関係者がバラバラになるより、一本の線でつながった方が速く、安全だと考えています。</p><p>登記情報、代表者、法令に基づく表示は<a href=\"company.html\">会社情報</a>に記載しています。</p>",
      "ab.linesHeading": "三本柱として扱っていること",
      "ab.l1.title": "Web・デジタル",
      "ab.l1.desc":
        "情報設計に基づくデザインとフロント実装。公開後も引き継ぎやすい構造を意識します。",
      "ab.l2.title": "ビューティ・ファッション分野のモデル",
      "ab.l2.desc":
        "スキンケア・美容・ファッション領域の撮影等における出演および関連する進行サポート。",
      "ab.l3.title": "法人・個人向けサービス",
      "ab.l3.desc":
        "連絡・スケジュール調整、移動・手配に近い実務サポート等。当社の他事業と関連する文脈で効果を発揮します。",
      "ab.x1": "Webプログラミング",
      "ab.x2": "法人・個人向け",
      "ab.x3": "モデル",
      "ab.ctaHeading": "ご相談",
      "ab.ctaLead":
        "制作、撮影、現場サポートのいずれでも構いません。入口・範囲・書面条件の考え方をご提案します。",
      "ab.cta": "お問い合わせ",
      "ab.backHome": "ホームに戻る",
      "terms.h1": "利用規約",
      "terms.updatedPrefix": "最終更新日：",
      "terms.updatedDate": "2026年3月26日",
      "terms.s1.h": "1. 規約への同意",
      "terms.s1.p":
        "<p>本利用規約（以下「本規約」）は、The Establish合同会社（以下「当社」）が運営するウェブサイト（<a href=\"https://theestablish.jp/\">theestablish.jp</a>、以下「本サイト」）の利用条件を定めるものです。本サイトは当社の事業内容の紹介およびお問い合わせ窓口として提供されます。</p><p>本サイトを利用することにより、お客様は本規約および<a href=\"privacy.html\">プライバシーポリシー</a>（個人情報の取扱い）に同意したものとみなされます。同意いただけない場合は、利用を中止してください。</p>",
      "terms.s2.h": "2. サービスと個別契約",
      "terms.s2.p":
        "<p>本サイトに記載のサービス内容（Webデザイン・開発、法人・個人向けの関連サービス、モデル・クリエイティブ関連業務等）は、一般的な説明にすぎず、当社が特定の内容で契約を締結する旨の確定的な申出を構成するものではありません。</p><p>有償の業務委託その他の取引については、個別の見積書、提案書、作業範囲書、注文書または契約書等（以下「個別契約」）に定める条件が優先し、個別契約と本規約が抵触する場合は個別契約の定めを優先します。</p>",
      "terms.s3.h": "3. 利用上の遵守事項",
      "terms.s3.p":
        "<p>お客様は、法令および公序良俗に従い、第三者の権利を侵害せず、他の利用者の利用に不当に支障を与えない方法でのみ本サイトを利用するものとします。当社のシステムやデータへの不正アクセス、本サイトの過負荷・妨害、当社の権利や運営に悪影響を与える方法によるスクレイピング・大量取得、マルウェア等の送信を行ってはなりません。</p><p>お問い合わせフォームやメール等で送信する情報の正確性については、お客様ご自身の責任においてご確認ください。</p>",
      "terms.s4.h": "4. 知的財産権",
      "terms.s4.p":
        "<p>本サイト上の文章、画像、ロゴ、デザインその他のコンテンツについて、別段の表示がない限り、著作権・商標権その他の知的財産権は当社または正当な権利者に帰属します。私的かつ非営利の閲覧の範囲を超えて複製、改変、公衆送信、翻案、頒布等を行うには、当社の事前の書面による許諾が必要です（強行法規により認められる場合を除きます）。</p>",
      "terms.s5.h": "5. 免責および責任の制限",
      "terms.s5.p":
        "<p>本サイトおよびその内容は「現状有姿」かつ「提供可能な限り」で提供されます。適用法の許す限り、当社は商品性、特定目的への適合性、非侵害性等の黙示の保証を含め、いかなる保証も行いません。</p><p>適用法の許す限り、当社は、本サイトの利用または利用不能に関連して生じる利益の喪失、データの喪失、間接損害、特別損害、結果的損害、付随損害または懲罰的損害について責任を負いません。</p><p>本サイトの無償の閲覧・利用に限って生じる請求について、当社の賠償責任の累計額は金1万円を上限とします。ただし、消費者契約法その他の強行法規により無効とされる免責または責任制限がある場合は、その限りではありません。有償サービスについては、個別契約の定めに従います。</p>",
      "terms.s6.h": "6. 本規約の変更",
      "terms.s6.p":
        "<p>当社は、必要に応じて本規約を変更できます。変更後は、本ページ上部の最終更新日を改めます。変更内容がお客様に重大な影響を及ぼす場合、当社は合理的な範囲で通知その他の周知を行うよう努めます（例：本サイト上での掲示）。変更後の本規約の効力発生日以降に本サイトを利用した場合、適用法に別段の定めがある場合を除き、変更後の規約に同意したものとみなされます。</p>",
      "terms.s7.h": "7. お問い合わせ",
      "terms.s7.p":
        "<p>本規約に関するお問い合わせは、<a href=\"contact.html\">お問い合わせ</a>ページまたは <a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a> までご連絡ください。個人情報の取扱いは<a href=\"privacy.html\">プライバシーポリシー</a>をご覧ください。</p>",
      "terms.s8.h": "8. 準拠法および管轄裁判所",
      "terms.s8.p":
        "<p>本規約は、日本法に準拠し、法の抵触に関する原則にかかわらず解釈されます。</p><p>本サイトまたは本規約に関連して紛争が生じた場合、別段の強行法規に別段の定めがある場合を除き、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>",
      "terms.s9.h": "9. 成果物および著作権（業務委託）",
      "terms.s9.p":
        "<p>有償の業務委託に基づく成果物（ウェブサイト、デザイン、プログラム、文章、画像その他の成果物を含みます）に関する著作権その他の知的財産権の帰属、利用許諾の範囲、ポートフォリオ等への掲載の可否その他の取扱いは、本規約ではなく、お客様と当社との間で書面により合意する見積書、作業範囲書、契約書等の個別契約により定めます。</p><p>書面による別段の合意がない限り、見積依頼、お問い合わせ、または本サイトの閲覧のみでは、将来納品される成果物に関する著作権その他の権利の譲渡または利用許諾は生じません。</p>",
      "terms.s10.h": "10. 反社会的勢力の排除",
      "terms.s10.p":
        "<p>お客様は、自己が、暴力団、暴力団員、暴力団員でなくなった時から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロ又は特殊知能暴力集団等、その他これらに準ずる者（以下「反社会的勢力」といいます）に該当せず、かつ反社会的勢力と社会的に非難されるべき関係を有しないことを表明し、確約します。</p><p>お客様は、自ら又は第三者を利用して、本サイト又は当社の事業に関連して、暴力的な要求行為、法的な責任を超えた不当な要求行為、取引に関して脅迫的な言動をし、又は暴力を用いる行為、風説を流布し、偽計を用い又は威力を用いて当社の信用を毀損し、又は当社の業務を妨害する行為、その他これらに準ずる行為を行わないことを確約します。</p><p>当社は、反社会的勢力との間で取引を行いません。お客様が反社会的勢力に該当し、又は前項に違反したと当社が合理的に判断した場合、当社は、催告その他の手続を要することなく、本サイトの利用の拒否・停止、関係する取引の解除その他当社が適切と判断する措置を講じることができます。</p>",
      "privacy.h1": "プライバシーポリシー",
      "privacy.updatedPrefix": "最終更新日：",
      "privacy.updatedDate": "2026年3月25日",
      "privacy.s1.h": "1. はじめに",
      "privacy.s1.p":
        "<p>本プライバシーポリシーは、The Establish合同会社（以下「当社」）が、本ウェブサイト（<a href=\"https://theestablish.jp/\">theestablish.jp</a>）の提供およびお問い合わせへの対応に際し、個人情報をどのように取り扱うかを定めるものです。当社は日本国内に拠点を有し、個人情報の保護に関する法律（個人情報保護法）に従い、適正に取り扱います。欧州経済領域（EEA）、英国、スイスにお住まいの方には、EU一般データ保護規則（GDPR）または現地の同等の法令に基づく権利が認められる場合があります。以下にその概要を示します。本サイトを利用することで、本ポリシーに同意したものとみなされます。</p>",
      "privacy.s2.h": "2. 取得する情報",
      "privacy.s2.p":
        "<p><strong>お客様からご提供いただく情報：</strong>お問い合わせフォームまたはメール等でご連絡いただく際、お名前、メールアドレス、お問い合わせ内容を取得する場合があります。</p><p><strong>自動的に取得される情報：</strong>IPアドレス、ブラウザの種類、端末情報、閲覧ページ等を、サーバーログ、Cookie または類似技術により取得する場合があります。</p>",
      "privacy.s3.h": "3. 利用目的および法的根拠",
      "privacy.s3.p":
        "<p>取得した個人情報は、お問い合わせへの対応、サービスの提供・維持・改善、連絡、セキュリティの維持、法令上の義務の履行のために利用します。個人情報保護法に基づき、利用目的の達成に必要な範囲で取り扱います。GDPR が適用される場合には、契約の履行、正当な利益（サイトの運営・セキュリティ等）、同意が必要な場合の同意、または法的義務に基づくなど、状況に応じた法的根拠の下で処理します。</p>",
      "privacy.s4.h": "4. Cookie 等の技術",
      "privacy.s4.p":
        "<p>当社は、サイトの運営に必要な範囲（セキュリティや基本的な表示性能など）で Cookie または類似技術を使用する場合があります。また、設定の記憶や集計的な利用状況の把握のために使用する場合があります。ブラウザの設定で Cookie を制御できます。法令上同意が必要な非必須の Cookie 等については、活性化前に同意を得るものとします。</p>",
      "privacy.s5.h": "5. 第三者提供・委託・国外移転",
      "privacy.s5.p":
        "<p>当社は、個人情報を販売しません。ホスティング、メール配信、お問い合わせフォームに送信された内容の保存・管理（Supabase 等のクラウドデータベース。サーバーは日本国外に所在する場合があります）の業務委託先に、機密保持および委託契約の下で必要な範囲で預託することがあります。また、法令に基づく場合、または当社の権利・安全や利用者の保護のために必要な場合に限り、第三者に提供することがあります。個人情報を国外に移転する場合は、個人情報保護法に従い、必要な措置を講じます。GDPR が適用される場合には、標準契約条項その他適法な保護措置により越境移転を行います。</p>",
      "privacy.s6.h": "6. 保存期間とセキュリティ",
      "privacy.s6.p":
        "<p>個人情報は、本ポリシーに記載の利用目的の達成に必要な期間、または法令が定める期間に限り保存します。当社は、合理的な技術的・組織的安全管理措置により個人情報を保護します。インターネット上の送信は完全に安全ではありません。</p>",
      "privacy.s7.h": "7. お客様の権利とお問い合わせ",
      "privacy.s7.p":
        "<p><strong>日本にお住まいの方：</strong>個人情報保護法に基づき、利用目的の通知、保有個人データの開示、訂正・追加・削除、利用の停止、第三者提供の停止、第三者提供記録の開示を請求できる場合があります（法に定める例外あり）。ご請求・お問い合わせは <a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a> または <a href=\"contact.html\">お問い合わせ</a> ページからご連絡ください。</p><p><strong>EEA・英国・スイス等の方：</strong>GDPR または同等の法令が適用される場合、アクセス、訂正、消去、処理の制限、データポータビリティ、一定の処理への異議、同意に基づく処理に関する同意の撤回などの権利があり、監督当局に苦情を申し立てることができる場合があります。</p><p>いずれのご請求についても、適用法に従い対応します。個人情報の取扱いに関するお問い合わせ先：<a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a>。</p>",
      "co.h1": "会社情報",
      "co.dt.tradeNameJa": "商号",
      "co.dd.tradeNameJa": "The Establish合同会社",
      "co.dt.rep": "代表者",
      "co.dd.rep": "業務執行社員　池田 優希子",
      "co.dt.address": "本店所在地",
      "co.dd.address":
        "〒150-0043 東京都渋谷区道玄坂1-16-6 二葉ビル8B",
      "co.dt.contact": "お問い合わせ",
      "co.dd.contact":
        "<p>メール： <a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a></p>",
      "co.dt.biz": "事業内容",
      "co.dd.purposes":
        "<ol><li>インターネット及びデジタル技術を活用した情報提供、ウェブ・ソフトウェア等の企画・開発・運用・保守、広告・マーケティング関連の調査・分析・コンサルティング、デジタル検証・記録、情報提供サービス及びSaaS型サービスの企画・開発・運営</li><li>モデル・出演・表現活動、広告・宣伝・撮影・映像・デジタルコンテンツ等への出演、並びにこれらに関するマネジメント、キャスティング、プロデュース、クリエイティブ・デザイン制作及び企画・運営</li><li>海外事業者を含む法人又は個人に対する前各号に関連するサービスの提供</li><li>前各号に附帯又は関連する一切の事業</li></ol>",
      "toku.h1": "特定商取引法に基づく表記",
      "toku.dt.seller": "販売事業者名",
      "toku.dd.seller": "The Establish合同会社",
      "toku.dt.manager": "運営統括責任者",
      "toku.dd.manager": "業務執行社員　池田 優希子",
      "toku.dt.address": "所在地",
      "toku.dd.address": "〒150-0043 東京都渋谷区道玄坂1-16-6 二葉ビル8B",
      "toku.dt.phone": "電話番号",
      "toku.dd.phone":
        "まずはメールでお問い合わせください。公開する電話番号がある場合はここに記載してください。",
      "toku.dt.email": "メールアドレス",
      "toku.dd.email":
        "<a href=\"mailto:info@theestablish.jp\">info@theestablish.jp</a>",
      "toku.dt.url": "ウェブサイトURL",
      "toku.dd.url": "https://theestablish.jp/",
      "toku.dt.price": "販売価格（役務の対価・税込）",
      "toku.dd.price":
        "案件ごとに見積書・契約書で明示します。契約締結前にお見積りを提示します。",
      "toku.dt.extra": "商品代金・役務の対価以外に必要な費用",
      "toku.dd.extra":
        "消費税、振込手数料、第三者ライセンス料、旅費交通費等が発生する場合は各見積に記載します。",
      "toku.dt.payment": "代金の支払方法・時期",
      "toku.dd.payment":
        "銀行振込または書面で合意した方法。着手金・残金のタイミングは個別契約に従います。",
      "toku.dt.timing": "役務の提供時期",
      "toku.dd.timing":
        "各提案書・契約書で定めるスケジュール（マイルストーン、納品日、公開日等）に従います。",
      "toku.dt.cancel": "解約・キャンセル（返品）について",
      "toku.dd.cancel":
        "<p>個別のお取引の解約・キャンセル・契約終了は、お客様と当社との間で締結する書面の見積書・契約書の定めに加え、適用法（お客様が消費者である場合は消費者契約法、特定商取引法等を含みます）に従います。法令によりクーリングオフ等の権利が認められる場合は、法令所定の手続・期間に従い対応します。</p><p>オーダーメイドの役務（ウェブ制作、クリエイティブ制作等）については、当社がお申込みに基づき着手した後のキャンセル等は、実施済みの業務に対する報酬および合理的に発生した費用の精算を要することがあり、個別契約に定めるとおりとします。デジタル成果物およびカスタム役務は物販と同様の返品ができない性質があるため、着手金・残金のタイミング、返金の可否・範囲、期限等は各提案書・契約書に明示します。</p>",
    },
  };

  function applyLang(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang === "ja" ? "ja" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
    });
  }

  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", function () {
      applyLang(this.value);
      try {
        localStorage.setItem("the-establish-lang", this.value);
      } catch (_) {}
    });
    try {
      const saved = localStorage.getItem("the-establish-lang");
      if (saved === "ja" || saved === "en") {
        langSelect.value = saved;
      }
    } catch (_) {}
    applyLang(langSelect.value);
  }

  const siteHeader = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle && nav && siteHeader) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("nav-open");
      siteHeader.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("nav-open");
        siteHeader.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const contactForm = document.getElementById("contact-form");
  const contactFormSuccess = document.getElementById("contact-form-success");

  if (contactForm && new URLSearchParams(window.location.search).get("sent") === "1") {
    contactForm.hidden = true;
    if (contactFormSuccess) contactFormSuccess.hidden = false;
    document.body.classList.add("contact-form-sent");
    const top = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    top();
    requestAnimationFrame(top);
    setTimeout(top, 0);
    setTimeout(top, 150);
  }
})();
