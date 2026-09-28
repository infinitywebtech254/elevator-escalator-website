import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Wrench,
  Building2,
  MoveUp,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';
import './styles.css';
import industry from './assets/industry.png';

const maintenanceImage =
  'https://imageio.forbes.com/specials-images/imageserve/781236235/0x0.jpg?format=jpg&width=1200';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.4c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.4H6.4V13h3.1v9h4z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M5.3 7.8H2.2V22h3.1V7.8zM3.7 2C2.7 2 2 2.8 2 3.7s.7 1.7 1.7 1.7 1.7-.8 1.7-1.7S4.7 2 3.7 2zM22 13.9c0-4.3-2.3-6.3-5.3-6.3-2.4 0-3.5 1.3-4.1 2.2v-2H9.5V22h3.1v-7c0-1.8.4-3.6 2.7-3.6 2.3 0 2.3 2.1 2.3 3.7V22H22v-8.1z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
    <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.3-1.5A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.1l-.3-.2-3.1.9.9-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3 1.9.8 2.7.9 3.7.8 1.1-.2 3.3-1.4 3.8-2.7.5-1.3.5-2.4.3-2.6-.2-.2-.5-.3-.9-.5z" />
  </svg>
);

const services = [
  {
    n: '01',
    icon: MoveUp,
    title: 'Elevator Solutions',
    text: 'Passenger and commercial lift solutions planned around your building, traffic needs and project requirements.'
  },
  {
    n: '02',
    icon: Building2,
    title: 'Escalator Solutions',
    text: 'Escalator installation and service solutions for commercial, retail and public environments.'
  },
  {
    n: '03',
    icon: Wrench,
    title: 'Maintenance & Repairs',
    text: 'Preventive maintenance, diagnostics and responsive technical support to keep systems moving.'
  },
  {
    n: '04',
    icon: ShieldCheck,
    title: 'Modernisation',
    text: 'Practical upgrades for ageing lift systems, controls, finishes and performance.'
  }
];

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <main>
      <header>
        <a className="brand" href="#top">
          <span>IDEAL</span>
          <small>LIFTS LIMITED</small>
        </a>

        <nav className={open ? 'open' : ''}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a className="navcta" href="#contact">
            Request a Quote <ArrowUpRight size={15} />
          </a>
        </nav>

        <button className="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <section id="top" className="hero">
        <div className="heroimg">
          <img src={industry} />
        </div>

        <div className="shade" />

        <div className="heroin">
          <p className="eyebrow">
            ELEVATORS • ESCALATORS • MAINTENANCE
          </p>

          <h1>
            ENGINEERED
            <br />
            TO KEEP
            <br />
            <em>YOU MOVING.</em>
          </h1>

          <p className="lead">
            Professional vertical-transport solutions for residential,
            commercial and institutional developments.
          </p>

          <div className="actions">
            <a href="#contact" className="primary">
              REQUEST A QUOTE <ArrowUpRight />
            </a>

            <a href="#services" className="ghost">
              EXPLORE SERVICES
            </a>
          </div>
        </div>

        <div className="herofoot">
          <span>IDEAL LIFTS LIMITED</span>
          <span>NAIROBI, KENYA</span>
        </div>
      </section>

      <section id="services" className="services wrap">
        <div className="sectionhead">
          <div>
            <p className="eyebrow dark">01 / WHAT WE DO</p>

            <h2>
              VERTICAL MOBILITY.
              <br />
              <span>COMPLETE SUPPORT.</span>
            </h2>
          </div>

          <p>
            From new installations to ongoing maintenance, the concept
            positions Ideal Lifts as one point of contact throughout the
            equipment lifecycle.
          </p>
        </div>

        <div className="servicegrid">
          {services.map((s) => {
            let I = s.icon;

            return (
              <article key={s.n}>
                <div className="servtop">
                  <span>{s.n}</span>
                  <I />
                </div>

                <h3>{s.title}</h3>
                <p>{s.text}</p>

                <a href="#contact">
                  DISCUSS A PROJECT <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="split">
        <div className="photo tech">
          <img src={industry} />
          <span>SERVICE / MAINTENANCE</span>
        </div>

        <div className="story">
          <p className="eyebrow">02 / BUILT ON EXPERIENCE</p>

          <h2>
            TECHNICAL KNOW-HOW.
            <br />
            <span>PERSONAL SERVICE.</span>
          </h2>

          <p className="big">
            Ideal Lifts Limited is presented as a hands-on elevator and
            escalator company focused on dependable project delivery and
            long-term customer support.
          </p>

          <p className="muted">
            This concept intentionally avoids unverified claims. Company
            history, certifications, brands and project statistics can be
            added once confirmed.
          </p>

          <div className="checks">
            <span>
              <CheckCircle2 /> Installation
            </span>

            <span>
              <CheckCircle2 /> Maintenance
            </span>

            <span>
              <CheckCircle2 /> Repairs
            </span>

            <span>
              <CheckCircle2 /> Modernisation
            </span>
          </div>
        </div>
      </section>

      <section id="projects" className="projects wrap">
        <p className="eyebrow dark">03 / PROJECT CAPABILITY</p>

        <div className="projecttitle">
          <h2>
            WORK THAT
            <br />
            <span>MOVES PEOPLE.</span>
          </h2>

          <p>
            A future project gallery can showcase Ideal Lifts' real
            installations, maintenance work and completed sites using the
            photos already captured by the team.
          </p>
        </div>

        <div className="projectgrid">
          <div className="project p1">
            <img src={industry} />

            <div>
              <b>PASSENGER LIFTS</b>
              <span>Commercial & Residential</span>
            </div>
          </div>

          <div className="project p2">
            <img src={industry} />

            <div>
              <b>TECHNICAL SERVICE</b>
              <span>Maintenance & Repairs</span>
            </div>
          </div>

          <div className="project p3">
            <img src={industry} />

            <div>
              <b>ESCALATOR SYSTEMS</b>
              <span>Retail & Public Spaces</span>
            </div>
          </div>
        </div>

        <p className="demo-note">
          Sample imagery shown for concept presentation only — replace with
          Ideal Lifts' completed-project photographs before launch.
        </p>
      </section>

      <section className="maintenance">
        <div className="maintimg">
          <img src={maintenanceImage} />
        </div>

        <div className="maintcopy">
          <p className="eyebrow">04 / AFTER-SALES SUPPORT</p>

          <h2>
            INSTALLATION IS
            <br />
            ONLY THE <span>BEGINNING.</span>
          </h2>

          <p>
            Planned maintenance helps protect equipment performance,
            reliability and the passenger experience long after handover.
          </p>

          <a href="#contact" className="primary light">
            BOOK A SERVICE <ArrowUpRight />
          </a>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">05 / START A CONVERSATION</p>

          <h2>
            LET'S MOVE YOUR
            <br />
            <span>PROJECT FORWARD.</span>
          </h2>

          <p>
            Planning a lift installation, escalator project, repair or
            maintenance programme? Tell us what you need.
          </p>

          <div className="contactlines">
            <span>
              <Phone /> +254 700 123 456
            </span>

            <span>
              <Mail /> info@ideallifts.co.ke
            </span>

            <span>
              <MapPin /> Nairobi, Kenya
            </span>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <input placeholder="Your name" />
            <input placeholder="Phone number" />
          </div>

          <select defaultValue="">
            <option value="" disabled>
              I'm interested in...
            </option>
            <option>Elevator installation</option>
            <option>Escalator solution</option>
            <option>Maintenance / repair</option>
            <option>Modernisation</option>
          </select>

          <textarea placeholder="Tell us about your building or project..." />

          <button>
            SEND ENQUIRY <ArrowUpRight />
          </button>
        </form>
      </section>

      <footer className="sitefooter">
        <div className="footergrid">

          <div className="footerintro">
            <a className="brand footbrand" href="#top">
              <span>IDEAL</span>
              <small>LIFTS LIMITED</small>
            </a>

            <p className="footdesc">
              Elevator and escalator solutions for residential,
              commercial and institutional developments.
            </p>

            <a href="#contact" className="footercta">
              REQUEST A QUOTE <ArrowUpRight size={16} />
            </a>

            <div className="socials">
              <span title="Facebook">
                <FacebookIcon />
              </span>

              <span title="Instagram">
                <InstagramIcon />
              </span>

              <span title="LinkedIn">
                <LinkedinIcon />
              </span>

              <span title="WhatsApp">
                <WhatsAppIcon />
              </span>
            </div>
          </div>

          <div className="footercol">
            <h4>EXPLORE</h4>
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footercol">
            <h4>SERVICES</h4>
            <a href="#services">Elevator Solutions</a>
            <a href="#services">Escalator Solutions</a>
            <a href="#services">Maintenance & Repairs</a>
            <a href="#services">Modernisation</a>
          </div>

          <div className="footercol">
            <h4>CONTACT</h4>

            <span className="footercontact">
              <Phone size={16} />
              +254 700 123 456
            </span>

            <span className="footercontact">
              <Mail size={16} />
              info@ideallifts.co.ke
            </span>

            <span className="footercontact">
              <MapPin size={16} />
              Nairobi, Kenya
            </span>
          </div>
        </div>

        <div className="footerstrip">
          <span>ELEVATORS</span>
          <i>•</i>
          <span>ESCALATORS</span>
          <i>•</i>
          <span>MAINTENANCE</span>
          <i>•</i>
          <span>MODERNISATION</span>
        </div>

        <div className="footerbottom">
          <p>© 2026 IDEAL LIFTS LIMITED. ALL RIGHTS RESERVED.</p>
          <p>NAIROBI, KENYA</p>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
