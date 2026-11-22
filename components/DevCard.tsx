import { Github, Globe, Mail, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { DEV } from "@/lib/data";

const links = [
  { label: "Portfolio", href: DEV.links.portfolio, Icon: ExternalLink },
  { label: "GitHub — jihad-dev", href: DEV.links.github, Icon: Github },
  { label: "My Barishal — mybarishal.com", href: DEV.links.mybarishal, Icon: Globe },
];

export default function DevCard() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-mint-dark font-en text-xl font-bold text-white">JI</div>
        <div>
          <p className="text-xl font-bold">{DEV.nameBn}</p>
          <p className="font-en text-sm text-slate2">{DEV.name}</p>
        </div>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-slate2">
        <li className="flex items-center gap-2"><Briefcase size={16} className="text-mint-dark" /> <span className="font-en">{DEV.role}</span></li>
        <li className="flex items-center gap-2"><MapPin size={16} className="text-mint-dark" /> <span className="font-en">{DEV.location}</span></li>
      </ul>
      <p className="mt-4 rounded-2xl bg-mint-tint/60 p-4 text-sm leading-relaxed text-ink">
        <strong>My Barishal</strong> (<span className="font-en">mybarishal.com</span>) নাগরিক ও ইউটিলিটি ইকোসিস্টেম এবং <strong>Hisab Soja</strong>-এর নির্মাতা।
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate2">{DEV.bio}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {links.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-en text-sm font-medium hover:border-mint hover:text-mint-dark">
            <Icon size={15} /> {label}
          </a>
        ))}
      </div>
      <a href={DEV.links.contact}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
        <Mail size={16} /> যোগাযোগ ও ফিডব্যাক
      </a>
    </div>
  );
}
