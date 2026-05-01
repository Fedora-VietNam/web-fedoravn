import { docsArticles, forumTopics } from "@/lib/data"
import Link from "next/link"
import { Book, MessageSquare, ChevronRight, SearchX, Search } from "lucide-react"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const params = await searchParams
  const query = params.q || ""
  
  const filteredDocs = docsArticles.filter(doc => 
    doc.title.toLowerCase().includes(query.toLowerCase()) || 
    doc.category.toLowerCase().includes(query.toLowerCase())
  )

  const filteredForum = forumTopics.filter(topic => 
    topic.title.toLowerCase().includes(query.toLowerCase()) ||
    topic.category.toLowerCase().includes(query.toLowerCase())
  )

  const hasResults = filteredDocs.length > 0 || filteredForum.length > 0

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <div className="space-y-4 mb-12 glass-panel">
        <h1 className="text-4xl font-extrabold text-white">Kết quả tìm kiếm</h1>
        <p className="text-site-muted font-body text-lg">
          {query ? (
            <span>Đang hiển thị kết quả cho từ khóa: <strong className="text-white">"{query}"</strong></span>
          ) : (
            <span>Vui lòng nhập từ khóa để bắt đầu tìm kiếm.</span>
          )}
        </p>
      </div>

      {!hasResults && query ? (
        <div className="glass-card py-24 text-center space-y-6">
          <div className="w-20 h-20 bg-site-primary/10 rounded-full flex items-center justify-center mx-auto text-site-primary">
            <SearchX size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Không tìm thấy!</h2>
            <p className="text-site-muted font-body">
              Rất tiếc, chúng tôi không tìm thấy kết quả nào phù hợp với "{query}".<br/>
              Vui lòng thử lại với một từ khóa khác.
            </p>
          </div>
          <Link href="/" className="inline-flex btn-site-ghost mt-4">
            Quay lại Trang chủ
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Docs Results */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <Book className="text-site-primary" size={24} />
              Tài liệu ({filteredDocs.length})
            </h2>
            
            {filteredDocs.length > 0 ? (
              <div className="space-y-4">
                {filteredDocs.map(doc => (
                  <Link 
                    key={doc.id} 
                    href={`/docs/${doc.id}`}
                    className="block glass-card hover:border-site-primary/50 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-site-primary transition-colors">{doc.title}</h3>
                        <span className="text-xs text-site-muted uppercase tracking-wider font-bold mt-2 inline-block bg-white/5 px-2 py-1 rounded">
                          {doc.category}
                        </span>
                      </div>
                      <ChevronRight className="text-site-muted group-hover:text-site-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-site-muted italic text-sm">Không có tài liệu nào phù hợp.</p>
            )}
          </div>

          {/* Forum Results */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
              <MessageSquare className="text-[#39c77a]" size={24} />
              Thảo luận ({filteredForum.length})
            </h2>

            {filteredForum.length > 0 ? (
              <div className="space-y-4">
                {filteredForum.map(topic => (
                  <Link 
                    key={topic.id} 
                    href={`/forum/${topic.id}`}
                    className="block glass-card hover:border-[#39c77a]/50 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#39c77a] transition-colors">{topic.title}</h3>
                        <div className="flex items-center gap-3 mt-2 text-xs text-site-muted font-body">
                          <span className="uppercase tracking-wider font-bold bg-white/5 px-2 py-1 rounded">
                            {topic.category}
                          </span>
                          <span>{topic.time}</span>
                        </div>
                      </div>
                      <ChevronRight className="text-site-muted group-hover:text-[#39c77a] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-site-muted italic text-sm">Không có cuộc thảo luận nào phù hợp.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
