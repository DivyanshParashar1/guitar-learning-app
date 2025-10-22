import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

interface NotesViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  difficulty: string;
  notes: string;
}

const NotesViewer = ({ isOpen, onClose, title, difficulty, notes }: NotesViewerProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 bg-background/95 backdrop-blur">
        <DialogHeader className="p-6 pb-4 border-b border-border/50 flex-shrink-0">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <DialogTitle className="text-2xl">{title} - Notes</DialogTitle>
            </div>
            <Badge variant="outline" className={getDifficultyColor(difficulty)}>
              {difficulty}
            </Badge>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose prose-invert prose-lg max-w-none break-words">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                // Custom components for better styling
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-primary mb-6 border-b border-border/50 pb-2">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-medium text-foreground mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-4 space-y-2 text-muted-foreground">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary/50 pl-4 py-2 my-4 bg-muted/30 rounded-r">
                    {children}
                  </blockquote>
                ),
                code: ({ children, className }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className={className}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-muted/50 border border-border/50 rounded-lg p-4 overflow-x-auto mb-4 whitespace-pre-wrap break-words">
                    {children}
                  </pre>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-border/50 rounded-lg">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border border-border/50 px-4 py-2 bg-muted/30 text-left font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-border/50 px-4 py-2 text-muted-foreground">
                    {children}
                  </td>
                ),
                img: ({ src, alt }) => (
                  <div className="my-6">
                    <img 
                      src={src} 
                      alt={alt} 
                      className="w-full max-w-2xl mx-auto rounded-lg border border-border/50 shadow-lg"
                    />
                    {alt && (
                      <p className="text-center text-sm text-muted-foreground mt-2 italic">
                        {alt}
                      </p>
                    )}
                  </div>
                ),
                a: ({ href, children }) => (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline inline-flex items-center gap-1"
                  >
                    {children}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ),
              }}
            >
              {notes}
            </ReactMarkdown>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotesViewer;