import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Edit, Users, Calendar, Award } from "lucide-react"
import { editorialRoles, reviewerRoles } from "@/data/cv-data"

export default function EditorialSection() {
  return (
    <section id="editorial" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Edit className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900">Editorial & Review Activities</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Contributing to the scientific community through editorial board memberships and peer review services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editorial Board Members */}
          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900">Editorial Board Memberships</h3>
            </div>
            <div className="space-y-4">
              {editorialRoles.map((role, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-lg text-blue-700 mb-1">{role.journal}</CardTitle>
                        <p className="text-sm text-slate-600 font-medium">{role.publisher}</p>
                      </div>
                      <Badge variant="outline" className="border-blue-300 text-blue-700">
                        <Calendar className="w-3 h-3 mr-1" />
                        {role.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{role.role}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{role.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Reviewer Roles */}
          <div>
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900">Reviewer Activities</h3>
            </div>
            <div className="space-y-4">
              {reviewerRoles.map((role, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-lg text-blue-700 mb-1">{role.type}</CardTitle>
                        <p className="text-sm text-slate-600 font-medium">{role.organization}</p>
                      </div>
                      <Badge variant="outline" className="border-green-300 text-green-700">
                        <Calendar className="w-3 h-3 mr-1" />
                        {role.years}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-xs text-slate-600 leading-relaxed">{role.description}</p>
                      {role.journals && (
                        <div>
                          <span className="text-sm font-medium text-slate-700 block mb-2">Journals:</span>
                          <div className="flex flex-wrap gap-1">
                            {role.journals.map((journal, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {journal}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
