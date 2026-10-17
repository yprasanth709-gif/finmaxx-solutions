import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown,
  CircleDollarSign, Code2, Fingerprint, Globe2, Layers3, LockKeyhole, Menu,
  MessageCircle, MoveUpRight, Network, ShieldCheck, Sparkles, X, Zap
} from 'lucide-react'
import './styles.css'

const navItems = [
  ['About', '#about'], ['Solutions', '#services'], ['Products', '#products'],
  ['Careers', '#careers'], ['Contact', '#contact'],
]

const services = [
  { icon: Code2, number: '01', title: 'Financial software', copy: 'Purpose-built digital experiences and platforms designed around the way your business works.' },
  { icon: Network, number: '02', title: 'Platform integration', copy: 'Connect systems, streamline data flows, and make your technology ecosystem work as one.' },
  { icon: ShieldCheck, number: '03', title: 'Risk & security', copy: 'Build security-minded workflows with thoughtful access, governance, and operational controls.' },
  { icon: BarChart3, number: '04', title: 'Data & intelligence', copy: 'Turn scattered information into clearer reporting, stronger visibility, and better decisions.' },
]

const products = [
  { tag: 'PAYMENTS', title: 'FlowPay', copy: 'A concept payment orchestration platform for smoother digital payment journeys.', icon: Zap, tone: 'mint', metric: 'Payment workflows' },
  { tag: 'INSIGHTS', title: 'FinSight', copy: 'A unified view of business performance, trends, and operational metrics.', icon: BarChart3, tone: 'lavender', metric: 'Data intelligence' },
  { tag: 'OPERATIONS', title: 'CoreBridge', copy: 'A connected operations layer to help financial teams simplify complex processes.', icon: Layers3, tone: 'peach', metric: 'Connected systems' },
]

function Logo() {
  return <a className="brand" href="#home" aria-label="Finmaxx Solutions home">
    <span className="brand-mark"><span /><span /><span /></span>
    <span className="brand-name">finmaxx<span>solutions</span></span>
  </a>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header">
    <div className="container nav-wrap">
      <Logo />
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={16} /></a>
      </nav>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
  </header>
}

function DashboardArt() {
  return <div className="visual-card" aria-label="Illustrative financial analytics dashboard">
    <div className="visual-top"><div className="window-dots"><i /><i /><i /></div><span>FINMAXX / OVERVIEW</span><span className="live-dot">● LIVE CONCEPT</span></div>
    <div className="dash-head"><div><span className="eyebrow">TOTAL VOLUME</span><h3>$248,680<span className="positive"> +12.8%</span></h3></div><div className="period">Last 30 days <ChevronDown size={14}/></div></div>
    <div className="chart-area">
      <div className="chart-labels"><span>$300k</span><span>$200k</span><span>$100k</span><span>$0</span></div>
      <svg viewBox="0 0 440 150" role="img" aria-label="Decorative rising analytics line chart" preserveAspectRatio="none">
        <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#6ee7c5" stopOpacity=".28"/><stop offset="100%" stopColor="#6ee7c5" stopOpacity="0"/></linearGradient></defs>
        {[20,60,100,140].map(y=><line key={y} x1="0" y1={y} x2="440" y2={y} stroke="#243448" strokeDasharray="4 6"/>)}
        <path d="M0 122 C22 118 28 98 48 105 S76 80 96 94 S126 108 144 73 S177 85 196 64 S227 76 247 52 S276 70 296 40 S323 56 345 32 S380 50 398 20 S423 26 440 9 L440 150 L0 150Z" fill="url(#areaFill)"/>
        <path d="M0 122 C22 118 28 98 48 105 S76 80 96 94 S126 108 144 73 S177 85 196 64 S227 76 247 52 S276 70 296 40 S323 56 345 32 S380 50 398 20 S423 26 440 9" fill="none" stroke="#6ee7c5" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="398" cy="20" r="5" fill="#07111f" stroke="#6ee7c5" strokeWidth="3"/>
      </svg>
    </div>
    <div className="chart-months"><span>SEP 01</span><span>SEP 08</span><span>SEP 15</span><span>SEP 22</span><span>SEP 30</span></div>
    <div className="dash-bottom">
      <div className="mini-stat"><span className="mini-icon"><CircleDollarSign size={16}/></span><div><small>Transactions</small><b>8,492</b></div><span className="mini-change">+8.4%</span></div>
      <div className="mini-stat"><span className="mini-icon purple"><Globe2 size={16}/></span><div><small>Connected systems</small><b>12 active</b></div><span className="mini-change">+2</span></div>
    </div>
    <div className="float-chip"><span className="float-check"><Check size={15}/></span><span><b>Systems connected</b><small>All workflows operational</small></span></div>
  </div>
}

