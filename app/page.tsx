import Cover from '@/components/sections/Cover';
import Hero from '@/components/sections/Hero';
import Invitation from '@/components/sections/Invitation';
import Countdown from '@/components/sections/Countdown';
import Gallery from '@/components/sections/Gallery';
import Events from '@/components/sections/Events';
import Rsvp from '@/components/sections/Rsvp';
import { MusicToggle } from '@/components/ui/MusicToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { Footer } from '@/components/sections/Footer';
import { DailyGuide } from '@/components/sections/DailyGuide';

export default function Home() {
  return (
    <>
      <main className='overflow-hidden'>
        <MusicToggle />
        <LanguageToggle />
        <Cover />

        <Hero />
        <Invitation />
        <Countdown />
        <DailyGuide />
        <Gallery />
        <Events />
        <Rsvp />
      </main>
      <Footer />
    </>
  );
}
