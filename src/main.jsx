import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  ["Survey Management System", "Full-stack Web Application", "React + Laravel survey management application with CRUD, API communication, database integration, and responsive UI.", ["React","Laravel","PHP","SQL"], "https://github.com/AnaCericatto/Survey_React_Laravel"],
  ["Work Order Manager", "Business Application", "Business-oriented application focused on organizing work orders and presenting practical workflows through a clear interface.", ["C#",".NET","UI","Business"]],
  ["Movie Group Scheduler", "Planned Full-stack Project", "Collaborative scheduling platform for coordinating movie sessions around weekly availability, exceptions, and meeting rules.", ["Laravel","React","TypeScript","SQL"]]
];

const gallery = {
  research: [
    ["research-emblem.png","Papua New Guinea emblem research","Bird of paradise and traditional patterns informed the visual identity."],
    ["research-flag.png","Papua New Guinea flag research","Black, red, and gold were studied as part of the visual direction."],
    ["research-cultural-reference.jpg","Cultural reference","Traditional clothing and visual textures were considered for cultural identity."],
    ["logo-concept.png","Logo concept","Early identity exploration combining initials, bird of paradise, and national references."],
    ["visual-style-guide.jpg","Visual style guide","Documented palette used to guide the high-fidelity interface."],
  ],
  personas: [
    ["persona-kel-tovara.png","Persona — Kele Tovara","Local prospective-student persona from the original project."],
    ["persona-mei-lin.png","Persona — Mei Lin","International prospective-student persona from the original project."],
  ],
  wireframes: [
    ["wireframe-landing.jpg","Wireframe — Landing page","Early information hierarchy, navigation, banner, content blocks, and footer."],
    ["wireframe-admissions.jpg","Wireframe — Admissions","Early structure for domestic/international admissions and supporting content."],
    ["wireframe-academic.jpg","Wireframe — Academic","Early structure for program discovery and course information."],
    ["wireframe-course.jpg","Wireframe — Course page","Early structure for course details, tabs, and supporting information."],
  ],
  prototypes: [
    ["prototype-landing.png","High-fidelity prototype — Landing page","Final visual direction for the landing page."],
    ["prototype-admissions.png","High-fidelity prototype — Admissions","Final visual direction for admissions."],
    ["prototype-academic.png","High-fidelity prototype — Academic","Final visual direction for academic/program discovery."],
    ["prototype-course.png","High-fidelity prototype — Course page","Final visual direction for a detailed course page."],
  ]
};

const ASSET_BASE = import.meta.env.BASE_URL;

function goHome(){ window.location.hash="/"; }
function goCase(){ window.location.hash="/case-study"; }

function Header({caseStudy}){
  const [open,setOpen]=useState(false);
  const jump=(id)=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"});};
  return <header className="nav">
    <button className="brand" onClick={goHome}>AC<span>.</span></button>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?"×":"☰"}</button>
    <nav className={open?"nav-links open":"nav-links"}>
      {caseStudy ? <>
        <button onClick={goHome}>Portfolio</button><button onClick={()=>jump("overview")}>Overview</button><button onClick={()=>jump("research")}>Research</button><button onClick={()=>jump("prototypes")}>Prototypes</button><button onClick={()=>jump("reflection")}>Reflection</button>
      </> : <>
        <button onClick={()=>jump("about")}>About</button><button onClick={()=>jump("projects")}>Projects</button><button className="nav-case" onClick={goCase}>UX Case Study ↗</button><button onClick={()=>jump("contact")}>Contact</button>
      </>}
    </nav>
  </header>;
}

