import { Mail, ExternalLink, MapPin, GraduationCap } from "lucide-react"
import { personalInfo } from "@/data/cv-data"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 mr-2 text-blue-400" />
              <h3 className="text-xl font-bold">{personalInfo.name}</h3>
            </div>
            <p className="text-slate-300 mb-2 font-medium">{personalInfo.title}</p>
            <p className="text-slate-300 mb-4">{personalInfo.currentAffiliation}</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Advancing nanomedicine through innovative research in single-atom nanozymes and catalytic therapy for
              cancer treatment.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 text-sm">Southeast University, Nanjing, China</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Academic Profiles</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a
                  href={personalInfo.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  ORCID Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <a
                  href={personalInfo.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Dr. Junjie Cheng. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2 md:mt-0">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
