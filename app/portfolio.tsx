"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Code2,
  Layers3,
  Menu,
  X,
  Globe2,
  GitFork as Github,
  BriefcaseBusiness as Linkedin,
  Copy,
  Check,
  Database,
  Smartphone,
  Terminal,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  contact,
  copy,
  projects,
  type Language,
  type Project,
} from "./content";
import Scene from "./scene";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const [activeSection, setActiveSection] = useState("home");
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const projectTrigger = useRef<HTMLButtonElement | null>(null);
  const t = copy[lang];
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aa-portfolio-language");
      if (saved === "ar" || saved === "en") setLang(saved);
    } catch {
      /* Storage is optional. */
    }
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title =
      lang === "ar"
        ? "عبد الكريم الحلاق — مطوّر ويب وتطبيقات"
        : "Abdulkareem Alhallak — Full Stack Developer";
  }, [lang]);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActiveSection(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    for (const id of ["home", "work", "about", "expertise", "contact"]) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  function changeLanguage() {
    const next = lang === "en" ? "ar" : "en";
    setLang(next);
    try {
      localStorage.setItem("aa-portfolio-language", next);
    } catch {}
  }
  async function copyEmail() {
    let copied = false;
    try {
      await navigator.clipboard.writeText(contact.email);
      copied = true;
    } catch {}
    if (!copied) {
      // Keep copy usable in local HTTP previews and older browsers.
      const previousFocus = document.activeElement as HTMLElement | null;
      const input = document.createElement("textarea");
      input.value = contact.email;
      input.readOnly = true;
      input.style.cssText =
        "position:fixed;inset:0;opacity:0;pointer-events:none";
      document.body.appendChild(input);
      input.select();
      try {
        copied = document.execCommand("copy");
      } catch {
      } finally {
        input.remove();
        previousFocus?.focus({ preventScroll: true });
      }
    }
    setCopyStatus(copied ? "copied" : "failed");
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus("idle"), 4000);
  }
  const navigation = [
    ["work", t.work],
    ["about", t.about],
    ["expertise", t.expertise],
    ["contact", t.contact],
  ];
  const expertise = [
    {
      icon: Code2,
      title: t.frontend,
      body: t.frontendBody,
      skills: ["React", "JavaScript", "HTML / CSS", "Tailwind CSS"],
    },
    {
      icon: Terminal,
      title: t.backend,
      body: t.backendBody,
      skills: ["Laravel", "Node.js", "REST APIs", "PHP"],
    },
    {
      icon: Smartphone,
      title: t.mobile,
      body: t.mobileBody,
      skills: ["Flutter", "Dart", "Riverpod", "Localization"],
    },
    {
      icon: Database,
      title: t.delivery,
      body: t.deliveryBody,
      skills: ["PostgreSQL", "MySQL", "SQLite", "Docker", "Git"],
    },
  ];
  return (
    <div className="portfolio" dir={lang === "ar" ? "rtl" : "ltr"}>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#home" className="brand" aria-label={t.name} dir="ltr">
            <span className="monogram">
              aa<span>.</span>
            </span>
            <span className="brand-caption">
              ABDULKAREEM
              <br />
              ALHALLAK
            </span>
          </a>
          <nav className="desktop-nav" aria-label={t.nav}>
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <Button
              variant="ghost"
              className="language-button"
              onClick={changeLanguage}
              aria-label={
                lang === "en" ? "Switch to Arabic" : "Switch to English"
              }
            >
              <Globe2 size={16} />
              <span lang={lang === "en" ? "ar" : "en"}>
                {lang === "en" ? "عربي" : "EN"}
              </span>
            </Button>
            <a className="header-contact" href="#contact">
              {t.talk}
              <ArrowUpRight size={16} />
            </a>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="mobile-menu"
                  aria-label={t.menu}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="navigation-sheet"
                side={lang === "ar" ? "left" : "right"}
                showCloseButton={false}
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                <div className="sheet-top">
                  <SheetTitle>{t.name}</SheetTitle>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={
                        lang === "ar" ? "إغلاق القائمة" : "Close navigation"
                      }
                    >
                      <X />
                    </Button>
                  </SheetClose>
                </div>
                <SheetDescription>{t.role}</SheetDescription>
                <nav aria-label={t.nav}>
                  {navigation.map(([id, label], i) => (
                    <a
                      href={`#${id}`}
                      key={id}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>0{i + 1}</span>
                      {label}
                      <ArrowUpRight size={22} />
                    </a>
                  ))}
                </nav>
                <a className="sheet-email" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main id="main">
        <section
          id="home"
          className="hero shell"
          aria-labelledby="hero-heading"
        >
          <div className="hero-copy">
            <p className="availability">
              <span />
              {t.available}
            </p>
            <p className="hero-intro">{t.role}</p>
            <h1 id="hero-heading">
              {t.name}
            </h1>
            <p className="hero-description">{t.heroBody}</p>
            <div className="hero-buttons">
              <a href="#work" className="button-primary">
                {t.viewWork}
                <ArrowUpRight size={19} />
              </a>
              <a
                className="resume-link"
                href={`${basePath}/abdulkareem-alhallak-cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.resume}
                <Download size={16} />
              </a>
            </div>
            <div className="hero-social">
              <span>{t.role}</span>
              <i />
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <Scene lang={lang} />
          </div>
          <div className="hero-bottom">
            <span className="location">
              <Globe2 size={15} />
              {t.based}
            </span>
            <span className="hero-discipline">{t.remote}</span>
            <a href="#work" className="scroll-link">
              {t.scroll}
              <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <section
          id="work"
          className="section shell"
          aria-labelledby="work-heading"
        >
          <p className="eyebrow">{t.workKicker}</p>
          <div className="section-heading">
            <h2 id="work-heading">
              {t.work}
            </h2>
            <p>{t.workIntro}</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <Fragment key={project.id}>
              {(i === 0 || i === 5) && <div className="work-group-heading"><h3>{lang === "ar" ? (i === 0 ? "الأنظمة والتطبيقات" : "المشاريع الأكاديمية والتدريبية") : (i === 0 ? "Products & platforms" : "Academic & training projects")}</h3><span>{i === 0 ? "01 — 05" : "06 — 10"}</span></div>}
              <article
                className={`project-card ${project.color}`}
                key={project.id}
              >
                <button
                  className="project-visual"
                  aria-label={`${t.details}: ${project.name[lang]}`}
                  onClick={(event) => {
                    projectTrigger.current = event.currentTarget;
                    setActiveProject(project);
                  }}
                >
                  <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="project-status">{project.status[lang]}</span>
                  <div className="project-identity">
                    {project.image ? (
                      <img
                        src={`${basePath}${project.image}`}
                        alt=""
                        width="160"
                        height="160"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <strong className="alhallak-mark" dir="auto">
                        {project.mark}
                        <small>{project.stack[0]}</small>
                      </strong>
                    )}
                  </div>
                  <span className="project-visual-name">
                    {project.category[lang]}
                  </span>
                  <span className="project-open">
                    <ArrowUpRight size={22} />
                  </span>
                </button>
                <div className="project-info">
                  <p className="project-category">{project.category[lang]}</p>
                  <h3>
                    <button
                      onClick={(event) => {
                        projectTrigger.current = event.currentTarget;
                        setActiveProject(project);
                      }}
                    >
                      {project.name[lang]}
                      <ArrowUpRight size={22} />
                    </button>
                  </h3>
                  <p className="project-summary">{project.summary[lang]}</p>
                  <ul className="tech-tags" dir="ltr">
                    {project.stack.slice(0, 3).map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </article>
              </Fragment>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="about-section"
          aria-labelledby="about-heading"
        >
          <div className="shell section about-grid">
            <div>
              <p className="eyebrow">{t.aboutKicker}</p>
              <h2 id="about-heading">
                {t.about}
              </h2>
              <div className="about-signature">
                <span className="signature" dir="ltr">
                  Abdulkareem.
                </span>
                <span>
                  {t.name}
                  <small>{t.role}</small>
                </span>
              </div>
            </div>
            <div className="about-content">
              <p className="about-lead">{t.aboutBody}</p>
              <p>{t.aboutBody2}</p>
              <div className="principles">
                {[
                  [t.principle1, t.principleBody1],
                  [t.principle2, t.principleBody2],
                  [t.principle3, t.principleBody3],
                ].map(([title, text], i) => (
                  <div key={title}>
                    <span>0{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="expertise"
          className="section shell"
          aria-labelledby="expertise-heading"
        >
          <p className="eyebrow">{t.expertiseKicker}</p>
          <h2 id="expertise-heading">
            {t.expertiseTitle} <em>{t.expertiseAccent}</em>
          </h2>
          <div className="expertise-grid">
            {expertise.map(({ icon: Icon, title, body, skills }, i) => (
              <article key={title}>
                <div className="expertise-top">
                  <Icon size={25} strokeWidth={1.35} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
                <ul className="tech-tags" dir="ltr">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="shell contact-inner">
            <p className="eyebrow">{t.contactKicker}</p>
            <div className="contact-grid">
              <div>
                <h2 id="contact-heading">
                  {t.contact}
                </h2>
                <p className="contact-description">{t.contactBody}</p>
                <a className="button-primary" href={`mailto:${contact.email}`}>
                  {t.email}
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <div className="contact-links">
                <div className="email-line">
                  <a dir="ltr" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    aria-label={t.copyEmail}
                  >
                    {copyStatus === "copied" ? <Check /> : <Copy />}
                  </Button>
                </div>
                <p className="copy-status" role="status">
                  {copyStatus === "copied"
                    ? t.copied
                    : copyStatus === "failed"
                      ? t.copyFailed
                      : ""}
                </p>
                {[
                  ["GitHub", contact.github],
                  ["LinkedIn", contact.linkedin],
                  ["WhatsApp", contact.whatsapp],
                ].map(([label, url]) => (
                  <a
                    className="social-row"
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={19} />
                  </a>
                ))}
              </div>
            </div>
            <footer>
              <a className="footer-name" href="#home">
                {t.name}
                <span>.</span>
              </a>
              <span>
                © {new Date().getFullYear()} · {t.footer}
              </span>
              <a href="#home">
                {t.back}
                <ArrowUp size={15} />
              </a>
            </footer>
          </div>
        </section>
      </main>
      <Sheet
        open={!!activeProject}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      >
        <SheetContent
          side={lang === "ar" ? "left" : "right"}
          className="project-sheet"
          showCloseButton={false}
          dir={lang === "ar" ? "rtl" : "ltr"}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            projectTrigger.current?.focus();
          }}
        >
          {activeProject && (
            <>
              <div className="sheet-top">
                <span className="eyebrow">{activeProject.category[lang]}</span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label={t.close}>
                    <X />
                  </Button>
                </SheetClose>
              </div>
              <p className="detail-status">{activeProject.status[lang]}</p>
              <SheetTitle className="detail-title">
                {activeProject.name[lang]}
              </SheetTitle>
              <SheetDescription className="detail-summary">
                {activeProject.summary[lang]}
              </SheetDescription>
              <div className="detail-section">
                <h3>{t.problem}</h3>
                <p>{activeProject.problem[lang]}</p>
              </div>
              <div className="detail-section">
                <h3>{t.implementation}</h3>
                <p>{activeProject.implementation[lang]}</p>
              </div>
              <div className="detail-section">
                <h3>{t.builtWith}</h3>
                <ul className="tech-tags" dir="ltr">
                  {activeProject.stack.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-actions">
                {activeProject.demo && <a className="text-link" href={activeProject.demo} target="_blank" rel="noopener noreferrer">{lang === "ar" ? "عرض المشروع الأصلي" : "Original project showcase"}<ArrowUpRight size={18} /></a>}
                {activeProject.live && (
                  <a
                    className="button-primary"
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.live}
                    <ArrowUpRight size={18} />
                  </a>
                )}
                {activeProject.private ? (
                  <p className="private-note">
                    <Layers3 size={16} />
                    {t.private}
                  </p>
                ) : (
                  activeProject.github && (
                    <a
                      className="text-link"
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      {t.source}
                      <ArrowUpRight size={16} />
                    </a>
                  )
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