function Home(){
 const jump=id=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
 return <>
  <section id="home" className="hero section"><div><p className="eyebrow">SOFTWARE DEVELOPER · UI/UX · FULL-STACK</p><h1>Building useful digital experiences with <em>code and design.</em></h1><p className="hero-text">I'm Ana Cericatto, a software developer and IT Innovation & Design student interested in full-stack development, user-centered interfaces, and thoughtful product design.</p><div className="actions"><button className="primary" onClick={()=>jump("projects")}>Explore my work →</button><button className="secondary" onClick={goCase}>Read UX Case Study ↗</button></div></div><div className="hero-image"><img src={`${ASSET_BASE}assets/hero-illustration.jpg`} alt="Illustration of a woman working on a laptop while studying" /></div></section>
  <section id="about" className="section"><div className="section-heading"><p className="eyebrow">01 — ABOUT</p><h2>Technology should solve a real problem.</h2></div><div className="about-grid"><p>My background combines Computer Science with IT Innovation and Design. I enjoy moving between implementation and design: understanding a user's needs, shaping an interface, building the functionality, and refining the result.</p><div className="skills">{["React","JavaScript","TypeScript","Laravel","PHP","C#",".NET","SQL","HTML/CSS","Git","REST APIs","UI/UX"].map(x=><span key={x}>{x}</span>)}</div></div></section>
  <section id="projects" className="section tinted"><div className="section-heading"><p className="eyebrow">02 — SELECTED WORK</p><h2>Projects that show how I think and build.</h2></div><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p[0]}><div className="project-number">0{i+1}</div><p className="project-type">{p[1]}</p><h3>{p[0]}</h3><p>{p[2]}</p><div className="tags">{p[3].map(x=><span key={x}>{x}</span>)}</div>{p[4]&&<a href={p[4]} target="_blank" rel="noreferrer">View on GitHub ↗</a>}</article>)}</div></section>
  <section className="case-teaser section"><div><p className="eyebrow">03 — UX CASE STUDY</p><h2>University Website — Papua New Guinea</h2><p className="lead">Explore the complete design process with research, personas, information architecture, wireframes, visual identity, high-fidelity prototypes, testing, accessibility, and reflection.</p></div><button className="primary large-button" onClick={goCase}>Open the complete case study ↗</button></section>
  <section className="section tinted"><div className="section-heading"><p className="eyebrow">04 — DESIGN APPROACH</p><h2>From problem to interface.</h2></div><div className="process">{["Understand","Define","Explore","Prototype","Test","Refine"].map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}</div></section>
  <section id="contact" className="section contact"><p className="eyebrow">05 — CONTACT</p><h2>Let's build something useful.</h2><p>I'm interested in software development, full-stack applications, and user-centered digital products.</p><div className="contact-links"><a href="mailto:Acericatto8460@conestogac.on.ca">Email ↗</a><a href="https://github.com/AnaCericatto" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/analuizacericatto/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>
 </>;
}

function Gallery({title,items,onOpen}){return <div className="gallery-section"><div className="gallery-heading"><p className="eyebrow">PROJECT ARTIFACTS</p><h3>{title}</h3></div><div className="gallery-grid">{items.map(([src,alt,caption])=><button className="gallery-card" key={src} onClick={()=>onOpen({src,alt,caption})}><img src={`${ASSET_BASE}assets/case-study/${src}`} alt={alt}/><span>{caption}</span></button>)}</div></div>}
function Lightbox({image,close}){if(!image)return null;return <div className="lightbox" onClick={close}><button className="lightbox-close" onClick={close}>×</button><div className="lightbox-content" onClick={e=>e.stopPropagation()}><img src={`/assets/case-study/${image.src}`} alt={image.alt}/><p>{image.caption}</p></div></div>}

