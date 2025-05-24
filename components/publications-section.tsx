import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, TrendingUp, Star } from "lucide-react"
import { selectedPublications } from "@/data/cv-data"

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Selected Publications</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Peer-reviewed publications in high-impact journals focusing on nanomedicine and catalytic therapy
          </p>
        </div>

        <div className="space-y-6">
          {selectedPublications.map((pub, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-relaxed text-slate-900 mb-3 font-semibold">
                      {pub.title}
                    </CardTitle>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">{pub.authors}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge variant="default" className="bg-blue-600 hover:bg-blue-700">
                    {pub.journal.split(",")[0]}
                  </Badge>
                  <Badge variant="outline" className="border-green-300 text-green-700">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {pub.impact}
                  </Badge>
                  {pub.impact.includes("Highly cited") && (
                    <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                      <Star className="w-3 h-3 mr-1" />
                      Highly Cited
                    </Badge>
                  )}
                  {pub.impact.includes("Hot paper") && (
                    <Badge variant="outline" className="border-red-300 text-red-700">
                      🔥 Hot Paper
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 p-4 bg-white rounded-lg shadow-sm border">
          <p className="text-slate-600 text-sm">
            <span className="font-semibold">*</span> Corresponding authors,
            <span className="font-semibold"> #</span> Co-first authors
          </p>
        </div>
      </div>
    </section>
  )
}
