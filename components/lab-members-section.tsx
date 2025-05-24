import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, BookOpen } from "lucide-react"
import { labMembers } from "@/data/cv-data"

export default function LabMembersSection() {
  return (
    <section id="lab" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Research Team</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our diverse and talented research team working on cutting-edge nanomedicine and catalytic therapy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {labMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white group">
              <CardHeader className="text-center pb-3">
                <div className="relative mx-auto mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-blue-100 shadow-lg group-hover:border-blue-300 transition-colors">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow-md">
                    <BookOpen className="w-3 h-3" />
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">{member.name}</CardTitle>
                <Badge variant="outline" className="text-blue-700 border-blue-300 mx-auto">
                  {member.position}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="w-3 h-3 text-blue-500" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors truncate">
                      {member.email}
                    </a>
                  </div>
                  {member.research && <div className="text-xs text-slate-500 leading-relaxed">
                    <span className="font-medium text-slate-600">Research:</span> {member.research}
                  </div>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Join Our Team</h3>
            <p className="text-slate-600 text-sm">
              We are always looking for motivated researchers to join our team. If you are interested in nanomedicine
              and catalytic therapy, please get in touch.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
