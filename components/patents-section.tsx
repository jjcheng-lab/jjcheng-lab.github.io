import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Calendar, CheckCircle } from "lucide-react"
import { patents } from "@/data/cv-data"

export default function PatentsSection() {
  return (
    <section id="patents" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Patents & Intellectual Property</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Innovative technologies and methods developed through research, contributing to practical applications in
            various fields
          </p>
        </div>

        <div className="space-y-6">
          {patents.map((patent, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-slate-900 mb-3 leading-relaxed">{patent.title}</CardTitle>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{patent.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="border-green-300 text-green-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {patent.status}
                    </Badge>
                    <Badge variant="secondary" className="text-slate-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      {patent.year}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-slate-700">Inventors: </span>
                      <span className="text-sm text-slate-600">{patent.inventors}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Patent Number: </span>
                    <Badge variant="outline" className="text-blue-700 border-blue-300">
                      {patent.patentNumber}
                    </Badge>
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
