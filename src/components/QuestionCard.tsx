interface QuestionCardProps {
  text: string;
}

export function QuestionCard({ text }: QuestionCardProps) {
  return (
    <div className="flex flex-1 items-center justify-center px-6">
      <p className="text-center text-2xl leading-relaxed font-medium text-gray-800 md:text-3xl lg:text-4xl">
        {text}
      </p>
    </div>
  );
}