function SectionLabel({ children }) { return <div className="section-label"><span />{children}</div> }

function App() {
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: 'Financial software', message: '' })
  const [sent, setSent] = useState(false)
  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Finmaxx website enquiry — ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nInterest: ${form.interest}\n\n${form.message}`)
    window.location.href = `mailto:hello@finmaxxsolutions.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return <>
    <Header />
    <main>
      <section className="hero section" id="home">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill"><span className="pill-spark"><Sparkles size={13}/></span> FINANCIAL TECHNOLOGY, REIMAGINED</div>
            <h1>Make finance<br/>move <span>forward.</span></h1>
            <p className="hero-intro">We bring technology and financial operations together to help ambitious businesses build what’s next.</p>
            <div className="hero-actions"><a className="button button-primary" href="#services">Explore our solutions <ArrowUpRight size={17}/></a><a className="text-link" href="#about">Get to know us <ArrowDownRight size={16}/></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>F</span><span>M</span><span>+</span></div><p><b>Built around your business</b><small>Practical thinking. Thoughtful technology.</small></p></div>
          </div>
          <div className="hero-visual"><div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" /><DashboardArt /></div>
        </div>
        <div className="container hero-bottom"><span>TECHNOLOGY THAT CONNECTS THE DOTS</span><div className="bottom-line" /><span>01 — 05</span></div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>DESIGNED FOR A CONNECTED FINANCIAL WORLD</span><div><span><ShieldCheck size={16}/> Security-minded</span><span><Network size={16}/> Integration-ready</span><span><BarChart3 size={16}/> Insight-driven</span></div></div></section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-title"><SectionLabel>WHO WE ARE</SectionLabel><h2>Complexity is real.<br/><span>Clarity is a choice.</span></h2></div>
          <div className="about-copy"><p className="lead">Finmaxx Solutions is a financial technology company focused on making digital finance and business operations work better together.</p><p>We combine a practical understanding of business needs with a thoughtful approach to technology. From connected platforms to data-led workflows, we help teams move from disconnected processes to more confident decisions.</p><a href="#contact" className="under-link">Let's build something useful <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="container values-row"><div className="value"><span>01</span><b>Start with the real problem</b><p>Useful solutions begin with listening, not assumptions.</p></div><div className="value"><span>02</span><b>Design for connection</b><p>Better experiences happen when systems work together.</p></div><div className="value"><span>03</span><b>Make progress measurable</b><p>Clear goals and meaningful signals keep work moving.</p></div></div>
      </section>

      <section className="section services-section" id="services">
        <div className="container"><div className="section-heading"><div><SectionLabel>WHAT WE DO</SectionLabel><h2>Technology with<br/><span>a business purpose.</span></h2></div><p>From strategy to implementation, we help shape digital foundations that are built to evolve with you.</p></div>
          <div className="services-grid">{services.map(({ icon: Icon, number, title, copy }) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><span className="service-icon"><Icon size={22}/></span></div><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Ask us about ${title}`}><MoveUpRight size={19}/></a></article>)}</div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="container"><div className="section-heading products-heading"><div><SectionLabel>PRODUCT THINKING</SectionLabel><h2>Made for the way<br/><span>business moves.</span></h2></div><p>Explore our illustrative product concepts. Each represents a direction for simplifying finance, data, and operations.</p></div>
          <div className="products-grid">{products.map(({tag,title,copy,icon:Icon,tone,metric})=><article className={`product-card ${tone}`} key={title}><div className="product-top"><span className="product-tag">{tag}</span><span className="product-icon"><Icon size={21}/></span></div><div className="product-art"><div className="product-ring ring-one"/><div className="product-ring ring-two"/><div className="product-art-core"><Icon size={30}/></div><span className="art-node node-one"/><span className="art-node node-two"/><span className="art-node node-three"/></div><h3>{title}</h3><p>{copy}</p><div className="product-foot"><span>{metric}</span><ArrowUpRight size={17}/></div></article>)}</div>
          <p className="product-disclaimer">Product names and descriptions shown here are concept examples for this website preview, not claims of currently available or regulated financial products.</p>
        </div>
      </section>

      <section className="section approach-section"><div className="container approach-grid"><div><SectionLabel>HOW WE WORK</SectionLabel><h2>Good technology<br/>starts with <span>good questions.</span></h2><p className="approach-intro">We keep the process collaborative, focused, and grounded in the outcomes that matter to your team.</p><a className="button button-light" href="#contact">Start a conversation <ArrowUpRight size={17}/></a></div><div className="approach-steps"><div className="approach-step"><span>01</span><div><h3>Understand</h3><p>Get clear on your goals, users, constraints, and current systems.</p></div><Fingerprint/></div><div className="approach-step"><span>02</span><div><h3>Design</h3><p>Map a practical path and align on what success should look like.</p></div><Layers3/></div><div className="approach-step"><span>03</span><div><h3>Build & improve</h3><p>Deliver thoughtfully, learn from feedback, and evolve with your needs.</p></div><Zap/></div></div></div></section>

      <section className="section careers-section" id="careers"><div className="container careers-box"><div className="careers-symbol"><MessageCircle size={28}/><span/><span/></div><div className="careers-copy"><SectionLabel>CAREERS AT FINMAXX</SectionLabel><h2>Curious minds.<br/><span>Meaningful work.</span></h2><p>We value people who ask thoughtful questions, solve real problems, and want to make technology more useful. Interested in future opportunities?</p><a className="under-link" href="#contact">Introduce yourself <ArrowUpRight size={16}/></a></div><div className="careers-side"><span className="side-caption">YOUR NEXT CHAPTER</span><div className="career-note"><Sparkles size={19}/><p><b>Bring your perspective.</b><br/><span>Let’s see what we could build together.</span></p></div><a href="#contact" className="circle-arrow" aria-label="Contact Finmaxx"><ArrowUpRight size={23}/></a></div></div></section>

      <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><SectionLabel>LET'S TALK</SectionLabel><h2>Have a challenge?<br/><span>Let's work on it.</span></h2><p>Tell us what you’re trying to make possible. We’ll start with a conversation.</p><div className="contact-detail"><span className="contact-detail-icon"><MessageCircle size={18}/></span><div><small>GENERAL ENQUIRIES</small><b>hello@finmaxxsolutions.com</b><span>Replace with your verified company email before launch.</span></div></div><div className="contact-detail"><span className="contact-detail-icon"><LockKeyhole size={18}/></span><div><small>YOUR INFORMATION</small><b>Shared with care</b><span>Please don’t include account numbers or sensitive financial information.</span></div></div></div>
          <form className="contact-form" onSubmit={submit}><div className="form-heading"><h3>Tell us a little about it.</h3><span>Fields marked * are required</span></div><div className="form-row"><label>Your name *<input name="name" value={form.name} onChange={update} required placeholder="Jane Smith"/></label><label>Work email *<input name="email" type="email" value={form.email} onChange={update} required placeholder="jane@company.com"/></label></div><label>Company<input name="company" value={form.company} onChange={update} placeholder="Your company"/></label><label>What are you interested in?<select name="interest" value={form.interest} onChange={update}><option>Financial software</option><option>Platform integration</option><option>Risk & security</option><option>Data & intelligence</option><option>Careers</option><option>Other</option></select></label><label>How can we help? *<textarea name="message" value={form.message} onChange={update} required rows="4" placeholder="A little about your goals, challenge, or idea..."/></label><button className="button button-primary submit-button" type="submit">Prepare enquiry <ArrowUpRight size={17}/></button>{sent && <p className="form-note">Your email app should open with your enquiry. If it doesn't, email hello@finmaxxsolutions.com directly after replacing this placeholder address with your verified company email.</p>}<p className="form-privacy">This demo form opens your email app. It does not store or send data to a server.</p></form>
        </div></section>
    </main>
    <footer className="footer"><div className="container footer-main"><div><Logo/><p>Thoughtful technology for a connected financial world.</p></div><div className="footer-links"><a href="#about">About</a><a href="#services">Solutions</a><a href="#products">Products</a><a href="#careers">Careers</a><a href="#contact">Contact</a></div><a className="back-top" href="#home">Back to top <ArrowUpRight size={15}/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Finmaxx Solutions. All rights reserved.</span><span>Financial technology, built thoughtfully.</span></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
