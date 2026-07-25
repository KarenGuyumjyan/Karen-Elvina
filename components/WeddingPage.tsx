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

/**
 * The full single-page invitation. `hideHouses` drops the bride's/groom's
 * house from the Daily Guide, Events and RSVP — used by the /wedding variant
 * for guests who join only from the ceremony onward.
 */
export default function WeddingPage({
  hideHouses = false,
}: {
  hideHouses?: boolean;
}) {
  return (
    <>
      <main className='overflow-hidden'>
        <MusicToggle />
        <LanguageToggle />
        <Cover />

        <Hero />
        <Invitation />
        <Countdown />
        <DailyGuide hideHouses={hideHouses} />
        <Gallery />
        <Events hideHouses={hideHouses} />
        <Rsvp hideHouses={hideHouses} />
      </main>
      <Footer />
    </>
  );
}
