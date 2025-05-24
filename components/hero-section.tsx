import { Mail, ExternalLink, BookOpen, Award, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalInfo } from "@/data/cv-data"

export default function HeroSection() {
  return (
    <section id="about" className="pt-40 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={personalInfo.profileImage || "/placeholder.svg"}
                  alt={`${personalInfo.name} - Profile Picture`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0 -right-0 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Main Information */}
          <div className="lg:col-span-2">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">{personalInfo.name}</h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">{personalInfo.title}</p>
              <p className="text-lg text-blue-700 mb-6 font-semibold">{personalInfo.currentAffiliation}</p>

              {/* Academic Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-green-600">{personalInfo.academicMetrics.citations}</div>
                  <div className="text-sm text-slate-600">Citations</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-purple-600">{personalInfo.academicMetrics.publications}</div>
                  <div className="text-sm text-slate-600">Publications</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-orange-600">{personalInfo.academicMetrics.patents}</div>
                  <div className="text-sm text-slate-600">Patents</div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <Button variant="default" size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href={`mailto:${personalInfo.email.split(" / ")[0]}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={personalInfo.orcid} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    ORCID
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={personalInfo.googleScholar} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Google Scholar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Research Focus and Keywords */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Research Focus
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <span className="font-semibold text-blue-700">{personalInfo.researchFocus}</span>
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">{personalInfo.researchStatement}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Research Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.researchKeywords.map((keyword, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
