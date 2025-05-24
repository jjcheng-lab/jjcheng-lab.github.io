import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { grants } from "@/data/cv-data"

export default function GrantsSection() {
  return (
    <section id="grants" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Grants & Funding</h2>
        <div className="space-y-6">
          {grants.map((grant, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-lg text-blue-700">{grant.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">Grant No: {grant.number}</p>
                  </div>
                  <Badge variant="outline" className="text-green-700 border-green-300">
                    {grant.amount}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">{grant.description}</p>
                <p className="text-sm text-gray-500">Period: {grant.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
