import Navigation from '@/components/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='max-w-4xl mx-auto px-8'>
      <Navigation />
      {children}
    </div>
  )
}
