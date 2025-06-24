interface SemiSafeContentProps {
  rawContent: string | TrustedHTML;
}
function SemiSafeContent({ rawContent }: SemiSafeContentProps) {
  const unsafePatterns = /(<[/]+(script|iframe)[^>]?>|javascript)/gi;
  const lessDangerousContent = rawContent.toString().replace(unsafePatterns, "");
  return (
    <div
      color={"gray.100"}
      dangerouslySetInnerHTML={{ __html: lessDangerousContent }}
      style={{ whiteSpace: "pre-wrap" }}></div>
  );
}

export default SemiSafeContent;
