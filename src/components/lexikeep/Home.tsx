import { useEffect, useState } from "react";
import {
  Sparkles,
  Swords,
  Trophy,
  Brain,
  MessagesSquare,
  LayoutDashboard,
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  MessageCircle,
  School,
  UserPlus,
  LineChart,
  Star,
  Menu,
  Zap,
  Flame,
  Target,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-9 w-9 rounded-xl bg-gradient-brand shadow-elegant grid place-items-center">
        <span className="text-white font-extrabold text-lg leading-none">L</span>
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white border-2 border-[#06b6d4]" />
      </div>
      <span className="text-xl font-extrabold tracking-tight text-[#0f172a]">
        LexiKeep
      </span>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-slate-200/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#accueil" className="hover:text-[#1d4ed8] transition">Accueil</a>
          <a href="#a-propos" className="hover:text-[#1d4ed8] transition">À propos</a>
          <a href="#tarifs" className="hover:text-[#1d4ed8] transition">Tarifs</a>
          <a href="#faq" className="hover:text-[#1d4ed8] transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#connexion"
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#1d4ed8] transition"
          >
            Se connecter
          </a>
          <a
            href="#creer"
            className="px-4 py-2 rounded-xl bg-gradient-brand text-white text-sm font-semibold shadow-elegant hover:opacity-95 transition"
          >
            Créer mon école
          </a>
        </div>
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#accueil">Accueil</a>
          <a href="#a-propos">À propos</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#faq">FAQ</a>
          <a href="#connexion" className="pt-2 border-t">Se connecter</a>
          <a
            href="#creer"
            className="px-4 py-2 rounded-xl bg-gradient-brand text-white text-center font-semibold"
          >
            Créer mon école
          </a>
        </div>
      )}
    </header>
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-full">
      <div className="glass-card rounded-3xl p-5 shadow-elegant animate-float">
        {/* window chrome */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <div className="ml-3 text-xs text-slate-500 font-medium">
            lexikeep.ma / tableau-de-bord
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Left stats */}
          <div className="col-span-2 space-y-3">
            <div className="rounded-2xl bg-white p-4 shadow-card">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Classe 6ème B</p>
                  <p className="text-lg font-bold text-[#0f172a]">Progrès de la semaine</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-gradient-brand">+24%</p>
                  <p className="text-xs text-slate-500">engagement</p>
                </div>
              </div>
              {/* bar chart */}
              <div className="flex items-end gap-2 h-24">
                {[40, 65, 50, 80, 70, 92, 85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-lg bg-gradient-brand" style={{ height: `${h}%`, opacity: 0.7 + i * 0.04 }} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-4 shadow-card">
                <div className="flex items-center gap-2 text-[#1d4ed8] mb-2">
                  <Flame size={16} />
                  <span className="text-xs font-semibold">Série active</span>
                </div>
                <p className="text-2xl font-extrabold text-[#0f172a]">12 jours</p>
                <p className="text-xs text-slate-500">27 élèves actifs</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-card">
                <div className="flex items-center gap-2 text-[#06b6d4] mb-2">
                  <Target size={16} />
                  <span className="text-xs font-semibold">Mots maîtrisés</span>
                </div>
                <p className="text-2xl font-extrabold text-[#0f172a]">1 284</p>
                <p className="text-xs text-slate-500">cette semaine</p>
              </div>
            </div>
          </div>

          {/* Right leaderboard */}
          <div className="rounded-2xl bg-white p-4 shadow-card">
            <p className="text-xs font-semibold text-slate-500 mb-3">Classement</p>
            <ul className="space-y-3">
              {[
                { n: "Yasmine", xp: "2 480", c: "from-amber-400 to-orange-500" },
                { n: "Anas", xp: "2 210", c: "from-slate-300 to-slate-500" },
                { n: "Salma", xp: "2 040", c: "from-amber-700 to-amber-900" },
                { n: "Rayan", xp: "1 890", c: "from-blue-400 to-cyan-400" },
              ].map((s, i) => (
                <li key={s.n} className="flex items-center gap-2">
                  <div className={`h-7 w-7 rounded-full bg-gradient-to-br ${s.c} grid place-items-center text-white text-xs font-bold`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0f172a] truncate">{s.n}</p>
                    <p className="text-[10px] text-slate-500">{s.xp} XP</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="hidden sm:flex absolute -left-6 -bottom-6 glass-card rounded-2xl px-4 py-3 shadow-elegant items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
        <div className="h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center text-white">
          <Swords size={18} />
        </div>
        <div>
          <p className="text-xs text-slate-500">Duel gagné</p>
          <p className="text-sm font-bold text-[#0f172a]">+150 XP</p>
        </div>
      </div>
      <div className="hidden sm:flex absolute -right-4 -top-4 glass-card rounded-2xl px-4 py-3 shadow-elegant items-center gap-3 animate-float" style={{ animationDelay: "2s" }}>
        <div className="h-10 w-10 rounded-xl bg-white grid place-items-center">
          <Trophy size={18} className="text-[#1d4ed8]" />
        </div>
        <div>
          <p className="text-xs text-slate-500">Nouveau badge</p>
          <p className="text-sm font-bold text-[#0f172a]">Polyglotte</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#1d4ed8]/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#06b6d4]/25 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#1d4ed8]/15 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-slate-200 px-3 py-1.5 text-xs font-semibold text-[#1d4ed8]">
            <Sparkles size={14} />
            Nouvelle génération d'e-learning marocain
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-[#0f172a]">
            Transformez le vocabulaire{" "}
            <span className="text-gradient-brand">en jeu&nbsp;éducatif</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            La plateforme d'apprentissage gamifiée pour votre établissement.
            Duels en direct, quêtes quotidiennes et répétition espacée — pensés
            pour les écoles marocaines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#creer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-brand text-white font-semibold shadow-elegant hover:opacity-95 transition"
            >
              Créer mon espace école
              <ArrowRight size={18} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 bg-white/60 backdrop-blur text-slate-800 font-semibold hover:bg-white transition"
            >
              Voir une démo
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-1.5"><Check size={14} className="text-[#06b6d4]" /> 14 jours d'essai gratuit</div>
            <div className="flex items-center gap-1.5"><Check size={14} className="text-[#06b6d4]" /> Aucune carte requise</div>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const items = [
    { icon: School, text: "Utilisé par des écoles au Maroc" },
    { icon: Zap, text: "14 jours d'essai gratuit" },
    { icon: CreditCard, text: "Aucune carte bancaire requise" },
    { icon: MessageCircle, text: "Support WhatsApp" },
  ];
  return (
    <section className="border-y border-slate-200 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
            <div className="h-9 w-9 rounded-lg bg-gradient-brand-soft grid place-items-center text-[#1d4ed8]">
              <Icon size={18} />
            </div>
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSolution() {
  const pains = [
    "Faible engagement en classe et devoirs négligés",
    "Les élèves oublient rapidement le vocabulaire appris",
    "Aucune visibilité sur les progrès individuels",
    "Manque d'outils modernes adaptés au terrain marocain",
  ];
  const solutions = [
    "Jeux, duels et récompenses qui motivent chaque jour",
    "Répétition espacée intelligente pour ancrer le savoir",
    "Tableau de bord détaillé par élève et par classe",
    "Interface en français, support WhatsApp, paiement local",
  ];
  return (
    <section id="a-propos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1d4ed8]">Le problème & la solution</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Enseigner le vocabulaire, ce n'est pas une bataille perdue.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <div className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm mb-4">
              <X size={16} /> Sans LexiKeep
            </div>
            <ul className="space-y-4">
              {pains.map((p) => (
                <li key={p} className="flex gap-3 text-slate-700">
                  <span className="mt-1 h-5 w-5 rounded-full bg-red-100 grid place-items-center shrink-0">
                    <X size={12} className="text-red-600" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-brand p-[1.5px] shadow-elegant">
            <div className="rounded-[calc(1.5rem-1.5px)] bg-white p-8 h-full">
              <div className="inline-flex items-center gap-2 text-[#1d4ed8] font-semibold text-sm mb-4">
                <Check size={16} /> Avec LexiKeep
              </div>
              <ul className="space-y-4">
                {solutions.map((s) => (
                  <li key={s} className="flex gap-3 text-slate-700">
                    <span className="mt-1 h-5 w-5 rounded-full bg-gradient-brand grid place-items-center shrink-0">
                      <Check size={12} className="text-white" />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Sparkles, title: "Capsules de Mini-Cours", desc: "Modules courts et quiz interactifs pour apprendre par petites doses assimilables." },
    { icon: Swords, title: "Duels en Direct", desc: "Des battles de vocabulaire en temps réel entre élèves pour dynamiser la classe." },
    { icon: Trophy, title: "Quêtes & Défis Quotidiens", desc: "Un système d'XP et de missions journalières qui transforme l'effort en aventure." },
    { icon: Brain, title: "Répétition Espacée Intelligente", desc: "Un algorithme qui rejoue les mots au moment optimal pour la mémorisation." },
    { icon: MessagesSquare, title: "Flux de Discussion Modéré", desc: "Un espace social contrôlé par l'enseignant, sécurisé et centré sur l'apprentissage." },
    { icon: LayoutDashboard, title: "Tableau de Bord Enseignant", desc: "Analyse en temps réel des progrès, points forts et faiblesses de chaque classe." },
  ];
  return (
    <section className="py-24 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1d4ed8]">Fonctionnalités</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Une suite complète pour enseigner autrement.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-brand grid place-items-center text-white shadow-elegant group-hover:scale-110 transition">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#0f172a]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: School, title: "Créez votre espace école", desc: "Inscription en 2 minutes. Configurez votre établissement et vos classes." },
    { icon: UserPlus, title: "Invitez vos élèves", desc: "Un lien d'invitation unique par classe. Aucune adresse email requise." },
    { icon: LineChart, title: "Suivez les progrès en temps réel", desc: "Analyses détaillées, alertes automatiques, rapports exportables." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1d4ed8]">Comment ça marche</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Lancé en moins de 5 minutes.
          </h2>
        </div>

        <div className="mt-14 relative grid md:grid-cols-3 gap-8">
          <div aria-hidden className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#1d4ed8] via-[#06b6d4] to-[#1d4ed8] opacity-30" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-white border border-slate-200 shadow-elegant grid place-items-center relative z-10">
                <s.icon size={24} className="text-[#1d4ed8]" />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-brand text-white text-xs font-bold grid place-items-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#0f172a]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(true);
  const plans = [
    {
      name: "Sandbox / Découverte",
      monthly: 0,
      annualPrice: 0,
      desc: "Pour tester la plateforme sans engagement.",
      features: ["1 enseignant", "1 classe", "10 élèves maximum", "Toutes les fonctionnalités de base"],
      cta: "Commencer gratuitement",
      highlight: false,
    },
    {
      name: "Plan Enseignant",
      monthly: 190,
      annualPrice: 150,
      desc: "Pour un enseignant qui veut passer à l'échelle.",
      features: ["1 enseignant", "Classes illimitées", "Élèves illimités", "Duels & quêtes avancés", "Support par email"],
      cta: "Choisir ce plan",
      highlight: true,
    },
    {
      name: "Plan Établissement",
      monthly: 990,
      annualPrice: 790,
      desc: "Pour les écoles et groupes scolaires.",
      features: ["Enseignants illimités", "Classes & élèves illimités", "Tableau administrateur", "Support prioritaire WhatsApp", "Formation incluse"],
      cta: "Contacter les ventes",
      highlight: false,
    },
  ];

  return (
    <section id="tarifs" className="py-24 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1d4ed8]">Tarifs</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Des tarifs pensés pour les écoles marocaines.
          </h2>
          <p className="mt-4 text-slate-600">Simples, transparents, sans engagement. Virement bancaire accepté.</p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-card">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${!annual ? "bg-gradient-brand text-white shadow" : "text-slate-600"}`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${annual ? "bg-gradient-brand text-white shadow" : "text-slate-600"}`}
            >
              Annuel
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${annual ? "bg-white text-[#1d4ed8]" : "bg-emerald-100 text-emerald-700"}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => {
            const price = annual ? p.annualPrice : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative rounded-3xl p-[1.5px] ${p.highlight ? "bg-gradient-brand shadow-elegant" : "bg-slate-200"}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-[#1d4ed8] text-xs font-bold shadow-card border border-slate-200">
                    ⭐ Populaire
                  </span>
                )}
                <div className="rounded-[calc(1.5rem-1.5px)] bg-white p-8 h-full flex flex-col">
                  <h3 className="text-lg font-bold text-[#0f172a]">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#0f172a]">{price}</span>
                    <span className="text-slate-500 font-medium">DH/mois</span>
                  </div>
                  {annual && p.monthly > 0 && (
                    <p className="text-xs text-slate-400 line-through">{p.monthly} DH/mois</p>
                  )}
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-[#06b6d4] mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#creer"
                    className={`mt-8 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition ${
                      p.highlight
                        ? "bg-gradient-brand text-white shadow-elegant hover:opacity-95"
                        : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Fatima Zahra El Amrani",
      school: "Groupe Scolaire Al Massira, Casablanca",
      quote:
        "Depuis LexiKeep, mes élèves demandent d'eux-mêmes à faire leurs quêtes. L'engagement a doublé en quelques semaines.",
      initials: "FA",
    },
    {
      name: "Mehdi Bennani",
      school: "École Privée Ibn Rochd, Rabat",
      quote:
        "Le tableau de bord me permet enfin d'identifier les élèves en difficulté avant qu'il ne soit trop tard.",
      initials: "MB",
    },
    {
      name: "Karima Ouahbi",
      school: "Collège Al Andalous, Marrakech",
      quote:
        "Les duels en direct ont transformé mes cours du vendredi. Les élèves ne veulent plus partir en récréation.",
      initials: "KO",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1d4ed8]">Ils l'utilisent déjà</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Des enseignants marocains témoignent.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">« {t.quote} »</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-brand text-white font-bold grid place-items-center">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0f172a] text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Comment se déroule le paiement ? Le virement bancaire est-il accepté ?",
      a: "Oui. Nous acceptons la carte bancaire, mais aussi le virement bancaire au Maroc pour les écoles et établissements. Une facture officielle vous est envoyée automatiquement.",
    },
    {
      q: "Comment mes élèves s'inscrivent-ils sur la plateforme ?",
      a: "Chaque classe reçoit un lien d'invitation unique. Aucune adresse email n'est requise pour les élèves : ils rejoignent la classe en un clic et créent un pseudo.",
    },
    {
      q: "L'essai gratuit est-il vraiment sans engagement ?",
      a: "Absolument. 14 jours d'essai gratuit, sans carte bancaire. À la fin de l'essai, vous choisissez librement de continuer ou d'arrêter.",
    },
    {
      q: "Mes données et celles de mes élèves sont-elles sécurisées ?",
      a: "Oui. Toutes les données sont chiffrées, hébergées sur des serveurs conformes au RGPD, et jamais revendues. Vous restez propriétaire de vos données.",
    },
    {
      q: "Puis-je changer de plan ou annuler à tout moment ?",
      a: "Oui, vous pouvez passer d'un plan à l'autre ou annuler à tout moment depuis votre tableau de bord, sans frais cachés.",
    },
  ];
  return (
    <section id="faq" className="py-24 bg-slate-50/60">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#1d4ed8]">FAQ</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
            Vos questions, nos réponses.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-slate-200 bg-white px-5 shadow-card"
            >
              <AccordionTrigger className="text-left text-[#0f172a] font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="creer" className="py-16 px-6">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] bg-gradient-brand p-12 sm:p-16 shadow-elegant">
        <div aria-hidden className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-300/40 blur-3xl" />
        </div>
        <div className="relative text-center max-w-2xl mx-auto">
          <ShieldCheck className="mx-auto text-white/90 mb-4" size={36} />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight" style={{ color: "white" }}>
            Prêt à transformer votre classe&nbsp;?
          </h2>
          <p className="mt-4 text-white/90 text-lg">
            Rejoignez les écoles marocaines qui rendent l'apprentissage du vocabulaire irrésistible. Essai gratuit de 14 jours, sans carte bancaire.
          </p>
          <a
            href="#creer"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#1d4ed8] font-bold shadow-elegant hover:scale-[1.02] transition"
          >
            Créer mon espace école
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-3 text-sm text-slate-600 max-w-sm">
            La plateforme d'apprentissage gamifiée pour votre établissement.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-[#0f172a] mb-3">Produit</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#tarifs" className="hover:text-[#1d4ed8]">Tarifs</a></li>
            <li><a href="#faq" className="hover:text-[#1d4ed8]">FAQ</a></li>
            <li><a href="#creer" className="hover:text-[#1d4ed8]">Créer mon école</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-[#0f172a] mb-3">Compte</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><a href="#connexion" className="hover:text-[#1d4ed8]">Connexion</a></li>
            <li><a href="#a-propos" className="hover:text-[#1d4ed8]">À propos</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-slate-500 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} LexiKeep. Tous droits réservés.</span>
          <span>Fait avec ❤️ au Maroc</span>
        </div>
      </div>
    </footer>
  );
}

export function LexiKeepHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}