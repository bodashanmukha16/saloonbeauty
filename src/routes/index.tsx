import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Scissors, Sparkles, Palette, Hand, Flower2, Wand2,
  Star, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube,
  MessageCircle, ArrowUp, ChevronRight, Check, Menu, X, Heart,
  ShieldCheck, Award, Users, Leaf,
} from "lucide-react";
import heroSalon from "@/assets/hero-salon.jpg";
import gBridal1 from "@/assets/gallery-bridal-1.jpg";
import gBridal2 from "@/assets/gallery-bridal-2.jpg";
import gHair from "@/assets/gallery-hair.jpg";
import gHair2 from "@/assets/gallery-hair-2.jpg";
import gMakeup from "@/assets/gallery-makeup.jpg";
import gSkin from "@/assets/gallery-skin.jpg";
import gNails from "@/assets/gallery-nails.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Radiance Beauty Studio — Enhancing Your Natural Beauty" },
      {
        name: "description",
        content:
          "Premium ladies beauty parlour in Mumbai. Bridal makeup, hair, skin, nails and more. Book your luxurious salon appointment today.",
      },
      { property: "og:title", content: "Radiance Beauty Studio" },
      { property: "og:description", content: "Enhancing your natural beauty with premium salon services." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  { cat: "Hair", icon: Scissors, items: [
    { name: "Hair Cut", duration: "45 min", price: 599 },
    { name: "Hair Spa", duration: "60 min", price: 1499 },
    { name: "Hair Coloring", duration: "120 min", price: 2999 },
    { name: "Hair Smoothening", duration: "180 min", price: 4999 },
    { name: "Keratin Treatment", duration: "180 min", price: 6499 },
  ]},
  { cat: "Skin", icon: Sparkles, items: [
    { name: "Cleanup", duration: "30 min", price: 699 },
    { name: "Facial", duration: "60 min", price: 1299 },
    { name: "Hydra Facial", duration: "75 min", price: 2499 },
    { name: "Detan", duration: "45 min", price: 999 },
    { name: "Bleach", duration: "30 min", price: 599 },
  ]},
  { cat: "Makeup", icon: Palette, items: [
    { name: "Party Makeup", duration: "60 min", price: 2499 },
    { name: "Bridal Makeup", duration: "180 min", price: 14999 },
    { name: "Engagement Makeup", duration: "120 min", price: 8999 },
    { name: "HD Makeup", duration: "90 min", price: 4999 },
    { name: "Airbrush Makeup", duration: "120 min", price: 7999 },
  ]},
  { cat: "Hands & Feet", icon: Hand, items: [
    { name: "Manicure", duration: "45 min", price: 599 },
    { name: "Pedicure", duration: "45 min", price: 799 },
    { name: "Nail Art", duration: "60 min", price: 1299 },
    { name: "Gel Nails", duration: "75 min", price: 1899 },
  ]},
  { cat: "Waxing", icon: Flower2, items: [
    { name: "Full Body", duration: "90 min", price: 2499 },
    { name: "Rica Wax", duration: "60 min", price: 1499 },
    { name: "Chocolate Wax", duration: "60 min", price: 1299 },
    { name: "Face Wax", duration: "20 min", price: 399 },
  ]},
  { cat: "Threading", icon: Wand2, items: [
    { name: "Eyebrows", duration: "10 min", price: 99 },
    { name: "Upper Lip", duration: "5 min", price: 49 },
    { name: "Chin", duration: "5 min", price: 79 },
  ]},
];

const galleryItems = [
  { src: gBridal1, cat: "Bridal", alt: "Bridal makeup" },
  { src: gHair, cat: "Hair", alt: "Hair styling" },
  { src: gMakeup, cat: "Makeup", alt: "Makeup flat lay" },
  { src: gNails, cat: "Nail Art", alt: "Nail polish" },
  { src: gSkin, cat: "Skin Care", alt: "Skin care setup" },
  { src: gBridal2, cat: "Bridal", alt: "Bridal look" },
  { src: gHair2, cat: "Hair", alt: "Hair spa" },
  { src: gSkin, cat: "Skin Care", alt: "Facial products" },
];