function CaseStudy(){
 const [image,setImage]=useState(null); useEffect(()=>window.scrollTo(0,0),[]);
 return <main className="case-page">
  <section className="case-hero section"><p className="eyebrow">UX CASE STUDY · INFO-3130 PORTFOLIO</p><h1>University Website — <em>Papua New Guinea</em></h1><p className="case-hero-text">A complete case-study analysis of a university website concept created for a Graphic Techniques for Software Design project. The original work was a group project; this page documents the process, artifacts, design decisions, and reflection for the current individual portfolio assignment.</p><div className="case-meta"><span>Project type<br/><b>UX / UI Website Design</b></span><span>Original project<br/><b>Group 09 · 2025</b></span><span>Tools<br/><b>Figma · Photoshop · Illustrator</b></span></div></section>
  <section id="overview" className="section case-content"><div className="assignment-section"><p className="eyebrow">01 — PROJECT OVERVIEW</p><h2>Designing an educational platform with a strong cultural identity.</h2><p>The project responded to a brief from the Ministry of Culture of Papua New Guinea for an educational institution focused on preserving language, culture, history, ecology, and Indigenous heritage. The proposed website needed to serve local and international audiences while supporting program discovery, admissions, and student onboarding.</p><p>The design process prioritized clear information structure, responsive layouts, visual identity, and consideration for different bandwidth capabilities.</p></div><div className="two-column"><div><h3>Goals</h3><ul><li>Promote awareness and preservation of natural and cultural resources.</li><li>Communicate Indigenous heritage and historical context.</li><li>Support local and international prospective students.</li><li>Provide clear program and admissions information.</li><li>Support employment and research opportunities.</li></ul></div><div><h3>Target audience</h3><ul><li><b>Local students:</b> prospective learners interested in higher education and cultural preservation.</li><li><b>International students:</b> learners seeking programs connected to anthropology, sociology, archaeology, and Indigenous cultures.</li><li><b>Potential employees:</b> prospective academic, administrative, and hospitality staff.</li></ul></div></div><Gallery title="Research & visual identity" items={gallery.research} onOpen={setImage}/></section>
  <section id="research" className="section tinted case-content"><div className="assignment-section"><p className="eyebrow">02 — USER RESEARCH & DISCOVERY</p><h2>Research connected the interface to the people and place.</h2><p>The original project documented visual research around Papua New Guinea's flag, emblem, bird of paradise, Indigenous clothing, traditional patterns, and landscape. These references established a visual language intended to connect the educational institution to its cultural context.</p></div><Gallery title="Personas" items={gallery.personas} onOpen={setImage}/><div className="insight-grid"><div><span>INSIGHT 01</span><h3>Prospective students need task-oriented information.</h3><p>Admissions, program details, calendars, and next steps need to be easy to locate.</p></div><div><span>INSIGHT 02</span><h3>Identity should support usability.</h3><p>Cultural references need consistent placement, contrast, hierarchy, and restrained use.</p></div><div><span>INSIGHT 03</span><h3>Connectivity influences visual strategy.</h3><p>The original rationale considered different bandwidth capabilities and preferred static imagery over large video assets.</p></div></div></section>
  <section className="section case-content"><div className="assignment-section"><p className="eyebrow">03 — PROBLEM STATEMENT</p><h2>How might we make university information easier to discover without losing cultural identity?</h2><p className="problem-statement">Prospective students need a clear and accessible way to discover programs, understand admission requirements, and explore university information because educational websites can contain large amounts of information that are difficult to navigate. At the same time, the institution needs to communicate its cultural identity and mission without compromising usability.</p></div><div className="assignment-section"><p className="eyebrow">04 — IDEATION & INFORMATION ARCHITECTURE</p><h2>The navigation was organized around likely user tasks.</h2><p>The content plan proposed Home, Academic Courses, Admissions, and About Us. Academic Courses could branch into Full-Time and Part-Time options, while Admissions could separate Domestic and International pathways. Course pages were planned around Description, Admissions, Calendar, and Book a Tour.</p><div className="flow"><span>Home</span><b>→</b><span>Academic Courses</span><b>→</b><span>Program / Course</span><b>→</b><span>Details + Admissions + Calendar</span></div></div><Gallery title="Wireframes — from structure to hierarchy" items={gallery.wireframes} onOpen={setImage}/></section>
  <section id="prototypes" className="section tinted case-content"><div className="assignment-section"><p className="eyebrow">05 — PROTOTYPING</p><h2>Wireframes became a visual system.</h2><p>The high-fidelity prototypes developed navigation, banners, content blocks, campus imagery, program information, calls to action, and footer structure while keeping the visual direction consistent across page types.</p></div><Gallery title="High-fidelity prototypes" items={gallery.prototypes} onOpen={setImage}/></section>
    <section className="section tinted case-content"><div className="assignment-section"><p className="eyebrow">06 — FINAL SOLUTION & DESIGN BRIEF</p><h2>A responsive information hub balancing clarity and cultural expression.</h2></div><div className="brief-grid"><div><h3>Goals & audience</h3><p>Help local and international students understand the institution, discover programs, and navigate admissions while also serving potential employees and the public.</p></div><div><h3>UI rationale</h3><p>Use strong hierarchy, consistent navigation, structured sections, prominent calls to action, and a restrained palette based on documented references.</p></div><div><h3>Accessibility</h3><p>Maintain readable contrast, meaningful headings, descriptive image alternatives, keyboard-accessible navigation, responsive layouts, and do not rely on colour alone.</p></div><div><h3>One key lesson</h3><p>Visual identity becomes more effective when connected to a clear user task. Research should influence both what the interface looks like and how information is organized.</p></div></div></section>
  <section id="reflection" className="section case-content"><div className="assignment-section"><p className="eyebrow">07 — REFLECTION</p><h2>What I would carry into the next iteration.</h2><p>The project showed the value of moving from content planning and rough structure into visual prototyping before implementation. It also highlighted the tension between creating a distinctive visual identity and keeping a content-heavy educational website easy to navigate.</p><p>For the current portfolio assignment, the next step is validating the original assumptions with real usability testing and documenting how those findings change the design. That makes the case study a process rather than simply a gallery of finished screens.</p></div><button className="secondary back-button" onClick={goHome}>← Back to portfolio</button></section>
  <Lightbox image={image} close={()=>setImage(null)}/>
 </main>;
}

function App(){const [route,setRoute]=useState(window.location.hash==="#/case-study"?"case":"home");useEffect(()=>{const f=()=>setRoute(window.location.hash==="#/case-study"?"case":"home");window.addEventListener("hashchange",f);return()=>window.removeEventListener("hashchange",f)},[]);return <><Header caseStudy={route==="case"}/>{route==="case"?<CaseStudy/>:<Home/>}<footer><span>© 2026 Ana Cericatto</span><span>Designed & built with React</span></footer></>}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
