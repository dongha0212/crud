import TopicsList from '@/components/TopicsList';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Recent News</h1>
      <TopicsList />
    </div>
  );
}