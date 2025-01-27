export default function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-10">
      <div className="bg-gray-800/50 rounded-2xl shadow-lg ring-1 ring-inset ring-gray-700/50 px-6 py-5 max-w-lg w-full backdrop-blur-sm">
        <h2 className="text-xl font-semibold text-gray-100 mb-2">
          Hi! Welcome. 👋
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          I can help you with:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Finding and analyzing YouTube video transcripts</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Searching through Google Books</span>
          </li>
        
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Live exchange rates and market trends</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>And more!</span>
          </li>
         
        </ul>
        <p className="text-gray-300 mt-4 leading-relaxed">
          Feel free to ask me anything! I&apos;m here to help.
        </p>
      </div>
    </div>
  );
}