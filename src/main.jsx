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
              <Phone /> Phone number to be confirmed
            </span>

            <span>
              <Mail /> Email address to be confirmed
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

      <footer>
        <a className="brand footbrand" href="#top">
          <span>IDEAL</span>
          <small>LIFTS LIMITED</small>
        </a>

        <p>Elevators • Escalators • Maintenance • Modernisation</p>

        <p className="copyright">
          © 2026 IDEAL LIFTS LIMITED • WEBSITE CONCEPT
        </p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);