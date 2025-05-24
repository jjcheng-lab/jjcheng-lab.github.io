import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Presentation, MapPin, Calendar, Mic } from "lucide-react"
import { conferencesPresentations } from "@/data/cv-data"

export default function ConferencesSection() {
  return (
    <section id="conferences" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Presentation className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Conference Presentations</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Invited talks and presentations at leading international conferences and academic meetings
          </p>
        </div>

        <div className="space-y-6">
          {conferencesPresentations.map((presentation, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-blue-700 mb-2 leading-relaxed">{presentation.title}</CardTitle>
                    <h3 className="text-md font-semibold text-slate-900 mb-3">{presentation.conference}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{presentation.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge
                      variant={presentation.type === "Invited Speaker" ? "default" : "secondary"}
                      className={presentation.type === "Invited Speaker" ? "bg-blue-600 hover:bg-blue-700" : ""}
                    >
                      <Mic className="w-3 h-3 mr-1" />
                      {presentation.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{presentation.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{presentation.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