const packages = [
  { name: "Silver", price: 14999, popular: false, includes: ["Party Makeup", "Basic Hairstyle", "Manicure", "Cleanup"] },
  { name: "Gold", price: 24999, popular: false, includes: ["HD Makeup", "Hairstyle", "Saree Draping", "Mani + Pedi", "Facial"] },
  { name: "Platinum", price: 39999, popular: true, includes: ["Airbrush Makeup", "Hairstyle", "Saree Draping", "Nail Art", "Hydra Facial", "Trial Session"] },
  { name: "Diamond", price: 59999, popular: false, includes: ["Bridal Airbrush", "Premium Hair", "Saree Draping", "Full Nail Art", "Gold Facial", "2 Trial Sessions", "Pre-bridal Package"] },
];

const comparisonFeatures = [
  { key: "makeup", label: "Makeup Type" },
  { key: "hairstyle", label: "Hairstyle" },
  { key: "draping", label: "Saree Draping" },
  { key: "nails", label: "Nail Art" },
  { key: "facial", label: "Facial" },
  { key: "trial", label: "Trial Session" },
  { key: "location", label: "On-Location Service" },
  { key: "prebridal", label: "Pre-Bridal Package" },
  { key: "addons", label: "Add-ons Included" },
];

const comparisonMatrix: Record<string, Record<string, string | boolean>> = {
  Silver: {
    makeup: "Party Makeup",
    hairstyle: "Basic",
    draping: false,
    nails: "Manicure only",
    facial: "Cleanup",
    trial: false,
    location: false,
    prebridal: false,
    addons: "None",
  },
  Gold: {
    makeup: "HD Makeup",
    hairstyle: "Advanced",
    draping: true,
    nails: "Mani + Pedi",
    facial: "Standard Facial",
    trial: "1 Trial",
    location: "Within 5 km",
    prebridal: false,
    addons: "Saree Draping",
  },
  Platinum: {
    makeup: "Airbrush Makeup",
    hairstyle: "Premium",
    draping: true,
    nails: "Full Nail Art",
    facial: "Hydra Facial",
    trial: "1 Trial",
    location: "Within 15 km",
    prebridal: false,
    addons: "Nail Art + Draping",
  },
  Diamond: {
    makeup: "Bridal Airbrush",
    hairstyle: "Celebrity Style",
    draping: true,
    nails: "Luxury Nail Art",
    facial: "Gold Facial",
    trial: "2 Trials",
    location: "Anywhere in Mumbai",
    prebridal: true,
    addons: "Pre-Bridal + 2 Trials",
  },
};

const testimonials = [
  { name: "Priya Sharma", rating: 5, text: "The bridal makeup was flawless — I've never felt more beautiful. The team is incredibly talented and made my day unforgettable." },
  { name: "Anjali Verma", rating: 5, text: "Best hydra facial in the city! My skin has never looked this radiant. Truly a luxurious experience from start to finish." },
  { name: "Neha Kapoor", rating: 5, text: "From hair to nails, everything is done with precision and care. The ambience feels like a five-star retreat." },
  { name: "Sneha Rao", rating: 5, text: "The keratin treatment gave me the silky, healthy hair I always dreamed of. Highly recommend Radiance!" },
];

