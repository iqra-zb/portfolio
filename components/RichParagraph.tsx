// Add this helper wherever your blog post detail page renders `body.map(...)`.
// Replace the plain `<p>{paragraph}</p>` render with `<RichParagraph text={paragraph} />`.

export function RichParagraph({ text }: { text: string }) {
  // Subheading: paragraph starting with "## "
  if (text.startsWith("## ")) {
    return (
      <h3 className="text-lg font-semibold !text-white mt-8 mb-3">
        {text.replace("## ", "")}
      </h3>
    );
  }

  // Inline bold: **word or phrase**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <p className="text-neutral-300 leading-relaxed mb-5">
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

// Usage in your blog detail page:
// {post.body.map((paragraph, i) => (
//   <RichParagraph key={i} text={paragraph} />
// ))}
