import * as React from "react"

/**
 * @brief Renders the header for the search results page.
 *
 * @param props.query - The current search query string.
 * @returns JSX element representing the search header.
 */
export function SearchHeader({ query }: { query: string }) {
  return (
    <div className="space-y-4 mb-12 glass-panel">
      <h1 className="text-4xl font-extrabold text-white">Kết quả tìm kiếm</h1>
      <p className="text-site-muted font-body text-lg">
        {query ? (
          <span>Đang hiển thị kết quả cho từ khóa: <strong className="text-white">&quot;{query}&quot;</strong></span>
        ) : (
          <span>Vui lòng nhập từ khóa để bắt đầu tìm kiếm.</span>
        )}
      </p>
    </div>
  )
}
