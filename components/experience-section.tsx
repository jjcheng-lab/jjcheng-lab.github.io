import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Building, Calendar } from "lucide-react"
import { experience } from "@/data/cv-data"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Academic Journey</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Educational background and professional appointments in leading research institutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <Badge variant="outline" className="text-blue-700 border-blue-300">
                          {exp.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-blue-700 font-bold">{exp.position}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-2 mb-3">
                        <Building className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                        <p className="text-slate-700 font-medium leading-relaxed">{exp.institution}</p>
                      </div>
                      {exp.supervisor && (
                        <p className="text-sm text-slate-600 bg-slate-50 p-2 rounded-md">
                          <span className="font-medium">Supervisor:</span> {exp.supervisor}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
