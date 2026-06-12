import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Wheat, Truck, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const businessItems = [
  { to: "/businesses#bread", label: "Bintinlaye Special Bread", desc: "Artisan breads, daily fresh.", Icon: Wheat },
  { to: "/businesses#ventures", label: "Bintinlaye Ventures", desc: "Wholesale flour & ingredients.", Icon: Truck },
  { to: "/businesses#gym", label: "Bintinlaye Gym Center", desc: "Luxury fitness experience.", Icon: Dumbbell },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/businesses", label: "Businesses", hasDropdown: true },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const [bizMobileOpen, setBizMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setBizOpen(false);
    setBizMobileOpen(false);
  }, [location.pathname, location.hash]);

  const openBiz = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setBizOpen(true);
  };
  const scheduleCloseBiz = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setBizOpen(false), 160);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 transition-all duration-500 ${
          scrolled ? "glass rounded-2xl" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-3 py-3">
          <img src={logo} alt="Bintinlaye" className="h-9 w-9 rounded-full ring-1 ring-[color:var(--gold)]/40" />
          <div className="leading-tight">
            <div className="font-display text-lg gold-text">Bintinlaye</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Group</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={openBiz}
                onMouseLeave={scheduleCloseBiz}
              >
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors ${
                      isActive ? "mirror-text" : "text-foreground/80 hover:mirror-text"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${bizOpen ? "rotate-180" : ""}`} />
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-white/20 via-white/80 to-white/20"
                        />
                      )}
                    </>
                  )}
                </NavLink>
                <AnimatePresence>
                  {bizOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-[320px] -translate-x-1/2"
                    >
                      <div className="glass rounded-2xl p-2 ring-1 ring-white/10">
                        {businessItems.map((b) => (
                          <Link
                            key={b.to}
                            to={b.to}
                            onClick={() => setBizOpen(false)}
                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                          >
                            <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[color:var(--gold)]/15 text-[color:var(--gold)] ring-1 ring-[color:var(--gold)]/30">
                              <b.Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:mirror-text">
                                {b.label}
                              </div>
                              <div className="text-xs text-muted-foreground">{b.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm tracking-wide transition-colors ${
                    isActive ? "mirror-text" : "text-foreground/80 hover:mirror-text"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-white/20 via-white/80 to-white/20"
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-medium text-[color:var(--charcoal)] transition-transform hover:scale-105 hover:mirror-glow lg:inline-flex"
        >
          Get in touch
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full glass p-2 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 lg:hidden"
          >
            <div className="glass rounded-2xl p-4">
              <ul className="flex flex-col">
                {links.map((l) =>
                  l.hasDropdown ? (
                    <li key={l.to}>
                      <div className="flex items-stretch">
                        <NavLink
                          to={l.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `flex-1 rounded-lg px-4 py-3 text-base transition-colors ${
                              isActive ? "bg-white/10 mirror-text" : "text-foreground/85 hover:bg-white/5"
                            }`
                          }
                        >
                          {l.label}
                        </NavLink>
                        <button
                          aria-label="Toggle businesses"
                          onClick={() => setBizMobileOpen((v) => !v)}
                          className="ml-1 grid w-11 place-items-center rounded-lg text-foreground/70 hover:bg-white/5"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${bizMobileOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {bizMobileOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-3"
                          >
                            {businessItems.map((b) => (
                              <li key={b.to}>
                                <Link
                                  to={b.to}
                                  onClick={() => setOpen(false)}
                                  className="flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-white/5 hover:mirror-text"
                                >
                                  <b.Icon className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" />
                                  <span>{b.label}</span>
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={l.to}>
                      <NavLink
                        to={l.to}
                        end={l.to === "/"}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-3 text-base transition-colors ${
                            isActive ? "bg-white/10 mirror-text" : "text-foreground/85 hover:bg-white/5"
                          }`
                        }
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-full bg-[color:var(--gold)] px-5 py-3 text-center font-medium text-[color:var(--charcoal)]"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}