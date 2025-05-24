import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { awards } from "@/data/cv-data"

export default function AwardsSection() {
  return (
    <section id="awards" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Awards & Recognition</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{award.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{award.organization}</p>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{award.year}</span>
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
