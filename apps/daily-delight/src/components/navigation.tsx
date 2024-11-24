import { Sprout } from 'lucide-react';

export const Navigation = () => {
  return (
    <header className="h-12 flex items-center justify-between">
      <div className="max-w-screen-lg w-full mx-auto px-4">
        <div className="flex items-center gap-2">
          <Sprout strokeWidth={1.75} />
          <div>Daily Delight</div>
        </div>
      </div>
    </header>
  );
};