const faqs = [
  { q: "Do I need to book an appointment in advance?", a: "Yes, we recommend booking at least 2-3 days in advance, especially for bridal and premium services, to guarantee your preferred time slot and beautician." },
  { q: "What products do you use?", a: "We use only certified, premium and hygienic brands including L'Oréal Professional, Kérastase, MAC, Bobbi Brown, and more. All tools are sterilized after each use." },
  { q: "Do you offer bridal packages at home?", a: "Yes, our Platinum and Diamond bridal packages include on-location services. Additional travel charges may apply based on distance." },
  { q: "What is your cancellation policy?", a: "You can reschedule or cancel free of charge up to 24 hours before your appointment. Late cancellations may incur a small fee." },
  { q: "Are your products safe for sensitive skin?", a: "Absolutely. Our beauticians perform a quick consultation before every service and offer patch tests for sensitive-skin clients." },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);
  const [trialBooked, setTrialBooked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filters = ["All", "Bridal", "Hair", "Makeup", "Nail Art", "Skin Care"];
  const visibleGallery = galleryFilter === "All" ? galleryItems : galleryItems.filter(g => g.cat === galleryFilter);

  return (
    <div className="min-h-screen text-foreground">
      {/* Nav */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-rose)] text-white shadow-soft">
              <Flower2 className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">Radiance<span className="gradient-text"> Beauty</span></span>
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {["Home","About","Services","Gallery","Packages","Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-foreground/80 transition hover:text-primary">{l}</a>
            ))}
            <a href="#book" className="rounded-full bg-[image:var(--gradient-rose)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:shadow-elegant hover:-translate-y-0.5">Book Now</a>
          </div>
          <button aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)} className="lg:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="glass border-t border-border lg:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {["Home","About","Services","Gallery","Packages","Contact","Book"].map(l => (
                <a key={l} onClick={() => setMenuOpen(false)} href={`#${l.toLowerCase()}`} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-secondary">{l}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden">
        <img src={heroSalon} alt="Luxurious salon interior" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative mx-auto grid w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-2xl text-white animate-fade-up">
            <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white">
              <Sparkles className="h-3.5 w-3.5" /> Mumbai's most-loved beauty studio
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Enhancing Your <em className="not-italic gradient-text">Natural</em> Beauty
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Professional beauty services designed to make you look and feel your absolute best — crafted by expert beauticians in a serene, luxurious setting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-rose)] px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:-translate-y-0.5">
                Book Appointment <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#services" className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/25">
                View Services
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8">
              <Stat n="10K+" label="Happy Clients" />
              <Stat n="12+" label="Years Experience" />
              <Stat n="4.9" label="Google Rating" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="Our Services" title="Beauty Crafted for You" sub="A complete menu of premium treatments — hair, skin, makeup, nails and more." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ cat, icon: Icon, items }) => (
            <article key={cat} className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-blush)] text-primary transition group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{cat}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {items.map(it => (
                  <li key={it.name} className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0">
                    <div>
                      <div className="font-medium">{it.name}</div>
                      <div className="text-xs text-muted-foreground">{it.duration}</div>
                    </div>
                    <span className="text-sm font-semibold text-primary">₹{it.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[image:var(--gradient-blush)]/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Our Story" title="A Sanctuary of Beauty & Care" sub="" align="left" />
            <p className="mt-6 text-muted-foreground">
              Founded in 2013, Radiance Beauty Studio began as a passion project by celebrity beautician <em>Meera Kapoor</em>. Today, we're a team of certified experts committed to redefining self-care through personalised, luxury beauty rituals.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every service is crafted with premium, hygienic products — from L'Oréal Professional and Kérastase to MAC and Bobbi Brown — ensuring you leave feeling as radiant as you are.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Feature icon={ShieldCheck} title="Hygienic & Safe" text="Sanitised tools, single-use disposables." />
              <Feature icon={Award} title="Certified Experts" text="12+ years of professional expertise." />
              <Feature icon={Leaf} title="Premium Products" text="Only trusted, high-end brands." />
              <Feature icon={Users} title="Personalised Care" text="Tailored consultations for every guest." />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={heroSalon} alt="Salon" loading="lazy" className="col-span-2 h-72 w-full rounded-3xl object-cover shadow-elegant" />
            <img src={gMakeup} alt="Makeup" loading="lazy" className="h-56 w-full rounded-3xl object-cover shadow-soft" />
            <img src={gSkin} alt="Skin care" loading="lazy" className="h-56 w-full rounded-3xl object-cover shadow-soft" />
          </div>
        </div>
      </section>

      {/* Beauticians */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="The Team" title="Meet Our Beauticians" sub="Award-winning artists who treat your beauty as an art form." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Meera Kapoor", role: "Founder & Bridal Artist", exp: "15 yrs" },
            { name: "Aditi Rao", role: "Senior Hair Stylist", exp: "10 yrs" },
            { name: "Sonia Mehta", role: "Skin Specialist", exp: "8 yrs" },
            { name: "Rhea Nair", role: "Nail Artist", exp: "6 yrs" },
          ].map(p => (
            <div key={p.name} className="rounded-3xl bg-card p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-full bg-[image:var(--gradient-rose)] text-3xl font-display text-white">
                {p.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-display text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-primary">{p.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.exp} experience</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Moments of Radiance" sub="A glimpse of our recent transformations." />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setGalleryFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  galleryFilter === f ? "bg-[image:var(--gradient-rose)] text-white shadow-soft" : "bg-card text-foreground hover:bg-secondary"
                }`}
              >{f}</button>
            ))}
          </div>
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {visibleGallery.map((g, i) => (
              <button key={i} onClick={() => setLightbox(g.src)} className="group block w-full overflow-hidden rounded-3xl shadow-soft">
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm">
          <img src={lightbox} alt="Preview" className="max-h-[90vh] max-w-full rounded-2xl shadow-elegant" />
          <button aria-label="Close" className="absolute right-6 top-6 text-white"><X className="h-8 w-8" /></button>
        </div>
      )}

      {/* Bridal packages */}
      <section id="packages" className="relative overflow-hidden bg-[image:var(--gradient-blush)]/50">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[image:var(--gradient-rose)] opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[image:var(--gradient-rose)] opacity-15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Bridal Packages</span>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
                Your Dream Day, <em className="not-italic gradient-text">Perfected</em>
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                From your first mehendi to the final send-off — our signature bridal packages cover every look, every moment. Start with a complimentary consultation and lock in your date with a trial session.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#book" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-rose)] px-7 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:-translate-y-0.5">
                  <Sparkles className="h-4 w-4" /> Book a Trial Session
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a href="https://wa.me/919876543210?text=Hi%20Radiance%2C%20I%27d%20like%20a%20bridal%20consultation" className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-secondary">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Consultation
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                {[
                  { icon: ShieldCheck, t: "Trial Included" },
                  { icon: Heart, t: "On-Location Available" },
                  { icon: Award, t: "Award-Winning Artists" },
                ].map(({icon: I, t}) => (
                  <div key={t} className="flex items-center gap-2 text-foreground/80">
                    <I className="h-4 w-4 text-primary" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={gBridal1} alt="Bridal makeup" loading="lazy" className="h-80 w-full rounded-3xl object-cover shadow-elegant sm:h-96" />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-elegant sm:block">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-1 text-sm font-semibold">500+ Radiant Brides</p>
                <p className="text-xs text-muted-foreground">Trusted across Mumbai</p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map(p => (
              <div key={p.name} className={`relative rounded-3xl border p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant ${p.popular ? "border-primary bg-[image:var(--gradient-rose)] text-white" : "border-border bg-card"}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-soft">Most Popular</span>}
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <div className={`mt-3 font-display text-4xl font-bold ${p.popular ? "" : "gradient-text"}`}>₹{p.price.toLocaleString()}</div>
                <p className={`mt-1 text-xs ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>All-inclusive · Trial available</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.includes.map(inc => (
                    <li key={inc} className="flex gap-2"><Check className={`h-4 w-4 shrink-0 ${p.popular ? "text-white" : "text-primary"}`} />{inc}</li>
                  ))}
                </ul>
                <a href="#book" className={`mt-7 block rounded-full px-5 py-2.5 text-center text-sm font-semibold transition ${p.popular ? "bg-white text-primary hover:bg-white/90" : "bg-[image:var(--gradient-rose)] text-white hover:opacity-90"}`}>Book Package</a>
              </div>
            ))}
          </div>

          {/* Side-by-side package comparison */}
          <div className="mt-20">
            <div className="mb-8 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Compare Packages</span>
              <h3 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Find Your Perfect Bridal Plan</h3>
              <p className="mt-3 mx-auto max-w-2xl text-sm text-muted-foreground">Compare services, add-ons, and pricing side-by-side to choose the package that matches your dream day.</p>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-soft">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/40">
                    <th className="px-5 py-4 text-left font-display text-base font-semibold">Features</th>
                    {packages.map(p => (
                      <th key={p.name} className={`px-5 py-4 text-center font-display text-base font-semibold ${p.popular ? "text-primary" : ""}`}>
                        {p.name}
                        {p.popular && <span className="ml-2 inline-block rounded-full bg-[image:var(--gradient-rose)] px-2 py-0.5 text-[10px] font-semibold text-white">POPULAR</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr key={feature.key} className={idx % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-5 py-3.5 font-medium text-foreground">{feature.label}</td>
                      {packages.map(p => {
                        const value = comparisonMatrix[p.name][feature.key];
                        return (
                          <td key={p.name} className={`px-5 py-3.5 text-center ${p.popular ? "bg-primary/[0.03]" : ""}`}>
                            {typeof value === "boolean" ? (
                              value ? <Check className="mx-auto h-5 w-5 text-primary" /> : <span className="text-muted-foreground/50">—</span>
                            ) : (
                              <span className="text-foreground/90">{value}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="border-t border-border bg-secondary/40">
                    <td className="px-5 py-4 font-display text-base font-semibold">Starting Price</td>
                    {packages.map(p => (
                      <td key={p.name} className={`px-5 py-4 text-center font-display text-lg font-bold ${p.popular ? "text-primary" : "gradient-text"}`}>
                        ₹{p.price.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-5 py-4"></td>
                    {packages.map(p => (
                      <td key={p.name} className="px-5 py-4 text-center">
                        <a href="#book" className={`inline-flex items-center justify-center gap-1 rounded-full px-4 py-2 text-xs font-semibold transition ${p.popular ? "bg-[image:var(--gradient-rose)] text-white shadow-soft hover:shadow-elegant" : "border border-primary/40 text-primary hover:bg-secondary"}`}>
                          Book {p.name}
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Prominent trial CTA banner */}
          <div className="mt-16 overflow-hidden rounded-3xl bg-[image:var(--gradient-rose)] p-8 text-white shadow-elegant sm:p-12">
            <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr] sm:items-center">
              <div>
                <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles className="h-3.5 w-3.5" /> Limited slots this season
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Book a Complimentary Bridal Trial</h3>
                <p className="mt-3 max-w-xl text-white/85">Meet your artist, test your look and personalise every detail — completely free with any Gold, Platinum or Diamond package.</p>
              </div>
              <div className="flex flex-col gap-3 sm:items-end">
                <a href="#book" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-elegant transition hover:-translate-y-0.5">
                  Book a Trial <ChevronRight className="h-4 w-4" />
                </a>
                <a href="tel:+919876543210" className="text-sm text-white/85 underline-offset-4 hover:underline">or call +91 98765 43210</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-[image:var(--gradient-blush)]/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="Loved by Our Clients" sub="" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map(t => (
              <blockquote key={t.name} className="rounded-3xl bg-card p-8 shadow-soft">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-muted-foreground">"{t.text}"</p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-rose)] text-sm font-semibold text-white">{t.name.split(" ").map(n=>n[0]).join("")}</span>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Verified Client</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, Answered" sub="" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-card p-5 shadow-soft [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.q}
                <ChevronRight className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Appointment" title="Book Your Radiant Moment" sub="" align="left" />
            <p className="mt-4 text-muted-foreground">Reserve a slot in seconds. We'll confirm within an hour.</p>
            <div className="mt-8 space-y-4">
              {[
                { icon: MapPin, text: "12 Rose Avenue, Bandra West, Mumbai 400050" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "hello@radiancebeauty.in" },
                { icon: Clock, text: "Open daily · 10:00 AM – 8:00 PM" },
              ].map(({icon: Icon, text}) => (
                <div key={text} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-blush)] text-primary"><Icon className="h-5 w-5" /></span>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setBooked(true); }}
            className="rounded-3xl bg-card p-7 shadow-elegant"
          >
            {booked ? (
              <div className="grid place-items-center py-10 text-center">
                <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-[image:var(--gradient-rose)] text-white"><Check className="h-8 w-8" /></div>
                <h3 className="font-display text-2xl font-bold">Appointment Requested!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Thank you — we'll confirm your booking via WhatsApp shortly.</p>
                <button type="button" onClick={() => setBooked(false)} className="mt-6 text-sm font-medium text-primary underline">Book another</button>
              </div>
            ) : (
              <div className="grid gap-4">
                <Input label="Name" name="name" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Mobile Number" name="mobile" type="tel" required />
                  <Input label="Email" name="email" type="email" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Select label="Service" name="service" options={["Hair", "Skin", "Makeup", "Bridal", "Nails", "Waxing", "Threading"]} />
                  <Select label="Beautician" name="beautician" options={["No preference", "Meera Kapoor", "Aditi Rao", "Sonia Mehta", "Rhea Nair"]} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Preferred Date" name="date" type="date" required />
                  <Input label="Preferred Time" name="time" type="time" required />
                </div>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Message (optional)</span>
                  <textarea name="message" rows={3} className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
                </label>
                <button type="submit" className="mt-2 rounded-full bg-[image:var(--gradient-rose)] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant">
                  Confirm Appointment
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="Visit Us" title="Find Radiance" sub="Nestled in the heart of Bandra — walk in for a consultation any day." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-card p-7 shadow-soft">
            <h3 className="font-display text-xl font-semibold">Studio Address</h3>
            <p className="mt-3 text-sm text-muted-foreground">12 Rose Avenue, Bandra West<br />Mumbai, MH 400050</p>
            <h4 className="mt-6 font-semibold">Business Hours</h4>
            <p className="mt-2 text-sm text-muted-foreground">Mon – Sun<br />10:00 AM – 8:00 PM</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, idx) => (
                <a key={idx} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary transition hover:bg-[image:var(--gradient-rose)] hover:text-white">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft lg:col-span-2">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Bandra+West+Mumbai&output=embed"
              className="h-full min-h-80 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[image:var(--gradient-rose)] text-white">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 py-16 text-center lg:px-8">
          <Heart className="mx-auto h-8 w-8" />
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Join the Radiance Circle</h2>
          <p className="mx-auto max-w-xl text-white/85">Exclusive offers, beauty tips and event invites — delivered to your inbox.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
            className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input required type="email" placeholder="your@email.com" className="flex-1 rounded-full border-0 bg-white/90 px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground" />
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90">
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background/90">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-rose)] text-white"><Flower2 className="h-5 w-5" /></span>
              <span className="font-display text-xl font-bold">Radiance Beauty</span>
            </div>
            <p className="mt-4 text-sm text-background/70">Enhancing your natural beauty through premium, personalised salon experiences.</p>
          </div>
          <div>
            <h4 className="font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-background/70">
              {["About","Services","Gallery","Packages","Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-background">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-background/70">
              {["Bridal Makeup","Hair Styling","Facials","Nail Art","Keratin"].map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-background/70">
              <li>12 Rose Avenue, Mumbai</li>
              <li>+91 98765 43210</li>
              <li>hello@radiancebeauty.in</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 py-6 text-center text-xs text-background/60">
          © {new Date().getFullYear()} Radiance Beauty Studio. All rights reserved.
        </div>
      </footer>

      {/* Floating buttons */}
      <a
        href="https://wa.me/919876543210"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="#book"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-rose)] px-5 py-3.5 text-sm font-semibold text-white shadow-elegant transition hover:-translate-y-0.5"
      >
        <Sparkles className="h-4 w-4" /> Book Now
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-card text-primary shadow-elegant transition hover:-translate-y-0.5"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold gradient-text">{n}</div>
      <div className="text-xs uppercase tracking-widest text-white/70">{label}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub, align = "center" }: { eyebrow: string; title: string; sub?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Feature({ icon: Icon, title, text }: { icon: React.ComponentType<{className?: string}>; title: string; text: string }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-card p-4 shadow-soft">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-blush)] text-primary"><Icon className="h-5 w-5" /></span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <input {...props} className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <select name={name} className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
